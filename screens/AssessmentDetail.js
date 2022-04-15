import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import PropTypes from "prop-types";
import Toast from "react-native-toast-message";

import { formatDate } from "../utils/date";
import { COLORS } from "../utils/colors";
import { STYLES } from "../utils/styles";

import { AssessmentApi } from "../api/AssessmentApi";

import DetailListItem from "../components/DetailListItem";
import SeverityIndicator from "../components/SeverityIndicator";
import ScreenWrapper from "../components/ScreenWrapper";
import LoadingIndicator from "../components/LoadingIndicator";

export default class AssessmentDetail extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    route: PropTypes.shape({
      params: PropTypes.oneOfType([
        PropTypes.shape({
          id: PropTypes.number,
        }),
        PropTypes.shape({
          symptoms: PropTypes.arrayOf(PropTypes.number),
        }),
      ]).isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.assessmentApi = AssessmentApi();

    this.isRtl = true;
    this.rtlView = this.isRtl && STYLES.rtlView;
    this.rtlText = this.isRtl && STYLES.rtlText;
  }

  state = {
    loading: true,
    error: false,
    id: null,
    date: null,
    possibleDiseases: [],
    selectedSymptoms: [],
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const id = this.props.route?.params?.id;
    const symptoms = this.props.route?.params?.symptoms;

    try {
      let date;
      let possibleDiseases;
      let selectedSymptoms;
      let assessment;

      if (id) {
        assessment = await this.assessmentApi.get(id);
        date = formatDate(assessment.date);
      } else if (symptoms) {
        const codes = this.assessmentApi.RESPONSE_CODES.predict;
        const res = await this.assessmentApi.predict(symptoms);

        if (res.status === codes.success) assessment = res.data;
        else if (res.status === codes.saved) {
          assessment = res.data;
          Toast.show({
            type: "info",
            text1: "تم حفظ نتيجة التشخيصة",
            props: { isRtl: true },
          });
        } else if (res.status === codes.lowAccuracy) {
          Toast.show({
            type: "error",
            text1: "تعذر عرض نتيجة التشخيصة",
            text2: "دقة التشخيصة ضعيفة للأعراض المدخلة",
            props: { isRtl: true },
          });
          return navigation.goBack();
        } else {
          Toast.show({
            type: "error",
            text1: "خطأ عند تحليل البيانات",
            props: { isRtl: true },
          });
          return navigation.goBack();
        }

        date = formatDate();
      } else return navigation.goBack();

      possibleDiseases = assessment.diseases
        .map(disease =>
          disease.percentage < 1
            ? false
            : {
                id: disease.id,
                diseaseName: disease.ar_name,
                diseaseSubtitle: disease.ar_description,
                percentage: Math.round(disease.percentage),
              }
        ).filter(Boolean);
      selectedSymptoms = assessment.symptoms.map(symptom => ({
        id: symptom.id,
        symptomName: symptom.ar_name,
      }));

      this.setState({
        loading: false,
        date,
        possibleDiseases,
        selectedSymptoms,
      });
    } catch (e) {
      console.log(e);
      Toast.show({
        type: "error",
        text1: "تعذر تحميل الصفحة",
        props: { isRtl: true },
      });
      return navigation.goBack();
    }
  }

  handleDiseasePress = id => {
    const { navigation } = this.props;
    navigation.navigate("DiseaseDetail", { id });
  };

  renderDiseaseItem = ({ id, diseaseName, diseaseSubtitle, percentage }) => {
    return (
      <TouchableHighlight
        style={[styles.listItemContainer, this.rtlView]}
        activeOpacity={0.8}
        underlayColor={"rgba(0,0,0,0.05)"}
        onPress={() => this.handleDiseasePress(id)}
        key={id}
      >
        <>
          <SeverityIndicator percentage={percentage} />
          <DetailListItem
            title={diseaseName}
            subtitle={diseaseSubtitle}
            isRtl={this.isRtl}
            style={styles.detailListItem}
          />
        </>
      </TouchableHighlight>
    );
  };

  handleSymptomPress = id => {
    const { navigation } = this.props;
    navigation.navigate("SymptomDetail", { id });
  };

  renderSymptomItem = ({ id, symptomName }) => {
    return (
      <TouchableHighlight
        style={[styles.listItemContainer, this.rtlView]}
        activeOpacity={0.8}
        underlayColor={"rgba(0,0,0,0.05)"}
        onPress={() => this.handleSymptomPress(id)}
        key={id}
      >
        <>
          <Text>+ </Text>
          <DetailListItem
            title={symptomName}
            isRtl={this.isRtl}
            style={styles.detailListItem}
          />
        </>
      </TouchableHighlight>
    );
  };

  render() {
    const { loading, possibleDiseases, selectedSymptoms, date } = this.state;

    return (
      <ScreenWrapper>
        <ScrollView
          style={STYLES.mainContainer}
          contentContainerStyle={STYLES.scrollViewContentContainer}
        >
          <View style={[STYLES.titleContainer, styles.titleContainer]}>
            <Text style={[STYLES.title, styles.title, this.rtlText]}>
              نتيجة التشخيص
            </Text>
          </View>

          {loading && <LoadingIndicator color={COLORS.primaryText} />}

          {!loading && (
            <>
              {date && (
                <View style={styles.dateContainer}>
                  <Text style={[styles.date, this.rtlText]}>التاريخ</Text>
                  <Text style={styles.date}>{date}</Text>
                </View>
              )}

              <View style={styles.sectionContainer}>
                <View style={styles.sectionTitleContainer}>
                  <Text style={[styles.sectionTitle, this.rtlText]}>
                    الأمراض المحتملة
                  </Text>
                </View>
                <View style={styles.listContainer}>
                  {possibleDiseases.map(this.renderDiseaseItem)}
                </View>
              </View>

              <View style={styles.sectionContainer}>
                <View style={styles.sectionTitleContainer}>
                  <Text style={[styles.sectionTitle, this.rtlText]}>
                    الاعراض المختارة
                  </Text>
                </View>
                <View style={styles.listContainer}>
                  {selectedSymptoms.map(this.renderSymptomItem)}
                </View>
              </View>
            </>
          )}
        </ScrollView>
      </ScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    borderBottomWidth: 2,
    borderColor: COLORS.primaryText,
    alignSelf: "center",
  },

  dateContainer: {
    alignItems: "center",
  },
  date: {
    fontSize: 12,
    fontWeight: "bold",
    color: COLORS.secondaryText,
  },

  sectionContainer: {
    marginTop: 30,
  },
  sectionTitleContainer: {
    marginVertical: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: COLORS.primaryText,
    alignSelf: "center",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.primaryText,
  },

  listContainer: {
    marginVertical: 2,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 5,
  },
  detailListItem: {
    paddingVertical: 0,
    paddingHorizontal: 10,
  },
});

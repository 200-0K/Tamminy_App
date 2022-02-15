import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";

import { COLORS } from "../utils/colors";
import { formatDate } from "../utils/date";
import { STYLES } from "../utils/styles";

import DetailListItem from "../components/DetailListItem";
import SeverityIndicator from "../components/SeverityIndicator";
import ScreenWrapper from "../components/ScreenWrapper";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorIndicator from "../components/ErrorIndicator";

const { rtlText, rtlView } = STYLES;
export default class AssessmentDetail extends React.Component {
  // TODO: navigation props
  // static propTypes = {
  //   id: PropTypes.number,
  //   date: PropTypes.string.isRequired,
  //   possibleDiseases: PropTypes.arrayOf(PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     diseaseName: PropTypes.string.isRequired,
  //     diseaseSubtitle: PropTypes.string.isRequired,
  //     percentage: PropTypes.number.isRequired
  //   })),
  //   selectedSymptoms: PropTypes.arrayOf(PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     symptomName: PropTypes.string.isRequired
  //   })),
  // };

  constructor(props) {
    super(props);

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
    const {route} = this.props;
    console.log(route.params) // [{id}] -- array of symptoms ids
    // TODO
    // if id != null then fetch assessment detail from the API
    // if id == null then get assessment detail from Navigate object and update the state

    const date = formatDate();
    const possibleDiseases = [
      {
        id: 118,
        diseaseName: "كورونا",
        diseaseSubtitle:
          "فيروسات كورونا فصيلة واسعة الانتشار معروفة بأنها تسبب أمراضاً تتراوح من نزلات البرد الشائعة إلى الاعتلالات الأشد وطأة مثل متلازمة الشرق الأوسط التنفسية (MERS) ومتلازمة الالتهاب الرئوي الحاد الوخيم.",
        percentage: 100,
      },
      {
        id: 82,
        diseaseName: "نزلة برد",
        diseaseSubtitle:
          "فيروسات كورونا فصيلة واسعة الانتشار معروفة بأنها تسبب أمراضاً تتراوح من نزلات البرد الشائعة إلى الاعتلالات الأشد وطأة مثل متلازمة الشرق الأوسط التنفسية (MERS) ومتلازمة الالتهاب الرئوي الحاد الوخيم.",
        percentage: 80,
      },
      {
        id: 23,
        diseaseName: "حساسية",
        diseaseSubtitle:
          "فيروسات كورونا فصيلة واسعة الانتشار معروفة بأنها تسبب أمراضاً تتراوح من نزلات البرد الشائعة إلى الاعتلالات الأشد وطأة مثل متلازمة الشرق الأوسط التنفسية (MERS) ومتلازمة الالتهاب الرئوي الحاد الوخيم.",
        percentage: 60,
      },
      {
        id: 81,
        diseaseName: "نزلة برد",
        diseaseSubtitle:
          "فيروسات كورونا فصيلة واسعة الانتشار معروفة بأنها تسبب أمراضاً تتراوح من نزلات البرد الشائعة إلى الاعتلالات الأشد وطأة مثل متلازمة الشرق الأوسط التنفسية (MERS) ومتلازمة الالتهاب الرئوي الحاد الوخيم.",
        percentage: 40,
      },
      {
        id: 22,
        diseaseName: "حساسية",
        diseaseSubtitle:
          "فيروسات كورونا فصيلة واسعة الانتشار معروفة بأنها تسبب أمراضاً تتراوح من نزلات البرد الشائعة إلى الاعتلالات الأشد وطأة مثل متلازمة الشرق الأوسط التنفسية (MERS) ومتلازمة الالتهاب الرئوي الحاد الوخيم.",
        percentage: 20,
      },
    ];
    const selectedSymptoms = [
      {
        id: 96,
        symptomName: "صداع",
      },
      {
        id: 26,
        symptomName: "كحة",
      },
      {
        id: 21,
        symptomName: "فقدان حاسة التذوق",
      },
      {
        id: 14,
        symptomName: "تعب",
      },
    ];

    try {
      setTimeout(() => {
        this.setState({
          loading: false,
          error: false,
          date,
          possibleDiseases,
          selectedSymptoms,
        });
      }, 5000); //! update the state after 5 second | For Testing
    } catch (e) {
      this.setState({
        loading: false,
        error: true,
      });
    }
  }

  handleDiseasePress = ({ id }) => {
    const {navigation} = this.props;
    navigation.navigate("DiseaseDetail", {id})
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

  handleSymptomPress = ({ id }) => {
    const {navigation} = this.props;
    navigation.navigate("SymptomDetail", {id})
  };

  renderSymptomItem = ({ id, symptomName }) => (
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

  render() {
    const { loading, error, possibleDiseases, selectedSymptoms, date } = this.state;

    return (
      <ScreenWrapper>
        <ScrollView
          style={STYLES.mainContainer}
          contentContainerStyle={styles.scrollViewContainer}
        >
          <View style={[STYLES.titleContainer, styles.titleContainer]}>
            <Text style={[STYLES.title, styles.title, this.rtlText]}>
              نتيجة التشخيص
            </Text>
          </View>

          {loading && <LoadingIndicator color={COLORS.primaryText} />}

          {error && <ErrorIndicator />}

          {!loading && !error && (
            <>
              {date && (
                <View style={styles.dateContainer}>
                  <Text style={[styles.date, this.rtlText]}>التاريخ</Text>
                  <Text style={styles.date}>{date}</Text>
                </View>
              )}

              {/* TODO: No Result Message */}
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
  scrollViewContainer: {
    paddingBottom: 50,
  },

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

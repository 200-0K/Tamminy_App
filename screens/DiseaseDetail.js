import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableHighlight,
} from "react-native";
import PropTypes from "prop-types";
import Toast from "react-native-toast-message";

import { COLORS } from "../utils/colors";
import { STYLES } from "../utils/styles";

import { DiseaseApi } from "../api/DiseaseApi";

import SeverityIndicator from "../components/SeverityIndicator";
import ScreenWrapper from "../components/ScreenWrapper";
import LoadingIndicator from "../components/LoadingIndicator";

export default class DiseaseDetail extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    route: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.diseaseApi = DiseaseApi();

    this.isRtl = true; // TODO: based app language
    this.rtlView = this.isRtl && STYLES.rtlView;
    this.rtlText = this.isRtl && STYLES.rtlText;
  }

  state = {
    loading: true,
    diseaseMeta: {},
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const id = this.props.route.params.id;
    if (!id) navigation.goBack();

    try {
      const disease = await this.diseaseApi.get(id);
      const diseaseMeta = {
        id: disease.id,
        name: disease.ar_name,
        description: disease.ar_description,
        precautions: disease.precautions.map(precaution => precaution.ar_name),
        symptoms: disease.symptoms.map(symptom => ({
          id: symptom.id,
          name: symptom.ar_name,
          percentage: 0, //! can't calc this atm
        })),
      };

      this.setState({
        loading: false,
        diseaseMeta,
      });
    } catch (e) {
      Toast.show({
        type: "error",
        text1: "خطأ في تحميل الصفحة",
        props: { isRtl: true },
      });
      navigation.goBack();
    }
  }

  handleSymptomPress = id => {
    const { navigation } = this.props;
    navigation.replace("SymptomDetail", { id });
  };

  renderPrecaution = precaution => {
    return (
      <View style={[styles.precautionContainer, this.rtlView]} key={precaution}>
        <Text>-</Text>
        <View style={{ paddingHorizontal: 4 }}></View>
        <View style={{ flex: 1 }}>
          <Text
            style={[styles.precaution, this.rtlText]}
            textBreakStrategy="simple"
            selectable
          >
            {precaution}
          </Text>
        </View>
      </View>
    );
  };

  renderSymptom = ({ id, name, percentage }) => {
    return (
      <TouchableHighlight
        style={[styles.symptomContainer, this.rtlView]}
        activeOpacity={0.8}
        underlayColor="rgba(0,0,0,0.05)"
        onPress={() => this.handleSymptomPress(id)}
        key={id}
      >
        <>
          <SeverityIndicator showText={false} percentage={percentage} />
          {/* On SeverityIndicator tap; show percentage as a tooltip? */}
          <Text style={styles.symptomName}>{name}</Text>
        </>
      </TouchableHighlight>
    );
  };

  render() {
    const { loading, diseaseMeta } = this.state;

    if (loading) return <LoadingIndicator color={COLORS.primaryText} />;

    const { name, description, precautions, symptoms } = diseaseMeta;
    return (
      <ScreenWrapper>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={STYLES.mainContainer}
        >
          <View style={{ marginTop: STYLES.titleContainer.marginTop }}>
            <Text style={[STYLES.title, this.rtlText]}>{name}</Text>
            <Text selectable style={[styles.description, this.rtlText]}>
              {description}
            </Text>
          </View>

          <View style={[STYLES.sectionContainer]}>
            <View style={STYLES.sectionTitleContainer}>
              <Text style={[STYLES.sectionTitle, this.rtlText]}>
                الأحترازات
              </Text>
            </View>
            <View>{precautions.map(this.renderPrecaution)}</View>
          </View>

          <View style={[STYLES.sectionContainer]}>
            <View style={STYLES.sectionTitleContainer}>
              <Text style={[STYLES.sectionTitle, this.rtlText]}>الاعراض</Text>
            </View>
            {symptoms.map(this.renderSymptom)}
          </View>
        </ScrollView>
      </ScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 14,
    color: COLORS.primaryText,
  },

  symptomContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
  },
  symptomName: {
    fontSize: 14,
    color: COLORS.primaryText,
    paddingHorizontal: 10,
  },

  precautionContainer: {
    flexDirection: "row",
    marginVertical: 1,
  },
  precaution: {
    fontSize: 14,
    color: COLORS.primaryText,
    paddingBottom: 3,
  },
});

import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableHighlight,
} from "react-native";
import PropTypes from "prop-types";

import { COLORS } from "../utils/colors";
import { STYLES } from "../utils/styles";

import { SymptomApi } from "../api/SymptomApi";

import SeverityIndicator from "../components/SeverityIndicator";
import ScreenWrapper from "../components/ScreenWrapper";
import LoadingIndicator from "../components/LoadingIndicator";
import HorizontalImageScroller from "../components/HorizontalImageScroller";

export default class SymptomDetail extends React.Component {
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

    this.symptomApi = SymptomApi();

    this.isRtl = true;
    this.rtlText = this.isRtl && STYLES.rtlText;
    this.rtlView = this.isRtl && STYLES.rtlView;
  }

  state = {
    loading: true,
    symptomMeta: {},
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const id = this.props.route.params.id;
    if (!id) navigation.goBack();

    try {
      const symptom = await this.symptomApi.get(id);
      const symptomMeta = {
        id: symptom.id,
        name: symptom.ar_name,
        description: symptom.ar_description,
        images: symptom.images.map(image => image.image),
        diseases: symptom.diseases.map(disease => ({
          id: disease.id,
          name: disease.ar_name,
          percentage: 0, //! can't calc this atm
        })),
      };

      this.setState({
        loading: false,
        error: false,
        symptomMeta,
      });
    } catch (e) {
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
    navigation.replace("DiseaseDetail", { id });
  };

  renderDisease = ({ id, name, percentage }) => {
    return (
      <TouchableHighlight
        style={[styles.diseaseContainer, this.rtlView]}
        activeOpacity={0.8}
        underlayColor="rgba(0,0,0,0.05)"
        onPress={() => this.handleDiseasePress(id)}
        key={id}
      >
        <>
          <SeverityIndicator showText={false} percentage={percentage} />
          {/* On SeverityIndicator tap; show percentage as a tooltip? */}
          <Text style={styles.diseaseName}>{name}</Text>
        </>
      </TouchableHighlight>
    );
  };

  render() {
    const { loading, symptomMeta } = this.state;

    if (loading) return <LoadingIndicator color={COLORS.primaryText} />;

    const { name, description, images, diseases } = symptomMeta;
    return (
      <ScreenWrapper>
        <View>
          <HorizontalImageScroller images={images} />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={STYLES.mainContainer}
          contentContainerStyle={STYLES.scrollViewContentContainer}
        >
          <View style={{ marginTop: STYLES.titleContainer.marginTop }}>
            <Text style={[STYLES.title, this.rtlText]}>{name}</Text>
          </View>
          <Text selectable style={[styles.description, this.rtlText]}>
            {description}
          </Text>

          <View style={STYLES.sectionContainer}>
            <View style={STYLES.sectionTitleContainer}>
              <Text style={[STYLES.sectionTitle, this.rtlText]}>الأمراض </Text>
            </View>
            {diseases.map(this.renderDisease)}
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

  diseaseContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
  },
  diseaseName: {
    fontSize: 14,
    color: COLORS.primaryText,
    paddingHorizontal: 10,
  },
});

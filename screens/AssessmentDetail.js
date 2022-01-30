import React from "react";
import {
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
// import Constants from "expo-constants"; //!
import PropTypes from "prop-types";
import chroma from "chroma-js";

import { COLORS } from "../utils/colors";
import DetailListItem from "../components/DetailListItem";

const rtlText = { textAlign: "right", writingDirection: "rtl" };
const rtlView = { flexDirection: "row-reverse" };

export default class AssessmentDetail extends React.Component {
  static propTypes = {
    date: PropTypes.string.isRequired,
    possibleDiseases: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      diseaseName: PropTypes.string.isRequired,
      diseaseSubtitle: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })),
    selectedSymptoms: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      symptomName: PropTypes.string.isRequired
    })),
  };

  // set default value for optional props
  static defaultProps = {
    possibleDiseases: [],
    selectedSymptoms: [],
  };

  handleDiseasePress = ({ id }) => {
    // TODO: Stack Navigate to DiseaseDetail screen
  };

  renderDiseaseItem = ({ id, diseaseName, diseaseSubtitle, percentage }) => {
    const severityColor = chroma.scale([
      COLORS.diseaseSeverityLow,
      COLORS.diseaseSeverityMedium,
      COLORS.diseaseSeverityHigh,
    ])(percentage / 100).toString();

    return (
      <TouchableOpacity
        style={[styles.listItemContainer, rtlView]}
        activeOpacity={0.8}
        onPress={() => this.handleDiseasePress(id)}
        key={id}
      >
        <View
          style={[styles.severityContainer, { backgroundColor: severityColor }]}
        >
          <Text style={styles.severityPercentage}>
            {percentage}
            <Text style={{ fontSize: 8 }}>%</Text>
          </Text>
        </View>
        <DetailListItem
          title={diseaseName}
          subtitle={diseaseSubtitle}
          isRtl={!!rtlText} // convert to boolean
          style={styles.detailListItem}
        />
      </TouchableOpacity>
    );
  };

  handleSymptomPress = ({ id }) => {
    // TODO: Stack Navigate to SymptomDetail screen
  };

  renderSymptomItem = ({ id, symptomName }) => {
    return (
      <TouchableOpacity
        style={[styles.listItemContainer, rtlView]}
        activeOpacity={0.8}
        onPress={() => this.handleSymptomPress(id)}
        key={id}
      >
        <Text>+</Text>
        <DetailListItem
         title={symptomName} 
         isRtl={!!rtlText}
         style={styles.detailListItem}
        />
      </TouchableOpacity>
    );
  };

  render() {
    // const { ... } = this.props; // date: string/Date?, possibleDiseases: [{id, diseaseName, diseaseSubtitle, percentage}], selectedSymptoms: [{id, symptomName}]
    const date = "2021 ,02 Nov";
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
    

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContainer}
        >
          <View style={styles.titleContainer}>
            <Text style={[styles.title, rtlText]}>نتيجة التشخيص</Text>
          </View>
          {date && (
            <Text style={[styles.date, rtlText]}>التاريخ {date}</Text>
          )}

          {/* TODO: No Result Message */}
          <View style={styles.sectionContainer}>
            <View style={styles.sectionTitleContainer}>
              <Text style={[styles.sectionTitle, rtlText]}>
                الأمراض المحتملة
              </Text>
            </View>
            <View style={styles.listContainer}>
              {possibleDiseases.map(this.renderDiseaseItem)}
            </View>
          </View>

          <View style={styles.sectionContainer}>
            <View style={styles.sectionTitleContainer}>
              <Text style={[styles.sectionTitle, rtlText]}>
                الاعراض المختارة
              </Text>
            </View>
            <View style={styles.listContainer}>
              {selectedSymptoms.map(this.renderSymptomItem)}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const platformVersion =
  Platform.OS === "ios" ? parseInt(Platform.Version, 10) : Platform.Version;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: (Platform.OS === "android" || platformVersion < 11) ? Constants.statusBarHeight : 0,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  scrollViewContainer: {
    paddingBottom: 20,
  },

  titleContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginTop: 15,
    marginBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.primaryText,
    alignSelf: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: COLORS.primaryText,
  },
  date: {
    fontSize: 12,
    fontWeight: "bold",
    color: COLORS.secondaryText,
    alignSelf: "center",
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
    alignItems: "center",
  },
  severityContainer: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.primaryText,
    backgroundColor: "red",
  },
  severityPercentage: {
    fontSize: 15,
    color: COLORS.primaryText,
  },
  detailListItem: {
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
});

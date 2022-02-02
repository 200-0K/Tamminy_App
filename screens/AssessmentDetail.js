import React from "react";
import {
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";


import { COLORS } from "../utils/colors";
import { formatDate } from "../utils/date";
import { STYLES } from "../utils/styles";

import DetailListItem from "../components/DetailListItem";
import SeverityIndicator from "../components/SeverityIndicator";

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

  state = {
    loading: true,
    error: false,
    id: null,
    date: null,
    possibleDiseases: [],
    selectedSymptoms: [],
  };

  async componentDidMount() {
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
    // TODO: Stack Navigate to DiseaseDetail screen
  };

  renderDiseaseItem = ({ id, diseaseName, diseaseSubtitle, percentage }) => {
    return (
      <TouchableHighlight
        style={[styles.listItemContainer, rtlView]} // TODO: based app language
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
            isRtl={true} // TODO: based app language
            style={styles.detailListItem}
          />
        </>
      </TouchableHighlight>
    );
  };

  handleSymptomPress = ({ id }) => {
    // TODO: Stack Navigate to SymptomDetail screen
  };

  renderSymptomItem = ({ id, symptomName }) => {
    return (
      <TouchableHighlight
        style={[styles.listItemContainer, rtlView]} // TODO: based app language
        activeOpacity={0.8}
        underlayColor={"rgba(0,0,0,0.05)"}
        onPress={() => this.handleSymptomPress(id)}
        key={id}
      >
        <DetailListItem
          title={"+ " + symptomName}
          isRtl={true} // TODO: based app language
          style={styles.detailListItem}
        />
      </TouchableHighlight>
    );
  };

  render() {
    const { loading, error, possibleDiseases, selectedSymptoms, date } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContainer}
        >
          <View style={styles.titleContainer}>
            <Text style={[styles.title, rtlText]}>نتيجة التشخيص</Text>
          </View>

          {loading && (
            <View style={{marginTop: 15}}>
              <ActivityIndicator size={"large"} color={COLORS.primaryText} />
            </View>
          )}

          {error && <Text style={{textAlign:"center"}}>Error: error occured</Text> /*TODO*/} 
          
          {!loading && !error && (
            <>
              {date && (
                <View style={styles.dateContainer}>
                  <Text style={[styles.date, rtlText]}>التاريخ</Text>
                  <Text style={styles.date}>{date}</Text>
                </View>
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
            </>
          )}
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
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 5,
  },
  detailListItem: {
    paddingVertical: 0,
    paddingHorizontal: 10,
  },
});
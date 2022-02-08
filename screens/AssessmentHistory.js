import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";
import chroma from "chroma-js";

import { COLORS } from "../utils/colors";
import { STYLES } from "../utils/styles";
import { formatDate } from "../utils/date";
import DetailListItem from "../components/DetailListItem";

export default class AssessmentHistory extends React.Component {
  state = {
    loading: true,
    error: false,
    previousAssessments: [
      {
        id: 12,
        date: "2022/02/08",
      },
      {
        id: 13,
        date: "2022/01/11",
      },
      {
        id: 14,
        date: "2021/08/16",
      },
      {
        id: 15,
        date: "2021/11/28",
      },
      {
        id: 16,
        date: "2022/02/05",
      },
    ],
  };

  async componentDidMount() {
    const { previousAssessments } = this.state;
    const prevAssessments = JSON.parse(JSON.stringify(previousAssessments));
    // prevAssessments.sort((a1, a2) => a2.date.localeCompare(a1.date)); // Sort in ascending order from oldest to latest
    prevAssessments.sort((a1, a2) => a2.date.localeCompare(a1.date)); // Sort in descending order from most recent to oldest
    prevAssessments.forEach(
      assessment => (assessment.date = formatDate(assessment.date))
    );

    try {
      setTimeout(() => {
        this.setState({
          loading: false,
          error: false,
          previousAssessments: prevAssessments,
        });
      }, 10); //! update the state after 5 second | For Testing
    } catch (e) {
      this.setState({
        loading: false,
        error: true,
      });
    }
  }

  handleAssessmentPress = ({ id }) => {
    // TODO: navigate to AssessmentDetail screen
  };

  renderAssessmentHistory = ({ id, date }, idx) => (
    <TouchableHighlight
      style={[this.rtlView]} // TODO: based app language
      activeOpacity={0.8}
      underlayColor={"rgba(0,0,0,0.05)"}
      onPress={() => this.handleAssessmentPress(id)}
      key={id}
    >
      <DetailListItem
        title={`تشخيصة #${idx+1}`}
        subtitle={date}
        isRtl={true} // TODO: based app language
        style={styles.detailListItem}
      />
    </TouchableHighlight>
  );

  render() {
    const { loading, error, previousAssessments } = this.state;
    this.rtlView = STYLES.rtlView;
    this.rtlText = STYLES.rtlText;

    if (loading) {
      // TODO: custom component
      return (
        <View
          style={[
            {
              ...StyleSheet.absoluteFill,
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
        >
          <ActivityIndicator size="large" color={COLORS.primaryText} />
        </View>
      );
    }

    if (error) {
      // TODO: custom component
      return (
        <View
          style={[
            {
              ...StyleSheet.absoluteFill,
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
        >
          <Text style={{ color: "red", fontSize: 42 }}>Error occurred</Text>
        </View>
      );
    }

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={STYLES.mainContainer}>
          <View style={STYLES.titleContainer}>
            <Text style={STYLES.title}>التشخيصات السابقة</Text>
          </View>

          <View style={styles.listContainer}>
            {previousAssessments.map(this.renderAssessmentHistory)}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    marginVertical: 2,
    paddingHorizontal: 4,
  },
  detailListItem: {
    marginVertical: 3,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: chroma(COLORS.primaryText).alpha(.03).toString()
  },
  // sectionTitleContainer: {
  //     marginVertical: 4,
  //     paddingVertical: 4,
  //     paddingHorizontal: 8,
  //     borderWidth: 2,
  //     borderRadius: 12,
  //     borderColor: COLORS.primaryText,
  //     alignSelf: "center",
  //     alignItems: "center",
  // },
});

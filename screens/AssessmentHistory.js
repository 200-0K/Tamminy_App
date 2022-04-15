import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import chroma from "chroma-js";
import Toast from "react-native-toast-message";

import { GlobalContext } from "../contexts/Global";

import { COLORS } from "../utils/colors";
import { STYLES } from "../utils/styles";
import { formatDate } from "../utils/date";

import { AssessmentApi } from "../api/AssessmentApi";

import DetailListItem from "../components/DetailListItem";
import SeverityIndicator from "../components/SeverityIndicator";
import ScreenWrapper from "../components/ScreenWrapper";
import LoadingIndicator from "../components/LoadingIndicator";

export default class AssessmentHistory extends React.Component {
  constructor(props) {
    super(props);

    this.assessmentApi = AssessmentApi();

    this.isRtl = true; // TODO: lang
    this.rtlView = this.isRtl && STYLES.rtlView;
    this.rtlText = this.isRtl && STYLES.rtlText;
  }

  static contextType = GlobalContext;

  state = {
    loading: true,
    assessments: [],
  };

  async componentDidMount() {
    const { navigation } = this.props;
    if (!this.context.isLoggedIn) {
      Toast.show({
        type: "error",
        text1: "يرجى تسجيل الدخول",
        text2: "يجب التسجيل لدخول هذه الصفحة",
        props: { isRtl: true },
      });
      return this.setState({ loading: false }, () =>
        navigation.replace("Login")
      );
    }

    try {
      let assessments = await this.assessmentApi.getAll();
      if (!assessments || assessments.length < 1) {
        Toast.show({
          type: "info",
          text1: "لا يوجد لديك تشخيصات سابقة لعرضها",
          props: { isRtl: true },
        });
        return navigation.goBack();
      }

      assessments.sort((a1, a2) => a2.date.localeCompare(a1.date)); // Sort in descending order from most recent to oldest
      assessments.forEach(a => (a.date = formatDate(a.date)));

      this.setState({
        loading: false,
        assessments,
      });
    } catch {
      Toast.show({
        type: "error",
        text1: "تعذر تحميل الصفحة",
        props: { isRtl: true },
      });
      return navigation.goBack();
    }
  }

  handleAssessmentPress = id => {
    const { navigation } = this.props;
    navigation.navigate("AssessmentDetail", { id });
  };

  renderAssessmentHistory = ({ id, date }, idx) => (
    <View style={[styles.assessmentItemContainer, this.rtlView]} key={id}>
      <View style={{ opacity: 0.8 }}>
        {/* TODO: based on most severe disease percentage on this assessment */}
        <SeverityIndicator percentage={0} showText={false} />
      </View>
      <View style={{ paddingHorizontal: 5 }}></View>

      <TouchableHighlight
        style={[styles.detailListContainer]}
        activeOpacity={0.8}
        underlayColor={"rgba(0,0,0,0.05)"}
        onPress={() => this.handleAssessmentPress(id)}
        key={id}
      >
        <DetailListItem
          title={`تشخيصة #${idx + 1}`}
          subtitle={date}
          isRtl={this.isRtl}
          style={styles.detailListItem}
        />
      </TouchableHighlight>
    </View>
  );

  render() {
    const { loading, assessments } = this.state;

    if (loading) return <LoadingIndicator color={COLORS.primaryText} />;

    return (
      <ScreenWrapper>
        <ScrollView
          style={STYLES.mainContainer}
          contentContainerStyle={STYLES.scrollViewContentContainer}
        >
          <View style={STYLES.titleContainer}>
            <Text
              style={[STYLES.title, { fontSize: STYLES.title.fontSize - 10 }]}
            >
              التشخيصات السابقة
            </Text>
          </View>

          <View style={styles.listContainer}>
            {assessments.map(this.renderAssessmentHistory)}
          </View>
        </ScrollView>
      </ScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    marginVertical: 2,
    paddingHorizontal: 4,
  },

  detailListContainer: {
    flexDirection: "row",
    flex: 1,
    marginVertical: 3,
    borderRadius: 15,
    backgroundColor: chroma(COLORS.primaryText).alpha(0.03).toString(),
  },
  detailListItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },

  assessmentItemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { GlobalContext } from "../contexts/Global";

import { COLORS } from "../utils/colors";
import { STYLES } from "../utils/styles";

import HomeSvg from "../components/svg/Home";
import SearchIcon from "../components/svg/icons/Search";
import DoctorNote from "../components/svg/icons/DoctorNote";
import Stethoscope from "../components/svg/icons/Stethoscope";
import Feedback from "../components/svg/icons/Feedback";

import ScreenWrapper from "../components/ScreenWrapper";

const hitSlop = { top: 30, bottom: 30, left: 30, right: 30 };
export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.isRtl = true; // TODO: lang
    this.rtlView = this.isRtl && STYLES.rtlView;
    this.rtlText = this.isRtl && STYLES.rtlText;
  }

  static contextType = GlobalContext;

  navigateToRegister = () => {
    const { navigation } = this.props;
    navigation.navigate("Register");
  };

  navigateToSearchScreen = () => {
    const { navigation } = this.props;
    navigation.navigate("Search");
  };

  navigateToAssessmentHistory = () => {
    const { navigation } = this.props;
    navigation.navigate("AssessmentHistory");
  };

  navigateToStartAssessment = () => {
    const { navigation } = this.props;
    navigation.navigate("SymptomSearch");
  };

  navigateToFeedback = () => {
    const { navigation } = this.props;
    navigation.navigate("Feedback");
  };

  navigateToLogin = () => {
    const { navigation } = this.props;
    navigation.navigate("Login");
  };

  render() {
    return (
      <ScreenWrapper>
        <View style={STYLES.mainContainer}>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              hitSlop={hitSlop}
              onPress={this.navigateToSearchScreen}
            >
              <SearchIcon size={24} color={COLORS.buttonText} />
            </TouchableOpacity>
            {!this.context.isLoggedIn && (
              <TouchableOpacity onPress={this.navigateToLogin}>
                <Text
                  style={{
                    color: COLORS.primaryText,
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  تسجيل الدخول
                </Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={{ flex: 1 }}>
            <HomeSvg />
            <View style={{flexDirection: "row", justifyContent: "center"}}>
              <View style={{maxWidth: 370, flex: 1}}>
                <Text style={[styles.title, { textAlign: "right" }]}>هل تعاني</Text>
                <Text style={[styles.title, { textAlign: "left" }]}>من شيء؟</Text>
              </View>
            </View>
            

            <View style={[styles.optionIcon]}>
              <TouchableOpacity
                style={styles.optionTextContainer}
                onPress={this.navigateToStartAssessment}
              >
                <Text style={styles.optionText}>تشخيص</Text>
              </TouchableOpacity>
              <Stethoscope size={24} color={COLORS.buttonText} />
            </View>

            <View style={[styles.optionIcon]}>
              <TouchableOpacity
                style={styles.optionTextContainer}
                onPress={this.navigateToAssessmentHistory}
              >
                <Text style={styles.optionText}>سجل التشخيصات</Text>
              </TouchableOpacity>
              <DoctorNote size={24} color={COLORS.buttonText} />
            </View>
          </View>

          <TouchableOpacity
            hitSlop={hitSlop}
            style={STYLES.feedbackContainer}
            onPress={this.navigateToFeedback}
          >
            <Feedback size={24} color={COLORS.buttonText} />
          </TouchableOpacity>
        </View>
      </ScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 5,
  },

  title: {
    fontSize: 60,
    color: COLORS.primaryText,
    paddingHorizontal: 5,
  },

  optionTextContainer: {
    paddingHorizontal: 10,
  },
  optionText: {
    color: COLORS.buttonText,
    fontSize: 30,
  },

  optionIcon: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    paddingHorizontal: 5,
    paddingBottom: 10,
  },
});

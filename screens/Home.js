import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import PropTypes from "prop-types";

import HomeSvg from "../components/svg/Home";
import SearchIcon from "../components/svg/icons/Search";
import DoctorNote from "../components/svg/icons/DoctorNote";
import Stethoscope from "../components/svg/icons/Stethoscope";
import Feedback from "../components/svg/icons/Feedback";

import { COLORS } from "../utils/colors";
import { STYLES } from "../utils/styles";

const hitSlop = { top: 30, bottom: 30, left: 30, right: 30 };
export default class Home extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  navigateToSearchScreen = () => {
    // const { navigation } = this.props;
    // navigation.navigate("Search");
  };

  startAssessment = () => {
    // const { navigation } = this.props;
    // navigation.navigate("SymptomSearch");
  };

  render() {
    return (
      <SafeAreaView style={[STYLES.safeAreaView]}>
        <View style={STYLES.mainContainer}>
          <View style={styles.headerContainer}>
            <TouchableOpacity hitSlop={hitSlop} onPress={this.navigateToSearchScreen}>
              <SearchIcon size={24} color={COLORS.buttonText} />
            </TouchableOpacity>
            {/* TODO: if user is logged in then hide this */}
            <TouchableOpacity>
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
          </View>

          <View style={{ flex: 1 }}>
            <HomeSvg />
            <View>
              <Text style={[styles.title, { textAlign: "right" }]}>
                هل تعاني
              </Text>
              <Text style={[styles.title, { textAlign: "left" }]}>من شيء؟</Text>
            </View>

            <View style={[styles.optionIcon]}>
              <TouchableOpacity
                style={styles.optionTextContainer}
                onPress={this.startAssessment}
              >
                <Text style={styles.optionText}>تشخيص</Text>
              </TouchableOpacity>
              <Stethoscope size={24} color={COLORS.buttonText} />
            </View>

            <View style={[styles.optionIcon]}>
              <TouchableOpacity style={styles.optionTextContainer}>
                <Text style={styles.optionText}>سجل التشخيصات</Text>
              </TouchableOpacity>
              <DoctorNote size={24} color={COLORS.buttonText} />
            </View>
          </View>

          <TouchableOpacity hitSlop={hitSlop} style={STYLES.feedbackContainer}>
            <Feedback size={24} color={COLORS.buttonText} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import PropTypes from "prop-types";

import HomeSvg from "../components/svg/Home";
import SearchIcon from "../components/svg/icons/Search";
import DoctorNote from "../components/svg/icons/DoctorNote";
import Stethoscope from "../components/svg/icons/Stethoscope";
import Feedback from "../components/svg/icons/Feedback";

import { COLORS } from "../utils/colors";
import { STYLES } from "../utils/styles";

export default class Home extends React.Component {
  static propTypes = {
    prop1: PropTypes.string,
    prop2: PropTypes.number.isRequired,
    prop3: PropTypes.func,
  };

  render() {
    // const { ... } = this.props;

    return (
      <SafeAreaView style={STYLES.mainContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{flex:1 }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
              paddingHorizontal:5
            }}
          >
            <TouchableOpacity style={{ flex: 3}}>
              <SearchIcon size={24} color={COLORS.buttonText} />
            </TouchableOpacity>
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

          <View style={{ flex: 1,backgroundColor:'red'}}>
            <HomeSvg />
            <View>
              <Text style={[styles.title, { textAlign: "right" }]}>
                هل تعاني{" "}
              </Text>
              <Text style={[styles.title, { textAlign: "left" }]}>من شيء؟</Text>
            </View>

            <View style={[styles.optionIcon]}>
              <TouchableOpacity style={styles.optionTextContainer}>
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

          <TouchableOpacity style={styles.feedbackContainer}>
            <Feedback size={24} color={COLORS.buttonText} />
          </TouchableOpacity>
          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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

  feedbackContainer: {
    paddingVertical: 20,
    paddingHorizontal: 5,
    alignSelf: "flex-end",
  },
});

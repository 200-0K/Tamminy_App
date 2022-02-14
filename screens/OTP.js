import React from "react";
<<<<<<< HEAD
import {
=======
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
>>>>>>> 9d599b40bc21a795501198a08df22d6545729362
  StyleSheet,
  Text,
  View,
  ScrollView,
<<<<<<< HEAD
} from "react-native";
import PropTypes from "prop-types";
import OTPInputView from "@twotalltotems/react-native-otp-input";

import OTPSvg from "../components/svg/OTP";
import Button from "../components/Button";

import { COLORS } from "../utils/colors";
import { STYLES } from "../utils/styles";
import ScreenWrapper from "../components/ScreenWrapper";

export default class Feedback extends React.Component {
  // static propTypes = {
  //   prop1: PropTypes.string,
  //   prop2: PropTypes.number.isRequired,
  //   prop3: PropTypes.func,
  // };

  state = {
    otp: null,
  };

  verifyOtp = () => {

  }

  render() {
    const { otp } = this.state;

    return (
      <ScreenWrapper>
        <ScrollView style={STYLES.mainContainer}>
          <View style={STYLES.titleContainer}>
            <Text style={STYLES.title}>رمز التحقق</Text>
          </View>

          <OTPSvg />
          <OTPInputView
            style={[styles.field, styles.otpInputView]}
            pinCount={4}
            keyboardType="phone-pad"
            placeholderCharacter="*"
            placeholderTextColor="rgba(0,0,0,0.2)"
            autoFocusOnLoad
            codeInputFieldStyle={styles.codeInputFieldStyle}
            codeInputHighlightStyle={styles.codeInputHighlightStyle}
            onCodeFilled={code => this.setState({otp: code})}
          />

          <View style={[styles.field, styles.buttonContainer]}>
            <Button title="تحقق" fontSize={25} width={100} onPress={this.verifyOtp} />
          </View>
        </ScrollView>
      </ScreenWrapper>
=======
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";

import PropTypes from "prop-types";
import OTPSvg from "../components/svg/OTP";
import { COLORS } from "../utils/colors";
import Buttons from "../components/Button";
import OTPInputView from '@twotalltotems/react-native-otp-input'
export default class Feedback extends React.Component {
  static propTypes = {
    prop1: PropTypes.string,
    prop2: PropTypes.number.isRequired,
    prop3: PropTypes.func,
  };

  render() {
    // const { ... } = this.props;

    return (

      <SafeAreaView style={styles.container}>

        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView>
              <Text
                style={{
                  fontSize: 60,
                  fontWeight: "bold",
                  color: COLORS.primaryText,
                  marginTop: 60,
                  textAlign: "center",
                  flex: 1,
                }}
              >
                رمز التحقق
              </Text>

              <OTPSvg height={315} style={{ aspectRatio:1.3, marginTop: 30 }} />

              <OTPInputView
                style={{ width: '500%', height: 100, marginTop:50 }, styles.container}
                pinCount={4}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
              />

              <View style={[styles.buttonContainer]}>
                <Buttons title="تحقق" fontSize={25} />
              </View>

            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
>>>>>>> 9d599b40bc21a795501198a08df22d6545729362
    );
  }
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  field: {
    marginVertical: 20,
  },
  buttonContainer: {
    alignSelf: "center",
  },

  otpInputView: {
    flex: 1,
  },
  codeInputFieldStyle: {
    borderWidth: 0,
    borderBottomWidth: 3,
    fontSize: 24,
    color: COLORS.secondaryText,
  },
  codeInputHighlightStyle: {
    borderColor: COLORS.otpUnderline,
    color: COLORS.primaryText,
=======
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
  buttonContainer: {
    marginTop: 70,
    alignSelf: "center"
  },
  borderStyleBase: {
    width: 40,
    height: 45,
  },
  underlineStyleBase: {
    width: 45,
    height: 50,
    borderWidth: 0,
    borderBottomWidth:3,
  },
  underlineStyleHighLighted: {
    borderColor: "red",
    
>>>>>>> 9d599b40bc21a795501198a08df22d6545729362
  },
});

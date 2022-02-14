import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
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
    );
  }
}

const styles = StyleSheet.create({
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
  },
});

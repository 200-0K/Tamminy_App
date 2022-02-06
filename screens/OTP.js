import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
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
    );
  }
}

const styles = StyleSheet.create({
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
    
  },
});

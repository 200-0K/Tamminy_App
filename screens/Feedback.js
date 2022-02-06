import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback 
} from "react-native";
import PropTypes from "prop-types";
import FeedbackSvg from "../components/svg/Feedback";
import { COLORS } from "../utils/colors";
import TextArea from "../components/TextArea";
import Buttons from "../components/Button";

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

        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}  style={styles.container}>
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
              ماذا تقترح؟
            </Text>

            <FeedbackSvg height={350} style={{ aspectRatio: 1 }} />
            <TextArea isRtl={true} fontSize={18} max={180} placeholder="ماذا تقترح؟" />

            <View style={[styles.buttonContainer]}>
              <Buttons title="ارسال" fontSize={25} />
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
    //marginTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
  },
  buttonContainer: {
    marginTop: 15,
    alignSelf: "center"
  },
});
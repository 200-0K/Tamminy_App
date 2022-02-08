import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import PropTypes from "prop-types";

import TextArea from "../components/TextArea";
import Buttons from "../components/Button";
import FeedbackSvg from "../components/svg/Feedback";
import { STYLES } from "../utils/styles";

const MAX_CHARACTERS = 180;
export default class Feedback extends React.Component {
  // static propTypes = {
  //   prop1: PropTypes.string,
  //   prop2: PropTypes.number.isRequired,
  //   prop3: PropTypes.func,
  // };

  state = {
    text: "",
    loading: false,
    error: false,
  }

  sendFeedback = () => {
    const {text} = this.state;
    console.log(text); // check terminal!
    // TODO
    // if text.length > MAX_CHARACTERS then setState({error: true})
    // otherwise, submit the feedback and setState({loading: true, error: false})
    // if feedback submitted successfully then go to previous screen (Home screen/Question screen)
    // otherwise show setState({loading: false, error: true})
  }

  render() {
    const { loading, error, text } = this.state;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={STYLES.mainContainer}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <View style={[STYLES.titleContainer, {marginBottom: 15}]}>
              <Text style={STYLES.title}>ماذا تقترح؟</Text>
              <FeedbackSvg />
            </View>

            <TextArea
              isRtl={true}
              fontSize={18}
              max={MAX_CHARACTERS}
              placeholder="ماذا تقترح؟"
              value={text}
              onChangeText={text => this.setState({text})}
            />

            <View style={[styles.buttonContainer]}>
              <Buttons title="إرسال" fontSize={25} onPress={this.sendFeedback} />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 15,
    alignSelf: "center",
  },
});

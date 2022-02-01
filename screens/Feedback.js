import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import PropTypes from "prop-types";

import FeedbackSvg from "../components/svg/Feedback";
import { COLORS } from "../utils/colors";

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
        <ScrollView>
          <Text
            style={{
              fontSize: 57,
              fontWeight: "bold",
              color: COLORS.primaryText,
              marginTop: 90,
              textAlign: "center",
              flex: 1,
            }}
          >
            ماذا تقترح؟
          </Text>

          <FeedbackSvg height={350} style={{ aspectRatio: 1 }} />

          <TextInput
            style={styles.textInput}
            placeholder="0/500"
            //TODO: TextArea component
          />

          <View style={[styles.buttonContainer]}>
            <Button style={styles.button} title="ارسال"  />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
  },
  textInput: {
    textAlign: "center",
    height: 250,
    fontWeight: "500",
    fontSize: 20,
    color: COLORS.primaryText,
    borderWidth: 1.8,
    padding: 0,
    borderRadius: 10,
  },
  buttonContainer: {
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: "center"
  },
  button: {
    height: 40,
  }
});

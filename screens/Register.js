import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import PropTypes from "prop-types";

import Button from "../components/Button";
import TextInput from "../components/TextInput";
import RegisterSvg from "../components/svg/Register";
import { STYLES } from "../utils/styles";
export default class ComponentName extends React.Component {
  static propTypes = {
    prop1: PropTypes.string,
    prop2: PropTypes.number.isRequired,
    prop3: PropTypes.func,
  };

  render() {
    // const { ... } = this.props;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={STYLES.mainContainer}
        >
          <ScrollView>
            <View style={STYLES.titleContainer}>
              <Text style={STYLES.title}>تسـجـيل</Text>
              <RegisterSvg />
            </View>

            <View style={styles.Inputs}>
              <TextInput
                icon="person"
                isRtl
                placeholder="الاسم"
              />
            </View>

            <View style={styles.Inputs}>
              <TextInput
                icon="calendar"
                isRtl
                placeholder="تاريخ الميلاد"
              />
            </View>

            <View style={styles.Inputs}>
              <TextInput icon="at" isRtl placeholder="الايميل" />
            </View>

            <View style={styles.Inputs}>
              <TextInput
                icon="md-key-outline"
                isRtl
                secureTextEntry={true}
                placeholder="كلمة المرور"
              />
            </View>

            <View style={styles.ButtonStyle}>
              <Button title="تسجيل" />
            </View>

            <StatusBar style="auto" />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  TextInput: {
    textAlign: "right",
    height: 60,
    width: "90%",
    fontWeight: "500",
    fontSize: 20,
    color: "rgba(76,74,94,0.7)",
    margin: 4,
    padding: 3,
    borderRadius: 3,
    borderBottomWidth: 1.2,
  },
  Inputs: {
    marginVertical: 25
  },
  ButtonStyle: {
    marginVertical: 10,
    alignItems: "center",
  },
});

import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  Image,
  CheckBox,
  ScrollView,
  Input,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

import RegisterSvg from "../components/svg/Register";
export default class ComponentName extends React.Component {
  static propTypes = {
    prop1: PropTypes.string,
    prop2: PropTypes.number.isRequired,
    prop3: PropTypes.func,
  };

  render() {
    // const { ... } = this.props;

    return (
      //TODO: fix KeyboardAvoidingView
      <KeyboardAvoidingView  behavior="height" style={styles.container}>
        <ScrollView>
            <Text
              style={{
                fontSize: 65,
                fontWeight: "bold",
                color: "rgba(76,74,94,0.7)",
                textAlign: "center",
              }}
            >
              تسـجـيل
            </Text>

            <RegisterSvg style={{ marginTop: 40 }} />
            <View style={styles.Inputs}>
              <TextInput style={styles.TextInput} placeholder="  الاسم " />

              <Ionicons
                options={{}}
                name="person"
                size={24}
                color="rgba(76,74,94,0.7)"
              />
            </View>

            <View style={styles.Inputs}>
              <TextInput
                style={styles.TextInput}
                placeholder="  تاريخ الميلاد "
              />
              <EvilIcons name="calendar" size={24} color="rgba(76,74,94,0.7)" />
            </View>

            <View style={styles.Inputs}>
              <TextInput style={styles.TextInput} placeholder="  الايميل " />
              <Entypo name="email" size={24} color="rgba(76,74,94,0.7)" />
            </View>

            <View style={styles.Inputs}>
              <TextInput
                style={{
                  title: "",
                  height: 45,
                  width: "95%",
                  borderColor: "gray",
                  borderWidth: 2,
                }}
                secureTextEntry={true}
                style={styles.TextInput}
                placeholder=" كلمة المرور"
              />
              <Ionicons
                name="md-key-outline"
                size={24}
                color="rgba(76,74,94,0.7)"
              />
            </View>

            <View style={styles.ButtonStyle}>
              <Button title="تسـجــيل " />
            </View>

            <StatusBar style="auto" />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
  },

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
    height: 80,
    width: "93%",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
  },
  ButtonStyle: {
    marginVertical: 10,
    justifyContent: "space-between",
    borderWidth: 3,
    borderRadius: 8,
    width: "25%",
  },
});

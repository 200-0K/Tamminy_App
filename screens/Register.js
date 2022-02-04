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

import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import RegisterSvg from "../components/svg/Register";
import TextIn from "../components/TextInput";
import Buttons from "../components/Button";
import BirthdayPicker from '../utils/BirthdayPicker';
import RadiuBo from '../utils/BirthdayPicker';



export default class Register extends React.Component {
  static propTypes = {
    prop1: PropTypes.string,
    prop2: PropTypes.number.isRequired,
    prop3: PropTypes.func,
  };

  render() {
    // const { ... } = this.props;

    return (
      //TODO: fix KeyboardAvoidingView
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <ScrollView>
          <Text
            style={{
              marginTop: 50,
              fontSize: 65,
              fontWeight: "bold",
              color: "rgba(76,74,94,0.7)",
              textAlign: "center",
            }}
          >
            تسـجـيل
          </Text>

          <RegisterSvg style={{ marginTop: 40 }} />

          <TextIn isRtl={true} icon="person" placeholder="  الاسم " />

          <View>
            
            <BirthdayPicker
              selectedYear={2000}
              selectedMonth={0}
              selectedDay={1}

              yearsBack={40}

              onYearValueChange={(year, i) => console.log("Year was changed to: ", year)}
              onMonthValueChange={(month, i) => console.log("Month was changed to: ", month)}
              onDayValueChange={(day, i) => console.log("Day was changed to: ", day)}
            />
            {/* <TextInput
              style={styles.TextInput}
              placeholder="  تاريخ الميلاد "
            />
            <EvilIcons name="calendar" size={24} color="rgba(76,74,94,0.7)" /> */}
          </View>

          <View style={styles.Inputs}>
            <TextInput style={styles.TextInput} placeholder="  الايميل " />
            <Entypo name="email" size={24} color="rgba(76,74,94,0.7)" />
          </View>

          <TextIn isRtl={true} icon="md-key-outline" secureTextEntry={true} placeholder="  الاسم " />

          <View style={[styles.buttonContainer]}>
            <Buttons title="تسجيل" fontSize={25} />
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
    marginTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
   // marginTop: StatusBar.currentHeight,
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
  buttonContainer: {
    marginTop: 30,
    alignSelf: "center"
  },
});

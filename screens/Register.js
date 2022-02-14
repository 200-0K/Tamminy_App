import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import Button from "../components/Button";
import TextInput from "../components/TextInput";
import RegisterSvg from "../components/svg/Register";
import { STYLES } from "../utils/styles";
import { COLORS } from "../utils/colors";
import { formatDate } from "../utils/date";
import chroma from "chroma-js";
import ScreenWrapper from "../components/ScreenWrapper";

const activeColor = chroma(COLORS.primaryText).brighten(3.5).toString();
const maximumDate = new Date(new Date().getFullYear() - 5, 11, 31);
export default class ComponentName extends React.Component {
  // static propTypes = {
  //   prop1: PropTypes.string,
  //   prop2: PropTypes.number.isRequired,
  //   prop3: PropTypes.func,
  // };
  constructor(props) {
    super(props);

    this.isRtl = true;
    this.rtlView = this.isRtl && STYLES.rtlView;
    this.rtlText = this.isRtl && STYLES.rtlText;
  }

  state = {
    name: null,
    gender: null,
    email: null,
    password: null,
    open: false,
    date: null,
  };

  handleCalendarPress = () => {
    this.setState({ open: true });
  };

  handleSubmit = () => {
    const { date, gender, email, password, name } = this.state;
    // TODO
  };

  render() {
    const { open, date, gender, email, password, name } = this.state;

    return (
      <ScreenWrapper style={STYLES.safeAreaView}>
        <DateTimePickerModal
          isVisible={open}
          mode="date"
          date={date ?? maximumDate}
          maximumDate={maximumDate}
          onConfirm={date => this.setState({ open: false, date })}
          onCancel={() => this.setState({ open: false })}
        />

        <ScrollView showsVerticalScrollIndicator={false} style={STYLES.mainContainer}>
          <View style={STYLES.titleContainer}>
            <Text style={STYLES.title}>تسـجـيل</Text>
            <RegisterSvg />
          </View>

          <View style={styles.Inputs}>
            <TextInput
              onChangeText={text => this.setState({ name: text })}
              value={name}
              icon="person"
              isRtl
              placeholder="الاسم"
            />
          </View>

          <View style={[styles.GenderFieldContainer, this.rtlView]}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "rgba(76,74,94,0.7)",
              }}
            >
              الجنس :
            </Text>
            <View style={[styles.Inputs, styles.GenderButtonsContainer]}>
              <Button
                width={100}
                borderRadius={5}
                title="انثى"
                backgroundColor={
                  gender === "f" ? activeColor : COLORS.buttonBackground
                }
                onPress={() => this.setState({ gender: "f" })}
              />
              <Button
                width={100}
                borderRadius={5}
                title="ذكر"
                backgroundColor={
                  gender === "m" ? activeColor : COLORS.buttonBackground
                }
                onPress={() => this.setState({ gender: "m" })}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={this.handleCalendarPress}
            style={[styles.Inputs, styles.dateContainer, this.rtlView]}
          >
            <Ionicons name="calendar" size={20} />
            <View style={styles.dateTextContainer}>
              <Text style={[styles.dateText, this.rtlText]}>
                {date ? formatDate(date) : "تاريخ الميلاد"}
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.Inputs}>
            <TextInput
              onChangeText={text => this.setState({ email: text })}
              value={email}
              icon="at"
              isRtl
              placeholder="الايميل"
            />
          </View>

          <View style={styles.Inputs}>
            <TextInput
              icon="md-key-outline"
              isRtl
              secureTextEntry={true}
              placeholder="كلمة المرور"
              onChangeText={text => this.setState({ password: text })}
              value={password}
            />
          </View>

          <View style={styles.ButtonStyle}>
            <Button onPress={this.handleSubmit} title="تسجيل" />
          </View>
        </ScrollView>
      </ScreenWrapper>
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
    marginVertical: 18,
  },
  ButtonStyle: {
    marginVertical: 10,
    alignItems: "center",
  },
  GenderFieldContainer: {
    alignItems: "baseline",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  GenderButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1,
  },

  dateContainer: {
    flexDirection: "row",
    borderWidth: 1.5,
    borderRadius: 5,
    padding: 5,
  },
  dateTextContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  dateText: {
    fontSize: 18,
  },
});

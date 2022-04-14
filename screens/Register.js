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
const errorColor = "red";
const maximumDate = new Date(new Date().getFullYear() - 10, 11, 31);

export default class Register extends React.Component {
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
    name: {
      value: null,
      error: false,
    },
    gender: {
      value: null,
      error: false,
    },
    email: {
      value: null,
      error: false,
    },
    password: {
      value: null,
      error: false,
    },
    date: {
      value: null,
      error: false
    },
    open: false,
  };

  handleCalendarPress = () => {
    this.setState({ open: true });
  };

  handleSubmit = () => {
    const { date, gender, email, password, name } = this.state;
    const {navigation} = this.props;
    
    let isError = false;
    
    const validate = {};
    if (!gender.value) {
      isError = true;
      validate.gender = {value: gender.value, error: true};
    }
    if (!email.value || !email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      isError = true;
      validate.email = {value: email.value, error: true};
    }
    if (!password.value || password.value.length < 8) {
      isError = true;
      validate.password = {value: password.value, error: true};
    }
    if (!name.value) {
      isError = true;
      validate.name = {value: name.value, error: true};
    }
    if (!date.value) {
      isError = true;
      validate.date = {value: date.value, error: true};
    }

    if (isError) {
      this.setState({...validate})
      return;
    }

    navigation.navigate("OTP");
  };

  render() {
    const { open, date, gender, email, password, name } = this.state;

    return (
      <ScreenWrapper>
        <DateTimePickerModal
          isVisible={open}
          mode="date"
          date={date.value ?? maximumDate}
          maximumDate={maximumDate}
          onConfirm={date => this.setState({ open: false, date: {value: date, error: false} })}
          onCancel={() => this.setState({ open: false })}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={STYLES.mainContainer}
        >
          <View style={[STYLES.titleContainer]}>
            <Text style={STYLES.title}>تسـجـيل</Text>
            <RegisterSvg />
          </View>

          <View style={styles.Inputs}>
            <TextInput
              color={name.error ? errorColor : COLORS.primaryText}
              onChangeText={text => this.setState({ name: {value: text, error: false} })}
              value={name.value}
              icon="person"
              isRtl={this.isRtl}
              placeholder="الاسم"
              textContentType="name"
            />
          </View>
          <View style={styles.Inputs}>
            <TextInput
              color={email.error ? errorColor : COLORS.primaryText}
              onChangeText={text => this.setState({ email: {value: text, error: false} })}
              value={email.value}
              icon="at"
              isRtl={this.isRtl}
              placeholder="الايميل"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoComplete="email"
            />
          </View>

          <View style={styles.Inputs}>
            <TextInput
              color={password.error ? errorColor : COLORS.primaryText}
              icon="md-key-outline"
              isRtl
              secureTextEntry={true}
              placeholder="كلمة المرور"
              textContentType="password"
              onChangeText={text => this.setState({ password: {value: text, error: false} })}
              value={password.value}
            />
          </View>
          <TouchableOpacity
            onPress={this.handleCalendarPress}
            style={[styles.Inputs, styles.dateContainer, this.rtlView]}
          >
            <View style={[styles.dateTextContainer]} pointerEvents="none">
              <TextInput
                color={date.error ? errorColor : COLORS.primaryText}
                icon="calendar"
                editable={false}
                isRtl={this.isRtl}
                value={date.value ? formatDate(date.value) : "تاريخ الميلاد"}
              />
            </View>
          </TouchableOpacity>
          <View style={[styles.GenderFieldContainer, this.rtlView]}>
            <View style={[styles.Inputs, styles.GenderButtonsContainer]}>
              <Button
                borderRadius={15}
                width={50}
                icon="woman"
                iconColor={
                  gender.error ? errorColor
                  :
                  gender.value === "f" ? COLORS.iconFemale : COLORS.primaryText
                }
                hideBorder
                iconSize="large"
                onPress={() => this.setState({ gender: {value: "f", error: false} })}
              />
              <Button
                borderRadius={15}
                width={50}
                icon="man"
                iconColor={
                  gender.error ? errorColor
                  :
                  gender.value === "m" ? COLORS.iconMale : COLORS.primaryText
                }
                hideBorder
                iconSize="large"
                onPress={() => this.setState({ gender: {value: "m", error: false} })}
              />
            </View>
          </View>

          <View style={styles.ButtonStyle}>
            <Button
              onPress={this.handleSubmit}
              width={200}
              borderRadius={10}
              title="تسجيل"
            />
          </View>
        </ScrollView>
      </ScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({
  TextInputt: {
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
    marginVertical: 20,
  },
  ButtonStyle: {
    marginBottom: 20,
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
  },
  dateTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
});

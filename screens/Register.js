import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  // Platform,
  Appearance
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Toast from "react-native-toast-message";

import { STYLES } from "../utils/styles";
import { COLORS } from "../utils/colors";
import { formatDate } from "../utils/date";

import { AccountApi } from "../api/AccountApi";

import RegisterSvg from "../components/svg/Register";

import Button from "../components/Button";
import TextInput from "../components/TextInput";
import ScreenWrapper from "../components/ScreenWrapper";
import LoadingIndicator from "../components/LoadingIndicator";

const errorColor = "red";
const maximumDate = new Date(new Date().getFullYear() - 10, 11, 31);

export default class Register extends React.Component {
  constructor(props) {
    super(props);

    this.accountApi = AccountApi();

    this.isRtl = true;
    this.rtlView = this.isRtl && STYLES.rtlView;
    this.rtlText = this.isRtl && STYLES.rtlText;
  }

  state = {
    loading: false,
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
      error: false,
    },
    open: false,
  };

  handleCalendarPress = () => {
    this.setState({ open: true });
  };

  handleSubmit = async () => {
    const { date, gender, email, password, name } = this.state;
    const { navigation } = this.props;

    let isError = false;

    const validate = {};
    if (!gender.value) {
      isError = true;
      validate.gender = { value: gender.value, error: "حدد جنسك" };
    } else {
      validate.gender = { value: gender.value, error: false };
    }

    if (
      !email.value ||
      !email.value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      isError = true;
      validate.email = {
        value: email.value,
        error: "• يجب كتابة الإيميل بشكل صحيح",
      };
    } else {
      validate.email = { value: email.value, error: false };
    }

    if (!password.value || password.value.length < 8) {
      isError = true;
      validate.password = {
        value: password.value,
        error: "• كلمة السر اقل من 8 حروف/ارقام",
      };
    } else {
      validate.password = { value: password.value, error: false };
    }

    if (!name.value) {
      isError = true;
      validate.name = { value: name.value, error: "• يجب كتابة أسمك" };
    } else {
      validate.name = { value: name.value, error: false };
    }

    if (!date.value) {
      isError = true;
      validate.date = { value: date.value, error: "• بجب تحديد تاريخ ميلادك" };
    } else {
      validate.date = { value: date.value, error: false };
    }

    if (isError) {
      Toast.show({
        type: "error",
        text1: "المعلومات المدخلة خاطئة",
        props: { isRtl: true },
      });
      this.setState({ ...validate, loading: false });
      return;
    }

    const codes = this.accountApi.RESPONSE_CODES.register;
    const status = await this.accountApi.register({
      email: email.value,
      password: password.value,
      dob: date.value,
      name: name.value,
      gender: gender.value,
    });

    if (status === codes.success) {
      Toast.show({
        type: "success",
        text1: "تحقق من الإيميل",
        text2: "تم إرسال رمز تحقق على الايميل المعطى، يرجى التحقق وكتابة الرمز",
        props: { isRtl: true },
      });
      this.setState({ loading: false }, () => navigation.replace("OTP"));
      return null;
    } else if (status === codes.alreadyExists)
      Toast.show({
        type: "error",
        text1: "الإيميل مسجل من قبل",
        props: { isRtl: true },
      });
    else if (status === codes.invalid)
      Toast.show({ type: "error", text1: "حدث خطأ", props: { isRtl: true } });
    else
      Toast.show({
        type: "error",
        text1: "تعذر الاتصال بالخادم",
        text2: "تأكد من اتصالك، او حاول مجددَا لاحقًا",
        props: { isRtl: true },
      });

    this.setState({ ...validate, loading: false });
  };

  render() {
    const { open, loading, date, gender, email, password, name } = this.state;

    return (
      <>
        {loading && (
          <LoadingIndicator color={COLORS.primaryText} showInnerBox />
        )}
        <ScreenWrapper>
          <DateTimePickerModal
            isVisible={open}
            mode="date"
            // display={Platform.ios ? "compact" : "default"}
            date={date.value ?? maximumDate}
            maximumDate={maximumDate}
            onConfirm={dateValue =>
              this.setState({
                open: false,
                date: { value: dateValue, error: date.error },
              })
            }
            onCancel={() => this.setState({ open: false })}
            isDarkModeEnabled={true}
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
                onChangeText={text =>
                  this.setState({ name: { value: text, error: name.error } })
                }
                value={name.value}
                icon="person"
                isRtl={this.isRtl}
                placeholder="الاسم"
                textContentType="name"
              />
              {name.error && (
                <Text style={[styles.errorHint, { textAlign: "right" }]}>
                  {name.error}
                </Text>
              )}
            </View>
            <View style={styles.Inputs}>
              <TextInput
                color={email.error ? errorColor : COLORS.primaryText}
                onChangeText={text =>
                  this.setState({ email: { value: text, error: email.error } })
                }
                value={email.value}
                icon="at"
                isRtl={this.isRtl}
                placeholder="الايميل"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoComplete="email"
              />
              {email.error && (
                <Text style={[styles.errorHint, { textAlign: "right" }]}>
                  {email.error}
                </Text>
              )}
            </View>

            <View style={styles.Inputs}>
              <TextInput
                color={password.error ? errorColor : COLORS.primaryText}
                icon="md-key-outline"
                isRtl={this.isRtl}
                secureTextEntry={true}
                placeholder="كلمة المرور"
                textContentType="password"
                onChangeText={text =>
                  this.setState({
                    password: { value: text, error: password.error },
                  })
                }
                value={password.value}
              />
              {password.error && (
                <Text style={[styles.errorHint, { textAlign: "right" }]}>
                  {password.error}
                </Text>
              )}
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
                  placeholder={"تاريخ الميلاد"}
                  value={date.value && formatDate(date.value)}
                />
                {date.error && (
                  <Text style={[styles.errorHint, { textAlign: "right" }]}>
                    {date.error}
                  </Text>
                )}
              </View>
            </TouchableOpacity>
            <View style={styles.GenderFieldContainer}>
              <View style={[styles.Inputs, styles.GenderButtonsContainer]}>
                <Button
                  title=""
                  borderRadius={15}
                  width={50}
                  icon="woman"
                  iconColor={
                    gender.error
                      ? errorColor
                      : gender.value === "female"
                      ? COLORS.iconFemale
                      : COLORS.primaryText
                  }
                  hideBorder
                  iconSize="large"
                  onPress={() =>
                    this.setState({ gender: { value: "female", error: false } })
                  }
                />
                <Button
                  title=""
                  borderRadius={15}
                  width={50}
                  icon="man"
                  iconColor={
                    gender.error
                      ? errorColor
                      : gender.value === "male"
                      ? COLORS.iconMale
                      : COLORS.primaryText
                  }
                  hideBorder
                  iconSize="large"
                  onPress={() =>
                    this.setState({ gender: { value: "male", error: false } })
                  }
                />
              </View>
              {gender.error && (
                <Text
                  style={[
                    styles.errorHint,
                    { textAlign: "center" },
                    this.rtlView,
                  ]}
                >
                  {gender.error}
                </Text>
              )}
            </View>

            <View style={styles.ButtonStyle}>
              <Button
                onPress={() =>
                  this.setState({ loading: true }, this.handleSubmit)
                }
                width={200}
                borderRadius={10}
                title="تسجيل"
              />
            </View>
          </ScrollView>
        </ScreenWrapper>
      </>
    );
  }
}

const styles = StyleSheet.create({
  Inputs: {
    marginVertical: 10,
  },
  ButtonStyle: {
    margin: 20,
    alignItems: "center",
  },
  GenderButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1,
  },

  errorHint: {
    fontSize: 9,
    color: errorColor,
    marginHorizontal: 10,
    marginTop: 5,
    fontWeight: "bold",
    opacity: 0.8,
  },

  dateContainer: {
    flexDirection: "row",
  },
  dateTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
});

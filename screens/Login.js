import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Toast from "react-native-toast-message";

import { COLORS } from "../utils/colors";
import { STYLES } from "../utils/styles";

import { AccountApi } from "../api/AccountApi";

import ScreenWrapper from "../components/ScreenWrapper";
import LoginSvg from "../components/svg/Login";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import LoadingIndicator from "../components/LoadingIndicator";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.accountApi = AccountApi();

    this.isRtl = true; // TODO: lang
    this.rtlView = this.isRtl && STYLES.rtlView;
    this.rtlText = this.isRtl && STYLES.rtlText;
  }

  state = {
    email: "",
    password: "",
    loading: false, // true -> while trying to login the user
  };

  handleLogin = async () => {
    const { email, password } = this.state;
    const { navigation } = this.props;

    if (!email || !password) {
      Toast.show({
        type: "error",
        text1: "معلومات فارغة",
        text2: "كلمة السر او البريد الإلكتروني فارغ",
        props: { isRtl: true },
      });
      return this.setState({ loading: false });
    }

    const codes = this.accountApi.RESPONSE_CODES.login;
    const status = await this.accountApi.login(email.trim(), password);
    if (status === codes.success) {
      Toast.show({
        type: "success",
        text1: "حياك الله!",
        text2: "تم تسجيل الدخول",
        props: { isRtl: true },
      });
      return navigation.navigate("Home");
    } else if (status === codes.incorrect) {
      Toast.show({
        type: "error",
        text1: "معلومات المدخلة خاطئة",
        text2: "كلمة السر او البريد الإلكتروني غير صحيح",
        props: { isRtl: true },
      });
    } else {
      Toast.show({
        type: "error",
        text1: "تعذر الاتصال بالخادم",
        text2: "تأكد من اتصالك، او حاول مجددَا لاحقًا",
        props: { isRtl: true },
      });
    }

    this.setState({ loading: false });
  };

  handleRegister = () => {
    const { navigation } = this.props;
    navigation.navigate("Register");
  };

  render() {
    const { loading, email, password } = this.state;

    return (
      <>
        {loading && (
          <LoadingIndicator color={COLORS.primaryText} showInnerBox />
        )}
        <ScreenWrapper>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={STYLES.mainContainer}
          >
            <View style={STYLES.titleContainer}>
              <Text style={STYLES.title}>تسجيل الدخول</Text>
            </View>
            <LoginSvg />
            <View style={[styles.viewTextIcon, { paddingBottom: 15 }]}>
              <TextInput
                value={email}
                icon="at"
                isRtl={this.isRtl}
                placeholder="الايميل"
                returnKeyType="next"
                clearButtonMode={"while-editing"}
                onChangeText={text => this.setState({ email: text })}
                keyboardType="email-address"
                textContentType="emailAddress"
                autoComplete="email"
              />
            </View>
            <View style={styles.viewTextIcon}>
              <TextInput
                icon="key"
                isRtl={this.isRtl}
                placeholder="كلمة السر"
                returnKeyType="done"
                clearButtonMode={"while-editing"}
                secureTextEntry
                value={password}
                onChangeText={text => this.setState({ password: text })}
                textContentType="password"
              />
            </View>
            <View style={{ alignItems: "center", paddingTop: 20 }}>
              <Button
                title="تسجيل الدخول"
                width={150}
                borderRadius={5}
                onPress={() =>
                  this.setState({ loading: true }, this.handleLogin)
                }
              />
              <View>
                <TouchableOpacity
                  style={{ paddingVertical: 5 }}
                  onPress={this.handleRegister}
                >
                  <Text
                    style={{
                      color: COLORS.buttonText,
                      fontSize: 15,
                    }}
                  >
                    تسجيل
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </ScreenWrapper>
      </>
    );
  }
}

const styles = StyleSheet.create({
  viewTextIcon: {
    paddingHorizontal: 10,
    paddingVertical: 18,
  },
});

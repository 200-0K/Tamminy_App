import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import Toast from "react-native-toast-message";

import { COLORS } from "../utils/colors";
import { STYLES } from "../utils/styles";

import { AccountApi } from "../api/AccountApi";

import OTPSvg from "../components/svg/OTP";

import Button from "../components/Button";
import ScreenWrapper from "../components/ScreenWrapper";
import LoadingIndicator from "../components/LoadingIndicator";

export default class OTP extends React.Component {
  constructor(props) {
    super(props);

    this.accountApi = AccountApi();
  }

  state = {
    otp: null,
    loading: false,
  };

  verifyOtp = async () => {
    const { otp } = this.state;
    const { navigation } = this.props;

    if (!otp) {
      Toast.show({
        type: "error",
        text1: "لم يتم كتابة اي رمز",
        text2: "يرجى كتابة الرمز المرسل على إيميلك",
        props: { isRtl: true },
      });
      return this.setState({ loading: false });
    }

    const codes = this.accountApi.RESPONSE_CODES.verify;
    const status = await this.accountApi.verify(otp);
    if (status === codes.success) {
      Toast.show({
        type: "success",
        text1: "تم تفعيل حسابك بنجاح!",
        text2: "يمكنك تسجيل دخولك الأن",
        props: { isRtl: true },
      });
      return navigation.navigate("Login");
    } else if (status === codes.alreadyExists) {
      Toast.show({
        type: "error",
        text1: "الإيميل مسجل من قبل",
        props: { isRtl: true },
      });
      return navigation.navigate("Login");
    } else if (status === codes.unauth) {
      Toast.show({
        type: "error",
        text1: "غير مخول لك الوصول لهذه الصفحة",
        text2: "انتهت مهلة التحقق، حاول التسجيل مرة اخرى",
        props: { isRtl: true },
      });
      return navigation.navigate("Login");
    } else if (status === codes.incorrect) {
      Toast.show({
        type: "error",
        text1: "الرمز المدخل غير صحيح",
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

  render() {
    const { loading } = this.state;

    return (
      <>
        {loading && (
          <LoadingIndicator color={COLORS.primaryText} showInnerBox />
        )}
        <ScreenWrapper>
          <ScrollView style={STYLES.mainContainer}>
            <View style={STYLES.titleContainer}>
              <Text style={STYLES.title}>رمز التحقق</Text>
            </View>

            <OTPSvg />
            <OTPInputView
              style={[styles.field, styles.otpInputView]}
              pinCount={4}
              keyboardType="phone-pad"
              placeholderCharacter="*"
              placeholderTextColor="rgba(0,0,0,0.2)"
              autoFocusOnLoad
              codeInputFieldStyle={styles.codeInputFieldStyle}
              codeInputHighlightStyle={styles.codeInputHighlightStyle}
              onCodeFilled={code => this.setState({ otp: code })}
            />

            <View style={[styles.field, styles.buttonContainer]}>
              <Button
                title="تحقق"
                fontSize={25}
                width={100}
                onPress={() => this.setState({ loading: true }, this.verifyOtp)}
              />
            </View>
          </ScrollView>
        </ScreenWrapper>
      </>
    );
  }
}

const styles = StyleSheet.create({
  field: {
    marginVertical: 20,
  },
  buttonContainer: {
    alignSelf: "center",
  },

  otpInputView: {
    flex: 1,
  },
  codeInputFieldStyle: {
    borderWidth: 0,
    borderBottomWidth: 3,
    fontSize: 24,
    color: COLORS.secondaryText,
  },
  codeInputHighlightStyle: {
    borderColor: COLORS.otpUnderline,
    color: COLORS.primaryText,
  },
});

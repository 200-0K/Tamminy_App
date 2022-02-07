import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import PropTypes from "prop-types";

import LoginSvg from "../components/svg/Login";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

import { COLORS } from "../utils/colors";
import { STYLES } from "../utils/styles";

export default class Login extends React.Component {
  // static propTypes = {
  //   prop1: PropTypes.string,
  //   prop2: PropTypes.number.isRequired,
  //   prop3: PropTypes.func,
  // const { ... } = this.props;
  state = {
    email: "",
    password: "",
    loading: false, // true -> while trying to login the user
    error: false, // true -> if email/password is wrong
  };

  handleLogin = () => {
    const { email, password } = this.state;
    console.log(email, password); // check terminal!
    // TODO
    // Login via AccountApi
    // Then setState({loading: true})
    // if login is successful then navigate to home screen
    // otherwise setState({loading: false, error: true})
  };

  handleRegister = () => {
    // TODO: navigate to register screen
  };

  render() {
    const { loading, error, email, password } = this.state;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={STYLES.mainContainer}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={STYLES.titleContainer}>
              <Text style={STYLES.title}>تسجيل الدخول</Text>
            </View>
            <LoginSvg />
            <View style={[styles.viewTextIcon, { paddingBottom: 15 }]}>
              <TextInput
                icon="at"
                isRtl={true}
                placeholder="الايميل"
                returnKeyType="next"
                clearButtonMode={"while-editing"}
                value={email}
                onChangeText={text => this.setState({ email: text })}
              />
            </View>
            <View style={styles.viewTextIcon}>
              <TextInput
                icon="key"
                isRtl={true}
                placeholder="كلمة السر"
                returnKeyType="done"
                clearButtonMode={"while-editing"}
                secureTextEntry
                value={password}
                onChangeText={text => this.setState({ password: text })}
              />
            </View>
            <View style={{ alignItems: "center", paddingTop: 20 }}>
              <Button
                title="تسجيل الدخول"
                width={150}
                borderRadius={5}
                onPress={this.handleLogin}
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
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  viewTextIcon: {
    paddingHorizontal: 10,
    paddingVertical: 18,
  },
});

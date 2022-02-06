import React from "react"
import PropTypes from "prop-types";
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, Image,
  TouchableOpacity, ScrollView,
  SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback
} from 'react-native';
import LoginSvg from '../components/svg/Login';
import TextInput from '../components/TextInput';
import { COLORS } from "../utils/colors";
import { STYLES } from "../utils/styles";
import Button from '../components/Button';

export default class Login extends React.Component {
  // static propTypes = {
  //   prop1: PropTypes.string,
  //   prop2: PropTypes.number.isRequired,
  //   prop3: PropTypes.func,



  // const { ... } = this.props;

  render() {
    // const { loading, error, possibleDiseases, selectedSymptoms, date } = this.state;

    return (

      <SafeAreaView style={STYLES.mainContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}>
          <View style={STYLES.titleContainer}>
            <Text style={{
              color: COLORS.primaryText,
              fontSize: 35,
              //marginVertical: 30,
              fontWeight: "700",
              paddingVertical: 10
              // height: 300,
            }}>تسجيل الدخول</Text>
          </View>

          <LoginSvg />


          <View style={[styles.viewTextIcon, { paddingBottom: 15 }]} >
            <TextInput
              icon="at"
              isRtl={true}
              placeholder="الايميل"
              returnKeyType="next"
              clearButtonMode={"while-editing"}
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
              
            />
          </View>


          <View style={{ alignItems: 'center', paddingTop: 20 }} >
            <Button
              title="تسجيل الدخول"
              width={150}
              borderRadius={5}
            />


            <View>
              <TouchableOpacity style={{ paddingVertical: 5 }}>
                <Text style={{
                  color: COLORS.buttonText,
                  fontSize: 15
                }}>تسجيل</Text>
              </TouchableOpacity>
            </View>
          </View>




        </ScrollView>
      </SafeAreaView>




    );
  }
}



const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      //justifyContent: 'center',
      marginTop: StatusBar.currentHeight,
    },

    text: {
      color: "rgba(0,0,0,0.5)",
      fontSize: 35,
      marginVertical: 10,
      fontWeight: "700",
      height: 70,
    },
    botton: {
      flex: 0,
      backgroundColor: "#fff",
      paddingHorizontal: 8,
      paddingVertical: 10,
      marginTop: 20,
      borderRadius: 5,
      borderWidth: 1.5,
      alignItems: 'center',
    },

    viewTextIcon: {
      paddingHorizontal: 10,

    },
    scrollView: {
      paddingHorizontal: 20,
    },

  });
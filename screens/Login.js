import React from "react"
import PropTypes from "prop-types";
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, Image,
  TouchableOpacity, ScrollView, TextInput,
  SafeAreaView, KeyboardAvoidingView
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import LoginSvg from "../components/svg/Login";

export default class ComponentName extends React.Component {
  static propTypes = {
    prop1: PropTypes.string,
    prop2: PropTypes.number.isRequired,
    prop3: PropTypes.func,
  };

  render() {
    // const { ... } = this.props;

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
        {/* <SafeAreaView style={}> */}
            <Ionicons  style={{
    
              alignSelf: 'flex-start',
              paddingHorizontal: 30
            }} name="arrow-back-sharp" size={33} color="black" />
            {/* <Home />   */}
            <Text style={styles.text}>تسجيل الدخول</Text>
            <LoginSvg />
    
            <View style={styles.viewTextIcon} >
              <TextInput
                style={styles.input}
                //multiline={true}
                returnKeyType='next'
                placeholder="الايميل"
                keyboardType="default"
                underlineColorAndroid="black"
                inlineImageLeft='username'
                inlineImagePadding={2}
                underlineColorAndroid='transparent'
    
              />
              <Entypo style={{ color: 'rgba(0,0,0,0.5)', }} name="email" size={24} color="black" />
            </View>
    
            <View style={styles.viewTextIcon}>
              <TextInput
                style={styles.input}
                returnKeyType='done'
                placeholder="كلمة السر"
                keyboardType="default"
                underlineColorAndroid="black"
                secureTextEntry
              />
              <Entypo style={{ color: 'rgba(0,0,0,0.5)', }} name="key" size={24} color="black" />
            </View>
            
            <TextInput
                style={styles.input}
                returnKeyType='done'
                placeholder="كلمة السر"
                keyboardType="default"
                underlineColorAndroid="black"
                secureTextEntry
              />
    
            <TouchableOpacity style={styles.botton}>
              <Text style={{
                fontWeight: "bold",
                color: "rgba(0,0,0,0.65)",
              }}>تسجيل الدخول</Text>
            </TouchableOpacity>
    
            <TouchableOpacity style={{ paddingVertical: 5 }}>
              <Text style={{
                color: "rgba(0,0,0,0.5)",
              }}>تسجيل</Text>
            </TouchableOpacity>
    
            <StatusBar style="auto" />
        {/* </SafeAreaView> */}
          </KeyboardAvoidingView>
    
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop: StatusBar.currentHeight,
    },
    text: {
      color: "rgba(0,0,0,0.5)",
      fontSize: 35,
      marginVertical: 10,
      fontWeight: "700",
      height: 50,
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
    input: {
      width: '75%',
      margin: 5,
      padding: 10,
      alignSelf: 'center',
      borderBottomColor: 'rgba(0,0,0,0.5)',
      borderBottomWidth: 2,
      textAlign: 'right',
  
    },
    viewTextIcon: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  
  });
  
  
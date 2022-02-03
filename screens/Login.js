import React from "react"
import PropTypes from "prop-types";
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, Image,
  TouchableOpacity, ScrollView,
  SafeAreaView, KeyboardAvoidingView
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import LoginSvg from '../components/svg/Login';
import TextInput  from '../components/TextInput';

export default class Login extends React.Component {
  // static propTypes = {
  //   prop1: PropTypes.string,
  //   prop2: PropTypes.number.isRequired,
  //   prop3: PropTypes.func,
  

  
    // const { ... } = this.props;
   
  render() {
   // const { loading, error, possibleDiseases, selectedSymptoms, date } = this.state;

    return (
      <ScrollView 
      showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        
        
        <Text style={{
          color: "rgba(0,0,0,0.55)",
          fontSize: 35,
          //marginVertical: 30,
          fontWeight: "700",
          paddingVertical:10
         // height: 300,
      }}>تسجيل الدخول</Text>
       
        <LoginSvg />

       
        <View style={styles.viewTextIcon} >
       <TextInput 
        icon="at"
        isRtl={true}
        placeholder="الايميل"
        returnKeyType="next"
      /> 
    </View>

    <View style={styles.viewTextIcon}>
       <TextInput
        icon="key"
        isRtl={true}
        placeholder="كلمة السر"
        returnKeyType="done"
      />
    </View>
  
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
     
      </SafeAreaView>
      </ScrollView>
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
      alignItems: 'center',
    },
    scrollView: {
      paddingHorizontal: 20,
    },
  
  });
  
//   // <KeyboardAvoidingView> //behavior="padding" style={styles.container}>
//   <SafeAreaView style={styles.container> 
         
            
            
//     <Text style={styles.text}>تسجيل الدخول</Text>

//  //   <LoginSvg />
// <>
//     <View style={styles.viewTextIcon} >

//       <TextInput
//         style={styles.input}
//         //multiline={true}
//         returnKeyType='next'
//         placeholder="الايميل"
//         keyboardType="default"
//         underlineColorAndroid="black"
//         inlineImageLeft='username'
//         inlineImagePadding={2}
//         underlineColorAndroid='transparent'

//       />
//       <Entypo style={{ color: 'rgba(0,0,0,0.5)', }} name="email" size={24} color="black" />
//     </View>

    // <View style={styles.viewTextIcon}>
    //   <TextInput
    //     style={styles.input}
    //     returnKeyType='done'
    //     placeholder="كلمة السر"
    //     keyboardType="default"
    //     underlineColorAndroid="black"
    //     secureTextEntry
    //   />
    //   <Entypo style={{ color: 'rgba(0,0,0,0.5)', }} name="key" size={24} color="black" />
    // </View>
//     </>
    // <TouchableOpacity style={styles.botton}>
    //   <Text style={{
    //     fontWeight: "bold",
    //     color: "rgba(0,0,0,0.65)",
    //   }}>تسجيل الدخول</Text>
    // </TouchableOpacity>

//     <TouchableOpacity style={{ paddingVertical: 5 }}>
//       <Text style={{
//         color: "rgba(0,0,0,0.5)",
//       }}>تسجيل</Text>
//     </TouchableOpacity>

//     <StatusBar style="auto" />
//  </SafeAreaView> 
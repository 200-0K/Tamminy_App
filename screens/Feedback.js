import React from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button, Image, ScrollView } from 'react-native';
import PropTypes from "prop-types";

export default class Feedback extends React.Component {
  static propTypes = {
    prop1: PropTypes.string,
    prop2: PropTypes.number.isRequired,
    prop3: PropTypes.func,
  };

  render() {
    // const { ... } = this.props;

    return (
      <ScrollView>
        
        <SafeAreaView style={styles.container}>
          <Text style={{
            fontSize: 57, fontFamily: "CourierNewPS-BoldMT", fontWeight: 'bold',
            color: 'rgba(76,74,94,0.7)', marginTop: 90, textAlign: "center"
          }}>ماذا تقترح؟</Text>

          <View>
            <Image style={{ marginTop: 40 }} source={require('../assets/Feedback.png')} />
          </View>
          
          <TextInput
            style={styles.TextInput}
            placeholder='0/500' />

          <StatusBar style="auto" />

          <View style={styles.ButtonStyle}>
            <Button
              title="ارسال" />
          </View>


        </SafeAreaView>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  TextInput: {
    textAlign: 'center',
    height: 300,
    width: '90%',
    fontWeight: '500',
    fontSize: 20,
    color: 'rgba(76,74,94,0.7)',
    marginTop: 20,
    borderWidth: 1.8,
    padding: 0,
    borderRadius: 10,
  },
  ButtonStyle: {
    marginVertical: 10,
    flexBasis: 45,
    borderWidth: 2,
    borderRadius: 10,
    height: 40,
    width: '25%',
  },
});


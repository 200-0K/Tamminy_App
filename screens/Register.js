import React from "react"
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default class ComponentName extends React.Component {
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
  
          <KeyboardAvoidingView behavior='height' style={{ alignItems: 'center' }}>
  
  
            <KeyboardAvoidingView>
              <Text style={{
                fontSize: 65, fontFamily: "AvenirNextCondensed-Bold", fontWeight: 'bold',
                color: 'rgba(76,74,94,0.7)', textAlign: "center"
              }}>تسـجـيل</Text>
            </KeyboardAvoidingView>
  
            <KeyboardAvoidingView>
              <Image style={{ marginTop: 40 }} source={require('./assets/ADS.png')} />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView behavior='height' style={styles.Inputs}>
  
              <TextInput
                style={styles.TextInput}
                placeholder='  الاسم '  />
  
              <Ionicons options={{}} name="person" size={24} color="rgba(76,74,94,0.7)" />
            </KeyboardAvoidingView>
  
  
            <KeyboardAvoidingView behavior='height' style={styles.Inputs}>
              <TextInput
                style={styles.TextInput}
                placeholder='  تاريخ الميلاد ' />
              <EvilIcons name="calendar" size={24} color="rgba(76,74,94,0.7)" />
            </KeyboardAvoidingView>
  
  
            <KeyboardAvoidingView behavior='height' style={styles.Inputs}>
              <TextInput
                style={styles.TextInput}
                placeholder='  الايميل ' />
              <Entypo name="email" size={24} color="rgba(76,74,94,0.7)" />
            </KeyboardAvoidingView>
  
  
            <KeyboardAvoidingView behavior='height' style={styles.Inputs}>
              <TextInput
                style={{ title: ';gm', height: 45, width: "95%", borderColor: "gray", borderWidth: 2 }}
                secureTextEntry={true}
                style={styles.TextInput}
                placeholder=' كلمة المرور' />
              <Ionicons name="md-key-outline" size={24} color="rgba(76,74,94,0.7)" />
            </KeyboardAvoidingView>
  
            <KeyboardAvoidingView behavior='height' style={styles.ButtonStyle}>
              <Button
                title="تسـجــيل " />
            </KeyboardAvoidingView>
  
            <StatusBar style="auto" />
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ScrollView>
    );
  }

}
  
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight
  },

  TextInput: {
    textAlign: 'right',
    height: 60,
    width: '90%',
    fontWeight: '500',
    fontSize: 20,
    color: 'rgba(76,74,94,0.7)',
    margin: 4,
    padding: 3,
    borderRadius: 3,
    borderBottomWidth: 1.2

  },
  Inputs: {
    height: 80,
    width: '93%',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',


  },
  ButtonStyle: {
    marginVertical: 10,
    justifyContent: 'space-between',
    borderWidth: 3,
    borderRadius: 8,
    width: '25%',

  },
});

import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import { COLORS } from "../utils/colors";


export default function ScreenWrapper({children}) {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      { Platform.OS === "ios" ? (
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
          {children}
        </KeyboardAvoidingView>
      ): (
        <>
          {children}
        </>
      )}
    </SafeAreaView>
  )
}


// TODO
// make background color a prop 
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.screenBackground,
  },
})
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet } from "react-native";


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


const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
})
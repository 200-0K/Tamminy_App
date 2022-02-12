import { StyleSheet, StatusBar } from "react-native";

import { COLORS } from "./colors";

export const STYLES = StyleSheet.create({
  rtlText: {
    textAlign: "right",
    writingDirection: "rtl"
  },
  rtlView: {
    flexDirection: "row-reverse"
  },

  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.screenBackground
  },
  mainContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    backgroundColor: COLORS.screenBackground,
  },
  titleContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginTop: 15,
    marginBottom: 5,
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: COLORS.primaryText,
  },

  sectionContainer: {
    marginTop: 30,
    paddingHorizontal: 4,
  },
  sectionTitleContainer: {
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.primaryText,
  },

  feedbackContainer: {
    position: "absolute",
    bottom: 15,
    right: 15,
    opacity: 0.7,
  }
});

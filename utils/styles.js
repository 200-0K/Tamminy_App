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

  mainContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
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
  }
});

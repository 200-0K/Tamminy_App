import { StyleSheet, View, TextInput as TI } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

import { COLORS } from "../utils/colors";
import { STYLES } from "../utils/styles";

export default function TextInput(props) {
  const { icon, style, isRtl } = props;
  const rtlView = isRtl && STYLES.rtlView;
  const rtlText = isRtl && STYLES.rtlText;

  return (
    <View style={[styles.container, rtlView]}>
      {icon && <Ionicons name={icon} size={24} style={{ color: COLORS.primaryText }} />}
      <TI {...props} style={[styles.Textinput, rtlText, style]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15
  },
  Textinput: {
    flex: 1, 
    height: 45, 
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0,0,0,0.25)',
    borderRadius: 3,
    borderColor: COLORS.primaryText, 
    paddingHorizontal: 10,
  }
})

TextInput.propTypes = {
  icon: PropTypes.string,
  isRtl: PropTypes.boolean,
}

TextInput.defaultProps = {
  icon: null,
  isRtl: false ,
}
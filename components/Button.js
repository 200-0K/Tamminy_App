import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

import { COLORS } from "../utils/colors";
import { STYLES } from "../utils/styles";

const iconSizes = {
  small: 18,
  large: 28
}
export default function Button({
  title,
  fontSize,
  backgroundColor,
  color,
  borderRadius,
  onPress,
  width,
  icon,
  iconColor,
  iconSize, 
  isRtl,
}) {
  const containerStyle = {
    borderRadius,
    borderColor: color,
    backgroundColor,
  };
  const containerWidth = width && {width}

  const titleStyle = {
    color,
    fontSize,
  };

  const rtlView = isRtl && STYLES.rtlView;

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle, containerWidth, rtlView]}
      onPress={onPress}
      activeOpacity={0.5}
    >
      {icon && <>
        <Ionicons 
          name={icon} 
          size={iconSizes[iconSize]} 
          style={{color: iconColor}}
        />
      </>}
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1.5,
    paddingVertical: 5,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.buttonBackground,
  },
  title: {
    backgroundColor: "transparent",
    color: COLORS.buttonText,
    fontSize: 24,
  },
});

Button.propTypes = {
  title: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  borderRadius: PropTypes.number,
  onPress: PropTypes.func,
  width: PropTypes.number,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.string,
  isRtl: PropTypes.bool,
}

Button.defaultProps = {
  fontSize: 20,
  backgroundColor: COLORS.buttonBackground, // TODO: Make it dynamic based on preferred theme i.e. (Dark/Light)
  color: COLORS.buttonText, // TODO: ...
  borderRadius: 5,
  onPress: () => {},
  width: null,
  icon: null,
  iconColor: COLORS.primaryText,
  iconSize: "small",
  isRtl: false,
}
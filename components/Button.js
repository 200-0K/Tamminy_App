import { StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import { COLORS } from "../utils/colors";

export default function Button({
  title,
  fontSize,
  onPress,
  backgroundColor,
  color,
  borderRadius,
}) {
  const containerStyle = {
    borderRadius,
    borderColor: color,
    backgroundColor,
  };

  const titleStyle = {
    color,
    fontSize,
  };

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
      activeOpacity={0.5}
    >
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    paddingVertical: 5,
    paddingHorizontal: 18,
    justifyContent: "center",
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
  onPress: PropTypes.func,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  borderRadius: PropTypes.number
}

Button.defaultProps = {
  fontSize: 20,
  onPress: null,
  backgroundColor: COLORS.buttonBackground, // TODO: Make it dynamic based on preferred theme i.e. (Dark/Light)
  color: COLORS.buttonText, // TODO: ...
  borderRadius: 5
}
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

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
    backgroundColor: "#fff",
  },
  title: {
    backgroundColor: "transparent",
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
  backgroundColor: "#fff", // TODO: Make it dynamic based on preferred theme i.e. (Dark/Light)
  color: "#4C4A5E", // TODO: ...
  borderRadius: 5
}
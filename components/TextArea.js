import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import PropTypes from "prop-types";

import { STYLES } from "../utils/styles";
import { COLORS } from "../utils/colors";

export default class TextArea extends React.Component {
  static propTypes = {
    isRtl: PropTypes.bool,
    max: PropTypes.number,
    containerStyle: PropTypes.object,
    hideCounter: PropTypes.bool,
  };

  static defaultValues = {
    isRtl: false,
    max: null,
    containerStyle: null,
    hideCounter: false,
  };

  state = {
    warningColor: null,
    currentLength: 0,
  };

  handleTextChange = text => {
    const { max, onChangeText } = this.props;
    let warningColor = null;
    if (max && text.length > max) warningColor = COLORS.warning;

    this.setState({ warningColor, currentLength: text.length });
    onChangeText?.(text);
  };

  render() {
    const { isRtl, max, style, containerStyle, hideCounter } = this.props;
    const { currentLength, warningColor } = this.state;
    const rtlText = isRtl && STYLES.rtlText;

    return (
      <View
        style={[
          styles.container,
          warningColor && { borderColor: warningColor },
          containerStyle,
        ]}
      >
        <TextInput
          multiline={true}
          numberOfLines={5}
          {...this.props}
          style={[styles.textInput, rtlText, style]}
          onChangeText={this.handleTextChange}
        />

        {!hideCounter && (
          <Text
            style={[
              styles.text,
              warningColor && { color: warningColor }
            ]}
          >
            {currentLength}
            {max && `/${max}`}
          </Text>
        )}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: COLORS.primaryText,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignSelf: "stretch",
  },
  textInput: {
    color: COLORS.primaryText,
    height: 200,
    textAlignVertical: "top",
  },
  text: {
    color: COLORS.primaryText,
    opacity: 0.6,
  },
});
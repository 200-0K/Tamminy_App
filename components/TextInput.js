import { StyleSheet, View, Animated, TextInput as TI } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

import { COLORS } from "../utils/colors";
import { STYLES } from "../utils/styles";
import React from "react";

const initialOpacityValue = .6;
export default class TextInput extends React.Component {
  state = {
    opacityAnim: new Animated.Value(initialOpacityValue)
  }

  handleFocus = () => {
    const { onFocus } = this.props;

    Animated.timing(this.state.opacityAnim, {
      toValue: 1,
      duration: 340,
      useNativeDriver: true,
    }).start();

    onFocus?.();
  }

  handleBlur = () => {
    const { onBlur } = this.props;

    Animated.timing(this.state.opacityAnim, {
      toValue: initialOpacityValue,
      duration: 340,
      useNativeDriver: true,
    }).start();

    onBlur?.();
  }

  render() {
    const { icon, style, isRtl } = this.props;
    const { opacityAnim } = this.state;

    const rtlView = isRtl && STYLES.rtlView;
    const rtlText = isRtl && STYLES.rtlText;
  
    return (
      <Animated.View style={[styles.container, rtlView, {opacity: opacityAnim}]}>
        {icon && <Ionicons name={icon} size={18} style={{ color: COLORS.primaryText }} />}
        <TI {...this.props} style={[styles.Textinput, rtlText, style]} onFocus={this.handleFocus} onBlur={this.handleBlur}/>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  Textinput: {
    flex: 1, 
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primaryText,
    borderRadius: 3,
    borderColor: COLORS.primaryText, 
    paddingHorizontal: 10,
    marginHorizontal: 4,
    paddingVertical: 4
  }
})

TextInput.propTypes = {
  icon: PropTypes.string,
  isRtl: PropTypes.bool,
}

TextInput.defaultProps = {
  icon: null,
  isRtl: false ,
}
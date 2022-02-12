import React from "react";
import { StyleSheet, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PropTypes from "prop-types";

export default class ProgressBar extends React.Component {
  static propTypes = {
    toValue: PropTypes.number,
    gradientColors: PropTypes.arrayOf(PropTypes.string),
    gradientLocations: PropTypes.arrayOf(PropTypes.number),
  };

  static defaultProps = {
    toValue: 0,
    gradientColors: ["#000", "#fff"],
    gradientLocations: null,
  };

  state = {
    progressBarValue: new Animated.Value(0),
  };

  updateProgressBar = (toValue, callback) => {
    Animated.timing(this.state.progressBarValue, {
      toValue,
      duration: 750,
      useNativeDriver: false,
    }).start(callback);
  };

  shouldComponentUpdate(nextProps) {
    const { toValue } = nextProps;
    this.updateProgressBar(toValue);
    return false;
  }

  render() {
    const { progressBarValue } = this.state;
    const { gradientColors, gradientLocations } = this.props;

    return (
      <Animated.View style={[styles.progressBar, { flex: progressBarValue }]}>
        <LinearGradient
          colors={gradientColors}
          locations={gradientLocations}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        ></LinearGradient>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  progressBar: {
    overflow: "hidden",
    flex: 0,
    height: 20,
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
  },
});

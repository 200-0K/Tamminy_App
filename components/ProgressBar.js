import React from "react";
import { StyleSheet, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default class ProgressBar extends React.Component {
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
    const {toValue} = nextProps;
    this.updateProgressBar(toValue ?? 0);
    return false;
  }

  render() {
    const {progressBarValue} = this.state;
    const {colors = ["#000", "#fff"]} = this.props;

    return (
      <Animated.View style={[styles.progressBar, { flex: progressBarValue }]}>
        <LinearGradient
          colors={colors}
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
    overflow: 'hidden',
    flex: 0,
    height: 20,
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
  },
})
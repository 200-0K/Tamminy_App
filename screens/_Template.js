import React from "react"
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default class ComponentName extends React.Component {
  static propTypes = {
    prop1: PropTypes.string,
    prop2: PropTypes.number.isRequired,
    prop3: PropTypes.func,
  };

  render() {
    // const { ... } = this.props;

    return (
      null
      // ...
    );
  }
}

const styles = StyleSheet.create({
  //...
});

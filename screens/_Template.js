import { StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default class ComponentName {
  static propTypes = {
    prop1: PropTypes.string,
    prop2: PropTypes.number.isRequired,
    prop3: PropTypes.func,
  };

  // set default value for optional props
  static defaultProps = {
    prop1: "Default",
    prop3: () => {},
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

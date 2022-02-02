import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";
import chroma from "chroma-js";

import { COLORS } from "../utils/colors";

const severityColor = chroma.scale([
  COLORS.diseaseSeverityLow,
  COLORS.diseaseSeverityMedium,
  COLORS.diseaseSeverityHigh,
]);

export default function SeverityIndicator({
  percentage,
  size,
  showText = true,
}) {
  size = size || (showText ? 40 : 10);

  const containerStyle = {
    height: size,
    width: size,
    borderRadius: size,
    borderWidth: showText ? 2 : 1,
  };

  const textStyle = {
    fontSize: size / 2.8,
  };

  return (
    <View
      style={[
        styles.severityContainer,
        containerStyle,
        { backgroundColor: severityColor(percentage / 100).toString() },
      ]}
    >
      {showText && (
        <Text style={[styles.severityPercentage, textStyle]}>
          {percentage}
          <Text style={{ fontSize: textStyle.fontSize / 1.875 }}>%</Text>
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  severityContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: COLORS.primaryText,
  },
  severityPercentage: {
    fontSize: 15,
    color: COLORS.primaryText,
  },
});

SeverityIndicator.propTypes = {
  percentage: PropTypes.number.isRequired,
  size: PropTypes.number,
  showText: PropTypes.bool,
};

SeverityIndicator.defaultProps = {
  size: null,
  showText: true,
};

import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

import { COLORS } from "../utils/colors";

export default function DetailListItem({ title, subtitle, color, subtitleColor }) {
  const titleStyle = {
    color,
  };

  const subtitleStyle = {
    color: subtitleColor,
  };

  return (
    <View
      style={styles.container}
    >
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {subtitle && (
        <View style={styles.subtitleContainer}>
          <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.primaryText,
  },
  subtitleContainer: {
    opacity: 0.7,
  },
  subtitle: {
    fontSize: 13,
    color: COLORS.secondaryText,
  },
});

DetailListItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  color: PropTypes.string,
  subtitleColor: PropTypes.string,
};

DetailListItem.defaultProps = {
  subtitle: null,
  color: COLORS.primaryText,
  subtitleColor: COLORS.secondaryText,
};

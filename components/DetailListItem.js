import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import PropTypes from "prop-types";

export default function DetailListItem({ title, subtitle, color }) {
  const titleStyle = {
    color,
  };

  const subtitleStyle = {
    color,
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
    color: "#4C4A5E",
  },
  subtitleContainer: {
    opacity: 0.6,
  },
  subtitle: {
    fontSize: 13,
    color: "#4C4A5E",
  },
});

DetailListItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  color: PropTypes.string,
};

DetailListItem.defaultProps = {
  subtitle: null,
  color: "#4C4A5E",
};

import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

import { COLORS } from "../utils/colors";
import { STYLES } from "../utils/styles";

export default function DetailListItem({
  title,
  subtitle,
  color,
  subtitleColor,
  isRtl,
  style,
}) {
  const rtlText = isRtl && STYLES.rtlText;

  const titleStyle = {
    color,
  };

  const subtitleStyle = {
    color: subtitleColor,
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.title, rtlText, titleStyle]}>{title}</Text>
      {subtitle && (
        <View style={styles.subtitleContainer}>
          <Text style={[styles.subtitle, rtlText, subtitleStyle]} numberOfLines={2}>
            {subtitle}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.primaryText,
  },
  subtitleContainer: {
    opacity: 0.7,
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.secondaryText,
  },
});

DetailListItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  color: PropTypes.string,
  subtitleColor: PropTypes.string,
  isRtl: PropTypes.bool,
  style: PropTypes.object,
};

DetailListItem.defaultProps = {
  subtitle: null,
  color: COLORS.primaryText,
  subtitleColor: COLORS.secondaryText,
  isRtl: true,
  style: null,
};

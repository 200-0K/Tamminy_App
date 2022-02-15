import {View, Text, StyleSheet} from "react-native";

export default function ErrorIndicator() {
  return (
    <View
      style={[
        {
          ...StyleSheet.absoluteFill,
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      <Text style={{ color: "red", fontSize: 42 }}>Error occurred</Text>
    </View>
  );
}
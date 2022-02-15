import { View, ActivityIndicator, StyleSheet, Modal } from "react-native";

export default function LoadingIndicator({ color }) {
  return (
    <Modal transparent>
      <View style={[
        {
          ...StyleSheet.absoluteFill,
          justifyContent: "center",
          alignItems: "center",
        },
      ]}>
        <ActivityIndicator size="large" color={color} />
      </View>
    </Modal>
  );
}

import { View, ActivityIndicator, StyleSheet, Modal } from "react-native";

const boxing = component => (
  <View style={{flex: 10, paddingVertical: 30, marginHorizontal: 40, borderRadius: 10, backgroundColor: "rgba(0,0,0,0.08)"}}>
    {component}
  </View>
);

export default function LoadingIndicator({ color, showInnerBox }) {
  let loadingComponent = <ActivityIndicator size="large" color={color} />;
  if (showInnerBox) loadingComponent = boxing(loadingComponent);

  return (
    <Modal transparent>
      <View style={[
        {
          ...StyleSheet.absoluteFill,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row"
        },
      ]}>
        {loadingComponent}
      </View>
    </Modal>
  );
}

import { BaseToast, ErrorToast, InfoToast } from "react-native-toast-message";
import { COLORS } from "./colors";

export const toastConfig = {
  success: props => {
    const isRtl = props.props.isRtl;
    const color = COLORS.checkmark;
    return (
      <BaseToast
        {...props}
        style={{ borderLeftColor: color }}
        text1Style={{ textAlign: isRtl ? "right" : "auto" }}
        text2Style={{ textAlign: isRtl ? "right" : "auto" }}
      />
    );
  },
  error: props => {
    const isRtl = props.props.isRtl;
    const color = COLORS.warning;
    return (
      <ErrorToast
        {...props}
        style={{ borderLeftColor: color }}
        text1Style={{ textAlign: isRtl ? "right" : "auto" }}
        text2Style={{ textAlign: isRtl ? "right" : "auto" }}
      />
    );
  },
  info: props => {
    const isRtl = props.props.isRtl;
    return (
      <InfoToast
        {...props}
        text1Style={{ textAlign: isRtl ? "right" : "auto" }}
        text2Style={{ textAlign: isRtl ? "right" : "auto" }}
      />
    );
  },
};

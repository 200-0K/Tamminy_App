import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import PropTypes from "prop-types";
import Toast from "react-native-toast-message";

import { COLORS } from "../utils/colors";
import { STYLES } from "../utils/styles";

import { FeedbackApi } from "../api/FeedbackApi";

import FeedbackSvg from "../components/svg/Feedback";

import TextArea from "../components/TextArea";
import Buttons from "../components/Button";
import ScreenWrapper from "../components/ScreenWrapper";
import LoadingIndicator from "../components/LoadingIndicator";

const MAX_CHARACTERS = 180;
export default class Feedback extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    route: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number,
      }),
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.feedbackApi = FeedbackApi();

    this.isRtl = true; // TODO: lang
  }

  state = {
    loading: false,
    text: "",
  };

  sendFeedback = async () => {
    const { text } = this.state;
    const { navigation } = this.props;
    const id = this.props.route.params?.id;

    if (!text) {
      Toast.show({
        type: "error",
        text1: "لم يتم كتابة اقتراح",
        text2: "يرجى كتابة اقتراحك",
        props: { isRtl: true },
      });
      return this.setState({ loading: false });
    }

    if (text.length > MAX_CHARACTERS) {
      Toast.show({
        type: "error",
        text1: "اقتراحك كبير",
        text2: "يرجى اختصار اقتراحك الى 180 حرف كحد اقصى",
        props: { isRtl: true },
      });
      return this.setState({ loading: false });
    }

    const saved = await this.feedbackApi.save(text, id);
    if (saved) {
      Toast.show({
        type: "success",
        text1: "شكرًا لك 🌹",
        text2: "تم حفظ اقتراحك بنجاح",
        props: { isRtl: true },
      });
      return navigation.goBack();
    } else {
      Toast.show({
        type: "error",
        text1: "حدث خطأ",
        text2: "حدث خطأ عند محاولة حفظ إقتراحك، يرجى المحاولة مرة أخرى",
        props: { isRtl: true },
      });

      return this.setState({ loading: false });
    }
  };

  render() {
    const { loading, text } = this.state;

    return (
      <>
        {loading && (
          <LoadingIndicator color={COLORS.primaryText} showInnerBox />
        )}
        <ScreenWrapper>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={STYLES.mainContainer}
          >
            <View style={[STYLES.titleContainer, { marginBottom: 15 }]}>
              <Text style={STYLES.title}>ماذا تقترح؟</Text>
              <FeedbackSvg />
            </View>

            <TextArea
              isRtl={this.isRtl}
              fontSize={18}
              max={MAX_CHARACTERS}
              placeholder="ماذا تقترح؟"
              value={text}
              onChangeText={text => this.setState({ text })}
            />

            <View style={[styles.buttonContainer]}>
              <Buttons
                title="إرسال"
                fontSize={25}
                onPress={() =>
                  this.setState({ loading: true }, this.sendFeedback)
                }
              />
            </View>
          </ScrollView>
        </ScreenWrapper>
      </>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 15,
    alignSelf: "center",
  },
});

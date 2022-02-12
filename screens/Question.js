import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";

import { COLORS } from "../utils/colors";
import { STYLES } from "../utils/styles";
import Feedback from "../components/svg/icons/Feedback";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";
import chroma from "chroma-js";

export default class Question extends React.Component {
  TOTAL_QUESTION = 0;

  state = {
    loading: true,
    error: false,
    newQuestions: [
      {
        id: 3,
        question: "هل تعاني من حمى؟",
        answer: null,
      },
      {
        id: 1,
        question: "هل تشعر بصداع؟",
        answer: null,
      },
      {
        id: 2,
        question: "هل لديك كحة؟",
        answer: null,
      },
    ],
    oldQuestions: [],
  };

  async componentDidMount() {
    this.isRtl = true;
    this.rtlText = this.isRtl && STYLES.rtlText;
    this.rtlView = this.isRtl && STYLES.rtlView;

    // TODO
    try {
      // const newQuestions = this.getNewQuestions()
      const newQuestions = this.state.newQuestions; //!TO BE CHANGED

      // TODO: Good?
      if (newQuestions.length < 1) return this.navigateToAssessmentDetail();

      this.TOTAL_QUESTION = newQuestions.length;
      this.setState({
        loading: false,
        error: false,
        newQuestions,
      });
    } catch (e) {
      this.setState({
        loading: false,
        error: true,
      });
    }
  }

  getNewQuestions = () => {
    //TODO: get Related Symptoms Question
    // const selectedSymptoms = this.props.navigation.state.params?.selectedSymptoms || [];
    // const newQuestions = await AssessmentApi.getRelatedSymptomsQuestion([...selectedSymptoms, old questions id with yes answer])
    // return newQuestions;
  };

  navigateToAssessmentDetail = () => {
    const { oldQuestions, newQuestions } = this.state;
    // TODO navigate to navigate to AssessmentDetail screen with the selectedSymptoms
    this.setState({
      newQuestions: [...oldQuestions, ...newQuestions],
      oldQuestions: [],
    });
  };

  handleFeedbackPress = () => {
    const { id } = this.state.newQuestions[0];
    // TODO: navigate to feedback screen with question id
    // Navigate("feedback", newQuestions[0].id)
  };

  handleQuestionInfoPress = () => {
    const { id } = this.state.newQuestions[0];
    // TODO: navigate to SymptomDetail screen with (symptom id == question id)
  };

  // function handleAnswer(answer) { }
  handleAnswer = answer => {
    const { newQuestions, oldQuestions } = this.state;

    const currentQuestion = newQuestions[0];
    currentQuestion.answer = answer;

    const oldQs = [...oldQuestions, currentQuestion];

    let newQs = newQuestions.slice(1);
    // if (answer == true) {
    //   newQs = this.getNewQuestions();
    // }

    // TODO: Good?
    if (newQs.length < 1) return this.navigateToAssessmentDetail();

    this.setState({
      loading: false,
      error: false,
      newQuestions: newQs,
      oldQuestions: oldQs,
    });
  };

  render() {
    const { loading, error, newQuestions } = this.state;

    if (loading) {
      // TODO: custom component
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
          <ActivityIndicator size="large" color={COLORS.primaryText} />
        </View>
      );
    }

    if (error) {
      // TODO: custom component
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

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={[styles.progressBarContainer]}>
          <ProgressBar
            toValue={1 - newQuestions.length / this.TOTAL_QUESTION}
            gradientColors={COLORS.questionProgressBarGradient}
            gradientLocations={[0, 0.5, 1]}
          />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[STYLES.mainContainer, { marginTop: 100 }]}
        >
          <View style={{ flex: 1 }}>
            <View style={styles.questionContainer}>
              <Text style={[styles.question, this.rtlText]}>
                {newQuestions[0].question}
              </Text>
              <TouchableOpacity onPress={this.handleQuestionInfoPress}>
                <Text
                  style={{
                    fontSize: 15,
                    color: COLORS.secondaryText,
                    textAlign: "right",
                  }}
                >
                  ماذا تعني؟
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.answerButtonContainer}>
              <Button
                title="نعم"
                isRtl={this.isRtl}
                borderRadius={15}
                width={95}
                icon="checkmark-sharp"
                iconSize="large"
                iconColor={COLORS.checkmark}
                onPress={() => this.handleAnswer(true)}
                fontSize={24}
              />
            </View>
            <View style={styles.answerButtonContainer}>
              <Button
                title="لا"
                isRtl={this.isRtl}
                borderRadius={15}
                width={95}
                icon="close-sharp"
                iconSize="large"
                iconColor={COLORS.close}
                onPress={() => this.handleAnswer(false)}
                fontSize={24}
              />
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.feedbackContainer}
          onPress={this.handleFeedbackPress}
        >
          <Feedback size={25} color={COLORS.buttonText} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  progressBarContainer: {
    overflow: "hidden",
    marginTop: 50,
    flexDirection: "row",
    borderRadius: 0,
    borderWidth: 0,
    backgroundColor: chroma(COLORS.primaryText).brighten(3.7).toString(),
  },

  questionContainer: {
    paddingVertical: 20,
  },
  question: {
    fontSize: 50,
    fontWeight: "bold",
    color: COLORS.primaryText,
  },

  answerButtonContainer: {
    alignSelf: "flex-end",
    paddingVertical: 8,
    paddingHorizontal: 5,
  },

  feedbackContainer: {
    position: "absolute",
    bottom: 15,
    right: 15,
    opacity: 0.7,
  },
});

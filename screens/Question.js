import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import React from "react";
import { HeaderHeightContext } from "@react-navigation/elements";
import chroma from "chroma-js";

import { COLORS } from "../utils/colors";
import { STYLES } from "../utils/styles";

import LeftArrow from "../components/svg/icons/LeftArrow";
import DLeftArrow from "../components/svg/icons/D-LeftArrow";

import Feedback from "../components/svg/icons/Feedback";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";
import ScreenWrapper from "../components/ScreenWrapper";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorIndicator from "../components/ErrorIndicator";

export default class Question extends React.Component {
  TOTAL_QUESTION = 0;

  constructor(props) {
    super(props);

    this.isRtl = true; // TODO: based app language
    this.rtlView = this.isRtl && STYLES.rtlView;
    this.rtlText = this.isRtl && STYLES.rtlText;
  }

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
    const { oldQuestions } = this.state;
    const { navigation, route } = this.props;
    navigation.replace(
      "AssessmentDetail",
      [...oldQuestions.filter(question => question.answer), ...route.params.selectedSymptoms]
    );
  };

  navigateToPreviousScreen = () => {
    const { navigation } = this.props;
    navigation.pop();
  };

  showPreviousQuestion = () => {
    const { newQuestions, oldQuestions } = this.state;
    this.setState({
      newQuestions: [oldQuestions[oldQuestions.length-1], ...newQuestions],
      oldQuestions: oldQuestions.slice(0, oldQuestions.length - 1),
    });
  };

  handleFeedbackPress = () => {
    const { id } = this.state.newQuestions[0];
    const { navigation } = this.props;
    navigation.navigate("Feedback", { id });
  };

  handleQuestionInfoPress = () => {
    const { id } = this.state.newQuestions[0];
    const { navigation } = this.props;
    navigation.navigate("SymptomDetail", { id });
  };

  // function handleAnswer(answer) {}
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

    // TODO: navigat to another question screen
  };

  render() {
    const { loading, error, newQuestions } = this.state;

    return (
      <ScreenWrapper>
        <View style={styles.headerContainer}>
          {newQuestions.length !== this.TOTAL_QUESTION ? (
            <>
              <TouchableOpacity onPress={this.navigateToPreviousScreen}>
                <DLeftArrow color={COLORS.primaryText} />
              </TouchableOpacity>

              <View style={{marginHorizontal: 5}}></View>

              <TouchableOpacity onPress={this.showPreviousQuestion}>
                <LeftArrow color={COLORS.primaryText} />
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity onPress={this.navigateToPreviousScreen}>
              <LeftArrow color={COLORS.primaryText} />
            </TouchableOpacity>
          )}
        </View>

        {loading && <LoadingIndicator color={COLORS.primaryText} />}
        {error && <ErrorIndicator />}

        {!loading && !error && (
          <>
            <View style={[styles.progressBarContainer]}>
              <ProgressBar
                toValue={1 - newQuestions.length / this.TOTAL_QUESTION}
                gradientColors={COLORS.questionProgressBarGradient}
              />
            </View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={STYLES.mainContainer}
              contentContainerStyle={[{ marginTop: 100 }]}
            >
              <View style={{ flex: 1 }}>
                <View style={styles.questionContainer}>
                  <Text style={[styles.question, this.rtlText]}>
                    {newQuestions[0].question}
                  </Text>
                  <TouchableOpacity onPress={this.handleQuestionInfoPress}>
                    <Text
                      style={[
                        {
                          fontSize: 15,
                          color: COLORS.secondaryText,
                        },
                        this.rtlText,
                      ]}
                    >
                      ماذا تعني؟
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={this.isRtl ? { alignItems: "flex-end" } : null}>
                  <View style={[styles.answerButtonContainer]}>
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
                  <View style={[styles.answerButtonContainer]}>
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
              </View>
            </ScrollView>

            <TouchableOpacity
              style={STYLES.feedbackContainer}
              onPress={this.handleFeedbackPress}
            >
              <Feedback
                size={25}
                color={COLORS.buttonText}
                onPress={this.handleFeedbackPress}
              />
            </TouchableOpacity>
          </>
        )}
      </ScreenWrapper>
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
    paddingVertical: 8,
    paddingHorizontal: 5,
  },

  headerContainer: {
    position: "absolute",
    top: StatusBar.currentHeight + 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    opacity: 0.7,
  },
});

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import chroma from "chroma-js";
import PropTypes from "prop-types";

import { COLORS } from "../utils/colors";
import { STYLES } from "../utils/styles";

import { AssessmentApi } from "../api/AssessmentApi";

import LeftArrow from "../components/svg/icons/LeftArrow";
import DLeftArrow from "../components/svg/icons/D-LeftArrow";
import Feedback from "../components/svg/icons/Feedback";

import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";
import ScreenWrapper from "../components/ScreenWrapper";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorIndicator from "../components/ErrorIndicator";

export default class Question extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    route: PropTypes.shape({
      params: PropTypes.shape({
        symptoms: PropTypes.arrayOf(
          PropTypes.shape({ id: PropTypes.number.isRequired })
        ).isRequired,
      }).isRequired,
    }).isRequired,
  };

  TOTAL_QUESTION = 0;

  constructor(props) {
    super(props);

    this.assessmentApi = AssessmentApi();

    this.isRtl = true; // TODO: lang
    this.rtlView = this.isRtl && STYLES.rtlView;
    this.rtlText = this.isRtl && STYLES.rtlText;
  }

  state = {
    loading: true,
    error: false,
    newQuestions: [],
    oldQuestions: [],
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const symptoms = this.props.route.params?.symptoms;
    if (!symptoms) navigation.goBack();

    try {
      const newQuestions = await this.getNewQuestions();
      if (!newQuestions) return this.navigateToAssessmentDetail();

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

  getNewQuestions = async (otherSymptoms = []) => {
    const { oldQuestions } = this.state;
    const symptoms = this.props.route.params?.symptoms;

    const codes = this.assessmentApi.RESPONSE_CODES.getQuestions;
    const res = await this.assessmentApi.getQuestions([
      ...symptoms.map(symptom => symptom.id),
      ...oldQuestions
        .filter(question => question.answer)
        .map(symptom => symptom.id),
      ...otherSymptoms,
    ]);

    if (res.status === codes.noQuestions) return false;
    return res.data.map(question => ({
      id: question.id,
      question: question.ar_question,
      answer: null,
    }));
  };

  navigateToAssessmentDetail = () => {
    const { oldQuestions } = this.state;
    const { navigation, route } = this.props;
    this.setState({loading: false}, () => {
      navigation.replace("AssessmentDetail", {
        symptoms: [
          ...oldQuestions.filter(question => question.answer),
          ...route.params.symptoms,
        ],
      })
    });
  };

  navigateToPreviousScreen = () => {
    const { navigation } = this.props;
    navigation.pop();
  };

  showPreviousQuestion = () => {
    const { newQuestions, oldQuestions } = this.state;
    this.setState({
      newQuestions: [oldQuestions[oldQuestions.length - 1], ...newQuestions],
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
  handleAnswer = async answer => {
    const { newQuestions, oldQuestions } = this.state;

    const currentQuestion = { ...newQuestions[0] };
    currentQuestion.answer = answer;

    let oldQs = [...oldQuestions, currentQuestion];
    let newQs = newQuestions.slice(1);

    if (answer == true) {
      let newFetchedQs = await this.getNewQuestions([currentQuestion.id]);
      if (newFetchedQs) {
        // remove questions that have already been answered
        newFetchedQs = newFetchedQs.filter(
          newQ => !oldQs.some(oldQ => oldQ.id === newQ.id)
        );
        // add skipped questions to oldQs for backtraking
        oldQs = [
          ...oldQs,
          ...newQs.filter(
            prevNewQ => !newFetchedQs.some(newQ => newQ.id === prevNewQ.id)
          ),
        ];
      }
      newQs = newFetchedQs;
    }
    if (!newQs || newQs.length < 1) return this.navigateToAssessmentDetail();

    this.setState({
      loading: false,
      error: false,
      newQuestions: newQs,
      oldQuestions: oldQs,
    });
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

              <View style={{ marginHorizontal: 5 }}></View>

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

        <>
          <View style={[styles.progressBarContainer]}>
            <ProgressBar
              toValue={1 - newQuestions.length / this.TOTAL_QUESTION}
              gradientColors={COLORS.questionProgressBarGradient}
            />
          </View>

          {loading && <LoadingIndicator color={COLORS.primaryText} />}
          {error && <ErrorIndicator />}

          {!loading && !error && newQuestions.length > 0 && (
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
                      onPress={() =>
                        this.setState({ loading: true }, () =>
                          this.handleAnswer(true)
                        )
                      }
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
          )}
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

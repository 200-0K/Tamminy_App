import { StyleSheet, View, Text, ScrollView, SafeAreaView, TouchableOpacity, ActivityIndicator, Animated } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import Button from "../components/Button";
import { COLORS } from "../utils/colors";
import { formatDate } from "../utils/date";
import { STYLES } from "../utils/styles";
import { LinearGradient } from 'expo-linear-gradient';
import Feedback from "../components/svg/icons/Feedback";
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import chroma from "chroma-js";

// node_modules
// yarn add react-native-linear-gradient
// yarn remove react-native-linear-gradient
// expo install expo-linear-gradient@~11.0.3

export default class Question extends React.Component {
  TOTAL_QUESTION = 0;
  SELECTED_SYMPTOMS = [];

  state = {
    loading: true,
    error: false,
    newQuestions: [
      {
        id: 3,
        question: "هل تعاني من حمى؟",
        answer: null
      },
      {
        id: 1,
        question: "هل تشعر بصداع؟",
        answer: null
      },
      {
        id: 2,
        question: "هل لديك كحة؟",
        answer: null
      },
    ],
    oldQuestions: [],
    progressBarValue: new Animated.Value(0),
  }

  async componentDidMount() {
    // TODO
    try {
      // SELECTED_SYMPTOMS = Get selected symptoms from SymptomSearch screen

      // const newQuestions = this.getNewQuestions()
      const newQuestions = this.state.newQuestions; //?TO BE CHANGED

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
      })
    }
  }

  getNewQuestions = () => {
    //TODO: get Related Symptoms Question
    // const newQuestions = await AssessmentApi.getRelatedSymptomsQuestion(SELECTED_SYMPTOMS, old questions with yes answer)
    // return newQuestions;
  }

  navigateToAssessmentDetail = () => {
    const { newQuestions, oldQuestions } = this.state;
    // TODO navigate to navigate to AssessmentDetail screen with the selectedSymptoms
    this.setState({
      newQuestions: [...oldQuestions],
      oldQuestions: [],
    }, () => {
      this.updateProgressBar();
    })
  }

  handleFeedbackPress = () => {
    const { newQuestions } = this.state;
    // TODO: navigate to feedback screen with question id
    // Navigate("feedback", newQuestions[0].id)
  }

  handleQuestionInfoPress = () => {
    const { id } = this.state.newQuestions[0];
    // TODO: navigate to SymptomDetail screen with (symptom id == question id)
  }

  updateProgressBar = () => {
    const { newQuestions, progressBarValue } = this.state
    Animated.timing(progressBarValue, {
      toValue: 1 - (newQuestions.length / this.TOTAL_QUESTION),
      duration: 750,
    }).start();
  }

  // function handleAnswer(answer) { }
  handleAnswer = answer => {
    const { newQuestions, oldQuestions } = this.state;

    const currentQuestion = newQuestions[0];
    currentQuestion.answer = answer;

    const oldQs = [...oldQuestions, currentQuestion]

    let newQs = newQuestions.slice(1);
    // if (answer == true) {
    //   newQs = this.getNewQuestions();
    // }

    this.setState({
      loading: false,
      error: false,
      newQuestions: newQs,
      oldQuestions: oldQs,
    }, () => {
      this.updateProgressBar();
    })
  }

  render() {
    // const { id, question, SymptomDescription } = questionDiseases;
    const { loading, error, newQuestions, progressBarValue } = this.state;
    this.rtlText = STYLES.rtlText;
    this.rtlView = STYLES.rtlView;

    // TODO: Good?
    if (newQuestions.length < 1) {
      this.navigateToAssessmentDetail();
      return null
    }

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
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={STYLES.mainContainer}
        >
          <View style={[styles.barContainer]}>
            <Animated.View style={[styles.parogressBar, { flex: progressBarValue }]}>
              <LinearGradient colors={["#3F3D56", "#FF057D"]} style={{ flex: 1 }} start={{ x: 0, y: .5 }} end={{ x: 1, y: .5 }}></LinearGradient>
            </Animated.View>
          </View>
          <View style={{ flex: 1 }}>
            <View>
              <Text style={[styles.question, this.rtlText]}>{newQuestions[0].question}</Text>
              <TouchableOpacity
                onPress={this.handleQuestionInfoPress}
              >
                <Text style={{
                  fontSize: 15,
                  color: COLORS.secondaryText,
                  textAlign: 'right'
                }}>ماذا تعني؟</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonAnswer}>
              <Button
                title='نعم'
                isRtl={true}
                borderRadius={20}
                width={95}
                icon='checkmark-sharp'
                iconSize='large'
                iconColor={COLORS.checkmark}
                onPress={() => this.handleAnswer(true)}
              />
            </View>
            <View style={{
              alignSelf: 'flex-end',
              paddingHorizontal: 5,
              paddingTop: 8
            }}>
              <Button
                title='لا'
                isRtl={true}
                borderRadius={20}
                width={95}
                icon='close-sharp'
                iconSize='large'
                iconColor={COLORS.close}
                onPress={() => this.handleAnswer(false)}
              />
            </View>
          </View>

          <View style={{
            alignSelf: 'flex-end',
            padding: 10
          }}>

            <TouchableOpacity style={styles.feedbackContainer} onPress={this.handleFeedbackPress}>
              <Feedback size={30} color={COLORS.buttonText} />
            </TouchableOpacity>
          </View>

        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  question: {
    fontSize: 50,
    fontWeight: "bold",
    color: COLORS.primaryText
  },
  barContainer: {
    marginTop: 50,
    marginBottom: 100,
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    overflow: "hidden",
  },
  parogressBar: {
    flex: 0,
    height: 20,
  },

  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },

  buttonAnswer: {
    alignSelf: 'flex-end',
    paddingTop: 40,
    paddingHorizontal: 5
  }
});
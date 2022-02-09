import { StyleSheet, View, Text, ScrollView, SafeAreaView, TouchableOpacity, TouchableHighlight, ActivityIndicator, Animated, Alert } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import Button from "../components/Button";
import { COLORS } from "../utils/colors";
import { formatDate } from "../utils/date";
import { STYLES } from "../utils/styles";
import { LinearGradient } from 'expo-linear-gradient';
import Feedback from "../components/svg/icons/Feedback";

// node_modules
// yarn add react-native-linear-gradient
// yarn remove react-native-linear-gradient

// expo install expo-linear-gradient@~11.0.3

export default class Question extends React.Component {
  state = {
    loading: true,
    error: false,
    questions: [
      {
        id: 1,
        question: "هل تشعر بصداع؟",
      },
      {
        id: 2,
        question: "هل لديك كحة؟",
      },
      {
        id: 3,
        question: "هل تعاني من حمى؟",
      },

      {
        id: 1,
        question: "هل تشعر بصداع؟",
      },
      {
        id: 2,
        question: "هل لديك كحة؟",
      },
      {
        id: 3,
        question: "هل تعاني من حمى؟",
      },

      {
        id: 1,
        question: "هل تشعر بصداع؟",
      },
      {
        id: 2,
        question: "هل لديك كحة؟",
      },
      {
        id: 3,
        question: "هل تعاني من حمى؟",
      },
    ],
    symptomsId: [],

    questionsToAnswer: [
      {
        id: 3,
        question: "هل تعاني من حمى؟",
      },
    ],
    answeredQuestions: [
      {
        id: 1,
        question: "هل تشعر بصداع؟",
        isYes: true
      },
      {
        id: 2,
        question: "هل لديك كحة؟",
        isYes: false
      },
    ],
    
    currentQuestionIndex: 0,
    progressBarValue: new Animated.Value(0),
  }

  async componentDidMount() {
    // const newSympotms = await AssessmentApi.getRelatedSymptoms(symptoms) 
    // this.setState(newSympotms)
    this.setState({
      loading: false,
      error: false,
    })
  }

  updateCurrentQuestionIndex = () => {
    const {currentQuestionIndex, questions, progressBarValue} = this.state
    Animated.timing(progressBarValue, {
      toValue: Math.round((currentQuestionIndex/questions.length)*10)/10,
      duration: 750,
    }).start();
  }

  handleYesAnswer = () => {
    const { currentQuestionIndex, questions, symptomsId } = this.state;
    const question = questions[currentQuestionIndex];
    const newSymptomsId = [...symptomsId, question.id]

    // TODO
    // this.setState({loading: true})
    // newQuestions = await (call server with symptomsId)
    // this.setState({questions: newQuestions, symptomsId})

    this.setState({
      currentQuestionIndex: (currentQuestionIndex+1) % questions.length, //! REMOVE
      symptomsId: newSymptomsId,
      // questions: newQuestions
    }, () => {
      this.updateCurrentQuestionIndex();
    })
  }

  render() {
    // const { id, question, SymptomDescription } = questionDiseases;
    const { loading, error, questions, currentQuestionIndex, progressBarValue } = this.state;
    this.rtlText = STYLES.rtlText;
    this.rtlView = STYLES.rtlView;

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

    const q = questions[currentQuestionIndex];

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={STYLES.mainContainer}
        >
          <View style={[styles.barContainer]}>
            <Animated.View style={[styles.parogressBar, { flex: progressBarValue }]}>
              <LinearGradient colors={["#3F3D56", "#FF057D"]} style={{ flex: 1 }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}></LinearGradient>
            </Animated.View>
          </View>
          <View style={{ flex: 1 }}>
            <View>
              <Text style={[styles.question, this.rtlText]}>{q.question}</Text>
              <TouchableOpacity >
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
                onPress={this.handleYesAnswer}
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
                onPress={this.handleNoAnswer}
              />
            </View>
          </View>

          <View style={{
            alignSelf: 'flex-end',
            padding: 10
          }}>

            <TouchableOpacity style={styles.feedbackContainer}>
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
    overflow: "hidden"
  },
  parogressBar: {
    flex: 0,
    height: 20
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
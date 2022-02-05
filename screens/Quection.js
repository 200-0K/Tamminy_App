import { StyleSheet, View, Text, ScrollView, SafeAreaView, TouchableOpacity, TouchableHighlight } from 'react-native';
import React from 'react';
import react from 'react';

import Button from "../components/Button";
import { COLORS } from "../utils/colors";
import { formatDate } from "../utils/date";
import { STYLES } from "../utils/styles";
import LinearGradient from 'react-native-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

const { rtlText, rtlView } = STYLES;
export default class Quection extends React.Component {

  state = {
    loading: true,
    error: false,
    id: null,
    questionDiseases: [],
  }


  questionDiseases = [
    {
      id: 1,
      symptomName: "صداع",
      quection : "هل تشعر بصداع؟",
      SymptomDescription:
        "ألم في الرأس، إذ يمكن أن يحدث في أي جزء من الرأس، أو على جانبي الرأس، أو في جانب واحد فقط.",
    },
    {
      id: 2,
      symptomName: "كحة",
      quection:"هل لديك كحة؟",
      SymptomDescription:
        "طرد فجائي للهواء عبر الحنجرة يساعد على تنظيف الممرات التنفسية الكبيرة من السوائل والمهيجات والجزيئات الغريبة والميكروبات وعادة ما يحدث بشكل .",
    },
    {
      id: 3,
      symptomName: "حمى",
      quection:"هل تعاني من كحة؟",
      SymptomDescription: "ارتفاع في درجة حرارة الجسم.",
    },
    ];

  // //   try {
  // //     setTimeout(() => {
  // //       this.setState({
  // //         loading: false,
  // //         error: false,

  // //       });
  // //     }, 3000); //! update the state after 3 second | For Testing
  // //   } catch (e) {
  // //     this.setState({
  // //       loading: false,
  // //       error: true,
  // //     });
  // //   }

  // // }

    // rendersymptomque = ({id, quection , meanofthisqiection}) = => (
    //      return (

    //              <Text>
    //              {quection}
    //              </Text>


    //      );
    // );

    // renderquection = ({id ,symptomName,quection }) => {
    //   return (


    //   );
    // };
    rendarquection = ({id ,quection,SymptomDescription }) => {
      return(
        <View>
          <Text>hallo</Text>
        </View>
      )
    }

  render() {
    return (
      <ScrollView horizontal={false}
        showsVerticalScrollIndicator={false}>
        <SafeAreaView >
          <View style={styles.barContainer}>
            <View style={styles.parogressBar}>

            </View>

          </View>
          <View style={{}}>
            <View style={[STYLES.mainContainer]}>
              <Text style={[STYLES.title, rtlText]}>هل تشعر بصداع؟</Text>
              <TouchableOpacity >
                <Text style={{
                  fontSize: 20,
                  color: COLORS.buttonText,
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
               />
            </View>
            <View style={{
              alignSelf: 'flex-end',
              paddingHorizontal: 20,
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
                 />
            </View>
            <View style={{
              alignSelf: 'flex-end',
              paddingHorizontal: 20,
              paddingVertical: 250,
              paddingBottom: 3
            }}>
              <MaterialIcons name="feedback" size={30} color={COLORS.secondaryText} />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //alignItems: 'center', 
    alignSelf: 'center',


  },
  barContainer: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',

    paddingVertical: 100
  },
  parogressBar: {
    backgroundColor: COLORS.primaryText,
    width: 300,
    height: 25,
    borderRadius: 15,

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
    paddingHorizontal: 20,


  }
});
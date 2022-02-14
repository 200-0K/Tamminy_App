import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  ActivityIndicator,
  TouchableHighlight,
  Alert,
} from "react-native";
import PropTypes from "prop-types";
import { COLORS } from "../utils/colors";
import { STYLES } from "../utils/styles";
import SeverityIndicator from "../components/SeverityIndicator";
import ScreenWrapper from "../components/ScreenWrapper";

export default class DiseaseDetail extends React.Component {
  // static propTypes = {
  //   prop1: PropTypes.string,
  //   prop2: PropTypes.number.isRequired,
  //   prop3: PropTypes.func,
  // };

  constructor(props) {
    super(props);

    this.isRtl = true; // TODO: based app language
    this.rtlView = this.isRtl && STYLES.rtlView;
    this.rtlText = this.isRtl && STYLES.rtlText;
  }

  state = {
    loading: true,
    error: false,
    DiseaseMeta: {
      id: 123,
      name: "كورونا",
      description:
        "فيروسات كورونا فصيلة واسعة الانتشار معروفة بأنها تسبب أمراضاً تتراوح من نزلات البرد الشائعة إلى الاعتلالات الأشد وطأة مثل متلازمة الشرق الأوسط التنفسية (MERS) ومتلازمة الالتهاب الرئوي الحاد الوخيم.",
      precautions: [
        "ابتعد مسافة متر واحد على الأقل عن الآخرين.",
        "اجعل من ارتداء الكمامة عادة عندما تكون مع أشخاص آخرين. إنّ استعمال الكمامات وحفظها وتنظيفها والتخلص منها بشكل سليم أمر ضروري لجعلها فعالة قدر الإمكان.",
        "نظّف يديك قبل أن ترتدي الكمامة، وقبل خلعها وبعده.",
        "تجنب الأماكن المزدحمة أو المغلقة.",
      ],

      symptoms: [
        {
          id: 1,
          name: "العرض 1",
          percentage: 94, // (times current symptom occurred / total symptoms for this disease)
        },
        {
          id: 2,
          name: "العرض 2",
          percentage: 75,
        },
        {
          id: 3,
          name: "العرض 3",
          percentage: 55,
        },
        {
          id: 4,
          name: "العرض 4",
          percentage: 35, // (times current symptom occurred / total symptoms for this disease)
        },
        {
          id: 5,
          name: "العرض 5",
          percentage: 13,
        },
      ],
    },
  };

  async componentDidMount() {
    const { id } = this.props.route.params;
    // Alert.alert("Disease id", `${id}`);
    // TODO
    // fetch symptom detail by SymptomApi class

    // if no error
    // this.setState({
    //   loading: false,
    //   error: false,
    //   symptomMeta,
    // })

    setTimeout(() => {
      this.setState({
        loading: false,
        error: false,
      });
    }, 100);
  }

  handleSymptomPress = id => {
    const { navigation } = this.props;
    // TODO: navigate to disease detail screen,
    // pass isReplaceOnNavigate = true along with navigation object to prevent stacking unnecessary screens
    console.log(id);
    navigation.replace("SymptomDetail", { id });
  };

  renderPrecaution = precaution => {
    return (
      <View style={[styles.precautionContainer, this.rtlView]}>
        <Text>-</Text>
        <View style={{ paddingHorizontal: 4 }}></View>
        <View style={{ flex: 1 }}>
          <Text
            style={[styles.precaution, this.rtlText]}
            textBreakStrategy="simple"
            selectable
          >
            {precaution}
          </Text>
        </View>
      </View>
    );
  };

  renderSymptom = ({ id, name, percentage }) => {
    return (
      <TouchableHighlight
        style={[styles.symptomContainer, this.rtlView]}
        activeOpacity={0.8}
        underlayColor="rgba(0,0,0,0.05)"
        onPress={() => this.handleSymptomPress(id)}
      >
        <>
          <SeverityIndicator showText={false} percentage={percentage} />
          {/* On SeverityIndicator tap; show percentage as a tooltip? */}
          <Text style={styles.symptomName}>{name}</Text>
        </>
      </TouchableHighlight>
    );
  };

  render() {
    const { loading, error, DiseaseMeta } = this.state;

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

    const { name, description, precautions, symptoms } = DiseaseMeta;
    return (
      <ScreenWrapper>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={STYLES.mainContainer}
        >
          <View style={{ marginTop: STYLES.titleContainer.marginTop }}>
            <Text selectable style={[STYLES.title, this.rtlText]}>
              {name}
            </Text>
            <Text selectable style={[styles.description, this.rtlText]}>
              {description}
            </Text>
          </View>

          <View style={[STYLES.sectionContainer]}>
            <View style={STYLES.sectionTitleContainer}>
              <Text style={[STYLES.sectionTitle, this.rtlText]}>
                الأحترازات
              </Text>
            </View>
            <View>{precautions.map(this.renderPrecaution)}</View>
          </View>

          <View style={[STYLES.sectionContainer]}>
            <View style={STYLES.sectionTitleContainer}>
              <Text style={[STYLES.sectionTitle, this.rtlText]}>الاعراض</Text>
            </View>
            {symptoms.map(this.renderSymptom)}
          </View>
        </ScrollView>
      </ScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 14,
    color: COLORS.primaryText,
  },

  symptomContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
  },
  symptomName: {
    fontSize: 14,
    color: COLORS.primaryText,
    paddingHorizontal: 10,
  },

  precautionContainer: {
    flexDirection: "row",
    marginVertical: 1,
  },
  precaution: {
    fontSize: 14,
    color: COLORS.primaryText,
    paddingBottom: 3,
  },
});

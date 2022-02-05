import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  FlatList,
  ScrollView,
  Text,
  ActivityIndicator,
  TouchableHighlight,
} from "react-native";
import PropTypes from "prop-types";

import { COLORS } from "../utils/colors";
import { STYLES } from "../utils/styles";
import SeverityIndicator from "../components/SeverityIndicator";

export default class SymptomDetail extends React.Component {
  static propTypes = {
    prop1: PropTypes.string,
    prop2: PropTypes.number.isRequired,
    prop3: PropTypes.func,
  };

  state = {
    loading: true,
    error: false,
    imagesLoading: [],
    symptomMeta: {
      id: 123,
      name: "جيوب انفية",
      description:
        "يحدث التهاب الجيوب الأنفية المزمن عندما تتورّم الفراغات الموجودة داخل الأنف والرأس كما يمكن ان يحدث التهاب الجيوب الأنفية المزمن عن طريق العدوى، أو عن طريق النمو النسيجي في الجيوب الأنفية",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/6/65/CT_of_chronic_sinusitis.jpg",
        "https://www.almrsal.com/wp-content/uploads/2018/10/%D8%A3%D9%86%D9%88%D8%A7%D8%B9-%D8%A7%D9%84%D8%AC%D9%8A%D9%88%D8%A8-%D8%A7%D9%84%D8%A3%D9%86%D9%81%D9%8A%D8%A9-%D9%88%D8%A3%D9%85%D8%A7%D9%83%D9%86%D9%87%D8%A7.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/f/fb/Blausen_0800_Sinusitis.png",
        "https://upload.wikimedia.org/wikipedia/commons/1/1d/Sinuses_and_Sinusitis_%285937085231%29.jpg",
        "https://www.aljazeera.net/wp-content/uploads/2013/11/1e7b626d-60d9-484a-942c-99bf02b98072.jpeg?fit=686%2C515",
      ],
      diseases: [
        {
          id: 1,
          name: "مرض 1",
          percentage: 94, // (times current symptom occurred / total symptoms for this disease)
        },
        {
          id: 2,
          name: "مرض 2",
          percentage: 75,
        },
        {
          id: 3,
          name: "مرض 3",
          percentage: 55,
        },
        {
          id: 4,
          name: "مرض 4",
          percentage: 35, // (times current symptom occurred / total symptoms for this disease)
        },
        {
          id: 5,
          name: "مرض 5",
          percentage: 13,
        },
      ],
    },
  };

  async componentDidMount() {
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
    }, 1000);
  }

  handleDiseasePress = id => {
    // TODO: navigate to disease detail screen,
    // pass isReplaceOnNavigate = true along with navigation object to prevent stacking unnecessary screens
    console.log(id);
  };

  renderImage = ({ item: uri }) => {
    return (
      <View style={{ position: "relative" }}>
        <Image
          source={{ uri }}
          resizeMode="cover"
          style={{ height: "100%", aspectRatio: 1 }}
        />
      </View>
    );
  };

  renderDisease = ({ id, name, percentage }) => {
    return (
      <TouchableHighlight
        style={[styles.diseaseContainer, this.rtlView]}
        activeOpacity={0.8}
        underlayColor="rgba(0,0,0,0.05)"
        onPress={() => this.handleDiseasePress(id)}
      >
        <>
          <SeverityIndicator showText={false} percentage={percentage} />
          {/* On SeverityIndicator tap; show percentage as a tooltip? */}
          <Text style={styles.diseaseName}>{name}</Text>
        </>
      </TouchableHighlight>
    );
  };

  render() {
    const { loading, error, symptomMeta } = this.state;
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

    const { name, description, images, diseases } = symptomMeta;
    return (
      <SafeAreaView style={[STYLES.mainContainer, { paddingHorizontal: 0 }]}>
        <View>
          <FlatList
            data={images}
            renderItem={this.renderImage}
            horizontal={true}
            inverted={true} // TODO
            keyExtractor={() => Math.random().toString(32)}
            style={styles.imageContainer}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: STYLES.mainContainer.paddingHorizontal,
          }}
        >
          <View style={styles.titleContainer}>
            <Text style={[STYLES.title, this.rtlText]}>{name}</Text>
          </View>
          <Text style={[styles.description, this.rtlText]}>{description}</Text>

          <View style={STYLES.sectionContainer}>
            <View style={STYLES.sectionTitleContainer}>
              <Text style={[STYLES.sectionTitle, this.rtlText]}>الأمراض </Text>
            </View>
            {diseases.map(this.renderDisease)}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 250,
  },
  titleContainer: {
    paddingVertical: 4,
  },
  description: {
    fontSize: 14,
    color: COLORS.primaryText,
  },

  diseaseContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
  },
  diseaseName: {
    fontSize: 14,
    color: COLORS.primaryText,
    paddingHorizontal: 10,
  },
});

import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import Toast from "react-native-toast-message";

import DetailListItem from "../components/DetailListItem";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

import { STYLES } from "../utils/styles";
import { COLORS } from "../utils/colors";

import { SymptomApi } from "../api/SymptomApi";
import { GlobalContext } from "../contexts/Global";

import ScreenWrapper from "../components/ScreenWrapper";
import LoadingIndicator from "../components/LoadingIndicator";

const keyExtractor = ({ id }) => id.toString();

export default class SymptomSearch extends React.Component {
  constructor(props) {
    super(props);

    this.symptomApi = SymptomApi();

    this.isRtl = true; // this.context.isRtl;
    this.rtlView = this.isRtl && STYLES.rtlView;
    this.rtlText = this.isRtl && STYLES.rtlText;
  }

  static contextType = GlobalContext;

  allSymptoms = []; // important for searching and filtering

  state = {
    loading: true,
    symptoms: this.allSymptoms,
    selectedSymptoms: [],
  };

  async componentDidMount() {
    const { navigation } = this.props;

    try {
      const symptoms = await this.symptomApi.getAll();
      this.allSymptoms = symptoms.map(symptom => ({
        id: symptom.id,
        symptomName: symptom.ar_name,
        symptomDescription: symptom.ar_description,
      }));

      this.setState({
        loading: false,
        symptoms: this.allSymptoms,
      });
    } catch {
      Toast.show({
        type: "error",
        text1: "خطأ في تحميل الصفحة",
        props: { isRtl: true },
      });
      navigation.goBack();
    }
  }

  removeFromSelectedSymptoms = id => {
    const { selectedSymptoms } = this.state;

    this.setState({
      selectedSymptoms: selectedSymptoms.filter(symptom => symptom.id !== id),
    });
  };

  addToSelectedSymptoms = id => {
    const { selectedSymptoms } = this.state;

    this.setState({
      selectedSymptoms: [{ id }, ...selectedSymptoms],
    });
  };

  handleSelectedSymptomPress = id => {
    this.removeFromSelectedSymptoms(id);
  };

  renderSelectedSymptoms = ({ id }) => {
    const { symptomName } = this.allSymptoms.find(symptom => symptom.id == id);

    return (
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor={"rgba(0,0,0,0.05)"}
        onPress={() => this.handleSelectedSymptomPress(id)}
        style={[
          styles.selectedSymptomContainer,
          this.rtlView,
          { transform: [{ scaleX: -1 }] },
        ]}
        key={id}
      >
        <>
          <Text style={styles.selectedSymptomText}>-</Text>
          <Text style={styles.selectedSymptomText}>{symptomName}</Text>
        </>
      </TouchableHighlight>
    );
  };

  // Navigate to SymptomDetail
  handleSymptomPress = id => {
    const { navigation } = this.props;
    navigation.navigate("SymptomDetail", { id });
  };

  handleSymptomSymbolPress = id => {
    const { selectedSymptoms } = this.state;
    if (selectedSymptoms.some(symptom => symptom.id === id))
      return this.removeFromSelectedSymptoms(id);

    this.addToSelectedSymptoms(id);
  };

  renderSymptoms = ({ item: { id, symptomName, symptomDescription } }) => {
    const { selectedSymptoms } = this.state;
    const symbol = selectedSymptoms.some(symptom => symptom.id === id)
      ? "-"
      : "+";
    const symbolStyle = {
      opacity: symbol === "+" ? 1 : 0.8,
    };

    return (
      <View
        style={[styles.searchItemContainer, this.rtlView]} //TODO: lang
      >
        <TouchableOpacity
          style={styles.searchItemSymbolContainer}
          activeOpacity={0.5}
          onPress={() => this.handleSymptomSymbolPress(id)}
        >
          <Text style={[styles.searchItemSymbol, symbolStyle]}>{symbol}</Text>
        </TouchableOpacity>

        <TouchableHighlight
          style={styles.detailListItemContainer}
          activeOpacity={0.8}
          underlayColor={"rgba(0,0,0,0.05)"}
          onPress={() => this.handleSymptomPress(id)}
        >
          <DetailListItem
            title={symptomName}
            subtitle={symptomDescription}
            isRtl={this.isRtl}
          />
        </TouchableHighlight>
      </View>
    );
  };

  handleSearch = text => {
    let symptoms = this.allSymptoms;
    if (text)
      symptoms = this.allSymptoms.filter(
        ({ symptomName, symptomDescription }) =>
          symptomName.includes(text) || symptomDescription.includes(text)
      );

    this.setState({
      symptoms,
    });
  };

  // Navigate to Question
  handleButtonPress = () => {
    const { selectedSymptoms } = this.state;
    if (selectedSymptoms.length < 2) {
      Toast.show({
        type: "info",
        text1: "معلومات غير كافية",
        text2: "يجب على الأقل اختيار عرضين تشعر بهما حاليًا",
        props: { isRtl: true },
      });
      return;
    }

    const { navigation } = this.props;
    navigation.navigate("Question", { symptoms: selectedSymptoms });
  };

  render() {
    const { loading, symptoms, selectedSymptoms } = this.state;

    if (loading) return <LoadingIndicator color={COLORS.primaryText} />;

    return (
      <ScreenWrapper>
        <View style={STYLES.mainContainer}>
          <View style={styles.topContainer}>
            <View style={STYLES.titleContainer}>
              <Text style={STYLES.title}>ما الذي تشعر به؟</Text>
            </View>

            <TextInput
              icon="search"
              isRtl={this.isRtl}
              placeholder="بحث" //TODO: lang
              clearButtonMode={"while-editing"} // IOS only
              style={{ marginBottom: 5 }}
              onChangeText={this.handleSearch}
            />

            {!!selectedSymptoms.length && (
              <ScrollView
                style={[
                  styles.selectedSymptomsScroller,
                  { marginTop: 5 },
                  { transform: [{ scaleX: -1 }] },
                ]} //TODO: lang
                horizontal={true}
                fadingEdgeLength={400} // Android only
                showsHorizontalScrollIndicator={false}
              >
                {selectedSymptoms.map(this.renderSelectedSymptoms)}
              </ScrollView>
            )}
          </View>

          <FlatList
            data={symptoms}
            renderItem={this.renderSymptoms}
            keyExtractor={keyExtractor}
            extraData={selectedSymptoms}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          />

          <View style={styles.buttonContainer}>
            <Button
              title="التالي" //TODO: lang
              onPress={this.handleButtonPress}
            />
          </View>
        </View>
      </ScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({
  /* Selected Symptoms */
  selectedSymptomsScroller: {
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  selectedSymptomContainer: {
    flexDirection: "row",
    paddingVertical: 2,
    paddingHorizontal: 8,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: COLORS.primaryText,
    borderRadius: 5,
  },
  selectedSymptomText: {
    fontSize: 12,
    color: COLORS.primaryText,
    marginHorizontal: 2,
  },

  /* Search Items */
  searchItemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailListItemContainer: {
    flex: 1,
  },
  searchItemSymbolContainer: {
    width: 30,
    height: 30,
  },
  searchItemSymbol: {
    fontSize: 20,
    color: COLORS.primaryText,
    textAlign: "center",
  },

  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 80,
    alignSelf: "stretch",
  },
});

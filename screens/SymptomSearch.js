import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  FlatList,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import PropTypes from "prop-types";

import DetailListItem from "../components/DetailListItem";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

import { STYLES } from "../utils/styles";
import { COLORS } from "../utils/colors";

const { rtlView } = STYLES;
const keyExtractor = ({ id }) => Math.random().toString(32).slice(2); // TODO: change to id.toString()

export default class SymptomSearch extends React.Component {
  // static propTypes = {
  //   prop1: PropTypes.string,
  //   prop2: PropTypes.number.isRequired,
  //   prop3: PropTypes.func,
  // };

  allSymptoms = [
    {
      id: 1,
      symptomName: "صداع",
      symptomDescription:
        "ألم في الرأس، إذ يمكن أن يحدث في أي جزء من الرأس، أو على جانبي الرأس، أو في جانب واحد فقط.",
    },
    {
      id: 2,
      symptomName: "كحة",
      symptomDescription:
        "طرد فجائي للهواء عبر الحنجرة يساعد على تنظيف الممرات التنفسية الكبيرة من السوائل والمهيجات والجزيئات الغريبة والميكروبات وعادة ما يحدث بشكل .",
    },
    {
      id: 3,
      symptomName: "حمى",
      symptomDescription: "ارتفاع في درجة حرارة الجسم.",
    },
    {
      id: 1,
      symptomName: "صداع",
      symptomDescription:
        "ألم في الرأس، إذ يمكن أن يحدث في أي جزء من الرأس، أو على جانبي الرأس، أو في جانب واحد فقط.",
    },
    {
      id: 2,
      symptomName: "كحة",
      symptomDescription:
        "طرد فجائي للهواء عبر الحنجرة يساعد على تنظيف الممرات التنفسية الكبيرة من السوائل والمهيجات والجزيئات الغريبة والميكروبات وعادة ما يحدث بشكل .",
    },
    {
      id: 3,
      symptomName: "حمى",
      symptomDescription: "ارتفاع في درجة حرارة الجسم.",
    },
    {
      id: 1,
      symptomName: "صداع",
      symptomDescription:
        "ألم في الرأس، إذ يمكن أن يحدث في أي جزء من الرأس، أو على جانبي الرأس، أو في جانب واحد فقط.",
    },
    {
      id: 2,
      symptomName: "كحة",
      symptomDescription:
        "طرد فجائي للهواء عبر الحنجرة يساعد على تنظيف الممرات التنفسية الكبيرة من السوائل والمهيجات والجزيئات الغريبة والميكروبات وعادة ما يحدث بشكل .",
    },
    {
      id: 3,
      symptomName: "حمى",
      symptomDescription: "ارتفاع في درجة حرارة الجسم.",
    },
    {
      id: 1,
      symptomName: "صداع",
      symptomDescription:
        "ألم في الرأس، إذ يمكن أن يحدث في أي جزء من الرأس، أو على جانبي الرأس، أو في جانب واحد فقط.",
    },
    {
      id: 2,
      symptomName: "كحة",
      symptomDescription:
        "طرد فجائي للهواء عبر الحنجرة يساعد على تنظيف الممرات التنفسية الكبيرة من السوائل والمهيجات والجزيئات الغريبة والميكروبات وعادة ما يحدث بشكل .",
    },
    {
      id: 3,
      symptomName: "حمى",
      symptomDescription: "ارتفاع في درجة حرارة الجسم.",
    },
    {
      id: 1,
      symptomName: "صداع",
      symptomDescription:
        "ألم في الرأس، إذ يمكن أن يحدث في أي جزء من الرأس، أو على جانبي الرأس، أو في جانب واحد فقط.",
    },
    {
      id: 2,
      symptomName: "كحة",
      symptomDescription:
        "طرد فجائي للهواء عبر الحنجرة يساعد على تنظيف الممرات التنفسية الكبيرة من السوائل والمهيجات والجزيئات الغريبة والميكروبات وعادة ما يحدث بشكل .",
    },
    {
      id: 3,
      symptomName: "حمى",
      symptomDescription: "ارتفاع في درجة حرارة الجسم.",
    },
    {
      id: 1,
      symptomName: "صداع",
      symptomDescription:
        "ألم في الرأس، إذ يمكن أن يحدث في أي جزء من الرأس، أو على جانبي الرأس، أو في جانب واحد فقط.",
    },
    {
      id: 2,
      symptomName: "كحة",
      symptomDescription:
        "طرد فجائي للهواء عبر الحنجرة يساعد على تنظيف الممرات التنفسية الكبيرة من السوائل والمهيجات والجزيئات الغريبة والميكروبات وعادة ما يحدث بشكل .",
    },
    {
      id: 3,
      symptomName: "حمى",
      symptomDescription: "ارتفاع في درجة حرارة الجسم.",
    },
  ];

  state = {
    symptoms: this.allSymptoms,
    selectedSymptoms: [
      {
        id: 1,
      },
      {
        id: 3,
      },
    ],
  };

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
          rtlView,
          { transform: [{ scaleX: -1 }] },
        ]} //TODO
        key={id}
      >
        <>
          <Text style={styles.selectedSymptomText}>-</Text>
          <Text style={styles.selectedSymptomText}>{symptomName}</Text>
        </>
      </TouchableHighlight>
    );
  };

  handleSymptomPress = id => {
    //TODO: navigate to symptomDetail screen
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
        style={[styles.searchItemContainer, rtlView]} //TODO
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
            isRtl={true} //TODO
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

  handleButtonPress = () => {
    // TODO: navigate to question screen with the selected symptoms
  }

  render() {
    const { symptoms, selectedSymptoms } = this.state;

    return (
      <SafeAreaView style={STYLES.mainContainer}>
        <View style={styles.topContainer}>
          <View style={STYLES.titleContainer}>
            <Text style={STYLES.title}>ما الذي تشعر به؟</Text>
          </View>

          <TextInput
            icon="search"
            isRtl={true} // TODO
            placeholder="بحث" //TODO
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
              ]} //TODO
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
            title="التالي" //TODO
            onPress={this.handleButtonPress}
          />
        </View>
      </SafeAreaView>
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

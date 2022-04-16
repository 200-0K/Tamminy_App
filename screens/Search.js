import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import Toast from "react-native-toast-message";

import { STYLES } from "../utils/styles";
import { COLORS } from "../utils/colors";

import { DiseaseApi } from "../api/DiseaseApi";
import { SymptomApi } from "../api/SymptomApi";

import TextInput from "../components/TextInput";
import DetailListItem from "../components/DetailListItem";
import ScreenWrapper from "../components/ScreenWrapper";

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.diseaseApi = DiseaseApi();
    this.symptomApi = SymptomApi();

    this.isRtl = true; // TODO: lang
    this.rtlView = this.isRtl && STYLES.rtlView;
    this.rtlText = this.isRtl && STYLES.rtlText;
  }

  categories = [];

  state = {
    loading: true,
    currentCategory: null,
    categories: [],
    items: [],
  };

  async componentDidMount() {
    const { navigation } = this.props;

    try {
      const symtpomCategory = {
        name: "symptoms",
        ar: "اعراض",
        items: [],
        itemPressHanlder: id => this.handleSymptomPress(id),
      };
      const symptoms = await this.symptomApi.getAll();
      symtpomCategory.items = symptoms.map(symptom => ({
        id: symptom.id,
        name: symptom.ar_name,
        description: symptom.ar_description,
      }));

      const diseaseCategory = {
        name: "Disease",
        ar: "امراض",
        items: [],
        itemPressHanlder: id => this.handleDiseasePress(id),
      };
      const diseases = await this.diseaseApi.getAll();
      diseaseCategory.items = diseases.map(disease => ({
        id: disease.id,
        name: disease.ar_name,
        description: disease.ar_description,
      }));

      this.categories.push(symtpomCategory, diseaseCategory);

      this.setState({
        loading: false,
        currentCategory: this.categories[0],
        categories: this.categories,
        searchText: "",
      });
    } catch (e) {
      Toast.show({
        type: "error",
        text1: "تعذر تحميل الصفحة",
        props: { isRtl: true },
      });
      return navigation.goBack();
    }
  }

  handleSymptomPress = id => {
    const { navigation } = this.props;
    navigation.navigate("SymptomDetail", { id });
  };

  handleDiseasePress = id => {
    const { navigation } = this.props;
    navigation.navigate("DiseaseDetail", { id });
  };

  handleItemPress = id => {
    const { currentCategory } = this.state;
    currentCategory.itemPressHanlder(id);
  };

  handleCategoryChange = category => {
    this.setState({
      currentCategory: category,
    });
  };

  renderCategory = ({ item: category }) => {
    const { currentCategory } = this.state;
    const categoryStyle = {
      opacity: category.name == currentCategory.name ? 1 : 0.5,
    };

    return (
      <TouchableOpacity
        style={[styles.categoryContainer, categoryStyle]}
        activeOpacity={0.6}
        onPress={() => this.handleCategoryChange(category)}
      >
        <Text style={styles.categoryText}>{category.ar}</Text>
      </TouchableOpacity>
    );
  };

  renderSearchItem = ({ item: { id, name, description } }) => {
    return (
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor="rgba(0,0,0,0.2)"
        onPress={() => this.handleItemPress(id)}
      >
        <DetailListItem
          title={name}
          subtitle={description}
          isRtl={this.isRtl}
        />
      </TouchableHighlight>
    );
  };

  handleSearch = text => {
    this.setState({
      searchText: text,
    });
  };

  render() {
    const { loading, searchText, categories, currentCategory } = this.state;
    const items = currentCategory?.items;

    return (
      <ScreenWrapper>
        <View style={STYLES.mainContainer}>
          <View>
            <View style={STYLES.titleContainer}>
              <Text style={STYLES.title}>بحث</Text>
            </View>

            {!loading && (
              <>
                <TextInput
                  icon="search"
                  isRtl={this.isRtl}
                  placeholder="بحث" //TODO
                  clearButtonMode={"while-editing"} // IOS only
                  onChangeText={this.handleSearch}
                />

                <FlatList
                  data={categories}
                  renderItem={this.renderCategory}
                  extraData={currentCategory} // if current category change then re-render flatlist
                  horizontal={true}
                  inverted={true}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.categoriesContainer}
                  // keyExtractor={({name}) => name}
                  keyExtractor={() => Math.random().toString(32)}
                  keyboardShouldPersistTaps="handled"
                />
              </>
            )}
          </View>

          {loading && (
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
          )}

          {!loading && (
            <FlatList
              data={
                searchText
                  ? items.filter(
                      ({ name, description }) =>
                        name.includes(searchText) ||
                        description.includes(searchText)
                    )
                  : items
              }
              renderItem={this.renderSearchItem}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.bodyContainerFlatList}
              keyExtractor={({ id }) => `${currentCategory.name}.${id}`}
              keyboardShouldPersistTaps="handled"
            />
          )}
        </View>
      </ScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({
  categoriesContainer: {
    flex: 1,
    justifyContent: "center",
    marginVertical: 10,
  },
  categoryContainer: {
    marginHorizontal: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primaryText,
    borderRadius: 2,
  },
  categoryText: {
    fontSize: 20,
    color: COLORS.primaryText,
  },

  bodyContainerFlatList: {
    paddingBottom: 20,
  },
});

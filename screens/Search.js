import React from "react";
import { SafeAreaView, StyleSheet, View, Text, FlatList, ActivityIndicator, TouchableOpacity, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";

import TextInput from "../components/TextInput";

import { STYLES } from "../utils/styles";
import { COLORS } from "../utils/colors";
import DetailListItem from "../components/DetailListItem";


const keyExtractor = (category, id) => `${category}.${id}`;

export default class Search extends React.Component {
  // static propTypes = {
  //   prop1: PropTypes.string,
  //   prop2: PropTypes.number.isRequired,
  //   prop3: PropTypes.func,
  // };

  categories = [
    {
      name: "symptoms",
      ar: "اعراض",
      items: [
        {
          id: 1,
          name: "صداع",
          description:
            "ألم في الرأس، إذ يمكن أن يحدث في أي جزء من الرأس، أو على جانبي الرأس، أو في جانب واحد فقط.",
        },
        {
          id: 2,
          name: "كحة",
          description:
            "طرد فجائي للهواء عبر الحنجرة يساعد على تنظيف الممرات التنفسية الكبيرة من السوائل والمهيجات والجزيئات الغريبة والميكروبات وعادة ما يحدث بشكل .",
        },
        {
          id: 3,
          name: "حمى",
          description: "ارتفاع في درجة حرارة الجسم.",
        },
      ],
      itemPressHanlder: id => this.handleSymptomPress(id)
      // fetchItems: // initialize API class & call fetch
    },
    {
      name: "diseases",
      ar: "امراض",
      items: [
        {
          id: 1,
          name: "كورونا",
          description :
            "فيروسات كورونا فصيلة واسعة الانتشار معروفة بأنها تسبب أمراضاً تتراوح من نزلات البرد الشائعة إلى الاعتلالات الأشد وطأة مثل متلازمة الشرق الأوسط التنفسية (MERS) ومتلازمة الالتهاب الرئوي الحاد الوخيم.",
        },
        {
          id: 2,
          name: "نزلة برد",
          description :
            "فيروسات كورونا فصيلة واسعة الانتشار معروفة بأنها تسبب أمراضاً تتراوح من نزلات البرد الشائعة إلى الاعتلالات الأشد وطأة مثل متلازمة الشرق الأوسط التنفسية (MERS) ومتلازمة الالتهاب الرئوي الحاد الوخيم.",
        },
        {
          id: 3,
          name: "حساسية",
          description:
            "فيروسات كورونا فصيلة واسعة الانتشار معروفة بأنها تسبب أمراضاً تتراوح من نزلات البرد الشائعة إلى الاعتلالات الأشد وطأة مثل متلازمة الشرق الأوسط التنفسية (MERS) ومتلازمة الالتهاب الرئوي الحاد الوخيم.",
        }
      ],
      itemPressHanlder: id => this.handleDiseasePress(id),
      // fetchItems: // initialize API class & call fetch
    },
  ]

  state = {
    loading: true,
    error: false,
    currentCategory: null,
    categories: [],
    items: [],
  };

  async componentDidMount() {
    // TODO
    // Otherwise:
      // this.categories.forEach(categoryMeta => {
        // categoryMeta.items = await categoryMeta.fetchItems(); // fetch id, name, description of all symptoms & diseases
          // Check local storage; if category available, check if up-to-date (by hash? || expiry date?) Then:
          // return local storage category
          // if not avaliable then fetch it from API and save it, then return it
      // })
    //
    
    // if no error update state:
    this.setState({
      loading: false,
      error: false,
      currentCategory: this.categories[0],
      categories: this.categories,
      searchText: ""
    })
  }

  handleSymptomPress = id => {
    // TODO: navigate to symptom detail screen
    console.log("symptom", id)
  }

  handleDiseasePress = id => {
    // TODO: navigate to disease detail screen
    console.log("disease", id)
  }

  handleItemPress = id => {
    const { currentCategory } = this.state;
    currentCategory.itemPressHanlder(id);
  }

  handleCategoryChange = category => {
    this.setState({
      currentCategory: category,
    })
  }

  renderCategory = ({item: category}) => {
    const { currentCategory } = this.state;
    const categoryStyle = {
      opacity: (category.name == currentCategory.name) ? 1 : .5
    }

    return (
      <TouchableOpacity 
        style={[styles.categoryContainer, categoryStyle]}
        activeOpacity={.6}
        onPress={() => this.handleCategoryChange(category)}
      >
        <Text style={styles.categoryText}>{category.ar}</Text>
      </TouchableOpacity>
    );
  }

  renderSearchItem = ({item: {id, name, description}}) => {
    return (
      <TouchableHighlight
        activeOpacity={.8}
        underlayColor="rgba(0,0,0,0.2)"
        onPress={() => this.handleItemPress(id)}
      >
        <DetailListItem
          title={name}
          subtitle={description}
          isRtl={true}
        />
      </TouchableHighlight>
    )
  }

  handleSearch = text => {
    this.setState({
      searchText: text
    });
  };

  render() {
    const { loading, error, searchText, categories, currentCategory } = this.state;
    const items = currentCategory?.items;

    return (
      <SafeAreaView style={[STYLES.mainContainer, styles.container]}>
        <View>
          <View style={STYLES.titleContainer}>
            <Text style={STYLES.title}>بحث</Text> 
            {/* TODO */}
          </View>

          <TextInput
            icon="search"
            isRtl={true} // TODO
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
            keyExtractor={() => Math.random().toString(32)}
            keyboardShouldPersistTaps="handled"
          />
        </View>
        
        {loading && (
          <View styles={[StyleSheet.absoluteFill, {justifyContent: "center", alignItems: "center"}]}>
            <ActivityIndicator size="large" color={COLORS.primaryText}/>
          </View>
        )}

        {/* {error && (
          // TODO
        )} */}

        {!loading && !error && (
          <FlatList 
            data={searchText ? items.filter(({name, description}) => (name.includes(searchText) || description.includes(searchText))) : items}
            renderItem={this.renderSearchItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.bodyContainerFlatList}
            keyExtractor={({id}) => keyExtractor(id, currentCategory.name)}
            // keyExtractor={() => Math.random().toString(32)}
            keyboardShouldPersistTaps="handled"
          />
          // TODO: if there is no result show something
        )}
      </SafeAreaView>
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
    paddingBottom: 20
  },
});

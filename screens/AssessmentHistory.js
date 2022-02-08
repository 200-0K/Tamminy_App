import React from 'react';
import { StatusBar } from "expo-status-bar";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableHighlight,
} from "react-native";


import { COLORS } from "../utils/colors";
import { STYLES } from "../utils/styles";
import { formatDate } from "../utils/date";
import DetailListItem from "../components/DetailListItem";
import TextInput from "../components/TextInput";


const { rtlText, rtlView } = STYLES;
export default class AssessmentHistory extends React.Component {
    state = {
        // loading: true,
        // error: false,
        // id: null,
        // date: null,
        PreviousAssessment: [  {

            id: 12,
            AssessmentName: 'كورونا',
            Description:'يُسبب الفيروس في البشر عداوَى في الجهاز التنفسي والتي تتضمن الزكام وعادةً ما تكون طفيفةً، ونادرًا ما تكون قاتلةً مثل المتلازمة التنفسية الحادة'
        },
        {

            id: 13,
            AssessmentName: 'حساسية',
            Description:'يُسبب الفيروس في البشر عداوَى في الجهاز التنفسي والتي تتضمن الزكام وعادةً ما تكون طفيفةً، ونادرًا ما تكون قاتلةً مثل المتلازمة التنفسية الحادة'
        
        },
        {

            id: 14,
            AssessmentName: 'نزلة برد',
            Description:'يُسبب الفيروس في البشر عداوَى في الجهاز التنفسي والتي تتضمن الزكام وعادةً ما تكون طفيفةً، ونادرًا ما تكون قاتلةً مثل المتلازمة التنفسية الحادة'
        
        },
        {

            id: 15,
            AssessmentName: 'انيميا',
            Description:'يُسبب الفيروس في البشر عداوَى في الجهاز التنفسي والتي تتضمن الزكام وعادةً ما تكون طفيفةً، ونادرًا ما تكون قاتلةً مثل المتلازمة التنفسية الحادة'
        
        },
        {

            id: 16,
            AssessmentName: 'اكزيما',
            Description:'يُسبب الفيروس في البشر عداوَى في الجهاز التنفسي والتي تتضمن الزكام وعادةً ما تكون طفيفةً، ونادرًا ما تكون قاتلةً مثل المتلازمة التنفسية الحادة'
        
        }],
    };


    async componentPreviousAssessment() {

        // const date = formatDate();
        // try {
        //     setTimeout(() => {
        //         this.setState({
        //             loading: false,
        //             error: false,
        //             date,
        //             possibleDiseases,
        //             selectedSymptoms,
        //         });
        //     }, 5000); //! update the state after 5 second | For Testing
        // } catch (e) {
        //     this.setState({
        //         loading: false,
        //         error: true,
        //     });
        // }

    }

    handleAssessmentNameOnPress = ({ id }) => {}

    renderAssessmentHistory = ({ id, AssessmentName, Description }) => (

        <TouchableHighlight 
        style={[styles.listItemContainer, rtlView]} // TODO: based app language
            activeOpacity={0.8}
            underlayColor={"rgba(0,0,0,0.05)"}
            onPress={() => this.handleAssessmentNameOnPress(id)}
            key={id}
        >
            <DetailListItem
                title={AssessmentName}
                subtitle={Description}
                isRtl={true} // TODO: based app language
                style={styles.detailListItem}
            />
        </TouchableHighlight>

    );

    render() {
        const { PreviousAssessment } = this.state;

        return (
            
            <SafeAreaView style={STYLES.mainContainer}>
                <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                    <View style={[STYLES.titleContainer, styles.titleContainer]}>
                        <Text style={[STYLES.title, styles.title]}>
                            التشخيصات السابقة
                        </Text>
                    </View>

                    <TextInput
                        marginTop={30}
                        icon="search"
                        isRtl={true} // TODO
                        placeholder="للبحث عن التشخيصات السابقة " //TODO
                        clearButtonMode={"while-editing"} // IOS only
                        style={{ marginBottom: 20 }}
                    />
                    <View style={styles.sectionContainer}>
                        <View style={styles.listContainer}>
                            {PreviousAssessment.map(this.renderAssessmentHistory)}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
         marginTop: StatusBar.currentHeight,
    },
    titleContainer: {
        borderBottomWidth: 2,
        borderColor: COLORS.primaryText,
        alignSelf: "center",

    },
    sectionTitle: {
        fontSize: 28,
        fontWeight: "bold",
        color: COLORS.primaryText,
    },
    listItemContainer: {
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 5,
    },
    listContainer: {
        marginVertical: 2,
        paddingHorizontal: 4,
        paddingVertical: 2,
    },
    sectionContainer: {
        marginTop: 30,
    },
    detailListItem: {
        paddingVertical: 0,
        paddingHorizontal: 10,
    },
    // sectionTitleContainer: {
    //     marginVertical: 4,
    //     paddingVertical: 4,
    //     paddingHorizontal: 8,
    //     borderWidth: 2,
    //     borderRadius: 12,
    //     borderColor: COLORS.primaryText,
    //     alignSelf: "center",
    //     alignItems: "center",
    // },

});
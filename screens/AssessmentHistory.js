import React from 'react';
import PropTypes from "prop-types";
import { StatusBar } from "expo-status-bar";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    CheckBox,
    ScrollView,
    Input,
    KeyboardAvoidingView,
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
        loading: true,
        error: false,
        id: null,
        date: null,
        PreviousAssessment: [],
    };


    async componentPreviousAssessment() {

        const date = formatDate();
        const PreviousAssessment = [
            
            {

            id: 12,
            AssessmentName: 'كورونا'
        },
        {

            id: 13,
            AssessmentName: 'حساسية'
        },
        {

            id: 14,
            AssessmentName: 'نزلة برد'
        },
        {

            id: 15,
            AssessmentName: 'انيميا'
        },
        {

            id: 16,
            AssessmentName: 'اكزيما'
        }];

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

    renderAssessmentHistory = ({ id, AssessmentName }) => (

        <TouchableHighlight 
        style={[styles.listItemContainer, rtlView]} // TODO: based app language
            activeOpacity={0.8}
            underlayColor={"rgba(0,0,0,0.05)"}
            onPress={() => this.handleAssessmentNameOnPress(id)}
            key={id}
        >
            <DetailListItem
                title={AssessmentName}
                //subtitle={AssessmentName}
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
                        style={{ marginBottom: 15 }}
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
        marginTop: 40, // need to fiex
        backgroundColor: "#fff",
        alignItems: "center",
        //  marginTop: StatusBar.currentHeight,
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
        paddingVertical: 7,
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
    sectionTitleContainer: {
        marginVertical: 4,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderWidth: 2,
        borderRadius: 12,
        borderColor: COLORS.primaryText,
        alignSelf: "center",
        alignItems: "center",
    },

});

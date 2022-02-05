import {
    StyleSheet, View, Text, ScrollView, SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from "prop-types";
import HomeSvg from "../components/svg/Home";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from "../utils/colors";
import { STYLES } from "../utils/styles";





export default class Home extends React.Component {
    static propTypes = {
        prop1: PropTypes.string,
        prop2: PropTypes.number.isRequired,
        prop3: PropTypes.func,
    };

    render() {
        // const { ... } = this.props;

        return (

            <SafeAreaView style={STYLES.mainContainer}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <MaterialCommunityIcons style={{ paddingHorizontal: 10, paddingVertical: 10 }} name="text-search" size={24} color={COLORS.buttonText} />
                        </View>
                        <TouchableOpacity style={{ paddingHorizontal: 5 }}>
                            <Text style={{
                                color: COLORS.primaryText,
                                fontSize: 20,
                                fontWeight: "bold",
                            }}> تسجيل الدخول</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1 }}>
                        <View>
                            <HomeSvg />
                        </View>
                        <View>
                            <Text style={[styles.title, { textAlign: 'right' }]
                            }>هل تعاني </Text>
                            <Text style={[styles.title, { textAlign: 'left' }]
                            }>من شيء؟</Text>
                        </View>

                        <View style={[styles.buttonicon, { paddingTop: 20 }]}>
                            <TouchableOpacity style={{ paddingHorizontal: 10 }}  >
                                <Text style={{
                                    color: COLORS.buttonText,
                                    fontSize: 30,

                                }}>تشخيص</Text>
                            </TouchableOpacity>
                            <MaterialCommunityIcons name="stethoscope" size={30} color={COLORS.buttonText} />
                        </View>

                        <View style={[styles.buttonicon, { paddingTop: 12 }]}>
                            <TouchableOpacity style={{ paddingHorizontal: 10 }}  >
                                <Text style={{
                                    color: COLORS.buttonText,
                                    fontSize: 30,

                                }}>سجل التشخيصات</Text>
                            </TouchableOpacity>
                            <MaterialCommunityIcons name="note-plus-outline" size={30} color={COLORS.buttonText} />
                        </View>
                        <View style={{ paddingTop: 120, alignSelf: 'flex-end', paddingHorizontal: 5, paddingBottom: 5 }}>
                            <MaterialIcons name="feedback" size={24} color={COLORS.buttonText} />
                        </View>


                    </View>

                    <StatusBar style="auto" />


                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    title: {
        fontSize: 60,
        color: COLORS.primaryText,
        paddingHorizontal: 5
    },
    
    buttonicon: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        paddingHorizontal: 5
    }

})
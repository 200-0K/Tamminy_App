import {
    StyleSheet, View, Text, ScrollView, SafeAreaView,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import PropTypes from "prop-types";
import HomeSvg from "../components/svg/Home";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default class Home extends React.Component {
    static propTypes = {
      prop1: PropTypes.string,
      prop2: PropTypes.number.isRequired,
      prop3: PropTypes.func,
    };

    render() {
        // const { ... } = this.props;

        return (
            <ScrollView>
            <SafeAreaView style={styles.SafeAreaView}>
                
                <View style={{flexDirection: 'row',alignItems:'center',alignSelf:'flex-end'}}>
                <MaterialCommunityIcons style={{paddingHorizontal:220,paddingVertical:10}} name="text-search" size={24} color="black" />
                    <TouchableOpacity style={{paddingHorizontal:5}}>
                        <Text style={{
                            color: "rgba(0,0,0,0.65)",
                            fontSize: 20,
                            fontWeight: "bold",
                            
                        }}> تسجيل الدخول</Text>
                    </TouchableOpacity>
                </View>

                <View >
                    <HomeSvg />
                    <Text style={{
                        fontSize: 60,
                        textAlign: 'right',
                        color: "rgba(0,0,0,0.75)",
                    }}>هل تعاني </Text>
                    <Text style={{
                        fontSize: 60,
                        textAlign: 'left',
                        color: "rgba(0,0,0,0.75)",
                    }}>من شيء؟</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'flex-end', alignSelf: 'flex-end', paddingVertical: 20, paddingHorizontal: 5 }}>
                        <TouchableOpacity style={{ paddingHorizontal: 10 }}  >
                            <Text style={{
                                color: "rgba(0,0,0,0.65)",
                                fontSize: 30,

                            }}>تشخيص</Text>
                        </TouchableOpacity>
                        <FontAwesome style={{}} name="stethoscope" size={30} color="rgba(0,0,0,0.65)" />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'flex-end', alignSelf: 'flex-end', paddingVertical: 0, paddingHorizontal: 5 }}>
                        <TouchableOpacity style={{ paddingHorizontal: 10 }}  >
                            <Text style={{
                                color: "rgba(0,0,0,0.65)",
                                fontSize: 30,

                            }}>سجل التشخيصات</Text>
                        </TouchableOpacity>
                        <FontAwesome5 name="notes-medical" size={30} color="rgba(0,0,0,0.65)" />
                    </View>
                    <View style={{ paddingTop: 120, alignSelf: 'flex-end', paddingHorizontal: 5 }}>
                        <MaterialIcons name="feedback" size={24} color="rgba(0,0,0,0.65)" />
                    </View>


                </View>
                {/* </ScrollView> */}
                <StatusBar style="auto" />
                
            </SafeAreaView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    scrollView: {
        paddingHorizontal: 20,

    },
    SafeAreaView: {
        alignItems: 'center'
    },
    buttonlogin: {
        flex: 0,
        paddingHorizontal: 12,
        paddingVertical: 5,
        alignSelf: 'flex-end',
    },
})
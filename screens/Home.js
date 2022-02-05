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
import { COLORS } from "../utils/colors";
import { formatDate } from "../utils/date";
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
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
            <SafeAreaView style={styles.SafeAreaView}>
                
                <View style={{flexDirection: 'row',alignItems:'center',alignSelf:'flex-end',paddingTop:2}}>
                   <View>
                  <MaterialCommunityIcons style={{paddingHorizontal:220,paddingVertical:10}} name="text-search" size={24} color={COLORS.buttonText} />
                  </View>  
                    <TouchableOpacity style={{paddingHorizontal:5}}>
                        <Text style={{
                            color: COLORS.primaryText,
                            fontSize: 20,
                            fontWeight: "bold",
                            
                        }}> تسجيل الدخول</Text>
                    </TouchableOpacity>
                </View>

                <View >
                    <View>
                    <HomeSvg />
                    </View>
                    <View>
                    <Text style={{
                        fontSize: 60,
                        textAlign: 'right',
                        color: COLORS.primaryText,
                    }}>هل تعاني </Text>
                    <Text style={{
                        fontSize: 60,
                        textAlign: 'left',
                        color: COLORS.primaryText,
                    }}>من شيء؟</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'flex-end', alignSelf: 'flex-end', paddingTop: 20, paddingHorizontal: 5 }}>
                        <TouchableOpacity style={{ paddingHorizontal: 10 }}  >
                            <Text style={{
                                color: COLORS.buttonText,
                                fontSize: 30,

                            }}>تشخيص</Text>
                        </TouchableOpacity>
                        <FontAwesome name="stethoscope" size={30} color={COLORS.buttonText} />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'flex-end', alignSelf: 'flex-end', paddingTop: 12, paddingHorizontal: 5 }}>
                        <TouchableOpacity style={{ paddingHorizontal: 10 }}  >
                            <Text style={{
                                color: COLORS.buttonText,
                                fontSize: 30,

                            }}>سجل التشخيصات</Text>
                        </TouchableOpacity>
                        <FontAwesome5 name="notes-medical" size={30} color={COLORS.buttonText} />
                    </View>
                    <View style={{ paddingTop: 120, alignSelf: 'flex-end', paddingHorizontal: 5,paddingBottom:5 }}>
                        <MaterialIcons name="feedback" size={24} color={COLORS.buttonText} />
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonlogin: {
        flex: 0,
        paddingHorizontal: 12,
        paddingVertical: 5,
        alignSelf: 'flex-end',
    },
})
import { View, Text } from 'react-native';
import React from 'react';
import PropTypes from "prop-types";
import FeedbackSvg from "../components/svg/OTP";
import Feedback from './Feedback';

export default class OTP extends React.Component {
    static propTypes = {
      prop1: PropTypes.string,
      prop2: PropTypes.number.isRequired,
      prop3: PropTypes.func,
    };
  
    render() {
  return (

    <View>
     <Feedback/>
    </View>
  );
}

}



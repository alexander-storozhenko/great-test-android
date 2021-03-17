import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Button,
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback
} from "react-native";
import {
    fontBold,
    fontMedium,
    h2,
    h3,
    h4,
    lightColor,
    titleColor,
    subTitleColor,
    titleColorLight,
    subTitleColorLight,
    primaryColor,
    borderRadius
} from '../StyleConstants';
import Ripple from 'react-native-material-ripple';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableRipple } from 'react-native-paper';
import Eye from '../svg/Eye';
import Love from '../svg/Love';
import { Link } from "react-router-native";
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Profile from '../svg/Profile';
import TestOne from '../svg/TestOne';
import { color } from 'react-native-reanimated';
import TestTwo from '../svg/TestTwo';
import { showNavBar } from '../../actions/navBarAction';
// import { setTestData } from '../../actions/testsAction';
import MainInfoPage_Card from "./mainInfoPage_elements/MainInfoPage_Card";


class Constructor_MainInfoPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <MainInfoPage_Card/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        height: 190,
        marginTop: 15,
        borderRadius: borderRadius,
        // backgroundColor: "#0000",
        elevation: 15,
    },
})

export default connect(
    null,
    dispatch => ({
        onSetTestTemplateData: (data) => dispatch({ type: 'TEST/SET_TEST_T_DATA', payload: data }),
        onShowNavBar: (state) => dispatch(showNavBar(state))
    })
)(Constructor_MainInfoPage);

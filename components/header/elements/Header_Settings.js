import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, TouchableWithoutFeedback} from "react-native";
import {primaryColor} from "../../StyleConstants";
import Settings from "../../svg/Settings";
import {navigate} from "../../../lib/NavigationService";


class Header_Settings extends Component {
    constructor(props) {
        super(props)
    }

    navigateToSettings = () => {

    }

    render() {
        return (
            <View>
                <TouchableWithoutFeedback onPress={() => {
                    navigate('Settings')
                }}>

                    <Settings fill={primaryColor}/>

                </TouchableWithoutFeedback>
            </View>
        );
    }
}

export default connect(state => ({
    navigation: state.currentNavigation
}), null)(Header_Settings);

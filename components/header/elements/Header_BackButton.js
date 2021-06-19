import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View, StyleSheet, Dimensions, TouchableHighlight, TouchableWithoutFeedback} from "react-native";
import {headerHeight, primaryColor, secondaryColor} from "../../StyleConstants";
// import Header_Settings from "./elements/Header_Settings";
import Back from "../../svg/Back";
import {TouchableNativeFeedback} from "react-native";
import {backHeader} from "../../../actions/headerActions";
import {goBack} from "../../../lib/NavigationService";


class Header_BackButton extends Component {
    constructor(props) {
        super(props)
    }

    onClick = () => this.props.navigation.goBack()

    render() {

        return (
            <TouchableWithoutFeedback style={styles.btn} onPress={this.onClick}>
                <Back width={25} height={25} fill={secondaryColor}/>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        height: 40,
        width: 40,
        backgroundColor: secondaryColor,
        position: "relative",
    },
    menuIconContainer: {
        position: "absolute",
        bottom: 5,
        left: 5,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuButton: {
        width: 30,
        height: 30,
    },
    menuIcon: {
        color: "#afa",
    }
});

export default connect(state => ({
    navigation: state.currentNavigation
}), dispatch => ({

    onBack: (show) => dispatch({type: 'HEADER/BACK', payload: {show: show}}),
}))(Header_BackButton);

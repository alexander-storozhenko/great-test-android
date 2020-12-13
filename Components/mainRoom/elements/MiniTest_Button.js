import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View, Text, Dimensions, StyleSheet, TouchableHighlight } from "react-native";
import { fontBold, fontMedium, h2, h3, h4, lightColor, titleColor, contrastColor, fontRegular } from '../../StyleConstants';
import Ripple from 'react-native-material-ripple';
import { LinearGradient } from 'expo-linear-gradient';
import Eye from '../../svg/Eye';
import Love from '../../svg/Love';
import { Link } from "react-router-native";

class MiniTest_Button extends Component {
    constructor(props) {
        super(props)
        this.state = { clicked: false }
    }

    _click() {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {

        return (
            <TouchableHighlight style={styles.button} onPress={() => {
                this._click()
                this.props.onPress()
            }}>
                <Text style={styles.button_text}>{this.props.children}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        paddingBottom: 15,
        paddingTop: 15,
        backgroundColor: contrastColor,
        justifyContent: "center",
        borderRadius: 5,
        marginTop: 10,
        elevation: 5,
    },

    button_text: {
        textAlign: 'center',
        fontSize: h3,
        fontFamily: fontMedium,
        color:lightColor

    }
})

export default MiniTest_Button;

import React, { Component } from 'react';
import { Button, View,Text, StyleSheet } from "react-native";
import {
    borderRadius,
    contrastColor,
    fontBold,
    h2,
    h3,
    lightColor,
    primaryColor,
    secondaryColor,
    disableColor
} from '../StyleConstants';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

class OutBigButton extends Component {
    onPress = () => {
        if (!this.props.disable) this.props.onPress()
    }

    render() {
        return (
            <TouchableNativeFeedback style={[styles.btn, this.props.disable ? styles.disable_btn : null]} onPress={this.onPress}>
                <Text style={[styles.text, this.props.disable ? styles.disable_text : null]}>{this.props.children}</Text>
            </TouchableNativeFeedback>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        width: '100%',
        height: 60,
        borderRadius: borderRadius,
        justifyContent:'center',
        borderColor: secondaryColor,
        borderWidth: 2
    },
    text:{
        fontSize: h3,
        color: secondaryColor,
        textAlign:'center',
        fontFamily: fontBold,
        textTransform: 'uppercase'
    },
    disable_btn: {
        borderColor: disableColor,
        borderWidth: 2,
    },
    disable_text: {
        color: disableColor,
    }
})

export default OutBigButton;

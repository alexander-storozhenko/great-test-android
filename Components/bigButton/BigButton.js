import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View,Text, StyleSheet } from "react-native";
import { contrastColor, fontBold, h2, h3, primaryColor } from '../StyleConstants';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

class BigButton extends Component {
    render() {
        return (
            <TouchableNativeFeedback style={styles.button} onPress={()=>{this.props.onPress()}}>
                <Text style={styles.button_text}>{this.props.children}</Text>
            </TouchableNativeFeedback>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: contrastColor,
        color: primaryColor,
        width: '100%',
        height: 60,
        borderRadius: 5,
        justifyContent:'center',
        elevation: 8
    },
    button_text:{
        fontSize:h2,
        color: 'white',
        textAlign:'center',
        fontFamily: fontBold,
    }
})

export default BigButton;

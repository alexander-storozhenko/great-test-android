import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View,Image, Text, StyleSheet, Dimensions, ActivityIndicator, TouchableNativeFeedback} from "react-native";
import {contrastColor, primaryColor} from "../StyleConstants";

class RoundedButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container} >
                <TouchableNativeFeedback style={{borderRadius: 30}} onPress={()=> this.props.action()}>
                    <View style={styles.btn}>
                <Text style={{color: primaryColor, fontSize: 25}}>+</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        overflow: 'hidden',
        elevation: 8,
        borderRadius: 30,
        width:60,
        height: 60,
    },
    btn: {
        position:'absolute',
        width:60,
        height: 60,
        borderRadius: 30,
        backgroundColor: contrastColor,
        alignItems:'center',
        justifyContent: 'center',

    },

})

export default RoundedButton;

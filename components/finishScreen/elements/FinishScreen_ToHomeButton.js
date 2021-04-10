import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator, TouchableNativeFeedback} from "react-native";
import {
    borderRadius,
    errorColor,
    fontBold,
    h2,
    h3,
    h4,
    lightColor,
    secondaryColor,
    successColor
} from "../../StyleConstants";

class FinishScreen_ToHomeButton extends Component {
    render() {
        return (
            <View style={styles.container}>
               <TouchableNativeFeedback>
                   <View style={styles.btn}>
                       <Text style={styles.text}>TO HOME</Text>
                   </View>
               </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 65,
        // backgroundColor: 'red'

    },
    btn: {
        width: '100%',
        height: '100%',
        borderRadius: borderRadius,
        borderColor: secondaryColor,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: h3,
        fontFamily: fontBold
    }
})

export default FinishScreen_ToHomeButton

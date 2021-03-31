import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View, Image, Text, StyleSheet, Dimensions, ActivityIndicator,TouchableNativeFeedback} from "react-native";
import {borderRadius, h3, primaryColor} from "../../StyleConstants";

class RecommendCard_Button extends Component {
    render() {
        return (
            <View style={[{borderColor: this.props.color},styles.btn]}>
                <TouchableNativeFeedback>
                    <View style={styles.btn_text_container}>
                        <Text style={[{color: this.props.color},styles.btn_text]}>Play!</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        width: 100,
        height: 50,
        borderWidth: 2,
        borderRadius: borderRadius,
    },
    btn_text_container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems:'center',
    },
    btn_text: {
        fontSize: h3,
    }
})

export default RecommendCard_Button;

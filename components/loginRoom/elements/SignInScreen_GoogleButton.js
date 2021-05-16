import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View, StyleSheet, Dimensions, TouchableNativeFeedback, Text, TextInput, ImageBackground} from "react-native";
import {
    borderRadius,
    contrastColor,
    fontBold,
    h3
} from "../../StyleConstants";
import {getTextColor} from "../../../lib/ColorsHelper";

class SignInScreen_GoogleButton extends Component {
    render() {
        return (
            <View>
                <TouchableNativeFeedback onPress={this.props.onPress}>
                    <View style={styles.btn}>
                        <View style={styles.content}>
                            <ImageBackground style={styles.logo} source={require('../../../assets/google_logo.png')}/>
                            <Text style={styles.text}>Sign in with Google</Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        width: '100%',
        height: 55,
        borderRadius: borderRadius,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        elevation: 5,
        marginTop: 10,
    },
    text: {
        fontSize: h3,
        fontFamily: fontBold,
        color: '#757575'
    },
    input: {
        borderRadius: borderRadius,
        borderWidth: 2,
        marginTop: 10,
        height: 40,
        padding: 5,
    },
    logo: {
        width: 30,
        height: 30,
        marginRight: 15
    },
    content: {
        flexDirection: 'row',

    }
});

export default connect(state => ({}), dispatch => ({}))(SignInScreen_GoogleButton);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View, StyleSheet, Dimensions, TouchableNativeFeedback, Text, TextInput} from "react-native";
import {
    borderRadius,
    contrastColor,
    fontBold,
    h3,
    headerHeight,
    primaryColor,
    secondaryColor
} from "../../StyleConstants";
import {getTextColor} from "../../../lib/ColorsHelper";


class SignInScreen_SignInButton extends Component {
    constructor(props) {
        super(props)
        this.state = {name: '', password: ''}
    }

    onClick = () => this.props.onSignIn(this.state.name, this.state.password)


    render() {
        return (
            <View>
                <TouchableNativeFeedback>
                    <View style={styles.btn}>
                        <Text style={styles.text}>Sign In</Text>
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
        backgroundColor: contrastColor,
        elevation: 5,
        marginTop: 10,
    },
    text: {
        fontSize: h3,
        fontFamily: fontBold,
        color: getTextColor(contrastColor)
    },
    input: {
        borderRadius: borderRadius,
        borderWidth: 2,
        marginTop: 10,
        height: 40,
        padding: 5,
    }
});

export default connect(state => ({}), dispatch => ({}))(SignInScreen_SignInButton);

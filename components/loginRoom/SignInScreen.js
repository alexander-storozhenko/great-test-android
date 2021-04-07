import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View, StyleSheet, Dimensions, TouchableHighlight, Text, TextInput} from "react-native";
import {borderRadius, fontBold, h3, headerHeight, primaryColor, secondaryColor} from "../StyleConstants";
import OutMiddleButton from "../ui/OutMiddleButton";
import {signIn} from "../../actions/loginActions/signInAction";
import SignInScreen_SignInButton from "./elements/SignInScreen_SignInButton";

class SignInScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {name: '', password: ''}
    }

    onClick = () => this.props.onSignIn(this.state.name, this.state.password)

    onNameInputChange = (event) => {
        this.setState({name: event.nativeEvent.text.trim()})
    }

    onPasswordInputChange = (event) => {
        this.setState({password: event.nativeEvent.text.trim()})
    }

    render() {
        return (
            <View style={styles.settings}>
                <View>
                    <View style={styles.container}>
                        <Text style={styles.title}>Name</Text>
                        <TextInput style={styles.input} onChange={(event) => this.onNameInputChange(event)}/>
                        <Text style={[styles.title, {marginTop: 10}]}>Password</Text>
                        <TextInput secureTextEntry={true} style={styles.input} onChange={(event) => this.onPasswordInputChange(event)}/>
                        <SignInScreen_SignInButton onPress={this.onClick}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 30,
    },
    title: {
        fontSize: h3,
        fontFamily: fontBold
    },
    input: {
        borderRadius: borderRadius,
        borderWidth: 2,
        marginTop: 10,
        height: 40,
        padding: 5,
    }
});

export default connect(
    state => ({}),
    dispatch => ({
    onSignIn: (name, password) => dispatch(signIn(name, password))
}))(SignInScreen);

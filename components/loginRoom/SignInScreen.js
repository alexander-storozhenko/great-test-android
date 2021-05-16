import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View, StyleSheet, Text, TextInput} from "react-native";
import {
    borderRadius,
    errorColor,
    fontBold, fontRegular,
    h3,
    h4,
} from "../StyleConstants";
import {signIn} from "../../actions/loginActions/signInAction";
import SignInScreen_SignInButton from "./elements/SignInScreen_SignInButton";
import * as GoogleLoginService from '../../lib/GoogleLoginService'
import {storeData} from "../../lib/AsyncStorageHelper";
import {navigate} from "../../lib/NavigationService";
import SignInScreen_GoogleButton from "./elements/SignInScreen_GoogleButton";

class SignInScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {name: '', password: ''}
    }

    componentDidMount() {
        this.props.navigation.addListener('beforeRemove', (e) => {
            if (e.data.action.type === 'GO_BACK')
                e.preventDefault()
        })
    }

    onClick = () => {
        this.props.onSignIn(this.state.name, this.state.password)
    }

    onClickGoogle = () => {

    }

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
                        <Text style={styles.title}>Nickname or email</Text>
                        <TextInput style={styles.input} onChange={(event) => this.onNameInputChange(event)}/>
                        <Text style={[styles.title, {marginTop: 10}]}>Password</Text>
                        <TextInput secureTextEntry={true} style={styles.input}
                                   onChange={(event) => this.onPasswordInputChange(event)}/>
                        {this.props.loginIncorrect ?
                            <Text style={styles.login_error_text}>Incorrect login or password!</Text> : null}
                        <SignInScreen_SignInButton onPress={this.onClick}/>
                        <SignInScreen_GoogleButton onPress={this.onClickGoogle}/>
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
    },
    login_error_text: {
        color: errorColor,
        fontSize: h4,
        fontFamily: fontRegular
    }
});

export default connect(
    state => ({
        loginIncorrect: state.loginIncorrect
    }),
    dispatch => ({
        onSignIn: (name, password) => dispatch(signIn(name, password))
    }))(SignInScreen);

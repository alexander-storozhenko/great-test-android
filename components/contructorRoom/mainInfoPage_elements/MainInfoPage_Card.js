import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Button,
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    TextInput,
    Keyboard
} from "react-native";
import {
    fontBold,
    fontMedium,
    h2,
    h3,
    h4,
    lightColor,
    titleColor,
    subTitleColor,
    titleColorLight,
    subTitleColorLight,
    primaryColor,
    borderRadius
} from '../../StyleConstants';
import {TouchableWithoutFeedback} from "react-native";


class MainInfoPage_Card extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.card}>
                <TextInput placeholder={'Название...'} style={styles.input}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        height: 190,
        maxWidth: 380,
        marginTop: 15,
        borderRadius: borderRadius,
        backgroundColor:'red',
        padding:10,
        // backgroundColor: "#0000",
        // elevation: 15,
    },
    input: {
        width: 200,
        height: 40,
        borderBottomColor: lightColor,
        borderBottomWidth: 2,
    }
})

export default connect(
    null,
    dispatch => ({
        onSetTestTemplateData: (data) => dispatch({ type: 'TEST/SET_TEST_T_DATA', payload: data }),
        onShowNavBar: (state) => dispatch(showNavBar(state))
    })
)(MainInfoPage_Card);

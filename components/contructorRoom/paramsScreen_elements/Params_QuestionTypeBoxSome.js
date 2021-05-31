import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Button,
    View,
    Text,
    Dimensions,
    StyleSheet,
} from "react-native";
import {
    borderRadius, fontBold, h3, lightColor
} from '../../StyleConstants';
import QuestionTypeBoxSome_Button from "./questionTypeBoxOne_elements/QuestionTypeBoxSome_Button";

class Params_QuestionTypeBoxSome extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.title}>What anything in smth?</Text>

                <View>
                    <QuestionTypeBoxSome_Button>Answer 1</QuestionTypeBoxSome_Button>
                    <QuestionTypeBoxSome_Button selected>Answer 2</QuestionTypeBoxSome_Button>
                    <QuestionTypeBoxSome_Button>Answer 3</QuestionTypeBoxSome_Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        padding: 20,
        borderRadius: borderRadius,
        backgroundColor: lightColor,
        alignItems: 'center',
    },
    title: {
        fontFamily: fontBold,
        fontSize: h3,
    },
})

export default connect(
    null,
    dispatch => ({})
)(Params_QuestionTypeBoxSome);

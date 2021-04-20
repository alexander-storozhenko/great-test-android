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
import QuestionTypeBoxOne_Button from "./questionTypeBoxOne_elements/QuestionTypeBoxOne_Button";

class Params_QuestionTypeBoxOne extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.title}>What anything in smth?</Text>

                <View>
                    <QuestionTypeBoxOne_Button>Answer 1</QuestionTypeBoxOne_Button>
                    <QuestionTypeBoxOne_Button selected>Answer 2</QuestionTypeBoxOne_Button>
                    <QuestionTypeBoxOne_Button>Answer 3</QuestionTypeBoxOne_Button>
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
)(Params_QuestionTypeBoxOne);

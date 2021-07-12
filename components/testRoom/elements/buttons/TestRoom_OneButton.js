import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from "react-native";
import {answerBtnWidth, checkedColor, contrastColor, fontBold, h2, primaryColor} from '../../../StyleConstants';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {storeUserAnswer} from "../../../../actions/answersAction";


let textSize;
const BREAK_LENGTH = 25
const BIG_SIZE = 310
const SMALL_SIZE = answerBtnWidth

class TestRoom_OneButton extends Component {
    constructor(props) {
        super(props)
        this.state = {pressed: false}
    }

    onClick = () => {
        if (!this.props.answersSendLoading) {
            this.setState({pressed: !this.state.pressed})
            this.props.storeAnswers('one', !this.props.active, this.props.id, this.props.test_id, this.props.question_number)
        }
    }

    render() {
        textSize = this.props.children.length

        const backgroundColor = this.props.active ? checkedColor : contrastColor
        return (
            <View>
                <TouchableWithoutFeedback onPress={() => this.onClick()}
                                          style={{...styles.button,       width: textSize > BREAK_LENGTH ? BIG_SIZE : SMALL_SIZE ,backgroundColor: backgroundColor}}>
                    <Text style={styles.button_text}>{this.props.children}</Text>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        minHeight: 70,
        borderRadius: 10,
        elevation: 12,
        padding:10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button_text: {
        color: primaryColor,
        fontFamily: fontBold,
        fontSize: h2,
    }
})

export default connect(
    state => ({
        question_number: state.questionNumber,
        user_answers: state.userAnswers,
        answersSendLoading: state.answersSendProgress,
    }),
    dispatch => ({
        storeAnswers: (type, value, answer_id, test_id, question_number) =>
            dispatch(storeUserAnswer(type, value, answer_id, test_id, question_number))
    }))(TestRoom_OneButton);

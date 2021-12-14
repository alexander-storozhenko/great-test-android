import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from "react-native";
import {answerBtnWidth, checkedColor, contrastColor, fontBold, h2, primaryColor} from '../../../StyleConstants';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {storeUserAnswer} from "../../../../actions/answersAction";
import TestRoom_Button from "./TestRoom_Button";


class TestRoom_OneButton extends Component {
    constructor(props) {
        super(props);
        this.state = {pressed: false};
    }

    onClick = () => {
        if (!this.props.answersSendLoading) {
            this.setState({pressed: !this.state.pressed});
            this.props.storeAnswers('one', !this.props.active, this.props.id, this.props.test_id, this.props.question_number);
        }
    }

    render() {
        return (
            <View>
                {/* children - text */}
                <TestRoom_Button
                    type={this.props.image_url ? 'img' : 'text' }
                    checked={this.props.active}
                    text={this.props.children}
                    image_url={this.props.image_url}
                    onClick={this.onClick}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        minHeight: 70,
        borderRadius: 10,
        elevation: 12,
        padding: 10,
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

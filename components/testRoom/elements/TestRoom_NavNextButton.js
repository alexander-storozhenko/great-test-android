import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View, Text, StyleSheet } from "react-native";
import { checkedColor, contrastColor, fontBold, h2, h3, primaryColor, secondaryColor } from '../../StyleConstants';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { sendAnswers } from '../../../actions/answersAction';
import {decreaseQuestionNumber, getQuestion, increaseQuestionNumber} from '../../../actions/questionsAction';
import {getTestResults} from "../../../actions/testsAction";

class TestRoom_NavNextButton extends Component {
    constructor(props) {
        super(props)
        this.state = { pressed: false }
    }

    // TODO now calls problems (goBack on xiomi break logic) on every onNext sends answers.
    onPrev = () => {
        // this.props.onDecreaseQuestionNumber();
        // this.props.navigation.goBack()
    }

    onNext = () => {
        this.props.onSendAnswers(this.props.user_answers, this.props.test_id,this.props.question_number, this.props.navigation)
        if(this.props.question_number >= this.props.question_count)
            this.props.onGetTestResults(this.props.test_id, this.props.navigation)
        else{
            this.props.onGetQuestion(this.props.test_id, this.props.question_number, this.props.navigation)
        }
            // TODO FINISH_SCREEN
        // this.props.onIncreaseQuestionNumber()
    }

    render() {
        return (
            <View style={{ alignItems: 'flex-end', height: 65 }}>
                <View style={styles.container}>
                    <View style={[styles.button, styles.next]}>
                        <TouchableNativeFeedback onPress={() => this.onNext()} style={{ width: '100%', height: '100%' }}>
                            <View style={styles.text_container}>
                                <Text style={styles.text}>next</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 65,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0
    },
    button: {
        height: '100%',
        borderRadius: 10,
        borderColor: secondaryColor,
        borderWidth: 2
    },
    text_container: {
        width: '100%',
        height: 65,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontFamily: fontBold,
        fontSize: h3,
        textTransform: 'uppercase'
    },
    next: {
        width: '100%'
    }
})

export default connect(
    state => ({
        user_answers: state.user_answers,
        question_number: state.questionNumber,
        question_count: state.questionCount,
    }),
    dispatch => ({
        onGetTestResults: (test_id, navigation) => dispatch(getTestResults(test_id, navigation)),
        onIncreaseQuestionNumber: () => dispatch({type: 'QUESTION/INCREASE_NUMBER'}),
        onSendAnswers: (userAnswers, test_id, question_number, navigation) => dispatch(sendAnswers(userAnswers, test_id, question_number, navigation)),
        onGetQuestion: (test_id, question_number, navigation) => dispatch(getQuestion(test_id, question_number, navigation)),
    })
)(TestRoom_NavNextButton);

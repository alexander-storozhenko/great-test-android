import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View, Text, StyleSheet, Dimensions, ActivityIndicator} from "react-native";
import {sendAnswers} from "../../../actions/answersAction";
import {getQuestion} from "../../../actions/questionsAction";

class TestRoom_Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {time: 0}
        this.interval = null
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    ticksStart = () => {
        this.interval = setInterval(() => {
            if (this.state.time === 1) {
                this.props.onTimerExpire()
                return;
            }

            const time = this.state.time - 1
            this.setState({time: time})
        }, 1000)
    }

    componentDidMount() {
        this.setState({time: this.props.start_time})
        this.ticksStart()
    }

    render() {
        return (
            <View>
                <View>
                    <Text>{this.state.time}</Text>
                </View>
            </View>
        );
    }
}

export default connect(
    state => ({
        user_answers: state.userAnswers,
        question_number: state.questionNumber
    }),
    dispatch => ({
        // onSendAnswers: (userAnswers, test_id, question_number, navigation) => dispatch(sendAnswers(userAnswers, test_id, question_number, navigation)),
        onGetQuestion: (test_id, question_number, navigation) => dispatch(getQuestion(test_id, question_number, navigation)),
    })
)(TestRoom_Timer);

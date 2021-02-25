import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View, Text, StyleSheet, Dimensions, ActivityIndicator} from "react-native";
import {sendAnswers} from "../../actions/answersAction";
import {getQuestion} from "../../actions/questionsAction";

class TimerLine extends Component {
    constructor(props) {
        super(props);
        this.state = {time: 0}
        this.interval = null
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
        clearInterval(this.interval)
    }

    ticksStart = () => {
        console.log('kekekekekeke')
        this.interval = setInterval(() => {
                console.log(this.interval)
                if (this.state.time === 0) {
                    this.props.onSendAnswers(this.props.user_answers, this.props.test_id, this.props.question_number, this.props.navigation)
                    this.props.onGetQuestion(this.props.test_id, this.props.question_number, this.props.navigation)
                    return;
                }

                const time = this.state.time - 1
                this.setState({time: time})

        }, 1000)


    }

    componentDidMount() {
        console.log('componentDidMount')
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
        user_answers: state.user_answers,
        question_number: state.questionNumber
    }),
    dispatch => ({
        onSendAnswers: (userAnswers, test_id, question_number, navigation) => dispatch(sendAnswers(userAnswers, test_id, question_number, navigation)),
        onGetQuestion: (test_id, question_number, navigation) => dispatch(getQuestion(test_id, question_number, navigation)),
    })
)(TimerLine);

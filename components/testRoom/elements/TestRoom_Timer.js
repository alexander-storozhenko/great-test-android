import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from "react-native";
import {getQuestion} from "../../../actions/questionsAction";
import {timeWithFormat} from "../../../lib/TimeHelper";

class TestRoom_Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {time: 0};
        this.interval = null;
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    ticksStart = () => {
        this.interval = setInterval(() => {
            if (this.state.time === 1) {
                this.props.onTimerExpire();
                return;
            }

            const time = this.state.time - 1;
            this.setState({time: time});
        }, 1000)
    }

    componentDidMount() {
        this.setState({time: this.props.start_time});
        this.ticksStart();
    }

    render() {
        return (
            <View>
                <View>
                    <Text>{timeWithFormat(this.state.time)}</Text>
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
        onGetQuestion: (test_id, question_number, navigation) => dispatch(getQuestion(test_id, question_number, navigation)),
    })
)(TestRoom_Timer);

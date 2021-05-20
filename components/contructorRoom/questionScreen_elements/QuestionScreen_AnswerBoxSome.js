import React, {Component} from 'react';
import {connect} from 'react-redux';
import QuestionScreen_AnswerButton from "./QuestionScreen_AnswerButton";

class QuestionScreen_AnswerBoxSome extends Component {
    render() {
        const selectedNumber = this.props.selectedNumbers[this.props.number]
        return (<QuestionScreen_AnswerButton number={this.props.number}
                                             onSelectTrue={(number) => {
                                                 this.props.onSelectCurrentSome(number)
                                                 this.forceUpdate()
                                             }}
                                             selected={selectedNumber}/>)
    }
}

export default connect(
    state => ({
        selectedNumbers: state.constructorSelectSome,
    }),
    dispatch => ({
        onSelectCurrentSome: (number) => dispatch({
            type: 'CONSTRUCTOR/QUESTION/SELECT_ANSWER/SOME',
            payload: {number: number}
        })
    })
)(QuestionScreen_AnswerBoxSome);

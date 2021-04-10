import {apiPath, defaultHeaders} from '../lib/Requests'
import {apiDomain} from '../settings/url'
import {sendAnswers} from "./answersAction";
import {replace} from "../lib/NavigationService";

const url = 'questions/get'

export const getQuestion = (test_id, question_number) => dispatch => {
    fetch(apiDomain + apiPath(url, {
        question_number: question_number,
        test_id: test_id
    }))
        .then(res => res.json())
        .then(result => {
            dispatch({type: 'QUESTION/GET_SUCCESS', payload: result})
            dispatch({type: 'QUESTION/INCREASE_NUMBER', payload: question_number})

            replace('Test', {test_id: test_id})
        })
}

export const sendAnswersAndGetNextQuestion = (answers, test_id, question_number) => dispatch => {
    dispatch({type: 'ANSWERS_SEND/PROGRESS', payload: {[test_id]: answers}})
    sendAnswers(answers, test_id, question_number, () => {
        dispatch(getQuestion(test_id, question_number + 1))
    })
}

export const increaseQuestionNumber = (question_number) => dispatch => {
    dispatch({type: 'QUESTION/INCREASE_NUMBER', payload: question_number})
}

export const decreaseQuestionNumber = (question_number) => dispatch => {
    dispatch({type: 'QUESTION/DECREASE_NUMBER', payload: question_number})
}
export const resetQuestionNumber = () => dispatch => {
    dispatch({type: 'QUESTION/RESET_NUMBER', payload: 1})
}
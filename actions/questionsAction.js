import { apiPath } from '../lib/Requests'
import { apiDomain } from '../settings/url'

const url = 'questions/get'

export const getQuestion = (test_id, question_number) => dispatch => {
    dispatch({ type: 'QUESTION/GET_PROGRESS' })

    fetch(apiDomain + apiPath(url, {
        question_number: question_number,
        test_id: test_id
    }))
        .then(res => res.json())
        .then(result => {
            console.log('res',result)
            dispatch({ type: 'QUESTION/GET_SUCCESS', payload: result })
        })
}

export const increaseQuestionNumber = (question_number) => dispatch => {
    dispatch({ type: 'QUESTION/INCREASE_NUMBER', payload: question_number })
}

export const decreaseQuestionNumber = (question_number) => dispatch => {
    dispatch({ type: 'QUESTION/DECREASE_NUMBER', payload: question_number })
}
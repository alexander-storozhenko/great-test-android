import {apiPath} from '../lib/Requests'
import {apiDomain} from '../settings/url'
import {getQuestion} from "./questionsAction";

const url = 'questions/set_answers'

export const sendAnswers = (answers, test_id, question_number, navigation) => dispatch => {
    // dispatch({type: 'ANSWERS_SEND/PROGRESS'})
    // dispatch({ type: 'QUESTION/GET_PROGRESS' })
    fetch(apiDomain + apiPath(url), { method: 'POST'})
        .then(res => res.json())
        .then(result => {
            // dispatch({type: 'ANSWERS_SEND/SUCCESS', payload: {[test_id]: answers}})
            //
        })
}

// export const setDefaultUserAnswers  = (answers, test_id, question_id) => {
//     dispatch({ type: 'ANSWERS_STORE/DEFAULT' })
// }

export const storeUserAnswer = (type, value, answer_id, test_id, question_number) => dispatch => {
    dispatch({
        type: 'ANSWERS_STORE/SET_ONE', payload:
            {
                type: type,
                answer_id: answer_id,
                value: value,
                test_id: test_id,
                question_number: question_number
            }
    })
}

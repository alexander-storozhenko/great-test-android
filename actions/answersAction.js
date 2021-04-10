import {apiPath, defaultHeaders} from '../lib/Requests'
import {apiDomain} from '../settings/url'
import {getQuestion} from "./questionsAction";

const url = 'questions/set_answers'

export const sendAnswers = (answers, test_id, question_number, callback = () => {}) => {
    fetch(apiDomain + apiPath(url),
        {
            headers: defaultHeaders,
            method: 'PATCH',
            body: JSON.stringify({
                answers: JSON.stringify(answers),
                question_number: JSON.stringify(question_number),
                test_id: JSON.stringify(test_id)
            })
        })
        .then(res => res.json())
        .then( _ => {
            callback()
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

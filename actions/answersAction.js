import { apiPath } from '../lib/Requests'
import { apiDomain } from '../settings/url'

const url = 'questions/set_answers'

export const sendAnswers = (answers, question_id) => dispatch => {
    dispatch({ type: 'ANSWERS_SEND/PROGRESS' })

    console.log('aa',answers)
    fetch(apiDomain + apiPath(url), { method: 'POST', body: JSON.stringify(answers) })
        .then(res => res.json())
        .then(result => dispatch({ type: 'ANSWERS_SEND/SUCCESS', payload: {[question_id]: answers}}))
}

// export const setDefaultUserAnswers  = (answers, test_id, question_id) => {
//     dispatch({ type: 'ANSWERS_STORE/DEFAULT' })
// }

export const storeUserAnswer = (value, answer_id, test_id, question_number) => dispatch => {
    dispatch({ type: 'ANSWERS_STORE/SET_ONE', payload: { answer_id: answer_id, value: value, test_id: test_id, question_number: question_number}})
}

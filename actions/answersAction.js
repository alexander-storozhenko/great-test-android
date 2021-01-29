import { apiPath } from '../lib/Requests'
import { apiDomain } from '../settings/url'

const url = 'questions/set_answers'

export const sendAnswers = (answers, question_id) => dispatch => {
    dispatch({ type: 'ANSWERS_SEND/PROGRESS' })

    fetch(apiDomain + apiPath(url), { method: 'POST', body: JSON.stringify(answers) })
        .then(res => res.json())
        .then(result => dispatch({ type: 'ANSWERS_SEND/SUCCESS', payload: {[question_id]: answers}}))
}
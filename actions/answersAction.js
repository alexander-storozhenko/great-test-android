import {apiPath, defaultHeaders} from '../lib/Requests'
import {apiDomain} from '../settings/url'
import {getQuestion} from "./questionsAction";

const url = 'questions/set_answers'

export const sendAnswers = (type, answers, test_id, question_number, callback = () => {
}) => {
    fetch(apiDomain + apiPath(url),
        {
            headers: defaultHeaders,
            method: 'PATCH',
            body: JSON.stringify({
                answers: JSON.stringify(answers),
                question_number: JSON.stringify(question_number),
                question_type: type,
                test_id: JSON.stringify(test_id)
            })
        })
        .then(res => res.json())
        .then(_ => {
            callback()
        })
}

// export const setDefaultUserAnswers  = (answers, test_id, question_id) => {
//     dispatch({ type: 'ANSWERS_STORE/DEFAULT' })
// }

export const storeUserAnswer = (type, value, answer_id, test_id, question_number) => dispatch => {

    const question_type =
              type === 'one' ? 'ANSWERS_STORE/SET_ONE'
            : type === 'some' ? 'ANSWERS_STORE/SET_SOME'
            : null

    if(!question_type)
        return

    dispatch({
            type: question_type, payload:
                {
                    type: type,
                    answer_id: answer_id,
                    value: value,
                    test_id: test_id,
                    question_number: question_number
                }
        }
    )
}

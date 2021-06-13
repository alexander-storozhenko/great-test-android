import {apiPath, defaultHeaders} from '../lib/Requests'
import {apiDomain} from '../settings/url'
import {getQuestion} from "./questionsAction";
import {n2nColors} from "../components/StyleConstants";

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
            : type === 'n2n' ? 'ANSWERS_STORE/SET_N2N'
                : null

    if (!question_type)
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

export const selectN2NBtn = (answer_id, pos, answers_color_map) => dispatch => {
    /*
     {
        up: {
            A: blue
            B: red
        },

        down: {
            0: blue
            1: null
        }
     */

    const color = answers_color_map[answer_id]

    if (color) {
        answers_color_map[pos][answer_id] = null
    } else {
        const filtered_colors =
            answers_color_map.up.values.filter(value => answers_color_map.down.values.includes(value))

        if (!filtered_colors || filtered_colors.length === 0)
            answers_color_map[pos][answer_id] = n2nColors[0]
        else {
            const color_index = Math.max.apply(null, filtered_colors.map(value => n2nColors.indexOf(value))) + 1
            answers_color_map[pos][answer_id] = n2nColors[color_index]
        }
    }

    dispatch({type: 'ANSWERS/N2N/SET_MAP', payload: answers_color_map})
}
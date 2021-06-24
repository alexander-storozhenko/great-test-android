import {apiPath, defaultHeaders} from '../lib/Requests'
import {apiDomain} from '../settings/url'
import {getQuestion} from "./questionsAction";
import {n2nColors} from "../components/StyleConstants";
import {first, second, isNull} from "../lib/MainHelper";

const url = 'questions/set_answers'
const colors = ['red', 'blue', 'yellow', 'green', 'brown', 'pink', 'light-blue', 'light-green']

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
export const selectN2NBtn = (id, sect, answers_color_map) => dispatch => {
    if (answers_color_map[sect][id])
        answers_color_map[sect][id] = null
    else {
        const allColorsEntries = () => Object.entries(answers_color_map['up']).concat(Object.entries(answers_color_map['down']))
        const allColorsValues = () => Object.values(answers_color_map['up']).concat(Object.values(answers_color_map['down']))
        const hasTimes = (element, array) => array.filter(item => item === element).length
        const section = (key) => isNaN(key) ? 'up' : 'down'

        // color without pair in reverse section
        const aloneColor = () => {
            const values = allColorsValues()
            const filtered = first(allColorsEntries().filter(entry => hasTimes(second(entry), values) === 1))

            if (!filtered)
                return null

            return {key: first(filtered), color: second(filtered)}
        }

        const arrayMiss = (array) => {
            if (array.length === 0)
                return null

            for (let index = 0; index < array.length; index++) {
                const element = array[index];

                if (element !== index)
                    return index
            }
        }

        //we know that alone color not exists!
        const actualColor = () => {
            let resIndex = -1;
            let indexBuffer = []

            allColorsValues().map(color => {
                let colorIndex = colors.indexOf(color)

                if (!indexBuffer.includes(colorIndex) && colorIndex > -1)
                    indexBuffer.push(colorIndex)

                resIndex = colorIndex > resIndex ? colorIndex : resIndex
            })

            const missedColorIndex = arrayMiss(indexBuffer)

            if (!isNull(missedColorIndex))
                return colors[missedColorIndex]

            return colors[++resIndex]
        }

        const freeColor = (clickedSect) => {
            const aloneColour = aloneColor()

            if (!aloneColour)
                return actualColor()

            const aloneColorSect = section(aloneColour.key)

            if (aloneColorSect === clickedSect && aloneColour)
                answers_color_map[aloneColorSect][aloneColour.key] = null

            return aloneColour
        }

        answers_color_map[sect][id] = freeColor(sect)
    }

    dispatch({type: 'ANSWERS/N2N/SET_MAP', payload: answers_color_map})
}

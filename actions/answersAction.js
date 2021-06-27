import {apiPath, defaultHeaders} from '../lib/Requests'
import {apiDomain} from '../settings/url'
import {getQuestion} from "./questionsAction";
import {n2nColors} from "../components/StyleConstants";
import {first, second, isNull} from "../lib/MainHelper";

const url = 'questions/set_answers'
const colors = ['#D30000', '#51884d', '#a98f3f', '#A9C635', '#E25A0D', '#964584', '#C79686', '#128555']

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

     console.log('MAP*********', answers_color_map )
    if (answers_color_map[sect][id])
        answers_color_map[sect][id] = null
    else {
        const allColorsEntries = () => Object.entries(answers_color_map['up']).concat(Object.entries(answers_color_map['down']))
        const allColorsValues = () => Object.values(answers_color_map['up']).concat(Object.values(answers_color_map['down']))
        const hasTimes = (element, array) => array.filter(item => item === element).length
        const section = (key) => isNaN(key) ? 'up' : 'down'
        const compareNumbers = (a, b) => a - b

        const aloneColor = () => {
            const values = allColorsValues()
            const filtered = allColorsEntries().filter(entry => entry[1] && hasTimes(entry[1], values) === 1)[0]

            // console.log(filtered)
            if (!filtered)
                return null

            return {color: filtered[1], key: filtered[0]}
        }

        const missedColor = (array) => {
            if (array.length === 0)
                return null

            array = array.sort(compareNumbers)

            for (let index = 0; index < array.length; index++) {
                const element = array[index]

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

            const missedColorIndex = missedColor(indexBuffer)

            if (Number.isInteger(missedColorIndex))
                return colors[missedColorIndex]

            return colors[resIndex + 1]
        }

        const freeColor = (clickedSect) => {
            const aloneColour = aloneColor()

            // console.log(aloneColour)

            if (!aloneColour)
                return actualColor()

            const aloneColorSect = section(aloneColour.key)

            if (aloneColorSect === clickedSect)
                if (aloneColour)
                    answers_color_map[aloneColorSect][aloneColour.key] = null

            return aloneColour.color
        }

        answers_color_map[sect][id] = freeColor(sect)
    }

    console.log(answers_color_map)

    dispatch({type: 'ANSWERS/N2N/SET_MAP', payload: answers_color_map})
}

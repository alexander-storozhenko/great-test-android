import {n2nColors} from "../components/StyleConstants";

export const userAnswers = (state = {}, action) => {
    if (action.type === 'ANSWERS_STORE/SET_ONE') {
        const question_number = action.payload.question_number
        console.log('answ', {[action.payload.answer_id]: action.payload.value})
        return {
            [question_number]: {
                type: action.payload.type,
                data: {[action.payload.answer_id]: action.payload.value}
            }
        }
    } else if (action.type === 'ANSWERS_STORE/SET_SOME' || action.type === 'ANSWERS_STORE/SET_N2N') {

        const question_number = action.payload.question_number

        if (!state[question_number])
            state[question_number] = {
                type: action.payload.type,
                data: {}
            }

        if (!state[question_number].data)
            state[question_number].data = {}

        state[question_number].data[action.payload.answer_id] = action.payload.value
        state[question_number].type = action.payload.type
    }
    return state
}

export const answersSendProgress = (state = {}, action) => {
    return action.type === 'ANSWERS_SEND/PROGRESS'
}

export const answersColorN2NMap = (state = {up:{},down:{}}, action) => {
    if (action.type === 'ANSWERS/N2N/SET_MAP')
        return action.payload

    return state
}
import {contrastColor} from "../../components/StyleConstants";

//set answers {number: text}
export const constructorSet = (state = {}, action) => {
    if(action.type === 'CONSTRUCTOR/QUESTION/SET_ANSWER')
        state[action.payload.number] = action.payload.text
    return state
}

export const constructorSelectOne = (state = {}, action) => {
    if(action.type === 'CONSTRUCTOR/QUESTION/SELECT_ANSWER/ONE')
        return action.payload.number
    return state
}

export const constructorSelectSome = (state = {}, action) => {
    if(action.type === 'CONSTRUCTOR/QUESTION/SELECT_ANSWER/SOME') {
        state[action.payload.number] = !state[action.payload.number]
    }

    return state
}


export const constructorQuestionParams = (state = null, action) => {
    return action.type === 'CONSTRUCTOR/SEND_QUESTION_PARAMS/SUCCESS'
}

export const constructorCurrentQuestionId = (state = null, action) => {
    if(action.type === 'CONSTRUCTOR/SET_QUESTION_ID' && action.payload.id)
        return action.payload.id
    return state
}


export const constructorQuestionParamsProgress = (state = null, action) => {
    return action.type === 'CONSTRUCTOR/SEND_QUESTION_PARAMS/PROGRESS'
}

export const constructorQuestionAnswerBtnsCount = (state = 2, action) => {
    if(action.type === 'CONSTRUCTOR/QUESTION/ANSWER_BTNS_COUNT')
        return action.payload
    return state
}

export const constructorQuestionDataStore = (state = {}, action) => {
    if(action.type === 'CONSTRUCTOR/QUESTION/STORE_DATA')
        state[action.payload.question_id] = action.payload.data

    return state
}
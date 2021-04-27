import {contrastColor} from "../../components/StyleConstants";

export const constructorSelectedBtnOne = (state = null, action) => {
    if(action.type === 'CONSTRUCTOR/QUESTION/SET_ANSWER/ONE')
        return action.payload.number
    return state
}

export const constructorQuestionParams = (state = null, action) => {
    return action.type === 'CONSTRUCTOR/SEND_QUESTION_PARAMS/SUCCESS'
}

export const constructorQuestionParamsProgress = (state = null, action) => {
    return action.type === 'CONSTRUCTOR/SEND_QUESTION_PARAMS/PROGRESS'
}

export const constructorQuestionAnswerBtnsCount = (state = 2, action) => {
    if(action.type === 'CONSTRUCTOR/QUESTION/ANSWER_BTNS_COUNT')
        return action.payload
    return state
}
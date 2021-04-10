export const userAnswers = (state = {}, action) => {
    if (action.type === 'ANSWERS_STORE/SET_ONE') {
        const question_number = action.payload.question_number
        return {
            [question_number]: {
                type: action.payload.type,
                data: {[action.payload.answer_id]: action.payload.value}
            }
        }
    }
    return state
}

export const answersSendProgress = (state = {}, action) => {
    return action.type === 'ANSWERS_SEND/PROGRESS'
}


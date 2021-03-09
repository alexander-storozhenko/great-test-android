export const userAnswers = (state = {}, action) => {
    if (action.type === 'ANSWERS_STORE/SET_ONE') {
        const question_number = action.payload.question_number
        if (state.size === 0 || state[question_number] == null) {
            return {
                [question_number]: {
                    type: action.payload.type,
                    data: {[action.payload.answer_id]: action.payload.value}
                }
            }
        } else {
            const copy = {...state}

            for (let i = 0; i < Object.keys(copy[question_number].data).length; i++) {
                copy[question_number].data[i] = false;
            }

            copy[question_number].data[action.payload.answer_id] = action.payload.value
            return copy
        }
    }
    return state
}

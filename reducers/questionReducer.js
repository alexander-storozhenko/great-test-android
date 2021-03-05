export const question = (state = null, action) => {
    if (action.type === 'QUESTION/GET_SUCCESS') {
        return action.payload
    }
    return state
}

export const questionNumber = (state = 0, action) => {
    if (action.type === 'QUESTION/INCREASE_NUMBER') {
        state += 1
    } else if (action.type === 'QUESTION/DECREASE_NUMBER') {
        state -= 1
    } else if (action.type === 'QUESTION/RESET_NUMBER')
        state = 0
    return state
}

export const questionLoading = (state = false, action) => {
    return action.type === 'QUESTION/GET_PROGRESS'
}

export const questionCount = (state = 0, action) => {
    if (action.type === 'QUESTION/COUNT') {
        state = action.payload
        return state
    }
    return state
}

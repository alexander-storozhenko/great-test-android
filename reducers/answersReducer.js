export const user_answers = (state = [], action) => {
    if (action.type == 'ANSWERS_SEND/SUCCESS')
        return [...state.user_answers, action.payload]
    return state
}
export const answers = (state = [], action) => {
    if (action.type == 'ANSWERS_SEND/SUCCESS')
        return [...state.answers, action.payload]
    return state
}
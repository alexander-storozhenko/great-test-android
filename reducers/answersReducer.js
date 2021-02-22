// export const user_answers = (state = [], action) => {
//     if (action.type === 'ANSWERS_SEND/SUCCESS')
//         return [state + action.payload]
//     return state
// }

export const user_answers = (state = {}, action) => {
    if (action.type === 'ANSWERS_STORE/SET_ONE') {
        const question_number = action.payload.question_number
        if (state.size === 0 || state[question_number] == null) {
            console.log('11111',state, action.payload.answer_id, action.payload.value)
            return {[question_number]: {[action.payload.answer_id]: action.payload.value}}
        }
        else {
            console.log('aaaaaaa')
            const copy = {...state}
            console.log(state)



            for (let i = 0; i < state[question_number].size; i++) {

                copy[question_number][i] = false;
            }

            copy[question_number][action.payload.answer_id] = action.payload.value
            console.log(copy)
            return copy
        }
    }
    return state
}

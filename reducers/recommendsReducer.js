export const recommends = (state = [], action) => {
    if (action.type == 'RECOMMENDS_LOADING/SUCCESS')
        return action.payload
    return state
}

export const recommendsLoading = (state = false, action) => {
    return action.type === 'RECOMMENDS_LOADING/PROGRESS'
}
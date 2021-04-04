export const recommends = (state = [], action) => {
    if (action.type === 'RECOMMENDS_LOADING/SUCCESS')
        return action.payload
    return state
}

export const recommendsLoading = (state = false, action) => {
    return action.type === 'RECOMMENDS_LOADING/PROGRESS'
}

export const recommendsAdded = (state = [], action) => {
    return action.type === 'RECOMMENDS_ADD/SUCCESS'
}

export const recommendsAddLoading = (state = false, action) => {
    return action.type === 'RECOMMENDS_ADD/PROGRESS'
}

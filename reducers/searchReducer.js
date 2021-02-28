export const search_results = (state= {}, action) => {
    if (action.type === 'SEARCH/SUCCESS')
        return action.payload
    return state
}

export const search_progress = (state= null, action) => {
    return action.type === 'SEARCH/PROGRESS'
}

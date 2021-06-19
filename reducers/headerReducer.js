export const backButton = (state = false, action) => {
    return action.type === 'HEADER/BACK' && action.payload.show
}

export const headerContent = (state = false, action) => {
    if (action.type === 'HEADER/SET')
        return action.payload
    return state
}
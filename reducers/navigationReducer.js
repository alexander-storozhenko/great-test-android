export const currentNavigation = (state = null, action) => {
    if (action.type === 'NAVIGATION/SET')
        return action.payload
    return state
}

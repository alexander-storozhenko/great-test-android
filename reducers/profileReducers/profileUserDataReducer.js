export const profileUserData = (state = null, action) => {
    if(action.type === 'PROFILE/USER_DATA/SUCCESS')
        return action.payload
    return state
}
export const profileUserDataProgress = (state = null, action) => {
    return action.type === 'PROFILE/USER_DATA/PROGRESS'
}

export const profileUserData = (state = {}, action) => {
    if(action.type === 'PROFILE/USER_DATA/SUCCESS')
        return action.payload
    return state
}
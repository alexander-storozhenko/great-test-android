import {setAccessToken} from "../lib/Requests";

export const signInProgress = (state = false, action) => {
    return action.type === 'LOGIN/SIGN_IN/PROGRESS'
}

export const accessToken = (state = null, action) => {
    if(action.type === 'LOGIN/SIGN_IN/SUCCESS') {
        setAccessToken(action.access_token)
        return action.payload.access_token
    }
    return null
}

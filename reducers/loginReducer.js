import {storeData} from "../lib/AsyncStorageHelper";

export const signInProgress = (state = false, action) => {
    return action.type === 'LOGIN/SIGN_IN/PROGRESS'
}

export const loginSuccess = (state = null, action) => {
    return action.type === 'LOGIN/SIGN_IN/SUCCESS'
}


// export const accessToken = (state = null, action) => {
//     if(action.type === 'LOGIN/SIGN_IN/SUCCESS') {
//
//     }
//     return null
// }

export const loginIncorrect = (state = null, action) => {
    if(action.type === 'LOGIN/SIGN_IN/INCORRECT') {
        return action.payload.error
    }
    return null
}

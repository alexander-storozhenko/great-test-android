export const constructorSaveCard = (state = null, action) => {
    if (action.type === 'CONSTRUCTOR/CARD/SAVE/SUCCESS')
        return action.payload
    return state
}
export const constructorCardImage = (state = null, action) => {
    if (action.type === 'CONSTRUCTOR/CARD/STORE_IMG')
        return action.payload
    return state
}

export const constructorCardTitle = (state = '', action) => {
    if (action.type === 'CONSTRUCTOR/CARD/TITLE')
        return action.payload
    return state
}

export const constructorCardSubTitle = (state = '', action) => {
    if (action.type === 'CONSTRUCTOR/CARD/SUB_TITLE')
        return action.payload
    return state
}

/** GET */
export const constructorCardMainInfoProgress = (state = false, action) => {
    if(action.type === 'CONSTRUCTOR/GET_MAIN_INFO/PROGRESS')
        return action.payload.progress
    return state
}

/** GET */
export const constructorCardMainInfo = (state = null, action) => {
    if(action.type === 'CONSTRUCTOR/GET_MAIN_INFO/SUCCESS')
        return action.payload.data

    return state
}

export const move = (state=false, action) => {
    if (action.type == 'SIDEBAR/MOVE')
        return !state   
    return state
}
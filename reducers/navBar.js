export const navbarShow = (state = true, action) => {
    if(action.type === 'NAVBAR/HIDE')
        return false
    else if(action.type == 'NAVBAR/SHOW')
        return true
    return state
}
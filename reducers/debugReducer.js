export const panelOpen = (state = false, action) => {
    if(action.type === 'DEBUG/PANEL/OPEN')
        return action.payload.open
    return state
}

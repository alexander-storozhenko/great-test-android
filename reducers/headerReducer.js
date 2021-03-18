export const backButton = (state = false, action) => {
    return action.type === 'HEADER/BACK' && action.payload.show

}

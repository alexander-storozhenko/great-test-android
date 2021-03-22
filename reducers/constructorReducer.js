export const constructorColorTextBtnClicked = (state = 0, action) => {
    if(action.type === 'CONSTRUCTOR/TEXT_COLOR_SET')
        return action.payload.btn_id
    return state
}

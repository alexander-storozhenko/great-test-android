export const setColorTextBtn = (btn_id) => dispatch => {
    dispatch({type: 'CONSTRUCTOR/TEXT_COLOR_SET', payload: {btn_id: btn_id}})
}

export const carouselSetFirstColorBtn = (btn_id, color) => dispatch => {
    dispatch({type: 'CONSTRUCTOR/CAROUSEL/FIRST_COLOR_SET', payload: {btn_id: btn_id, color: color}})
}

export const carouselSetSecondColorBtn = (btn_id, color) => dispatch => {
    dispatch({type: 'CONSTRUCTOR/CAROUSEL/SECOND_COLOR_SET', payload: {btn_id: btn_id, color: color}})
}

export const carouselSetColorTypeBtn = (btn_id) => dispatch => {
    dispatch({type: 'CONSTRUCTOR/CAROUSEL/COLOR_TYPE_SET', payload: {btn_id: btn_id}})
}

import {contrastColor} from "../../components/StyleConstants";

export const constructorCarouselFirstColorBtnClicked = (state = {btn_id: 0, color: contrastColor}, action) => {
    if(action.type === 'CONSTRUCTOR/CAROUSEL/FIRST_COLOR_SET')
        return {btn_id: action.payload.btn_id, color: action.payload.color}
    return state
}

export const constructorCarouselSecondColorBtnClicked = (state = {btn_id: 0, color: contrastColor}, action) => {
    if(action.type === 'CONSTRUCTOR/CAROUSEL/SECOND_COLOR_SET')
        return {btn_id: action.payload.btn_id, color: action.payload.color}
    return state
}

export const constructorCarouselColorTypeBtnClicked = (state = 0, action) => {
    if(action.type === 'CONSTRUCTOR/CAROUSEL/COLOR_TYPE_SET')
        return action.payload.btn_id
    return state
}


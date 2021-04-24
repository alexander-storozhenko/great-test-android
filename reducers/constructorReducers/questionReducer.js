import {contrastColor} from "../../components/StyleConstants";

export const constructorSelectedBtnOne = (state = null, action) => {
    if(action.type === 'CONSTRUCTOR/QUESTION/SET_ANSWER/ONE')
        return {number: action.payload.number}
    return state
}
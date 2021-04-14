import {apiDomain} from "../../settings/url";
import {accessTokenHeader, apiPath, defaultHeaders} from "../../lib/Requests";

export const carouselSetFirstColorBtn = (btn_id, color) => dispatch => {
    dispatch({type: 'CONSTRUCTOR/CAROUSEL/FIRST_COLOR_SET', payload: {btn_id: btn_id, color: color}})
}

export const carouselSetSecondColorBtn = (btn_id, color) => dispatch => {
    dispatch({type: 'CONSTRUCTOR/CAROUSEL/SECOND_COLOR_SET', payload: {btn_id: btn_id, color: color}})
}

export const carouselSetColorTypeBtn = (btn_id) => dispatch => {
    dispatch({type: 'CONSTRUCTOR/CAROUSEL/COLOR_TYPE_SET', payload: {btn_id: btn_id}})
}

const url = 'constructor/save_card'

export const carouselSendMainInfoData = (data) => dispatch => {

    let {title, subTitle, imageUri, colors} = data

    const formData = new FormData();

    if(imageUri)
        formData.append('image', {uri: imageUri, name: imageUri.split('/').pop(), type: 'image/jpeg'});

    formData.append('colors', `${colors}`)
    formData.append('title', title)
    formData.append('sub_title', subTitle)

    dispatch({type: 'CONSTRUCTOR/CAROUSEL/SEND_MAIN_INFO_DATA/PROGRESS'})

    fetch(apiDomain + apiPath(url),
        {
            method: 'POST',
            body: formData,
            headers: {...defaultHeaders, ...accessTokenHeader(), 'content-type': 'multipart/form-data'}
        })
        .then(res => res.json())
        .then(result => {
            dispatch({type: 'CONSTRUCTOR/CAROUSEL/SEND_MAIN_INFO_DATA/SUCCESS'})
        })
}
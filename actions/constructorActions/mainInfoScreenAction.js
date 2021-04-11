import {apiDomain} from "../../settings/url";
import {apiPath, defaultHeaders} from "../../lib/Requests";
import {getData, storeData} from "../../lib/AsyncStorageHelper";
import {navigate} from "../../lib/NavigationService";

const url = 'constructor/save_card'
const image_url = 'constructor/save_image'

export const saveCard = (image, colors) => dispatch => {
    // dispatch({ type: 'CONSTRUCTOR/MAIN_INFO/SAVE/PROGRESS', payload: {progress: true} })
    const data = new FormData();

    let filename = image.uri.split('/').pop()

    data.append('image', { uri: image.uri, name: filename, type: 'image/jpeg' });
    data.append('colors', `${colors}`);

    fetch(apiDomain + apiPath(url),
        {
            method: 'POST',
            body: data,
            headers: {...defaultHeaders, 'content-type': 'multipart/form-data'}
        })
        .then(res => res.json())
        .then(result => {
                // dispatch({type: 'CONSTRUCTOR/MAIN_INFO/SAVE/PROGRESS', payload: {progress: false}})
                dispatch({type: 'CONSTRUCTOR/CARD/SAVE/SUCCESS', payload: {result: result}})
        })
}
export const storeImage = (uri) => dispatch =>{

}
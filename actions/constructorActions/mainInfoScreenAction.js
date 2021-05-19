import {apiDomain} from "../../settings/url";
import {accessTokenHeader, apiPath, defaultHeaders, getAccessToken} from "../../lib/Requests";

const url = 'constructor/main_info'

export const getMainInfo = (id) => dispatch => {
    dispatch({type: 'CONSTRUCTOR/GET_MAIN_INFO/PROGRESS', payload: {progress: true}})

    getAccessToken().then(token => {
        fetch(apiDomain + apiPath(url + `/${id}`),
            {
                headers: {...defaultHeaders, ...accessTokenHeader(token)},
                method: 'GET',
            })
            .then(res => res.json())
            .then(response => {
                dispatch({type: 'CONSTRUCTOR/GET_MAIN_INFO/PROGRESS', payload: {progress: false}})
                dispatch({type: 'CONSTRUCTOR/GET_MAIN_INFO/SUCCESS', payload: {data: response['test_template']}})
            })
    })
}

export const storeImage = (uri) => dispatch => {
}
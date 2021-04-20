import {apiDomain} from "../../settings/url";
import {apiPath, defaultHeaders} from "../../lib/Requests";
import {navigate} from "../../lib/NavigationService";
import {getData, storeData} from "../../lib/AsyncStorageHelper";

const url = '/users/sign_in'

export const signIn = (name, password) => dispatch => {
    dispatch({ type: 'LOGIN/SIGN_IN/PROGRESS' })
    fetch(apiDomain + apiPath(url),
        {
            method: 'PUT',
            body: JSON.stringify({name: name, password: password}),
            headers: defaultHeaders
        })
        .then(res => res.json())
        .then(result => {
            if(result.access_token) {
                dispatch({type: 'LOGIN/SIGN_IN/SUCCESS', payload: result})
                storeData('ACCESS_TOKEN', result.access_token).then(r => navigate('Profile', {from_login: true}))
            }
            else
                dispatch({ type: 'LOGIN/SIGN_IN/INCORRECT', payload: result })
        })
}
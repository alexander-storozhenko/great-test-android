import {apiDomain} from "../../settings/url";
import {apiPath, defaultHeaders} from "../../lib/Requests";

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
            dispatch({ type: 'LOGIN/SIGN_IN/SUCCESS', payload: result })
        })
}
import * as GoogleLoginService from "../../lib/GoogleLoginService";
import {storeData} from "../../lib/AsyncStorageHelper";
import {navigate} from "../../lib/NavigationService";
import {apiDomain} from "../../settings/url";
import {apiPath, defaultHeaders} from "../../lib/Requests";

//TODO add request to creating user in db and get his access token
export const googleSignIn = () => dispatch => {
    GoogleLoginService.login().then(result => {
        if (result.type === 'success') {
            storeData('LOGIN_TYPE', 'google').then(_ => {
                storeData('GOOGLE_ACCESS_TOKEN', result.accessToken)
                    .then(_ => {
                        _putGoogleUserData(result, dispatch)
                    } )
            })
        } else
            alert("Error while login")
    })
}

const url = 'users/sign_in_with_google'

// PUT
const _putGoogleUserData = (result, dispatch) => {
    fetch(apiDomain + apiPath(url),
        {
            method: 'PATCH',
            body: JSON.stringify(
                {
                    name: result.user.name,
                    google_access_token: result.accessToken,
                    image_url: result.user.photoUrl,
                    email: result.user.email,
                }
            ),
            headers: defaultHeaders
        })
        .then(res =>res.json())
        .then(result => {
            if (result.access_token) {
                dispatch({type: 'LOGIN/SIGN_IN/SUCCESS', payload: result})
                storeData('ACCESS_TOKEN', result.access_token)
                    .then(_ => storeData('LOGIN_TYPE', 'google')
                        .then(_ => navigate('Profile', {from_login: true})
                        )
                    )
            } else
                dispatch({type: 'LOGIN/SIGN_IN/INCORRECT', payload: result})
        })
}
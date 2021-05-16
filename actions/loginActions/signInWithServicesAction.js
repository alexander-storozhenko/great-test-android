import * as GoogleLoginService from "../../lib/GoogleLoginService";
import {storeData} from "../../lib/AsyncStorageHelper";
import {navigate} from "../../lib/NavigationService";
import {apiDomain} from "../../settings/url";
import {apiPath, defaultHeaders} from "../../lib/Requests";

//TODO add request to creating user in bd and get his access token
export const googleSignIn = () => {
    GoogleLoginService.login().then(result => {
        if (result.type === 'success') {
            storeData('LOGIN_TYPE', 'google').then(_ => {
                storeData('GOOGLE_ACCESS_TOKEN', result.accessToken)
                    .then(_ => _putGoogleUserData(name, /*...*/ ))
            })


        } else
            alert("Error while login")
    })
}

const url = '/users/sign_in_with_google'

// PUT
const _putGoogleUserData = () => {
    fetch(apiDomain + apiPath(url),
        {
            method: 'PUT',
            body: JSON.stringify({name: name, password: password, login_type: loginType}),
            headers: defaultHeaders
        })
        .then(res => res.json())
        .then(result => {
            if (result.access_token) {
                dispatch({type: 'LOGIN/SIGN_IN/SUCCESS', payload: result})
                storeData('ACCESS_TOKEN', result.access_token)
                    .then(_ => storeData('LOGIN_TYPE', 'local')
                        .then(_ => navigate('Profile', {from_login: true})
                        )
                    )

            } else
                dispatch({type: 'LOGIN/SIGN_IN/INCORRECT', payload: result})
        })

    navigate('Profile', {from_login: true})
}
import {apiDomain} from "../../settings/url";
import {
    accessible,
    accessTokenHeader,
    apiPath,
    defaultHeaders,
    getAccessToken,
    getGoogleAccessToken, withoutErrors
} from "../../lib/Requests";
import {navigate, navigateToLogin} from "../../lib/NavigationService";
import {getData} from "../../lib/AsyncStorageHelper";

const local_user_data = 'profile/user_data'
const google_user_data = 'https://www.googleapis.com/oauth2/v3/userinfo?access_token='

    /**
     * user can be logged by
     *  - manual
     *  - with google
     *  - with vk (in future)
     *
     *  login type in async storage ('LOGIN_TYPE')
     *  we need get data from google account (not from local backend) if user logged with google
     */

export const getUserData = () => dispatch => {
    dispatch({type: 'PROFILE/USER_DATA/PROGRESS', payload: {loading: true}})

    getData('LOGIN_TYPE').then(type => {
        console.log(type)
        if (type === 'google') {
            getGoogleAccessToken().then(token => {
                fetch(google_user_data + token)
                    .then(res => {
                        if (withoutErrors(res))
                            return res.json()

                        navigateToLogin()
                    })
                    .then(result => {
                        console.log(result)
                        dispatch({type: 'PROFILE/USER_DATA/SUCCESS', payload: result})
                    })
            })
        } else if (type === 'local') {
            getAccessToken().then(token => {
                fetch(apiDomain + apiPath(local_user_data),
                    {headers: {...defaultHeaders, ...accessTokenHeader(token)}})
                    .then(res => {
                        if (accessible(res)) {
                            return res.json()
                        }

                        navigateToLogin()
                    })
                    .then(result => {
                        dispatch({type: 'PROFILE/USER_DATA/SUCCESS', payload: result})
                    })
            })
        }
    })

}
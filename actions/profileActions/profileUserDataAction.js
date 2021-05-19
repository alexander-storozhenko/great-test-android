import {apiDomain} from "../../settings/url";
import {
    accessible,
    accessTokenHeader,
    apiPath, checkGoogleUserAccess,
    defaultHeaders,
    getAccessToken,
    getGoogleAccessToken, withoutErrors
} from "../../lib/Requests";
import {navigate, navigateToLogin} from "../../lib/NavigationService";

const url = 'profile/user_data'

/**
 * user can be logged by
 *  - manual
 *  - with google
 *  - with vk (in future)
 */

export const getUserData = () => dispatch => {
    dispatch({type: 'PROFILE/USER_DATA/PROGRESS', payload: {loading: true}})

    getAccessToken().then(token => {
        fetch(apiDomain + apiPath(url),
            {headers: {...defaultHeaders, ...accessTokenHeader(token)}})
            .then(res => {
                if (accessible(res))
                    return res.json()

                navigateToLogin()
            })
            .then(result => {
                dispatch({type: 'PROFILE/USER_DATA/SUCCESS', payload: result})
            })
    })

}
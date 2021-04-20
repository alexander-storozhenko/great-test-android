import {apiDomain} from "../../settings/url";
import {accessible, accessTokenHeader, apiPath, defaultHeaders, getAccessToken} from "../../lib/Requests";
import {navigate, navigateToLogin} from "../../lib/NavigationService";
import {getData} from "../../lib/AsyncStorageHelper";

const url = 'profile/user_data'

export const getUserData = () => dispatch => {
    dispatch({type: 'PROFILE/USER_DATA/PROGRESS', payload: {loading: true}})

    getAccessToken().then(token => {
        fetch(apiDomain + apiPath(url), {headers: {...defaultHeaders, ...accessTokenHeader(token)}})
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
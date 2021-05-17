import {apiDomain} from "../../settings/url";
import {accessible, accessTokenHeader, apiPath, defaultHeaders, getAccessToken} from "../../lib/Requests";
import {navigate, navigateToLogin, replace} from "../../lib/NavigationService";

const url = 'profile/user_tests'

export const changeSlide = (index) => dispatch => {
    dispatch({type: 'PROFILE_CAROUSEL/CHANGE_SLIDE', payload: {index: index}})
}

export const getUserTests = () => dispatch => {
    dispatch({type: 'PROFILE_CAROUSEL/LOADING'})

    getAccessToken().then(token => {
        console.log(token)
        fetch(apiDomain + apiPath(url), {headers: {...defaultHeaders, ...accessTokenHeader(token)}})
            .then(res => {
                if (accessible(res)) return res.json()

                navigateToLogin()
            })
            .then(result => {
                dispatch({type: 'PROFILE_CAROUSEL/SUCCESS', payload: result})})
    })
}

export const selectItem = (id) => dispatch => {
    dispatch({type: 'PROFILE_CAROUSEL/ITEM_SELECTED', payload: {id: id}})
}
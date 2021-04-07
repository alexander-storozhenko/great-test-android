import {apiDomain} from "../../settings/url";
import {accessible, apiPath} from "../../lib/Requests";
import {navigate, navigateToLogin, replace} from "../../lib/NavigationService";

const url = 'profile/user_tests'

export const changeSlide = (index) => dispatch => {
    dispatch({type: 'PROFILE_CAROUSEL/CHANGE_SLIDE', payload: {index:index }})
}

export const getUserTests = (page = 0) => dispatch => {
    dispatch({type: 'PROFILE_CAROUSEL/LOADING'})

    fetch(apiDomain + apiPath(url))
        .then(res => {
            if(accessible(res)) return res.json()
            navigateToLogin()
        })
        .then(result => {
            dispatch({ type: 'PROFILE_CAROUSEL/SUCCESS', payload: result })
        })
}

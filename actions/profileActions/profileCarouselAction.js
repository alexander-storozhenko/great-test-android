import {apiDomain} from "../../settings/url";
import {accessible, accessTokenHeader, apiPath, defaultHeaders} from "../../lib/Requests";
import {navigate, navigateToLogin, replace} from "../../lib/NavigationService";
import {getData} from "../../lib/AsyncStorageHelper";

const url = 'profile/user_tests'

export const changeSlide = (index) => dispatch => {
    dispatch({type: 'PROFILE_CAROUSEL/CHANGE_SLIDE', payload: {index:index }})
}

export const getUserTests = () => dispatch => {
    dispatch({type: 'PROFILE_CAROUSEL/LOADING'})
    console.log('user_tests', getData('ACCESS_TOKEN'))
    fetch(apiDomain + apiPath(url), {headers: {...defaultHeaders, ...accessTokenHeader()}})
        .then(res => {
            if(accessible(res)) return res.json()
            navigateToLogin()
        })
        .then(result => {
             // console,.

            dispatch({ type: 'PROFILE_CAROUSEL/SUCCESS', payload: result })
        })
}

export const selectItem = (id) => dispatch => {
    dispatch({type: 'PROFILE_CAROUSEL/ITEM_SELECTED', payload: {id: id}})
}
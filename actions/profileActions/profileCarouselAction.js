import {apiDomain} from "../../settings/url";
import {apiPath} from "../../lib/Requests";

const url = 'profile/user_tests'

export const changeSlide = (index) => dispatch => {
    dispatch({type: 'PROFILE_CAROUSEL/CHANGE_SLIDE', payload: {index:index }})
}

export const getUserTests = (page = 0) => dispatch => {
    dispatch({type: 'PROFILE_CAROUSEL/LOADING'})

    fetch(apiDomain + apiPath(url))
        .then(res => res.json())
        .then(result => {
            console.log(result[0].title)
            dispatch({ type: 'PROFILE_CAROUSEL/SUCCESS', payload: result })
        })
}

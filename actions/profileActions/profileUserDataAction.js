import {apiDomain} from "../../settings/url";
import {accessible, apiPath} from "../../lib/Requests";

const url = 'profile/user_data'

export const getUserData = () => dispatch => {
    dispatch({type: 'PROFILE/USER_DATA/PROGRESS', payload: {loading: true}})

    fetch(apiDomain + apiPath(url))
        .then(res => {
            if(accessible(res))
                return res.json()
        })
        .then(result => {
            dispatch({ type: 'PROFILE/USER_DATA/SUCCESS', payload: result })
        })
}
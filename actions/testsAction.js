import {accessible, accessTokenHeader, apiPath, defaultHeaders, getAccessToken} from '../lib/Requests'
import {apiDomain} from '../settings/url'
import {navigate, navigateToLogin, replace} from "../lib/NavigationService";
import {getUserTests} from "./profileActions/profileCarouselAction";

const preview_info_url = 'tests/preview_info'

/**GET*/
export const getPreviewInfo = (test_t_id) => dispatch => {
    dispatch({type: 'TEST/GET_PREVIEW_INFO_SUCCESS', payload: null})
    dispatch({type: 'TEST/GET_PREVIEW_INFO_PROGRESS'})

    fetch(apiDomain + apiPath(preview_info_url, {test_t_id: test_t_id}))
        .then(res => {
            if (accessible(res)) return res.json()
            navigateToLogin()
            return Promise.reject('Forbidden')
        })
        .then(result => {
            dispatch({type: 'QUESTION/COUNT', payload: result.data.options.question_count})
            dispatch({type: 'TEST/GET_PREVIEW_INFO_SUCCESS', payload: result})
        })
}

const delete_url = 'tests/delete'

/**DELETE*/
export const deleteTestT = (test_t_id) => dispatch => {
    dispatch({type: 'TEST/DELETE/PROGRESS', payload: {progress: true}})


    getAccessToken().then(token => {
        fetch(apiDomain + apiPath(delete_url + `/${test_t_id}`),
            {
                headers: {...defaultHeaders, ...accessTokenHeader(token)},
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(response => {
                dispatch({type: 'TEST/DELETE/PROGRESS', payload: {progress: false}})

                //refresh user tests

                dispatch({type: 'TEST/DELETE/SUCCESS', payload: {id: test_t_id}})

            })
    })
}



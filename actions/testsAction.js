import {accessible, apiPath} from '../lib/Requests'
import {apiDomain} from '../settings/url'
import {navigate, navigateToLogin, replace} from "../lib/NavigationService";

const preview_info_url = 'tests/preview_info'


export const getPreviewInfo = (test_t_id) => dispatch => {
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


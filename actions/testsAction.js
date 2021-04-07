import {accessible, apiPath} from '../lib/Requests'
import {apiDomain} from '../settings/url'
import {navigate, navigateToLogin, replace} from "../lib/NavigationService";

const preview_info_url = 'tests/preview_info'
const results_url = 'tests/results'

export const getPreviewInfo = (test_t_id) => dispatch => {
    dispatch({type: 'TEST/GET_PREVIEW_INFO_PROGRESS'})

    fetch(apiDomain + apiPath(preview_info_url, {test_t_id: test_t_id}))
        .then(res => {
            if (accessible(res)) return res.json()
            navigateToLogin()
        })
        .then(result => {
            dispatch({type: 'QUESTION/COUNT', payload: result.data.question_count})
            dispatch({type: 'TEST/GET_PREVIEW_INFO_SUCCESS', payload: result})
        })
}

export const getTestResults = (test_id, navigation) => dispatch => {
    dispatch({type: 'TEST/GET_RESULTS'})
    fetch(apiDomain + apiPath(results_url, {test_id: test_id}))
        .then(res => res.json())
        .then(result => {
            navigation.replace('Finish')
            dispatch({type: 'TEST/GET_RESULTS_SUCCESS', payload: result})
        })
}

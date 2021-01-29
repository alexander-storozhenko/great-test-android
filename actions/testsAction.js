import { apiPath } from '../lib/Requests'
import { apiDomain } from '../settings/url'

const url = 'tests/preview_info'

export const getPreviewInfo = (test_t_id) => dispatch => {
    dispatch({ type: 'TEST/GET_PREVIEW_INFO_PROGRESS' })

    fetch(apiDomain + apiPath(url, { test_t_id: test_t_id }))
        .then(res => res.json())
        .then(result => {
            dispatch({ type: 'TEST/GET_PREVIEW_INFO_SUCCESS', payload: result })
        })
}
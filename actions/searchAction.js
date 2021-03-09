import { apiPath } from '../lib/Requests'
import { apiDomain } from '../settings/url'

const url = 'search/get'

export const searchData = (fragment) => dispatch => {
    dispatch({ type: 'SEARCH/PROGRESS' })

    fetch(apiDomain + apiPath(url,{fragment: fragment}))
        .then(res => res.json())
        .then(result => {
            dispatch({ type: 'SEARCH/SUCCESS', payload: result })
        })
}

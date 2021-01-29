import { apiPath } from '../lib/Requests'
import { apiDomain } from '../settings/url'

const url = 'recommends'

export const loadRecommends = () => dispatch => {
    dispatch({ type: 'RECOMMENDS_LOADING/PROGRESS' })

    fetch(apiDomain + apiPath(url))
        .then(res => res.json())
        .then(result => {
            dispatch({ type: 'RECOMMENDS_LOADING/SUCCESS', payload: result })
        })


}
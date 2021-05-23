import {apiDomain} from "../../settings/url";
import {accessTokenHeader, apiPath, defaultHeaders, getAccessToken} from "../../lib/Requests";
import {navigate} from "../../lib/NavigationService";

export const setColorTextBtn = (btn_id) => dispatch => {
    dispatch({type: 'CONSTRUCTOR/TEXT_COLOR_SET', payload: {btn_id: btn_id}})
}

const question_params_url = 'constructor/question_params'

export const constructorSendQuestionParams = (data) => dispatch => {

    const questionType = data.questionType

    dispatch({type: 'CONSTRUCTOR/SEND_QUESTION_PARAMS/PROGRESS'})
    getAccessToken().then(token => {
        fetch(apiDomain + apiPath(question_params_url),
            {
                headers: {...defaultHeaders, ...accessTokenHeader(token)},
                method: 'POST',
                body: JSON.stringify({
                    question_type: questionType,
                    // question_time: JSON.stringify(question_number),
                })
            })
            .then(res => res.json())
            .then(response => {
                dispatch({type: 'CONSTRUCTOR/SEND_QUESTION_PARAMS/SUCCESS'})
                dispatch({type: 'CONSTRUCTOR/SET_QUESTION_ID', payload: {id: response.question_id}})
                navigate('ConstructorQuestion', {type: questionType})
            })
    })
}

const question_data_url = 'constructor/question_data'

/**
 * PATCH
 * {
    title_type: 'img',
    title: url,
    subtitle: 'abcdefg',
    answers_type: ['one', 'image'],
    answers: ['url1', 'url2'],
    true_answers: 0
}
 */
export const constructorSaveQuestionData = (data) => dispatch => {
    const formData = new FormData();

    switch (data.title_type) {
        case 'img':
            formData.append('title', {uri: data.title, name: data.title.split('/').pop(), type: 'image/jpeg'})
            break
        case 'text':
            formData.append('title', data.title)
            break
    }

    formData.append('title_type', data.title_type)
    formData.append('sub_title', data.subtitle)
    formData.append('answers_type', `${data.answers_type}`)
    formData.append('answers', `${JSON.stringify(data.answers)}`)
    formData.append('true_answers', `${JSON.stringify(data.true_answers)}`)
    formData.append('question_id', `${data.question_id}`)
    formData.append('finished', `${data.finished}`)

    dispatch({type: 'CONSTRUCTOR/SAVE_QUESTION_DATA/PROGRESS'})

    getAccessToken().then(token => {
        fetch(apiDomain + apiPath(question_data_url),
            {
                method: 'PATCH',
                body: formData,
                headers: {...defaultHeaders, ...accessTokenHeader(token), 'content-type': 'multipart/form-data'}
            })
            .then(res =>
                 res.json())
            .then(_ => {
                dispatch({type: 'CONSTRUCTOR/SAVE_QUESTION_DATA/SUCCESS'})

                data.finished ? navigate('Profile') : navigate('ConstructorParams')
            })
    })
}
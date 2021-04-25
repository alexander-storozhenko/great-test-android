import {apiDomain} from "../../settings/url";
import {accessTokenHeader, apiPath, defaultHeaders, getAccessToken} from "../../lib/Requests";
import {navigate} from "../../lib/NavigationService";

export const setColorTextBtn = (btn_id) => dispatch => {
    dispatch({type: 'CONSTRUCTOR/TEXT_COLOR_SET', payload: {btn_id: btn_id}})
}

const url = 'constructor/save_question_params'

export const constructorSendQuestionParams = (data) => dispatch => {

    const questionType = data.questionType

    dispatch({type: 'CONSTRUCTOR/SEND_QUESTION_PARAMS/PROGRESS'})
    getAccessToken().then(token => {
        fetch(apiDomain + apiPath(url),
            {
                headers: {...defaultHeaders, ...accessTokenHeader(token)},
                method: 'POST',
                body: JSON.stringify({
                    question_type: questionType,
                    // question_time: JSON.stringify(question_number),
                })
            })
            .then(res => res.json())
            .then(_ => {
                dispatch({type: 'CONSTRUCTOR/SEND_QUESTION_PARAMS/SUCCESS'})
                navigate('ConstructorQuestion')
            })
    })
}
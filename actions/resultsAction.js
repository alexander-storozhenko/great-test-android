import {apiDomain} from "../settings/url";
import {apiPath, defaultHeaders} from "../lib/Requests";
import {replace} from "../lib/NavigationService";
import {sendAnswers} from "./answersAction";
import {getQuestion} from "./questionsAction";

const url = 'tests/results'

export const sendAnswersAndGetTestResults = (type, answers, test_id, question_number,) => dispatch => {
    dispatch({type: 'ANSWERS_SEND/PROGRESS', payload: {[test_id]: answers}})
    sendAnswers(type, answers, test_id, question_number, () => {
        fetch(apiDomain + apiPath(url, {test_id: test_id}))
            .then(res => res.json())
            .then(result => {
                dispatch({type: 'RESULTS/GET_RESULTS_SUCCESS', payload: result})
                replace('Finish')
            })
    })
}

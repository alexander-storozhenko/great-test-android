import {combineReducers} from 'redux'

import {move} from './sidebarReducer'
import {recommends,recommendsLoading} from './recommendsReducer'

import { navbarShow } from "./navBar";

import { question, questionNumber, questionLoading } from "./questionReducer";
import { testPreviewLoading, testPreviewInfo,testTData } from "./testReducer";
import { user_answers } from "./answersReducer";

import { search_progress, search_results } from "./searchReducer";

export default combineReducers({
    move,

    recommends,
    recommendsLoading,

    navbarShow,

    questionNumber,
    question,
    questionLoading,

    testPreviewInfo,
    testPreviewLoading,
    testTData,

    user_answers,

    search_progress,
    search_results,

})

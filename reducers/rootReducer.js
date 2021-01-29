import {combineReducers} from 'redux'

import {move} from './sidebarReducer'
import {recommends,recommendsLoading} from './recommendsReducer'

import { navbarShow } from "./navBar";

import { question, questionNumber, questionLoading } from "./questionReducer";
import { testPreviewLoading, testPreviewInfo,testTData } from "./testReducer";

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
    testTData
    
})
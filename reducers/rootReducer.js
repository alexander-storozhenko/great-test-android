import {combineReducers} from 'redux'

import {move} from './sidebarReducer'
import {recommends, recommendsLoading} from './recommendsReducer'

import {navbarShow} from "./navBar";

import {question, questionNumber, questionLoading, questionCount} from "./questionReducer";
import {testPreviewLoading, testPreviewInfo, testTData} from "./testReducer";
import {userAnswers} from "./answersReducer";

import {search_progress, search_results} from "./searchReducer";
import {profileCarouselSlideTitle} from "./profileReducers/profileCarouselReducer";
import {currentNavigation} from "./navigationReducer";

export default combineReducers({
    move,

    recommends,
    recommendsLoading,

    navbarShow,

    questionNumber,
    question,
    questionLoading,
    questionCount,

    testPreviewInfo,
    testPreviewLoading,
    testTData,

    userAnswers,

    search_progress,
    search_results,

    profileCarouselSlideTitle,

    currentNavigation,
})

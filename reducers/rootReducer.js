import {combineReducers} from 'redux'

import {move} from './sidebarReducer'
import {recommends, recommendsLoading, recommendsAdded, recommendsAddLoading} from './recommendsReducer'

import {question, questionNumber, questionLoading, questionCount} from "./questionReducer";
import {testPreviewLoading, testPreviewInfo, testTData} from "./testReducer";
import {userAnswers, answersSendProgress} from "./answersReducer";

import {search_progress, search_results} from "./searchReducer";
import {
    profileCarouselSlideTitle,
    profileCarouselLoading,
    profileCarouselData,
    profileCarouselItemSelected
} from "./profileReducers/profileCarouselReducer";
import {profileUserData} from './profileReducers/profileUserDataReducer';

import {currentNavigation} from "./navigationReducer";

import {backButton} from "./headerReducer";
import {constructorColorTextBtnClicked,} from "./constructorReducer";
import {
    constructorCarouselFirstColorBtnClicked,
    constructorCarouselSecondColorBtnClicked,
    constructorCarouselColorTypeBtnClicked,
    constructorCarouselMainInfoDataProgress,
    constructorCarouselMainInfoData,

} from './constructorReducers/carouselReducer';

import {
    constructorSelectedBtnOne,
    constructorQuestionParams,
    constructorQuestionParamsProgress,
    constructorQuestionAnswerBtnsCount,
    constructorCurrentQuestionId
} from './constructorReducers/questionReducer';

import {
    constructorSaveCard,
    constructorCardImage,
    constructorCardTitle,
    constructorCardSubTitle,
} from './constructorReducers/cardReducer';
import {panelOpen} from './debugReducer';

import {signInProgress, loginIncorrect} from './loginReducer';
import {testResults} from './resultsReducer';


export default combineReducers({
    move,

    recommends,
    recommendsLoading,
    recommendsAdded,
    recommendsAddLoading,

    questionNumber,
    question,
    questionLoading,
    questionCount,

    testPreviewInfo,
    testPreviewLoading,
    testTData,

    userAnswers,
    answersSendProgress,

    search_progress,
    search_results,

    profileCarouselSlideTitle,
    profileCarouselLoading,
    profileCarouselData,
    profileCarouselItemSelected,

    profileUserData,

    currentNavigation,

    backButton,

    constructorColorTextBtnClicked,

    constructorCarouselFirstColorBtnClicked,
    constructorCarouselSecondColorBtnClicked,
    constructorCarouselColorTypeBtnClicked,
    constructorCarouselMainInfoDataProgress,
    constructorCarouselMainInfoData,
    constructorSaveCard,
    constructorCardImage,
    constructorCardTitle,
    constructorCardSubTitle,
    constructorSelectedBtnOne,
    constructorQuestionParams,
    constructorQuestionParamsProgress,
    constructorQuestionAnswerBtnsCount,
    constructorCurrentQuestionId,

    panelOpen,

    signInProgress,
    loginIncorrect,

    testResults
})

import {combineReducers} from 'redux'

import {move} from './sidebarReducer'
import {recommends, recommendsLoading, recommendsAdded, recommendsAddLoading} from './recommendsReducer'

import {question, questionNumber, questionLoading, questionCount} from "./questionReducer";
import {
    testPreviewLoading,
    testPreviewInfo,
    testTData,
    testTDeleteProgress,
    testTDeleteSuccess
} from "./testReducer";
import {userAnswers, answersSendProgress, answersColorN2N, answersColorN2NMap} from "./answersReducer";

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
    constructorSet,
    constructorSelectOne,
    constructorQuestionParams,
    constructorQuestionParamsProgress,
    constructorQuestionAnswerBtnsCount,
    constructorCurrentQuestionId, constructorSelectSome, constructorQuestionDataStore
} from './constructorReducers/questionReducer';

import {
    constructorSaveCard,
    constructorCardImage,
    constructorCardTitle,
    constructorCardSubTitle, constructorCardMainInfoProgress, constructorCardMainInfo,
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
    testTDeleteProgress,
    testTDeleteSuccess,

    userAnswers,
    answersSendProgress,
    answersColorN2NMap,

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
    constructorCarouselMainInfoDataProgress, // post
    constructorCarouselMainInfoData, // post
    constructorSaveCard,
    constructorCardImage,
    constructorCardTitle,
    constructorCardSubTitle,
    constructorSelectOne,
    constructorSelectSome,
    constructorSet,
    constructorQuestionParams,
    constructorQuestionParamsProgress,
    constructorQuestionAnswerBtnsCount,
    constructorQuestionDataStore,
    constructorCurrentQuestionId,
    constructorCardMainInfoProgress, // get
    constructorCardMainInfo,  // get

    panelOpen,

    signInProgress,
    loginIncorrect,

    testResults,

})

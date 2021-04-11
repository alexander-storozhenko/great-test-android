import {combineReducers} from 'redux'

import {move} from './sidebarReducer'
import {recommends, recommendsLoading, recommendsAdded, recommendsAddLoading} from './recommendsReducer'

import {navbarShow} from "./navBar";

import {question, questionNumber, questionLoading, questionCount} from "./questionReducer";
import {testPreviewLoading, testPreviewInfo, testTData} from "./testReducer";
import {userAnswers, answersSendProgress} from "./answersReducer";

import {search_progress, search_results} from "./searchReducer";
import {profileCarouselSlideTitle, profileCarouselLoading, profileCarouselData, profileCarouselItemSelected} from "./profileReducers/profileCarouselReducer";
import {profileUserData} from './profileReducers/profileUserDataReducer';

import {currentNavigation} from "./navigationReducer";

import {backButton} from "./headerReducer";
import {constructorColorTextBtnClicked} from "./constructorReducer";
import {
    constructorCarouselFirstColorBtnClicked,
    constructorCarouselSecondColorBtnClicked,
    constructorCarouselColorTypeBtnClicked
} from './constructorReducers/carouselReducer';

import {constructorSaveCard, constructorCardImage} from './constructorReducers/cardReducer';
import {panelOpen} from './debugReducer';

import {signInProgress, loginIncorrect} from './loginReducer';
import {testResults} from './resultsReducer';


export default combineReducers({
    move,

    recommends,
    recommendsLoading,
    recommendsAdded,
    recommendsAddLoading,

    navbarShow,

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
    constructorSaveCard,
    constructorCardImage,

    panelOpen,

    signInProgress,
    loginIncorrect,

    testResults
})

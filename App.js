import React from 'react';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { AppLoading,  } from 'expo';
import { useFonts } from 'expo-font';
import {fontBold, fontMedium, fontRegular} from './components/StyleConstants';
import { DefaultTheme } from '@react-navigation/native';
import Screen from './Screen'
import {setLocale} from "./lib/locale/locale";
import NotificationService from "./lib/NotificationService";

const navTheme = DefaultTheme;
navTheme.colors.background = '#fff';

let store = createStore(rootReducer, applyMiddleware(thunk))

export default function App(_) {
    let [fontsLoaded] = useFonts({
        [fontBold]: require('./assets/fonts/Nunito-Bold.ttf'),
        [fontRegular]: require('./assets/fonts/Nunito-Regular.ttf'),
    });

    NotificationService.connect()

    console.disableYellowBox = true;

    setLocale('en')

    if (!fontsLoaded) return <AppLoading />;

    return (
        <Provider store={store} >
            <Screen/>
        </Provider>
    );
}
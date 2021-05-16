import React, {useEffect} from 'react';
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
// import NotificationService from "./lib/NotificationService";
import * as NotificationService  from './lib/NotificationService'
import {getData, storeData} from "./lib/AsyncStorageHelper";
import * as WebSocketConnectionService from "./lib/WebSocketConnectionService";

const navTheme = DefaultTheme;
navTheme.colors.background = '#fff';

let store = createStore(rootReducer, applyMiddleware(thunk))

export default function App(_) {
    useEffect(() => {
        NotificationService.register().then(token => storeData(NotificationService.NOTIFICATION_KEY, token))
        WebSocketConnectionService.init(1)
    }, [])

    let [fontsLoaded] = useFonts({
        [fontBold]: require('./assets/fonts/Nunito-Bold.ttf'),
        [fontRegular]: require('./assets/fonts/Nunito-Regular.ttf'),
    });

    console.disableYellowBox = true;

    setLocale('en')

    if (!fontsLoaded) return <AppLoading />;

    return (
        <Provider store={store} >
            <Screen/>
        </Provider>
    );
}
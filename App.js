import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, NativeModules } from 'react-native';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import {fontBold, fontMedium, fontRegular} from './components/StyleConstants';
import { DefaultTheme } from '@react-navigation/native';
import Screen from './Screen'
import {setLocale} from "./lib/locale/locale";

const navTheme = DefaultTheme;
navTheme.colors.background = '#fff';

let store = createStore(rootReducer, applyMiddleware(thunk))

function App(props) {
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

export default App;

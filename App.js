import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import MainRoom from "./components/mainRoom/MainRoom";
import TestRoom from "./components/testRoom/TestRoom";
import TestPreviewRoom from "./components/testPreviewRoom/TestPreviewRoom";
import NavBar from "./components/navBar/NavBar";

import Header from "./components/header/Header";
import rootReducer from './reducers/rootReducer';
import Room from './components/room/Room';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import { fontBold, fontMedium } from './components/StyleConstants';
import { NativeRouter, Route, Link } from "react-router-native";

import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {navigationRef}  from './lib/NavigationService';
import Screen from './Screen'
import {apiDomain} from "./settings/url";
import {apiPath} from "./lib/Requests";
const navTheme = DefaultTheme;
navTheme.colors.background = '#fff';

let store = createStore(rootReducer, applyMiddleware(thunk))

const Stack = createStackNavigator();

function App(props) {
    let [fontsLoaded] = useFonts({
        [fontBold]: require('./assets/fonts/Quicksand-Bold.ttf'),
        [fontMedium]: require('./assets/fonts/Quicksand-Medium.ttf'),

    });

    if (!fontsLoaded) return <AppLoading />;

    return (
        <Provider store={store} >
            <Screen/>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    row: {
        backgroundColor: '#fff',
        flexDirection: 'row'
    }
});
export default App;

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import MainRoom from "./components/mainRoom/MainRoom";
import TestRoom from "./components/testRoom/TestRoom";
import TestPreviewRoom from "./components/testPreviewRoom/TestPreviewRoom";
import NavBar from "./components/navBar/NavBar";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import rootReducer from './reducers/rootReducer';
import MovableContent from './components/movableContent/MovableContent';
import Room from './components/room/Room';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import { fontBold, fontMedium } from './components/StyleConstants';
import { NativeRouter, Route, Link } from "react-router-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {navigationRef}  from './lib/NavigationService';

let store = createStore(rootReducer, applyMiddleware(thunk))

const Stack = createStackNavigator();

function App() {
    let [fontsLoaded] = useFonts({
        [fontBold]: require('./assets/fonts/Quicksand-Bold.ttf'),
        [fontMedium]: require('./assets/fonts/Quicksand-Medium.ttf'),

    });

    if (!fontsLoaded) return <AppLoading />;

    return (
        <Provider store={store} >
            
            <View style={styles.container}>
                <Header />
                <Room>
                    <NavigationContainer ref={navigationRef} >
                        <Stack.Navigator screenOptions={{ headerShown: false }}>

                            <Stack.Screen name="Main" component={MainRoom} />
                            <Stack.Screen name="TestPreview" component={TestPreviewRoom} />
                            <Stack.Screen name="Test" component={TestRoom} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </Room>
                <NavBar />
                <StatusBar style="light" />
            </View>
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

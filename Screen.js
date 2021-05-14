import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import MainRoom from "./components/mainRoom/MainRoom";
import TestRoom from "./components/testRoom/TestRoom";
import TestPreviewRoom from "./components/testPreviewRoom/TestPreviewRoom";

import Header from "./components/header/Header";
import rootReducer from './reducers/rootReducer';
import Room from './components/room/Room';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import {contrastColor, fontBold, fontMedium, secondaryColor, tabHeight} from './components/StyleConstants';
import { NativeRouter, Route, Link } from "react-router-native";

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './lib/NavigationService';
import { showNavBar } from './actions/navBarAction';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecommendsNav from './components/svg/RecommendsNav';
import SearchNav from './components/svg/SearchNav';
import Profile from './components/svg/Profile';
import ProfileNav from './components/svg/ProfileNav';
import {opacityAnimation, slideAnimation} from './lib/NavigationAnimations'
import SearchRoom from "./components/searchRoom/SearchRoom";
import FinishScreen from "./components/finishScreen/FinishScreen";
import ProfileRoom from "./components/profileRoom/ProfileRoom";
import Constructor_MainInfoScreen from "./components/contructorRoom/Constructor_MainInfoScreen";
import ProfileRoom_SettingsScreen from "./components/profileRoom/ProfileRoom_SettingsScreen";
import Constructor_ParamsScreen from "./components/contructorRoom/Constructor_ParamsScreen";
import SignInScreen from './components/loginRoom/SignInScreen'
import Constructor_QuestionScreen from "./components/contructorRoom/Constructor_QuestionScreen";
import * as WebSocketConnectionService from "./lib/WebSocketConnectionService";

const navTheme = DefaultTheme;
navTheme.colors.background = '#fff';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function StackMainNavigator() {

    return (
        <Room>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Main" component={MainRoom} />
            </Stack.Navigator>
        </Room>
    );
}

function StackTestNavigator() {
    return <Room padding full>
        <Stack.Navigator>
            <Stack.Screen name="TestPreview" component={TestPreviewRoom} options={slideAnimation} />
            <Stack.Screen  name="Test" component={TestRoom} options={opacityAnimation}  />
            <Stack.Screen  name="Finish" component={FinishScreen} options={opacityAnimation}  />
        </Stack.Navigator>
    </Room>
}

function StackSearchNavigator() {
    return (
        <Room padding>
            <Stack.Navigator>
                <Stack.Screen name="Search" component={SearchRoom} options={slideAnimation} />
            </Stack.Navigator>
        </Room>
    );
}

function StackProfileRoomNavigator() {
    return (
        <Room padding>
            <Stack.Navigator>
                {/*<Stack.Screen name="Login" component={StackLoginNavigator} options={slideAnimation}/>*/}
                <Stack.Screen name="Profile" component={ProfileRoom} options={slideAnimation} />

                <Stack.Screen name="ConstructorMainInfo" component={Constructor_MainInfoScreen} options={slideAnimation} />
                <Stack.Screen name="ConstructorParams" component={Constructor_ParamsScreen} options={slideAnimation} />
                <Stack.Screen name="ConstructorQuestion" component={Constructor_QuestionScreen} options={slideAnimation} />
                <Stack.Screen name="Settings" component={ProfileRoom_SettingsScreen} back={true} options={slideAnimation} />
                <Stack.Screen name="Login" options={slideAnimation} component={SignInScreen} />
            </Stack.Navigator>
        </Room>
    );
}

function TabNavigator() {
    return <Tab.Navigator initialRouteName="Recommends" tabBarOptions={{
        activeTintColor: contrastColor,
        keyboardHidesTabBar: true,
        style: { height: tabHeight, position:'absolute' },
        tabStyle: {
            paddingVertical: 10
        }
    }}>
        <Tab.Screen options={{
            tabBarLabel: 'Recommends',
            tabBarIcon: ({ color, size }) => (<RecommendsNav width={20} height={20} fill={color} />),
        }} name="Recommends" component={StackMainNavigator} />
        <Tab.Screen options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (<SearchNav width={20} height={20} fill={color} />),
        }} name="Search" component={StackSearchNavigator}/>
        <Tab.Screen options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (<ProfileNav width={20} height={20} fill={color} />),
        }} name="Profile" component={StackProfileRoomNavigator} />
        {/* <Tab.Screen name="Settings" component={TestPreviewRoom} /> */}
    </Tab.Navigator>
}

const registerForPushNotificationsAsync = async () => {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
    }
    if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
    }
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);

    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }
}


function Screen(props) {
    // registerForPushNotificationsAsync()




    return (
        <View style={styles.container}>
            <Header />
            <NavigationContainer theme={navTheme}>
                <Stack.Navigator initialRouteName="Home">

                    <Stack.Screen options={{ headerShown: false }} name="Home" component={TabNavigator} />
                    <Stack.Screen options={slideAnimation} name="TestPreview" component={StackTestNavigator} />

                </Stack.Navigator>
            </NavigationContainer>
            <StatusBar style="light" />
        </View>

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
export default connect(
    state => ({
        navbarShow: state.navbarShow
    }),
    dispatch => ({
        onShowNavBar: (state) => dispatch(showNavBar(state))

    }))(Screen);

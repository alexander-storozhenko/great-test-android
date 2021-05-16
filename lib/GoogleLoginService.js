import * as GoogleSignIn from 'expo-google-app-auth'
import {getData} from "./AsyncStorageHelper";

export const login = async () => (
    // GoogleSignIn.getPlatformGUID()
    await GoogleSignIn.logInAsync({
        clientId: '71267958644-th6fsdp0aqikujcfrl2e2phrq812t870.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
    }))

export const userData = async () => await getData('google_user_data')

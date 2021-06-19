import * as GoogleSignIn from 'expo-google-app-auth'
import {getData} from "./AsyncStorageHelper";
const settings = require('../settings/settings.json')

export const login = async () => (
    // GoogleSignIn.getPlatformGUID()
    await GoogleSignIn.logInAsync({
        clientId: settings.google_client_id,
        scopes: ['profile', 'email'],
    }))

export const userData = async () => await getData('google_user_data')

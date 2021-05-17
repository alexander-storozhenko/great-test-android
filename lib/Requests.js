import {version} from "react/cjs/react.development";
import {apiDomain} from "../settings/url";
import {getData, storeData} from './AsyncStorageHelper';
import {navigateToLogin} from "./NavigationService";

export let accessToken = null

//TODO add apiDomain
export const apiPath = (path, params = {}, version = 'v1') => {
    return 'api/' + version + '/' + path + '?' + new URLSearchParams(params)
}

export const rootPath = (path) => {
    return apiDomain + path
}

export const defaultHeaders = {'Content-Type': 'application/json'}

export const accessTokenHeader = (token) => ({'ACCESS_TOKEN': token})

export const accessible = (response) => response.status !== 403
export const withoutErrors = (response) => response.status >= 200 && response.status < 300
export const successful = (response) => response.status === 200

export const setAccessToken = (token) => {

    storeData('ACCESS_TOKEN', token).then(r => console.log())

}
export const getAccessToken = async () => await getData('ACCESS_TOKEN')
export const getGoogleAccessToken = async () => await getData('GOOGLE_ACCESS_TOKEN')
import {version} from "react/cjs/react.development";
import {apiDomain} from "../settings/url";
import {getData, storeData} from './AsyncStorageHelper';
export let accessToken = null

//TODO add apiDomain
export const apiPath = (path, params = {}, version = 'v1') => {
    return 'api/' + version + '/' + path + '?' + new URLSearchParams(params)
}

export const rootPath = (path) => {
    return apiDomain + path
}

export const defaultHeaders = {'Content-Type': 'application/json'}

export const accessTokenHeader = () => ({'ACCESS_TOKEN': getData('ACCESS_TOKEN')})

export const accessible = (response) => response.status !== 403
export const successful = (response) => response.status === 200

export const setAccessToken = (token) => {

    storeData('ACCESS_TOKEN', token).then(r => console.log(getData('ACCESS_TOKEN')))

}
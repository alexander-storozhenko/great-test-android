import {version} from "react/cjs/react.development";
import {apiDomain} from "../settings/url";

export let accessToken = null

//TODO add apiDomain
export const apiPath = (path, params = {}, version = 'v1') => {
    return 'api/' + version + '/' + path + '?' + new URLSearchParams(params)
}

export const rootPath = (path) => {
    return apiDomain + path
}

export const defaultHeaders = {'Content-Type': 'application/json'}

export const accessTokenHeader = (access_token) => ({'ACCESS_TOKEN': access_token})

export const accessible = (response) => response.status !== 403

export const setAccessToken = (token) => accessToken = token
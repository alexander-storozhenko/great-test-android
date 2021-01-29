import { version } from "react/cjs/react.development";
import { apiDomain } from "../settings/url";

export const apiPath = (path, params = {}, version = 'v1') => {
    return 'api/' + version + '/' + path + '?' + new URLSearchParams(params)
}
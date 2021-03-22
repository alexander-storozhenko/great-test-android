import {locale_root_en} from "./en/root";
import {locale_root_ru} from "./ru/root";

let root = locale_root_en

export const setLocale = (lang) => {
    switch (lang) {
        case 'ru':
            root = locale_root_ru
            break;
        case 'en':
            root = locale_root_en
            break;
        default:
            root = locale_root_en
            break;
    }
}

export const getLocaledString = (path) => {
    if (!root[path] && !locale_root_en[path])
        return 'undefined string'

    return root[path] ? root[path] : locale_root_en[path]
}

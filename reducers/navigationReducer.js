import {navigationRef, setNavigation} from "../lib/NavigationService";

export const currentNavigation = (state = null, action) => {
    if (action.type === 'NAVIGATION/SET') {
        setNavigation(action.payload)
        return action.payload
    }
    return state
}

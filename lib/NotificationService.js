import * as Permissions from "expo-permissions";
import {Notifications} from "expo";

export const NOTIFICATION_KEY  = 'notification_token'

export const register = async () => {
    const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS)

    if(status !== 'granted')
        await Permissions.askAsync(Permissions.NOTIFICATIONS)

    if(status !== 'granted')
        return

    return (await Notifications.getExpoPushTokenAsync())
}
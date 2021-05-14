import * as Permissions from "expo-permissions";
import {Notifications} from "expo";

export const NOTIFICATION_KEY  = 'notification_token'

export const register = async () => {
    const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS)

    if(status !== 'granted')
        await Permissions.askAsync(Permissions.NOTIFICATIONS)

    if(status !== 'granted')
        return

    await Notifications.createChannelAndroidAsync('my-channel', {
        name: 'notice',
        sound: true,
        vibrate: true
    });

    return (await Notifications.getExpoPushTokenAsync())
}
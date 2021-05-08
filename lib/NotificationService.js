// import Constants from 'expo-constants';
// import * as Permissions from "expo-permissions";
// import { Notifications } from "expo";

export default class NotificationService {

    static setHandlers = () => {
        // Notifications.setNotificationHandler({
//     handleNotification: async () => ({
//         shouldShowAlert: true,
//         shouldPlaySound: false,
//         shouldSetBadge: false,
//     }),
// });
    }

    static connect = () => {

        // const [expoPushToken, setExpoPushToken] = useState('');
        // const [notification, setNotification] = useState(false);
        // const notificationListener = useRef();
        // const responseListener = useRef();

        //
        //registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
        //
        //
        //     notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        //         setNotification(notification);
        //     });
        //
        //     // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
        //     responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        //         console.log(response);
        //     });
        //
        //     return () => {
        //         Notifications.removeNotificationSubscription(notificationListener.current);
        //         Notifications.removeNotificationSubscription(responseListener.current);
        //     };
        //

    }

    // static async function sendPushNotification(expoPushToken) {
//     const message = {
//         to: expoPushToken,
//         sound: 'default',
//         title: 'Original Title',
//         body: 'And here is the body!',
//         data: { someData: 'goes here' },
//     };
//
//     await fetch('https://exp.host/--/api/v2/push/send', {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Accept-encoding': 'gzip, deflate',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(message),
//     });
// }
//
// static async function registerForPushNotificationsAsync() {
//     let token;
//     if (Constants.isDevice) {
//         const { status: existingStatus } = await Permissions.getAsync(     Permissions.NOTIFICATIONS);
//         let finalStatus = existingStatus;
//         if (existingStatus !== 'granted') {
//             const { status } = await Notifications.requestPermissionsAsync();
//             finalStatus = status;
//         }
//         if (finalStatus !== 'granted') {
//             alert('Failed to get push token for push notification!');
//             return;
//         }
//         token = (await Notifications.getExpoPushTokenAsync()).data;
//         console.log(token);
//     } else {
//         alert('Must use physical device for Push Notifications');
//     }
//     //
//     // if (Platform.OS === 'android') {
//     //     Notifications.setNotificationChannelAsync('default', {
//     //         name: 'default',
//     //         importance: Notifications.AndroidImportance.MAX,
//     //         vibrationPattern: [0, 250, 250, 250],
//     //         lightColor: '#FF231F7C',
//     //     });
//     // }
//
//     return token;
// }
}
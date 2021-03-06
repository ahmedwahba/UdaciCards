import { registerRootComponent } from 'expo';
import { Alert } from 'react-native';

import App from './App';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import NotificationService from './src/utilities/NotificationService';

window.notification = new NotificationService(onNotification);

const onNotification = (notif) => {
    Alert.alert(notif.title, notif.message);
    console.log('notification', notif);
    window.notification.finish(PushNotificationIOS.FetchResult.NoData);
};

    //Permissions to use notifications
function handlePerm(perms) {
    Alert.alert("Permissions", JSON.stringify(perms));
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

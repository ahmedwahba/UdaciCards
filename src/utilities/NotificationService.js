import PushNotification from 'react-native-push-notification';
import { Platform } from 'react-native';

export default class NotificationService {
        //onNotificaitn is a function passed in that is to be called when a
        //notification is to be emitted.
      constructor(onNotification) {
        this.configure(onNotification);
        this.createChannel();
      }

      configure(onNotification) {
        PushNotification.configure({
          onNotification: onNotification,
          permissions: {
            alert: true,
            badge: true,
            sound: true,
          },
          requestPermissions: Platform.OS === 'ios',
          popInitialNotification: true,
        });
      }

      createChannel () {
        PushNotification.createChannel(
            {
              channelId: "quiz-notification-daily", // (required)
              channelName: "quiz notification", // (required)
              channelDescription: "udacicards notifications", // (optional) default: undefined.
              soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
              importance: 4, // (optional) default: 4. Int value of the Android notification importance
              vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
            },
            (created) => console.log(`createChannel returned '${created}'`));
      }

      scheduleNotification() {
        PushNotification.localNotificationSchedule({
          date: new Date(Date.now() + (60 * 1000)), //one day 60 * 60 * 24 seconds
          title: "Remember Your quiz", 
          message: "You  haven't completed at least one quiz today",
          playSound: true, 
          soundName: 'default', 
          repeatType: 'day',
          allowWhileIdle: false,
          channelId: "quiz-notification-daily",
        });
      }

      getScheduledLocalNotifications(callback) {
        return PushNotification.getScheduledLocalNotifications(callback);
      }

      checkPermission(cbk) {
        return PushNotification.checkPermissions(cbk);
      }

      cancelAll() {
        PushNotification.cancelAllLocalNotifications();
      }
}
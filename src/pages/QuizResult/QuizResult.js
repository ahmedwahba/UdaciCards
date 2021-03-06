import React from 'react';
import { View, Image, Text } from 'react-native';
import defaultStyle from "../../components/Common/general.style";
import styles from './QuizResult.style';
import PageContainer from '../../components/PageContainer/PageContainer';
import { Button, Title } from 'react-native-paper';
import { Pages } from '../../../navigationStack';

const background = require('../../assets/imgs/result-bg.png');

class  QuizResult extends React.Component {
    componentWillUnmount() {
        window.notification.getScheduledLocalNotifications((notifications) => { 
            if (notifications?.length > 0) {
                window.notification.cancelAll();
            }
            window.notification.scheduleNotification();
        });
    }

    onRestartQuizPress = () => {
        this.props.navigation.navigate(Pages.Quiz);
    }

    onBackToDeckPress = () => {
        const { deckTitle } = this.props.route.params;
        if (deckTitle) {
            this.props.navigation.navigate(Pages.DeckDetails, {
              title: deckTitle,
            });
        }
    }

    render() {
        const { result, questions } = this.props.route.params;

        return (
          <PageContainer>
            <Image source={background} style={styles.backgroundImage} />
            <Title style={styles.title}>
              Quiz Finished{" "}
              <View style={styles.smiley}>
                <Text style={styles.smileyTxt}> {' : )'} </Text>
              </View>
            </Title>
            {questions && (
              <View style={styles.resultWrap}>
                <Text style={styles.result}>{result}</Text>
                <Text style={styles.resultOf}>of</Text>
                <Text style={styles.total}>{questions}</Text>
              </View>
            )}
            <Button
              style={[defaultStyle.button]}
              mode="contained"
              onPress={this.onRestartQuizPress}
            >
              Restart Quiz
            </Button>
            <Button
              style={[defaultStyle.button]}
              mode="contained"
              onPress={this.onBackToDeckPress}
            >
              Back to deck
            </Button>
          </PageContainer>
        );
    }
}

export default QuizResult
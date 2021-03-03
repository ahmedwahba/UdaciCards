import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import defaultStyle from "../../components/Common/general.style";
import styles from './Quiz.style';
import { connect } from 'react-redux';
import PageContainer from '../../components/PageContainer/PageContainer';
import { shuffle } from '../../utilities/general';
import CardFlip from 'react-native-card-flip';
import { Pages } from '../../../navigationStack';
import { Button, Paragraph } from 'react-native-paper';


class  Quiz extends React.Component {
    state = {
        questions: [],
        currentIndex: 0,
        correctCount: 0,
        flipsCount: 0,
    }

    card;

    componentDidMount() {
        this.loadQuestions();
    }

    componentDidUpdate() {
        if (this.state.questions.length <= 0) {
            this.loadQuestions();
        }
    }

    resetQuiz = () => {
        this.setState({
            questions: [],
            currentIndex: 0,
            correctCount: 0,
            flipsCount: 0,
        });
    }

    loadQuestions = () => {
        const questions = shuffle(this.props.selectedDeck.questions);
        this.setState({ questions });
    }

    goToResultPage = () => {
        const { currentIndex, questions, correctCount } = this.state;
        if (currentIndex >= questions.length) {
          this.props.navigation.navigate(Pages.QuizResult, {
            result: correctCount,
            questions: questions.length,
            deckTitle: this.props.selectedDeck.title,
          });
          this.resetQuiz();
        }
    }

    onResultPress = (isCorrect) => {
        if (this.state.flipsCount % 2 !== 0) {
            this.onCardPress();
        }

        this.setState((prevState) => ({
            correctCount: isCorrect ? prevState.correctCount + 1 : prevState.correctCount,
            currentIndex: prevState.currentIndex + 1,
        }), () => {
            this.goToResultPage();
        });
        
    }

    onCardPress = () => {
        this.setState((prevState) => ({
            flipsCount: prevState.flipsCount + 1,
          }));
        this.card.flip();
    }

    render() {
        const { questions, currentIndex } = this.state;

        return (
          <PageContainer>
            <Paragraph style={styles.questionCount}>
              {currentIndex + 1 + " of " + questions?.length}
            </Paragraph>
            <CardFlip
              style={styles.cardContainer}
              ref={(card) => (this.card = card)}
            >
              <TouchableOpacity
                style={styles.card}
                onPress={this.onCardPress}
              >
                <Text style={styles.cardBody}>{questions[currentIndex]?.question}</Text>
                <View style={styles.cardBottom}>
                    <Text style={styles.cardBottomText}>Show Answer</Text> 
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.card}
                onPress={this.onCardPress}
              >
                <Text style={styles.cardBody}>{questions[currentIndex]?.answer}</Text>
                <View style={styles.cardBottom}>
                    <Text style={styles.cardBottomText}>Show Question</Text> 
                </View>
              </TouchableOpacity>
            </CardFlip>
            <Button
              style={[defaultStyle.button, styles.correct]}
              mode="contained"
              onPress={() => {
                this.onResultPress(true);
              }}
            >
              Correct
            </Button>
            <Button
              style={[defaultStyle.button, styles.incorrect]}
              mode="contained"
              onPress={() => {
                this.onResultPress(false);
              }}
            >
              Incorrect
            </Button>
          </PageContainer>
        );
    }
}

const mapStateToProps = ({ selectedDeck }) => {
    return {
        selectedDeck,
    }
}


export default connect(mapStateToProps)(Quiz);
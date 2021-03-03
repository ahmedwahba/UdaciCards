import React from 'react';
import { TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import defaultStyle from "../../components/Common/general.style";
import styles from './NewCard.style';
import PageContainer from '../../components/PageContainer/PageContainer';
import { Button } from 'react-native-paper';
import { addNewCard } from '../../actions/Decks';

class  NewCard extends React.Component {
    state= {
        question: '',
        answer: '',
    }

    onAddCardPress = async () => {
        const { question, answer } = this.state;
        const { deckId } = this.props.route.params;
        console.log(' card inf', this.state, this.props.route.params);
        if (deckId) {
            await this.props.addNewCard(deckId, question, answer);
            this.props.navigation.goBack();
        }
    }

    render() {
        const { answer, question } = this.state;

        return (
            <PageContainer>
              <TextInput
                placeholder="Your question"
                label="Question"
                value={question}
                onChangeText={(question) => {
                    this.setState({ question });
                }}
                style={[defaultStyle.textInput, styles.input]}
              />
              <TextInput
                placeholder="Answer of the question "
                label="answer"
                value={answer}
                onChangeText={(answer) => {
                    this.setState({ answer });
                }}
                style={[defaultStyle.textInput, styles.input]}
              />
              <Button 
                onPress={this.onAddCardPress}
                style={defaultStyle.button}
                mode="contained"
                disabled={!(question && answer)}>
                Submit
              </Button>
            </PageContainer>
          );
    }
}

export default connect(null, { addNewCard })(NewCard);
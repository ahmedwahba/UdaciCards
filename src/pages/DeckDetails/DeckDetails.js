import React from 'react';
import { View } from 'react-native';
import defaultStyle from "../../components/Common/general.style";
import styles from './DeckDetails.style';
import PageContainer from '../../components/PageContainer/PageContainer';
import { Button, Title, Paragraph } from 'react-native-paper';
import { connect } from 'react-redux';
import { loadSelectedDeck } from '../../actions/Decks';
import { Pages } from '../../../navigationStack';

class  DeckDetails extends React.Component {

    componentDidMount() {
        const { route, navigation, loadSelectedDeck } = this.props
        const currentTitle = route.params.title;
        if (currentTitle) {
            navigation.setOptions({title: currentTitle})
            loadSelectedDeck(currentTitle);
        }
    }

    onAddCardPress = () => {
        const { navigation, selectedDeck } = this.props;
        navigation.navigate(Pages.NewCard, { deckId:  selectedDeck.id});
    }

    onStartQuizPress = () => {
        this.props.navigation.navigate(Pages.Quiz);
    }

    render() { console.log('selected deck', this.props.selectedDeck)
        const { selectedDeck } = this.props;

        return (
          <PageContainer>
            <Title style={styles.title}> {selectedDeck.title} </Title>

            <Paragraph style={styles.count}>
              {selectedDeck.questions?.length + " Cards"}
            </Paragraph>

            <Button
              style={[defaultStyle.button, styles.buttons]}
              onPress={this.onAddCardPress}
              mode="contained"
            >
              Add Card
            </Button>

            <Button
              style={defaultStyle.button}
              onPress={this.onStartQuizPress}
              mode="contained"
              disabled={selectedDeck.questions?.length <= 0}
            >
              Start Quiz
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
  
export default connect(mapStateToProps, { loadSelectedDeck })(DeckDetails);
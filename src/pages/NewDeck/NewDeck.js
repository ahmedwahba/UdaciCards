import React from 'react';
import { TextInput, View } from 'react-native';
import defaultStyle from "../../components/Common/general.style";
import styles from './NewDeck.style';
import { connect } from 'react-redux';
import { addNewDeck } from '../../actions/Decks';
import PageContainer from '../../components/PageContainer/PageContainer';
import { Button, Title } from 'react-native-paper';

class  NewDeck extends React.Component {
    state = {
        title: ''
    }

    goBackToDecks = async () => {
        const sucess = await this.props.addNewDeck(this.state.title);
        if (sucess) {
            this.props.navigation.goBack();
        }
    }


    render() {
        return (
          <PageContainer>
            <Title style={styles.intro}>
              What is the title of your deck ?
            </Title>

            <TextInput
              placeholder="Deck Title"
              label="Title"
              value={this.state.title}
              onChangeText={(title) => {
                this.setState({ title });
              }}
              style={[defaultStyle.textInput, styles.input]}
            />

            <Button
              onPress={this.goBackToDecks}
              style={defaultStyle.button}
              mode="contained"
              disabled={!this.state.title}
            >
              Submit
            </Button>
          </PageContainer>
        );
    }
}
export default connect(null, { addNewDeck })(NewDeck);
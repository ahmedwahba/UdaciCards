import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './DecksList.style';
import { connect } from 'react-redux';
import { loadDecks } from '../../actions/Decks';
import PageContainer from '../../components/PageContainer/PageContainer';
import { FAB } from 'react-native-paper';
import DeckCard from '../../components/DeckCard/DeckCard';
import { Pages } from '../../../navigationStack';


class DecksList extends React.Component {
  componentDidMount() {
    this.props.loadDecks();
  }

  onDeckPress = (title) => {
    this.props.navigation.navigate(Pages.DeckDetails, { title });
  }

  goToNewDeck = () => {
    this.props.navigation.navigate(Pages.NewDeck);
  }

  render() {
    return (
      <PageContainer>
        <FlatList
          data={Object.values(this.props.decks)}
          style={styles.deckList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <DeckCard
                title={item?.title}
                cardsCount={item?.questions?.length}
                onPress={() => {
                  this.onDeckPress(item?.title);
                }}
              />
            );
          }}
          ListEmptyComponent={() => {
            return (
              <DeckCard
                title={"Start adding your decks"}
                onPress={this.goToNewDeck}
              />
            );
          }}
        />

        <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={this.goToNewDeck}
        />
      </PageContainer>
    );
  }
}

const mapStateToProps = ({ decks }) => {
  return {
    decks,
  }
}

export default connect(mapStateToProps, { loadDecks })(DecksList);
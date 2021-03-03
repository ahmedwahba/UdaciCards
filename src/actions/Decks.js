import { 
    storageKeys, 
    saveData, 
    readData,
} from '../utilities/storage';
import { Alert } from 'react-native'

const ADD_NEW_DECK = 'ADD_NEW_DECK';
const LOAD_ALL_DECKS = 'LOAD_ALL_DECKS';
const ADD_NEW_DECK_CARD = 'ADD_NEW_DECK_CARD';
const LOAD_SELECTED_DECK_CARDS = 'LOAD_SELECTED_DECK_CARDS';

const addNewDeckAction = (deckId, newDeck) => {
    return {
        type: ADD_NEW_DECK,
        id: deckId,
        newDeck,
    }
}

const loadAllDecksAction = (decks) => {
    return {
        type: LOAD_ALL_DECKS,
        decks,
    }
}

const addNewDeckCardAction = (deckId, newCard) => {
    return {
        type: ADD_NEW_DECK_CARD,
        deckId,
        newCard,
    }
}

const loadSelectedDeckCardAction = (selectedDeck) => {
    return {
        type: LOAD_SELECTED_DECK_CARDS,
        selectedDeck
    }
}

const displayDeckExistAlert = () => {
    Alert.alert(
        "Error !",
        "You already have a deck with the same title",
        [
          {
            text: "OK",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          }
        ],
        { cancelable: false }
      );
}

const formateDeckId = (title) => {
    return title.replace(/\s/g, '');
}

const addNewDeck = (deckTitle) => {
    return async (dispatch, getState) => {
        const deckId = formateDeckId(deckTitle);
        const decks = getState().decks;
        if (decks[deckId]) {
          displayDeckExistAlert();
          return false;
        } else {
            const newDeck = {
                title: deckTitle,
                questions: [],
            };
            decks[deckId] = newDeck;
            await saveData(storageKeys.decks, decks);
            dispatch(addNewDeckAction(deckId, newDeck))
            return true;
        }
    }
}

const loadDecks = () => {
    return async (dispatch) => {
        const decks = await readData(storageKeys.decks);
        if (decks) {
            dispatch(loadAllDecksAction(decks));
        }
    }
}

const addNewCard = (deckId, question, answer) => {
    return async (dispatch, getState) => {
        const decks = getState().decks;
        if (decks[deckId]) {
          decks[deckId].questions.push({ question, answer});
          await saveData(storageKeys.decks, decks);
          dispatch(addNewDeckCardAction(deckId, { question, answer}))
          return true;
        } 
    }
}

const loadSelectedDeck = (title) => {
    return (dispatch, getState) => {
        const deckId = formateDeckId(title);
        const decks = getState().decks;
        if (decks[deckId]) {
            const selectedDeck = decks[deckId];
            selectedDeck.id = deckId;
            dispatch(loadSelectedDeckCardAction(selectedDeck));
        }
    }
}

export {
    ADD_NEW_DECK,
    LOAD_ALL_DECKS,
    ADD_NEW_DECK_CARD,
    LOAD_SELECTED_DECK_CARDS,
    addNewDeck,
    loadDecks,
    addNewCard,
    loadSelectedDeck,
}
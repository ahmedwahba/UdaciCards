import { 
    ADD_NEW_DECK,
    LOAD_ALL_DECKS,
    ADD_NEW_DECK_CARD,
    LOAD_SELECTED_DECK_CARDS,
} from '../actions/Decks';

const defaultState = {
    selectedDeck: {},
    decks: {},
}

const decksReducer = (state = defaultState, action) => {
    switch (action.type) {
      case ADD_NEW_DECK:
        return {
            ...state,
            decks: {
                ...state.decks,
                [action.id]: action.newDeck,
            }
        };
      case LOAD_ALL_DECKS:
        return {
            ...state,
            decks: action.decks,
        }
      case ADD_NEW_DECK_CARD:
        /* just refresh state as changed occured in referenced question array in action  */
        return {
            ...state,
            decks: {
                ...state.decks,
            },
            selectedDeck: {
                ...state.selectedDeck,
            }
        };
      case LOAD_SELECTED_DECK_CARDS:
        return {
            ...state,
            selectedDeck: action.selectedDeck,
        };
      default:
        return state;
    }
};

export default decksReducer;
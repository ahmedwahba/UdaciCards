import AsyncStorage from '@react-native-community/async-storage'

const storageKeys = {
    decks: 'ALL_DECKS',
    selectedDeck: 'SELECTED_DECK'
}

const saveData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      alert('Failed to save the data to the storage');
    }
}

const readData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      return value ? JSON.parse(value) : null;

    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }

export {
    storageKeys,
    saveData,
    readData,
}
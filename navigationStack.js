import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  DecksList,
  NewDeck,
  DeckDetails,
  NewCard,
  Quiz,
  QuizResult,
} from "./src/pages/pages";
import Header from './src/components/Header/Header';


const Pages = {
    DecksList: 'DecksList',
    NewDeck: 'NewDeck',
    DeckDetails: 'DeckDetails',
    NewCard: 'NewCard',
    Quiz: 'Quiz',
    QuizResult: 'QuizResult',
}


const Stack = createStackNavigator();
    
function MainStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator 
            initialRouteName="DecksList" 
            screenOptions={{
                header: (props) => <Header {...props} />,
        }}>
          <Stack.Screen name={Pages.DecksList} component={DecksList} options={{ title: "Decks" }}/>
          <Stack.Screen name={Pages.NewDeck} component={NewDeck} options={{ title: "New Deck" }} />
          <Stack.Screen name={Pages.DeckDetails} component={DeckDetails} options={{ title: "Deck Details" }} />
          <Stack.Screen name={Pages.NewCard} component={NewCard} options={{ title: "New Card" }} />
          <Stack.Screen name={Pages.Quiz} component={Quiz} options={{ title: "Quiz" }} />
          <Stack.Screen name={Pages.QuizResult} component={QuizResult} options={{ title: "Result" }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
  
export { 
    MainStack,
    Pages,
};
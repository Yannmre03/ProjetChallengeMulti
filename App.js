import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AccueilPage from './components/accueil';
import SelectionAnnee from './components/selectionannee';
import ReglagesPage from './components/reglages';
import PremiereAnneePage from './components/PremiereAnnee';
import QuizzPage from './components/quizz';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NavQuizz">
        <Stack.Screen name="NavAccueil" component={AccueilPage} />
        <Stack.Screen name="NavSelectionAnnee" component={SelectionAnnee} />
        <Stack.Screen name="NavReglages" component={ReglagesPage} />
        <Stack.Screen name="NavPremAnnee" component={PremiereAnneePage} />
        <Stack.Screen name="NavQuizz" component={QuizzPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBE5DA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AccueilPage from './components/accueil';
import SelectionAnnee from './components/selectionannee';

const Stack = createStackNavigator();
console.log("stack cree");
function App() {
  return (
    <NavigationContainer>
      console.log("in function app");
      <Stack.Navigator initialRouteName="NavAccueil">
        <Stack.Screen name="NavAccueil" component={AccueilPage} />
        console.log("premier screen cree");
        <Stack.Screen name="NavSelectionAnnee" component={SelectionAnnee} />
        console.log("2eme screen cree");
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

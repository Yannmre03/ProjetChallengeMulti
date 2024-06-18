import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AccueilPage from './components/accueil';
import SelectionAnnee from './components/selectionannee';
import ReglagesPage from './components/reglages';
import PremiereAnneePage from './components/PremiereAnnee';
import QuizzPage from './components/quizz';
import FinQuizzPage from './components/finQuizz';
import ChoixCoursExercicesPage from './components/choixCoursExercices';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import ChoixChapPage from './components/ChoixChap';
import VisualiserPDFPage from './components/VisualiserPdf';

const Stack = createStackNavigator();

function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'LuckiestGuy': require('./assets/LuckiestGuy-Regular.ttf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    loadFonts();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <Stack.Navigator initialRouteName="NavAccueil">
            <Stack.Screen name="NavAccueil" component={AccueilPage} />
            <Stack.Screen name="NavSelectionAnnee" component={SelectionAnnee} />
            <Stack.Screen name="NavReglages" component={ReglagesPage} />
            <Stack.Screen name="NavPremAnnee" component={PremiereAnneePage} />
            <Stack.Screen name="NavQuizz" component={QuizzPage} />
            <Stack.Screen name="NavFinQuizz" component={FinQuizzPage} />
            <Stack.Screen name="NavChoixCoursExercices" component={ChoixCoursExercicesPage} />
            <Stack.Screen name="NavChoixChap" component={ChoixChapPage} />
            <Stack.Screen name="NavVisualiserPdf" component={VisualiserPDFPage} />
          </Stack.Navigator>
        </ScrollView>
      </View>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBE5DA',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});

import * as React from 'react';
import 'react-native-gesture-handler';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

//React-Navigation Import 
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screen Import
import CalculScreen from '../NivantisApp/Screen/CalculScreen';
import FormScreen from '../NivantisApp/Screen/FormScreen';
import GeolocalisationScreen from '../NivantisApp/Screen/GeolocalisationScreen';
import AccueilScreen from '../NivantisApp/Screen/AccueilScreen';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const BottomMenu = createBottomTabNavigator();

export default function App() {
  return (
  
      
   <NavigationContainer >
    <BottomMenu.Navigator>
      <BottomMenu.Screen name ="Accueil" component={AccueilScreen}/>
      <BottomMenu.Screen name ="Calcul" component={CalculScreen}/>
      <BottomMenu.Screen name ="Formulaire" component={FormScreen}/>
      <BottomMenu.Screen name ="Geolocalisation" component={GeolocalisationScreen}/>
    </BottomMenu.Navigator>
   </NavigationContainer> 
  );
}



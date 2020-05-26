import * as React from 'react';
import { Image,Platform,StyleSheet, Text, View } from 'react-native';
import logo from '../assets/LogoNivantis.png'; 

export default class AccueilScreen extends React.Component {
    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Welcome to</Text>
                <Image source={logo} style={{ width: 305, height: 159 }} /> 
            </View>
        );
    }
}
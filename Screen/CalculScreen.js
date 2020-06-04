import * as React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

//Import des composants
import FormTauxRemise from "../Components/FormTauxRemise";
import FormPrixAchatNet from '../Components/FormPrixAchatNet';
import FormPrixDeVenteNet from '../Components/FormPrixDeVenteNet';
import FormCoeffMulti from "../Components/FormCoeffMulti";

 class CalculScreen extends React.Component {
    

    render() {
        return(
            <ScrollView>
                
                <View style={{marginTop:50 , marginRight: 5, marginLeft:5}}>
                        <FormTauxRemise />
                        <FormPrixAchatNet/>
                        <FormPrixDeVenteNet/>
                        <FormCoeffMulti/>
                </View>

            </ScrollView>
        );
    }
}
export default CalculScreen

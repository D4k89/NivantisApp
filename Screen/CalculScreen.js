import * as React from 'react';
import { Platform, TextInput, StyleSheet, Text, View, Button } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default class CalculScreen extends React.Component {
    
    
    constructor (props) {
        super(props);
        //Variable à utiliser dans les calculs
        

    };

    render() {
        return(
            <ScrollView>
                
                <View>
                    <Text>Taux de remise :</Text>
                    <TouchableOpacity>
                        

                    </TouchableOpacity>

                    
                    
                </View>

            </ScrollView>
        );

        function CalculerTauxRemise () {
            // (1 – Prix d’achat net / Prix d’achat brut) x 100 

        }

        function CalculerPrixAchatNet () {
            //  Prix d’achat brut x (1 – taux de remise) 
        }

        function CalculerPrixVenteNet () {
            // prix d’achat net x coefficient multiplicateur
        }

        function CalculerCoefficientMultiplicateur () {
            // Prix de vente net / Prix d’achat net
        }
    }

}
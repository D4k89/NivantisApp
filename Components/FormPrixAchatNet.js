import React, {Component} from 'react';
import { View, StyleSheet, Button, Text, Alert } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';

class FormPrixAchatNet extends React.Component {
    
    constructor(props) {
        super(props);
        this.state ={
            PrixAchatBrut: 0,
            TauxDeRemise: 0,
            resultat: 0
        };
    };

   _Calcul = () => {
      var PrixAchatBrut =this.state.PrixAchatBrut;
      var TauxDeRemise =this.state.TauxDeRemise;
        
       this.state.resultat= (PrixAchatBrut*(1-TauxDeRemise)) ;
    
       Alert.alert("Le prix d'achat net est de  " + this.state.resultat.toFixed(2)+"euros") ;
       
    }

    render(){
        return(
            <View style={styles.container}>
            <Text style={{fontSize: 20}}>Calcul du prix d'achat net :</Text>

            <TextInput style={styles.input} keyboardType ="numeric"
             placeholder="Indiquez le prix d'achat brut" 
             onChangeText={(Number) =>{this.setState({PrixAchatBrut: Number}) 
             
            }}/>
            
            <TextInput style={styles.input} keyboardType ="numeric"
             placeholder="Indiquez le taux de remise" 
             onChangeText={(Number) =>{this.setState({TauxDeRemise: Number}) 
            }}/>
            
                <Text style={{fontSize: 15}}>Le prix d'achat net est de : {this.state.resultat} euros</Text>
            
            <TouchableHighlight>
            <Button 
             title="Calculer"
             color="red"
             onPress={() => this._Calcul()}/>
            </TouchableHighlight>
          </View>
       
        );
    }
    
}

const styles = StyleSheet.create({
    container :{
        flex: 1,
        borderWidth: 2,
        borderColor: "#20232a",
        borderRadius: 3,
        marginBottom: 10
    },
    text: {
        paddingLeft: 5
    },
    input: {
        marginLeft:10
    }
    
    })
export default FormPrixAchatNet
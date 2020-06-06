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
        const{PrixAchatBrut} =this.state;
        const{TauxDeRemise} =this.state;
        let {resultat} =this.state;
        
        //TODO : voir ce qu'il cloche dans le calcul 
        if(Number(TauxDeRemise) >= 0 && Number(TauxDeRemise) <= 100 && Number(PrixAchatBrut) >= 0){
            resultat = PrixAchatBrut*(1-TauxDeRemise);
            Alert.alert("Le prix d'achat net est de " + resultat.toFixed(2)+"euros");
        }else{
            Alert.alert("Valeurs manquantes/négative. Taux entre 0 et 100");
        }
        
    
        
       
    }

    render(){
        return(
            <View style={styles.container}>
            <Text style={{fontSize: 20}}>Calcul du prix d'achat net :</Text>

            <TextInput style={styles.input} keyboardType ="numeric"
             placeholder="Indiquez le prix d'achat brut" 
             onChangeText={PrixAchatBrut => this.setState({PrixAchatBrut})}
            />
            
            <TextInput style={styles.input} keyboardType ="numeric"
             placeholder="Indiquez le taux de remise" 
             onChangeText={TauxDeRemise => this.setState({TauxDeRemise})}
             />
            
                <Text style={{fontSize: 15}}>Le prix d'achat net est de : {this.state.resultat.toFixed(2)} euros</Text>
            
            <TouchableHighlight>
            <Button 
             title="Calculer"
             color="red"
             onPress={this._Calcul}/>
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
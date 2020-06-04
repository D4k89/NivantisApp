import React, {Component} from 'react';
import {StyleSheet ,View, Button, Text, Alert } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';

class FormTauxRemise extends React.Component {
    
    constructor(props) {
        super(props);
        this.state ={
            PrixAchatNet: 0,
            PrixAchatBrut: 0,
            resultat: 0
        };
    };

   _Calcul = () => {
       var PrixAchatNet =this.state.PrixAchatNet;
       var PrixAchatBrut =this.state.PrixAchatBrut;
        
       this.state.resultat= (1 - PrixAchatNet/PrixAchatBrut)*100;
    
       Alert.alert("Le taux de remise est de  " + this.state.resultat.toFixed(2)+"%") ;
       
    }

    render(){
        return(
            <View style={styles.container}>

            <Text style={{fontSize: 20}}>Calcul du taux de remise :</Text>

            <TextInput style={styles.input} keyboardType ="numeric" 
             placeholder="Indiquez le prix d'achat net" 
             onChangeText={(Number) =>{this.setState({PrixAchatNet: Number}) 
             
            }}/>
            
            <TextInput style={styles.input}  keyboardType ="numeric" 
             placeholder="Indiquez le prix d'achat brut" 
             onChangeText={(Number) =>{this.setState({PrixAchatBrut: Number}) 
            }}/>
            
                <Text style={{fontSize: 15}}>Le taux de remise est de : {this.state.resultat} %</Text>
            
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
export default FormTauxRemise
import React from 'react';
import {StyleSheet ,View, Button, Text, Alert } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';

class FormTauxRemise extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
            PrixAchatNet: 0,
            PrixAchatBrut: 0,
            resultat: 0,
        };
    };

   _Calcul = () => {
        const{PrixAchatNet} =this.state;
        const{PrixAchatBrut} =this.state;
        let {resultat} =this.state;
      
        if(Number(PrixAchatNet) >= 0 && Number(PrixAchatBrut) >= 0){
            if(Number(PrixAchatBrut) > Number(PrixAchatNet)){
                resultat = (1 - PrixAchatNet/PrixAchatBrut)*100;
                Alert.alert("Le taux de remise est de  " +resultat.toFixed(2)+"%");
            }else{
                Alert.alert("La valeur brut doit être plus élevée que la valeur net");
            }
        }else{
            Alert.alert("Une ou plusieurs valeurs sont manquantes/négatives");
        } 
    }

    render(){
        
        return(
            <View style={styles.container}>

            <Text style={{fontSize: 20}}>Calcul du taux de remise :</Text>

            <TextInput style={styles.input} keyboardType ="numeric" 
             placeholder="Indiquez le prix d'achat net" 
             onChangeText={PrixAchatNet => this.setState({PrixAchatNet})}
             />
            
            <TextInput style={styles.input}  keyboardType ="numeric" 
             placeholder="Indiquez le prix d'achat brut" 
             onChangeText={PrixAchatBrut => this.setState({PrixAchatBrut})}
             />
            
                <Text style={{fontSize: 15}}>Le taux de remise est de : {this.state.resultat.toFixed(2)} %</Text>
            
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
export default FormTauxRemise
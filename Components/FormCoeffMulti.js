import React from 'react';
import { View, StyleSheet, Button, Text, Alert } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';

class FormCoeffMulti extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            PrixVenteNet: 0,
            PrixAchatNet: 0,
            resultat: 0
        };
    };

   _Calcul = () => {
        const{PrixAchatNet} =this.state;
        const{PrixVenteNet} =this.state;
        let {resultat} = this.state
       
        if(Number(PrixAchatNet) >= 0 && Number(PrixVenteNet) >= 0){
            resultat= (PrixVenteNet/PrixAchatNet);
            Alert.alert("Le coefficient multiplicateur est : " +resultat.toFixed(2)+"") ;
        }else{
            Alert.alert("Une ou plusieurs valeurs sont manquantes/négatives");
        }
    }

    render(){
        return(
            <View style={styles.container} >
            <Text style={{fontSize: 20}}>Calcul du coefficient multiplicateur :</Text>

            <TextInput style={styles.input} keyboardType ="numeric"
             placeholder="Indiquez le prix de vente net" 
             onChangeText={PrixVenteNet => this.setState({PrixVenteNet})}
             />
            
            <TextInput style={styles.input} keyboardType ="numeric"
             placeholder="Indiquez le prix d'achat net" 
             onChangeText={PrixAchatNet => this.setState({PrixAchatNet})}/>
            
                <Text style={{fontSize: 15}}>Coefficient multiplicateur : {this.state.resultat.toFixed(2)}</Text>
            
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
export default FormCoeffMulti
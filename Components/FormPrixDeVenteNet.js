import React from 'react';
import { View, StyleSheet , Button, Text, Alert } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';

class FormPrixDeVenteNet extends React.Component {
    
    constructor(props) {
        super(props);
        this.state ={
            PrixAchatNet: 0,
            CoefficientMulti: 0,
            resultat: 0
        };
    };

   _Calcul = () => {
        const{PrixAchatNet} =this.state;
        const{CoefficientMulti} =this.state;
        let {resultat} =this.state;
        
        if(Number(PrixAchatNet) >= 0 && Number(CoefficientMulti) >= 0){
            resultat = (PrixAchatNet*CoefficientMulti);
            Alert.alert("Le prix de vente net est de  " +resultat.toFixed(2)+"euros") ;
        }else{
            Alert.alert("Une ou plusieurs valeurs sont manquantes/négatives");
        }
    }

    render(){
        return(
            <View style={styles.container}>
            <Text style={{fontSize: 20}}>Calcul du prix de vente net :</Text>

            <TextInput style={styles.input} keyboardType ="numeric"
             placeholder="Indiquez le prix d'achat net" 
             onChangeText={PrixAchatNet => this.setState({PrixAchatNet})}
             />
            
            <TextInput style={styles.input} keyboardType ="numeric"
             placeholder="Indiquez le coefficient multiplicateur" 
             onChangeText={CoefficientMulti => this.setState({CoefficientMulti})}
             />
            
                <Text style={{fontSize: 15}}>Le prix de vente net est de : {this.state.resultat.toFixed(2)} euros</Text>
            
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
export default FormPrixDeVenteNet
import * as React from 'react';
import {StyleSheet, View } from 'react-native';

import Mapcomponent from './MapComponents';



class DataMap extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Data : [{Nom : 'Deux portes', Adresse : '14 rue des papillons' , NbrEmployes : 6, Commandes : 25, long : 48.0818662, lat : 3.2943247},
        {Nom : 'De bailly', Adresse : '1 rue des tilleuls ' , NbrEmployes : 3, Commandes : 15, long : 52.0828772, lat : 5.5443543},
        {Nom : 'Pharmacie la cathédrale', Adresse : '23 rue des sablons' , NbrEmployes : 5, Commandes : 8, long : 43.5198582, lat : 7.4586844}]
        };
    };

    render(){
        return(
            <View>
                <Mapcomponent Data={[this.state.Data]}/>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    contenu :{
        borderWidth: 2,
        borderColor: "#20232a",
        borderRadius: 3,
        marginBottom: 10,
        flexDirection : 'column'
        
    },
    text: {
        paddingLeft: 5
    },
    input: {
        marginLeft:10
    }
    
    })

export default DataMap
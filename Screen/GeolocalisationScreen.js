import * as React from 'react';
import {Text, View } from 'react-native';
import MapComponents from '../Components/MapComponents'

class GeolocalisationScreen extends React.Component {    
    constructor(props){
        super(props);
        this.state ={

        };
    };
    
    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                
                <MapComponents/>
            </View>
        );
    }
}
export default GeolocalisationScreen
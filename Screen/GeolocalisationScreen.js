import * as React from 'react';
import {View } from 'react-native';
import DataMap from '../Components/DataMap';


class GeolocalisationScreen extends React.Component {    
    constructor(props){
        super(props);
        this.state ={

        };
    };
    
    render(){
        return(
            <View>
                
                <DataMap/>
            </View>
        );
    }
}
export default GeolocalisationScreen
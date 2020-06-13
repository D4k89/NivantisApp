import * as React from 'react';
import {StyleSheet,Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import FormPrixAchatNet from './FormPrixAchatNet';

class Mapcomponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    };

    render(){
        return(
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    showsUserLocation={true}
                    region={{
                        
                    }}>
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: '100 %',
      width: '100 %',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });

export default Mapcomponent

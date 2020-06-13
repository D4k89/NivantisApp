import * as React from 'react';
import {StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

class Mapcomponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            latitude :0,
            longitude: 0,
            error: null
            
        };
    };

    UNSAFE_componentWillMount(){
        navigator.geolocation.getCurrentPosition(position => {
        this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                error: null
            });
        }, error => this.setState({error: error.message}),
        {enableHighAccuracy:true, timeout: 20000, maximumAge: 2000}
        );
    }

    render(){
        return(
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    showsUserLocation={true}
                    region={{
                        latitude: 48.1271023,
                        longitude: 3.3330463,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}>
                    <Marker coordinate={this.state}/>

                    
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });

export default Mapcomponent

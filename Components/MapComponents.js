import * as React from 'react';
import {StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';


class Mapcomponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            latitude :0,
            longitude: 0,
            error: null,
        };
        
        //console.log(this.props.Data[0])
    };
componentDidMount(){
    setInterval(() => {
        this.props.Data[0].forEach(element => {
            
            //console.log(this.props.Data[0].element.longitude);
            //console.log(this.props.Data[0].element.latitude);

            /*console.log(this.state.Markerlongitude);
            console.log(this.state.Markerlatitude);*/
            console.log(this.props.Data[0][0].long);
            console.log(this.props.Data[0][0].lat);
            
            <Marker
            title="this is a title" 
            coordinate = {{latitude : this.props.Data[0][0].lat,
            longitude: this.props.Data[0][0].long}}/>
            
        });
        
        /*console.log(this.props.Data[0][index].longitude)
        console.log(this.props.Data[0][index].latitute)*/
        
       //console.log(this.props.Data[0][0].longitude)
       //console.log(this.props.Data[0][1].longitude)
        
    }, 5000);
}
    

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
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    showsUserLocation={true}
                    region={{
                        latitude: 48.1271023,
                        longitude: 3.3330463,
                        latitudeDelta: 3.000,
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
      //marginTop : 300,
      height: 400,
      width: 400,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });

export default Mapcomponent

import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Icon, Button } from 'react-native-elements'
import { Marker } from 'react-native-maps';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

//var currentLAT=location.coords.latitude;
//var currentLONG =location.coords.longitude;

const cordenadas =[
        {
              latitude: 25.661862,
            longitude: -100.421069,//RADIO UDEM
        },
        {
              latitude: 25.660439, //CCU, BANCOMER Y LA TROYA
            longitude: -100.419929,
        },
        {
              latitude: 25.660072, //RESIS
            longitude: -100.421923,
        },
        {
              latitude: 25.66179443, //EDIFICIO 1 Y 2
            longitude: -100.419700,
        },
        {
              latitude: 25.66194433, //EDIFICIO 3 Y 4
            longitude: -100.42086,
        },
        {
              latitude: 25.66186269, //EDIFICIO 5 Y 6 Y SANTANDER
            longitude: -100.4205053,
        },
        {
              latitude: 25.661863, //CRGS
            longitude: -100.422278,
        },
        {
              latitude: 25.657383, //PREPA UDEM
            longitude: -100.421046,
        },
        {
              latitude: 25.6635236, //RECTORIA Y CIAA
            longitude: -100.419874700,
        },
        {
              latitude: 25.6603516, //SEVEN
            longitude: -100.42102268,
        },
        {
              latitude: 25.662005, //SOMBREADO Y STARBUCKS
            longitude: -100.4203179,
        },
        {
              latitude: 25.66126070, //BIBLIOTECA Y DITSI
            longitude: -100.4197386,
        },
        
];


/*const titulo =[
        {title: "RADIO UDEM"},
        {title: "CCU, BANCOMER Y LA TROYA"},
        {title: "RESIS"},
        {title: "EDIFICIO 1 Y 2"},
        {title: "EDIFICIO 3 Y 4"},
        {title: "EDIFICIO 5 Y 6 Y SANTANDER"},
        {title: "CRGS"},
        {title: "PREPA UDEM"},
        {title: "RECTORIA Y CIAA"},
        {title: "SEVEN"},
        {title: "SOMBREADO Y STARBUCKS"},
        {title: "BIBLIOTECA Y DITSI"},
];*/
class Mapa9 extends Component {

  /*constructor(props) {
    super(props);

   this.state = {
      latitude: position.coords.latitude,
           longitude: position.coords.longitude,
      error: null,
    };
  }*/

 /*constructor (props) {
    super(props)
    this.state = {
      data: this.props.data,
    }
    this.cordenadas = [];
}*/
  componentDidMount() {

    navigator.geolocation.getCurrentPosition(
       (position) => {
         console.log(position);

        this.state = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        };

         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
          latitudeDelta: 0.1,
          longitudeDelta: 0.05,
         });
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 },
     );
   }

  render() {

   //console.log(this.setState);
    return (
<MapView
  region={this.state}
  initialRegion={this.state}
  
  style={{ flex: 1 }}
         showsUserLocation={true}
        followUserLocation = {true}
         zoomEnabled = {true}
>


<Marker
  coordinate = {cordenadas[9]}
  //title = "EDIFICIO 1 Y 2"
         />


  <MapViewDirections
    origin = {this.state}
    destination = {cordenadas[9]}
            strokeWidth = {4}
            strokeColor = "red"
            apikey = { "AIzaSyDUas0-SmxYDsRt1Pidw60DMWAfQgA8cPE" }
            mode = "walking"
  />

  
</MapView>
    );
  }
}

export default Mapa9;

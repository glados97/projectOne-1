import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Image, Dimensions, TouchableHighlight } from 'react-native';
import { Marker } from 'react-native-maps';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const { width, height } = Dimensions.get("window");

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

class Mapa extends Component {

  /*constructor(props) {
    super(props);

   this.state = {
      latitude: position.coords.latitude,
           longitude: position.coords.longitude,
      error: null,
    };
  }*/

  onMapLayout = () => {
    this.setState({ isMapReady: true });
  }

  returner(){
    this.props.navigator.pop();
  }

  
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
  <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <View style={{flexDirection:'row', marginBottom: 20, backgroundColor: '#F5F5F5'}}>
        <TouchableHighlight onPress={this.returner.bind(this)} underlayColor={'transparent'}>
                        <View style={styles.backbutton}>
                            <Text style={styles.backtxt}>{'<'}</Text>
                        </View>
        </TouchableHighlight>

        <Image 
                style={styles.logo}
                source={require('./images/search.png')}
                />
      </View>
  <MapView
    region={this.state}
    initialRegion={this.state}
    
    style={{ flex: 1, height: height, width: width }}
    showsUserLocation={true}
    followUserLocation = {true}
    zoomEnabled = {true}
  >
  <Marker
    coordinate = {cordenadas[3]}
          />
    <MapViewDirections
      origin = {this.state}
      destination = {cordenadas[3]}
              strokeWidth = {4}
              strokeColor = "red"
              apikey = { "AIzaSyDUas0-SmxYDsRt1Pidw60DMWAfQgA8cPE" }
              mode = "walking"
              />
  </MapView>
  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#eeeeee',
      position: 'absolute',
    },
    backbutton: {
      height: 50,
      width: 50,
      backgroundColor: '#37474F',
      marginTop: 20,
      marginLeft: 20,
      justifyContent: "center",
      borderRadius: 25
    },
    backtxt: {
      color: "white",
      fontSize: 32,
      alignSelf: "center",
      marginTop: -5
    },
    boton: {
      height: 40,
      width: 200,
      alignSelf: "center",
      backgroundColor: '#ffcd40',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10
    },
    txtboton: {
      alignSelf: "center",
      fontSize: 16,
      fontWeight: "bold",
      color: "#282828"
    },
    logo: {
      height: 90,
      width: 260,
      alignSelf: 'center',
      marginTop: 5,
      marginLeft: 15,
      aspectRatio: 4, 
      resizeMode: 'contain',
    },
});

export default Mapa;

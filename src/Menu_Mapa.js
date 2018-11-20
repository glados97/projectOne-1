import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Alert, FlatList, ActivityIndicator, ScrollView } from 'react-native';
import { Icon, Button } from 'react-native-elements'
import Home from './Home';
import Mapa from './Mapa';

import Mapa0 from './mapa/Mapa0';
import Mapa1 from './mapa/Mapa1';
import Mapa2 from './mapa/Mapa2';
import Mapa3 from './mapa/Mapa3';
import Mapa4 from './mapa/Mapa4';
import Mapa5 from './mapa/Mapa5';
import Mapa6 from './mapa/Mapa6';
import Mapa7 from './mapa/Mapa7';
import Mapa8 from './mapa/Mapa8';
import Mapa9 from './mapa/Mapa9';
import Mapa10 from './mapa/Mapa10';
import Mapa11 from './mapa/Mapa11';

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

class Menu_Mapa extends Component {

renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

constructor (props) {
    super(props)
    this.state = {
      data: this.props.data,  
    }
    this.state = {
        cordenadas: [0],
    }    
};

returner(){
    this.props.navigator.pop();
}

linker(comp){
    this.props.navigator.push({
        component: comp,
        passProps: {   
          data: this.state.data

       },
       cordenadas: this.state.cordenadas
    })
  }

  submitme(){
    firebase.auth().signOut().then((user)=>{
        //alert('You are logged in!');
        this.props.navigator.immediatelyResetRouteStack([{
            component: Login
        }]);   
    }).catch(function(e){
        alert(e);
    })
}

  render() {
    return (
    	<View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
    	 <ScrollView>
    
       <View style={{flexDirection:'row', marginBottom: 20}}>

      <TouchableHighlight onPress={this.returner.bind(this)} underlayColor={'transparent'}>
                      <View style={styles.backbutton}>
                          <Text style={styles.backtxt}>{'<'}</Text>
                      </View>
      </TouchableHighlight>

      <Image 
              style={styles.logo}
              source={require('./images/search.png')}
              />
        
        <Icon
        name='md-log-out'
        type='ionicon'
        size={45}
        color='#37474F'
        underlayColor={'transparent'}
        containerStyle={{position:'absolute',alignSelf:'flex-end',marginLeft:340}}
        onPress={this.submitme.bind(this)}
      />
        </View>
      

    <Button
        small
        //rightIcon={{name: 'arrow-forward', size:20}}
        borderRadius={40}
        backgroundColor='#6e7e8b'
        containerViewStyle={{ marginTop:15}}
        fontSize={12}
        fontWeight='bold'
        title='RADIO UDEM'
        onPress={this.linker.bind(this, Mapa0)}
       // this.props.contenido
        />

    <Button
        small
        borderRadius={60}
        backgroundColor='#6e7e8b'
        containerViewStyle={{ marginTop:15}}
        fontSize={12}
        fontWeight='bold'
        title='CENTRO DE LA COMUNIDAD UNIVERSITARIA (CCU), BANORTE, CAFETERÍA'
        onPress={this.linker.bind(this, Mapa1)}
        />

    <Button
        small
        borderRadius={60}
        backgroundColor='#6e7e8b'
        containerViewStyle={{ marginTop:15}}
        fontSize={12}
        fontWeight='bold'
        title='RESIDENCIAS UDEM'
        onPress={this.linker.bind(this, Mapa2)}
        />

    <Button
        small
        borderRadius={60}
        backgroundColor='#6e7e8b'
        containerViewStyle={{ marginTop:15}}
        fontSize={12}
        fontWeight='bold'
        title='EDIFICIO 1 Y 2'
        onPress={this.linker.bind(this, Mapa3)}
        />

    <Button
        small
        borderRadius={60}
        backgroundColor='#6e7e8b'
        containerViewStyle={{ marginTop:15}}
        fontSize={12}
        fontWeight='bold'
        title='EDIFICIO 3 Y 4'
        onPress={this.linker.bind(this, Mapa4)}
        />

    <Button
        small
        borderRadius={60}
        backgroundColor='#6e7e8b'
        containerViewStyle={{ marginTop:15}}
        fontSize={12}
        fontWeight='bold'
        title='EDIFICIO 5 Y 6, SANTANDER'
        onPress={this.linker.bind(this, Mapa5)}
        />

       <Button
        small
        borderRadius={60}
        backgroundColor='#6e7e8b'
        containerViewStyle={{ marginTop:15}}
        fontSize={12}
        fontWeight='bold'
        title='CENTRO ROBERTO GARZA SADA'
        onPress={this.linker.bind(this, Mapa6)}
        />
      
       <Button
        small
        borderRadius={60}
        backgroundColor='#6e7e8b'
        containerViewStyle={{ marginTop:15}}
        fontSize={12}
        fontWeight='bold'
        title='PREPA UDEM'
        onPress={this.linker.bind(this, Mapa7)}
        />

       <Button
        small
        borderRadius={60}
        backgroundColor='#6e7e8b'
        containerViewStyle={{ marginTop:15}}
        fontSize={12}
        fontWeight='bold'
        title='RECTORÍA, CENTRO DE INFORMACIÓN Y ATENCIÓN A ALUMNOS (CIAA)'
        onPress={this.linker.bind(this, Mapa8)}
        />  

       <Button
        small
        borderRadius={60}
        backgroundColor='#6e7e8b'
        containerViewStyle={{ marginTop:15}}
        fontSize={12}
        fontWeight='bold'
        title='SEVEN ELEVEN'
        onPress={this.linker.bind(this, Mapa9)}
        />

       <Button
        small
        borderRadius={60}
        backgroundColor='#6e7e8b'
        containerViewStyle={{ marginTop:15}}
        fontSize={12}
        fontWeight='bold'
        title='SOMBREADO Y STARBUCKS'
        onPress={this.linker.bind(this, Mapa10)}
        />

       <Button
        small
        borderRadius={60}
        backgroundColor='#6e7e8b'
        containerViewStyle={{ marginTop:15}}
        fontSize={12}
        fontWeight='bold'
        title='BIBLIOTECA Y DITSI'
        onPress={this.linker.bind(this, Mapa11)}
        />
        </ScrollView>
      </View>
    );
  }
} //component


const styles = StyleSheet.create({
	

    container: {
        flex: 1,
        backgroundColor: '#E4E4E4',
      },
      container2: {
        backgroundColor: '#F9FC65',
      },
      welcome: {
        alignSelf: "center",
        fontSize: 40,
        color: '#303030',
        fontWeight: "300",
        fontFamily: 'sans-serif-light',
        textAlign: 'left',
        marginTop: 10
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

export default Menu_Mapa;

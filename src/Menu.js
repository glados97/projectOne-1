import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Alert } from 'react-native';
import { Icon, Button } from 'react-native-elements'
import Home from './Home';
import Mapa from './Mapa';
import Direcciones from './Direcciones';
import firebase from 'firebase';
import { bold } from 'ansi-colors';

class Menu extends Component {

constructor (props) {
    super(props)
    this.state = {
      data: this.props.data,
    }
}

returner(){
    this.props.navigator.pop();
}

linker(comp){
    this.props.navigator.push({
        component: comp,
        passProps: {   
          data: this.state.data
       },
    })
  }

  render() {
    return (
    <View style={styles.container}>

    {/* <TouchableHighlight onPress={this.returner.bind(this)} underlayColor={'transparent'}>
                    <View style={styles.backbutton}>
                        <Text style={styles.backtxt}>{'<'}</Text>
                    </View>
    </TouchableHighlight> */}

    <View style={styles.container2}>
    <Image 
            style={styles.logo}
            source={require('./images/search.png')}
            />
      </View>

    <Text style={styles.welcome}>¡Bienvenido!</Text>
    <Text style={styles.welcome2}>¿Qué deseas hacer?</Text>

    <View>
    <Button
        large
        borderRadius={60}
        backgroundColor='#6e7e8b'
        containerViewStyle={{ marginTop:30}}
        fontSize={18}
        fontWeight='bold'
        rightIcon={{name: 'search', size:40}}
        title='BUSCAR COLABORADOR'
        onPress={this.linker.bind(this, Home)}
        />
    </View>

    <View>
    <Button
        large
        borderRadius={60}
        backgroundColor='#e29359'
        containerViewStyle={{margin:20}}
        fontSize={18}
        fontWeight='bold'
        rightIcon={{name: 'location', size:30, type:'octicon'}}
        title='MAPA'
        onPress={this.linker.bind(this, Mapa)}
        />
    </View>

    <View style={styles.containerlogoudem}>  
          <Image 
              style={styles.logoudem}
              source={require('./images/udem2.png')}
              />
        </View>
      
      {/* <TouchableHighlight onPress={this.linker.bind(this, Home )} underlayColor={'transparent'}>
                    <View style={styles.boton}>
                        <Text style={styles.txtboton}>Mostrar Direcciones</Text>
                    </View>
      </TouchableHighlight>

      <TouchableHighlight underlayColor={'transparent'}>
                    <View style={styles.boton}>
                        <Text style={styles.txtboton}>Mostrar Horario</Text>
                    </View>
      </TouchableHighlight> */}

        
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E4E4E4',
        //position: 'absolute',
      },
      container2: {
        backgroundColor: '#F9FC65',
        // alignItems: 'center',
        // justifyContent: 'flex-start',
        // alignSelf: "center",
      },
      containerIcon: {
        // margin: 5,
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
      welcome2: {
        alignSelf: "center",
        fontSize: 22,
        color: '#505050',
        fontWeight: "300",
        fontFamily: 'sans-serif-light',
        textAlign: 'left',
        //margin: 5
      },
      logoudem: {
        height: 100,
        width: 50,
        aspectRatio: 1.2, 
        resizeMode: 'contain',
        //margin: 10
      },
      containerlogoudem: {
        alignItems: 'flex-end', //horizontal
        justifyContent: 'flex-start', //vertical
        margin:10
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
        height: 100,
        width: 280,
        alignSelf: 'center',
        margin: 30,
        marginTop: 40,
        aspectRatio: 4, 
        resizeMode: 'contain',
      },

});

export default Menu;

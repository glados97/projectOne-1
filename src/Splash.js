import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';

import Login from './Login';

const {width} = Dimensions.get('window');

class Splash extends Component {


    //método de conteo para dirigirse a la pantalla de Login
    componentDidMount(){
        // Empieza a contar cuando se carga la página
        this.timeoutHandle = setTimeout(()=>{
            this.props.navigator.push({
                component: Login
            }); 
        }, 2000);
   }

   //método para borrar el conteo
   componentWillUnmount(){
        clearTimeout(this.timeoutHandle);
   }


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.containerlogo}>  
          <Image 
              style={styles.logo}
              source={require('./images/search.png')}
              />
        </View>

      <View style={styles.container2}>
          <Image 
              style={styles.logoudem}
              source={require('./images/udem2.png')}
              />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E4E4E4'
      },
      container2: {
        backgroundColor: '#F9FC65',
        alignItems: 'center', //horizontal
        position: 'absolute',
        bottom: 0,
        width:width
      },
      containerlogo: {
        // alignItems: 'center', //horizontal
        // justifyContent: 'center', //vertical
        alignSelf: 'center',
        marginTop: 160
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
      },
      logoudem: {
        height: 100,
        width: 50,
        aspectRatio: 1.5, 
        resizeMode: 'contain',
        margin: 10
      },
      logo: {
        height: 120,
        width: 280,
        // marginTop: 5,
        aspectRatio: 14, 
        resizeMode: 'contain'
      }
});

export default Splash;

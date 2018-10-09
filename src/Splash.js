import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

import Login from './Login';

class Splash extends Component {


  //   componentDidMount(){
  //       // Empieza a contar cuando se carga la página
  //       this.timeoutHandle = setTimeout(()=>{
  //           this.props.navigator.push({
  //               component: Login
  //           }); 
  //       }, 2000);
  //  }

   componentWillUnmount(){
        clearTimeout(this.timeoutHandle);
   }


  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.containerlogoudem}>  
          <Image 
              style={styles.logoudem}
              source={require('./images/udem1.jpg')}
              />
        </View>

        <View style={styles.containerlogo}>  
          <Image 
              style={styles.logo}
              source={require('./images/search.png')}
              />
        </View>



      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C4C4C4',
      },
      containerlogoudem: {
        alignItems: 'flex-start', //horizontal
        justifyContent: 'flex-start' //vertical
      },
      containerlogo: {
        alignItems: 'center', //horizontal
        justifyContent: 'center', //vertical
        alignSelf: 'center',
        marginTop: 120
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
        height: 90,
        width: 260,
        // marginTop: 5,
        //aspectRatio: 20, 
        resizeMode: 'cover'
      }
});

export default Splash;

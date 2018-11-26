import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import Login from './src/Login';
import Register from './src/Register';
import Forgot from './src/Forgot';
import Splash from './src/Splash';
import Perfil from './src/Perfil';
import Mapa from './src/Mapa';
import Mapa0 from './src/mapa/Mapa0';
import Mapa1 from './src/mapa/Mapa1';
import Mapa2 from './src/mapa/Mapa2';
import Mapa3 from './src/mapa/Mapa3';
import Mapa4 from './src/mapa/Mapa4';
import Mapa5 from './src/mapa/Mapa5';
import Mapa6 from './src/mapa/Mapa6';
import Mapa7 from './src/mapa/Mapa7';
import Mapa8 from './src/mapa/Mapa8';
import Mapa9 from './src/mapa/Mapa9';
import Mapa10 from './src/mapa/Mapa10';
import Mapa11 from './src/mapa/Mapa11';
import Menu_Mapa from './src/Menu_Mapa';
import ImagenVisor from './src/ImagenVisor';
import Menu from './src/Menu';
import Home from './src/Home';
import firebaseApp from './src/Firebase';
import firebase from 'firebase';
import {DrawerNavigator} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation'
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

// firebase.initializeApp({
//     apiKey: "AIzaSyAdLGWXdswQlUxVS5UXQXD6UrXzl9N4mXg",
//     authDomain: "projectsearch-e7575.firebaseapp.com",
//     databaseURL: "https://projectsearch-e7575.firebaseio.com",
//     projectId: "projectsearch-e7575",
//     storageBucket: "projectsearch-e7575.appspot.com",
//     messagingSenderId: "309866393253"
// });


class App extends Component {


  renderScene(route, navigator){
    return<route.component navigator={navigator} {... route.passProps}/>
  }


  render(){
    return(
      <Navigator
      initialRoute={{component: Login}}
      renderScene={this.renderScene.bind(this)} />
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;

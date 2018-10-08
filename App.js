import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import Login from './src/Login';
import Register from './src/Register';
import Forgot from './src/Forgot';
import Splash from './src/Splash';
import Home from './src/Home';
import firebaseApp from './src/Firebase';
import firebase from 'firebase';

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
    return<route.component navigator={navigator} />
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

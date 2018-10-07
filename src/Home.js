import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import firebase from 'firebase';
import Login from './Login';

class Home extends Component {

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
      <View style={styles.container}>

        <TouchableHighlight onPress={this.submitme.bind(this)} underlayColor={'transparent'}>
                    <View style={styles.bigbutton}>
                        <Text style={styles.txtboton}>LOG OUT</Text>
                    </View>
        </TouchableHighlight>

         <Text style={styles.welcome}>Home</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        //margin: 10
      },
      ramInput: {
        height: 50,
        width: 300,
        alignSelf: "center",
        fontSize: 18,
        //backgroundColor: "cyan",
        marginTop: 10
      },
      bigbutton: {
        height: 50,
        width: 80,
        alignSelf: "flex-end",
        margin: 10,
        backgroundColor: '#ffcd40',
        justifyContent: 'center'
      },
      txtboton: {
        color: 'white',
        alignSelf: "center",
        fontSize: 18,
        fontWeight: "400",
        color: "black"
      }

});

export default Home;

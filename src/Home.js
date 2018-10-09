import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements';
import firebase from 'firebase';
import Login from './Login';
import firebaseApp from './Firebase';

console.ignoredYellowBox = ['Setting a timer'];

var ref = firebase.database().ref("/");
var query = ref.orderByChild("Nombre").equalTo("Consuelo Jimenez");

query.on("value", snapshot => {
    console.log(snapshot.val());
});

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

         {/* <Text style={styles.welcome}>Hi {firebase.auth().currentUser.email}</Text> */}

         <View>
        <Text style={styles.welcome}>Search For Teacher</Text>
        <TextInput
              style={styles.ramInput}
              placeholder={"Buscar"}
              //onChange={this.handleChange.bind(this)}
            />
        <TouchableHighlight
                //style = {styles.button}
                underlayColor= "transparent"
                //onPress = {this.handleSubmit.bind(this)}
              >
              <Text style={styles.txtboton}>SEARCH</Text>
            </TouchableHighlight>
      </View>

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
        marginTop: 10,
        borderColor: 'gray', 
        borderWidth: 1
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
        fontSize: 16,
        fontWeight: "500",
        color: "black"
      }

});

export default Home;

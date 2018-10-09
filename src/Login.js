import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, Image, Alert, NetInfo, KeyboardAvoidingView } from 'react-native';
import Register from './Register';
import Forgot from './Forgot';
import Home from './Home';

import firebase from 'firebase';

class Login extends Component {

  // listenForTasks(tasksRef) {
  //   // listen for changes to the tasks reference, when it updates we'll get a
  //   // dataSnapshot from firebase
  //   tasksRef.on('value', (dataSnapshot) => {
  //     // transform the children to an array
  //     var tasks = [];
  //     dataSnapshot.forEach((child) => {
  //       tasks.push({
  //         name: child.val().name,
  //         _key: child.key
  //       });
  //     });


componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange);

    NetInfo.isConnected.fetch().done(
      (isConnected) => { this.setState({ status: isConnected }); }
    );
    navigator.geolocation.watchPosition(
      (position) => {
        this.setState({ position });
        //Alert.alert('Atención', 'GPS');
      },
      (error) => {
        if (error.code === 2) {
          Alert.alert('Atención', 'No tienes activado GPS. Asegúrate de activar la geolocalización');
          }
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
}

componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionChange);
}

handleConnectionChange = (isConnected) => {
        this.setState({ status: isConnected });
        console.log(`is connected: ${this.state.status}`);
        if(isConnected==false)
        Alert.alert('Atención', 'No tienes conexión a Internet. Asegúrate de conectarte a una red');
        
}

// componentDidMount() {
// navigator.geolocation.watchPosition(
//   (position) => {
//     this.setState({ position });
//     //Alert.alert('Atención', 'GPS');
//   },
//   (error) => {
//     if (error.code === 2) {
//       Alert.alert('Atención', 'No tienes activado GPS. Asegúrate de activar la geolocalización');
//       }
//   },
//   {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
// );
// }


constructor (props) {
    super(props)
    this.state = {
        email: "",
        password: ""
    }
}

submitme(){
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((user)=>{
        
        if (firebase.auth().currentUser.emailVerified){
        //alert('You are logged in!');
        this.props.navigator.immediatelyResetRouteStack([{
            component: Home
        }]); 
      }else {
        Alert.alert('Atención', 'Favor de verificar email')
      }
    }).catch(function(e){
      Alert.alert('Error', 'Email o contraseña incorrecta')
    })
}

linker(comp){
    this.props.navigator.push({
        component: comp
    })
}

  render() {
    return (
      <View  style={styles.container}>

            <Image 
            style={styles.logo}
            source={require('./images/search.png')}
            />

        <View style={styles.container2}>

            {/* <Text > {this.state.isConnected ? 'Online' : 'Offline'}</Text> */}
            <Text style={styles.welcome}>Login</Text>


        <View style={styles.containerInput}>
            <TextInput style={styles.ramInput}
                onChangeText={(email) =>this.setState({email})}
                placeholder={"Ingresa email"}
                placeholderTextColor={"black"}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={()=> this.password.focus()}
            />
            <Text style={styles.txtval1}>Formato: usuario@dominio.com</Text>

            <TextInput style={styles.ramInput}
                onChangeText={(password) =>this.setState({password})}
                placeholder={"Ingresa contraseña"}
                secureTextEntry={true}
                placeholderTextColor={"black"}
                autoCorrect={false}
                returnKeyType="go"
                ref={(input) => this.password = input}
            />
            <Text style={styles.txtval1}>Minimo 6 caracteres y máximo 12 caracteres</Text>
         </View>

            <TouchableHighlight onPress={this.linker.bind(this, Forgot)} underlayColor={'transparent'}>
                
                    <Text style={styles.txtlink}>¿Olvidaste la contraseña?</Text>
                
            </TouchableHighlight>

            <TouchableHighlight onPress={this.submitme.bind(this)} underlayColor={'transparent'}>
                    <View style={styles.bigbutton}>
                        <Text style={styles.txtboton}>LOGIN</Text>
                    </View>
                </TouchableHighlight>
            
            <TouchableHighlight onPress={this.linker.bind(this, Register)} underlayColor={'transparent'}>
                <View style={styles.container3}>
                    <Text style={styles.txtnormal}>¿No tienes cuenta?</Text>
                    <Text style={styles.txtlink2}>   Regístrate aquí</Text>
                </View>
            </TouchableHighlight>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    position: 'absolute',
    //marginRight: 40
  },
  container2: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: "center",
    margin: 10,
  },
  containerInput: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: "center",
    //margin: 40,
  },
  container3: {
    flexDirection: 'row',
    marginTop: 10,
  },
  box: {
    height: 45,
    width: 300,
    backgroundColor: 'green',
    justifyContent: 'center',
    margin: 10,
    elevation: 0
  },
  txtboton: {
    color: 'white',
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "500",
    color: "black"
  },
  txtlink: {
    alignSelf: "flex-start",
    textAlign: 'left',
    fontSize: 16,
    fontWeight: "200",
    color: "black",
    marginTop: 10
  },
  txtlink2: {
    alignSelf: "flex-start",
    textAlign: 'left',
    fontSize: 18,
    fontWeight: "500",
    color: "black",
    marginTop: 10
  },
  txtnormal: {
    marginBottom: 10,
    fontSize: 18,
    //fontWeight: "200",
    color: "black",
    marginTop: 10
  },
  txtval1: {
    fontSize: 15,
    fontStyle: 'italic',
    alignSelf: "flex-start",
    //fontWeight: "200",
    color: "black",
    marginLeft: 20,
    color: '#606060'
  },
  welcome: {
    alignSelf: "flex-start",
    color: 'black',
    fontSize: 30,
    fontWeight: "600",
    textAlign: 'left',
    margin: 10
  },
  ramInput: {
    height: 50,
    width: 300,
    alignSelf: "center",
    fontSize: 18,
    //margin: 20,
    //marginTop:20,
    //marginBottom:20,
    marginLeft: 20,
    marginRight: 20,
  },
  bigbutton: {
    height: 50,
    width: 300,
    alignSelf: "center",
    marginTop: 40,
    backgroundColor: '#ffcd40',
    justifyContent: 'center'
  },
  logo: {
    height: 90,
    width: 260,
    //alignSelf: 'center',
    marginTop: 5,
    aspectRatio: 2, 
    resizeMode: 'contain',
  }
});

export default Login;

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, Image, Alert, NetInfo, KeyboardAvoidingView } from 'react-native';
import Register from './Register';
import Forgot from './Forgot';
import Home from './Home';

import firebase from 'firebase';
import Menu from './Menu';

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
          Alert.alert('Atención', 'No tienes activado GPS. Asegúrate de activarlo');
          }
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);

        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
         latitudeDelta: 0.1,
         longitudeDelta: 0.05,
        });
       this.checkLocation(position.coords.latitude,position.coords.longitude)
        //this.state.position.latitude 
      },
      (error) => alert(JSON.stringify(error))
    );
}

componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionChange);
}

//  checkLocation(lat, long){
//     if(!(lat<=25.659435 && long>=-100.417853) &&!(lat>=25.664658 && long<=-100.422034)){
//       return true;
//     } else {
//       Alert.alert('Atención', 'No estás dentro de la UDEM, para usar la aplicación debes de estar dentro del campus.');
//       return false;
//     }
//   }
  // 25.664658, -100.422034
  // 25.659435, -100.417853

   checkLocation(lat, long){
    if(lat>=25.655605&&lat<=25.665282&&long>=-100.423226&&long<=-100.416242){
      //Alert.alert('Atención', 'Estás');
      return true;
    } else {
      Alert.alert('Atención', 'No estás dentro de la UDEM, para usar la aplicación debes de estar dentro del campus.');
      return false;
    }
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
        email: "santiagog94@gmail.com",
        password: "pass123",
        latitude: null,
        longitude: null,
        error: null
    }
}
// this.checkLocation(position.coords.latitude,position.coords.longitude)
//  Alert.alert('Atención', 'No estás dentro de la UDEM, para usar la aplicación debes de estar dentro del campus.');
submitme(){

  // if(!this.checkLocation(this.state.latitude,this.state.longitude)){
  //   Alert.alert('Atención', 'No estás dentro de la UDEM, para usar la aplicación debes de estar dentro del campus.');
  // }else{
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((user)=>{
        
        if (firebase.auth().currentUser.emailVerified){
        //alert('You are logged in!');
        this.props.navigator.immediatelyResetRouteStack([{
            component: Menu
        }]); 
      }
      else {
        Alert.alert('Atención', 'Favor de verificar email')
      }
    }).catch(function(e){
      Alert.alert('Error', 'Email o contraseña incorrecta')
    })
  // }
}

linker(comp){
    this.props.navigator.push({
        component: comp
    })
}

  render() {
    return (
      <View style={{backgroundColor: '#F5F5F5'}}>
      <View style={{flexDirection:'row', marginBottom: 20, backgroundColor: '#F5F5F5', alignSelf:'center'}}>

            <Image 
            style={styles.logo}
            source={require('./images/search.png')}
            />
        </View>

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
            <Text style={styles.txtval1}>Mínimo 6 caracteres y máximo 12 caracteres</Text>
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
    //flex: 1,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    position: 'absolute',
    //marginRight: 40
  },
  container2: {
    //flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: "center",
    margin: 10,
  },
  containerInput: {
    //flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    //justifyContent: 'space-around',
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
    borderWidth: 0.5,
     borderRadius: 20
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
    alignSelf: 'center',
    marginTop: 5,
    marginLeft: 15,
    aspectRatio: 3, 
    resizeMode: 'contain',
  },
});

export default Login;

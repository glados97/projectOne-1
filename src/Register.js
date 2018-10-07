import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, Image, Alert, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase';

class Register extends Component {

constructor (props) {
    super(props)
    this.state = {
        email: "",
        password: ""
    }
}

returner(){
    this.props.navigator.pop();
}

submitme(){
    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(function(user){
      Alert.alert('Registro exitoso', 'Gracias por registrarte');
    }).catch(function(e){
        //alert(e);
        Alert.alert('Error', 'Recuerda: Correo con formato usuario@dominio.com. Contraseña mínima de 6 caracteres y máxima de 12 caracteres.')
    })
}

  render() {
    return (
      <View style={styles.container}>

              <TouchableHighlight onPress={this.returner.bind(this)} underlayColor={'transparent'}>
                  <View style={styles.backbutton}>
                      <Text style={styles.backout}>{'<'}</Text>
                  </View>
              </TouchableHighlight>

    <View style={styles.logocontainer}>
        <Image 
            style={styles.logo}
            source={require('./images/search.png')}
        />
    </View>
      
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={-70} style={styles.container2}>
            
          <Text style={styles.welcome}>Registro</Text>


       <View style={styles.containerInput}>   
          <TextInput style={styles.ramInput}
              onChangeText={(email) =>this.setState({email})}
              placeholder={"Ingresa email"}
              placeholderTextColor={"black"}
              autoCorrect={false}
              keyboardType="email-address"
          />
          <Text style={styles.txtval1}>Formato: usuario@dominio.com</Text>


          <TextInput style={styles.ramInput}
              onChangeText={(password) =>this.setState({password})}
              placeholder={"Ingresa contraseña"}
              secureTextEntry={true}
              minLength= {6}
              maxLength= {12}
              placeholderTextColor={"black"}
              autoCorrect={false}
          />
          <Text style={styles.txtval1}>Minimo 6 caracteres y máximo 12 caracteres</Text>
        </View>

          <TouchableHighlight onPress={this.submitme.bind(this)} underlayColor={'transparent'}>
                  <KeyboardAvoidingView enabled={false} style={styles.bigbutton}>
                      <Text style={styles.txtboton}>Regístrate</Text>
                  </KeyboardAvoidingView>
          </TouchableHighlight>
        </KeyboardAvoidingView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    position: 'absolute',
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
  logocontainer: {
    flex: 1,
    backgroundColor: '#eeeeee',
    alignItems: 'center'
  },
  welcome: {
    alignSelf: "flex-start",
    color: 'black',
    fontSize: 30,
    fontWeight: "600",
    textAlign: 'left',
    margin: 10
  },
  backbutton: {
    height: 50,
    width: 50,
    backgroundColor:'#37474F',
    marginTop: 30,
    marginLeft: 20,
    justifyContent: "center",
    borderRadius: 25
  },
  backout: {
    color: "white",
    fontSize: 32,
    alignSelf: "center",
    marginTop: -5
  },
  ramInput: {
    height: 50,
    width: 300,
    alignSelf: "center",
    fontSize: 18,
    //backgroundColor: "cyan",
    marginLeft: 20,
    marginRight: 20,
  },
  bigbutton: {
    height: 50,
    width: 300,
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: '#ffcd40',
    justifyContent: 'center',
    margin: 20
  },
  txtboton: {
    color: 'white',
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "500",
    color: "black"
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
  logo: {
    height: 90,
    width: 260,
    //alignSelf: 'center',
    //marginTop: 10,
    aspectRatio: 2, 
    resizeMode: 'contain'
  }
});

export default Register;

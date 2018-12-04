import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, Alert, Image } from 'react-native';
import firebase from 'firebase';

class Forgot extends Component {

constructor (props) {
    super(props)
    this.state = {
        email: ""
    }
}

//método de navegación para regresarse a la pantalla anterior
returner(){
    this.props.navigator.pop();
}

//Método de Firebase para enviar correo a usuario para resetear password 
submitme(){
    firebase.auth().sendPasswordResetEmail(this.state.email).then(function(user){
        Alert.alert('Atencion', 'Revisa email para reestablecer contraseña');
    }).catch(function(e){
      Alert.alert('Error', 'Email incorrecto')
    })
}

  render() {
    return (
      <View style={{backgroundColor: '#F5F5F5'}}>
      <View style={{flexDirection:'row', marginBottom: 20, backgroundColor: '#F5F5F5'}}>

            <TouchableHighlight onPress={this.returner.bind(this)} underlayColor={'transparent'}>
                    <View style={styles.backbutton}>
                        <Text style={styles.backout}>{'<'}</Text>
                    </View>
            </TouchableHighlight>

            <Image 
            style={styles.logo}
            source={require('./images/search.png')}
            />
      </View>
            
        <View style={styles.container2}>

            <Text style={styles.welcome}>Recuperación de contraseña</Text>

        <View style={styles.containerInput}>  
            <TextInput style={styles.ramInput}
                onChangeText={(email) =>this.setState({email})}
                placeholder={"Ingresa email"}
                placeholderTextColor={"black"}
                autoCorrect={false}
                keyboardType="email-address"
            />
             <Text style={styles.txtval1}>Formato: usuario@dominio.com</Text>
        </View>

            <TouchableHighlight onPress={this.submitme.bind(this)} underlayColor={'transparent'}>
                    <View style={styles.bigbutton}>
                        <Text style={styles.txtboton}>Enviar</Text>
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
        position: 'absolute',
      },
      container2: {
        //flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: "center",
        margin: 10,
        //marginTop: 40
      },
      containerInput: {
        //flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center",
        //margin: 40,
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
      backbutton: {
        height: 50,
        width: 50,
        backgroundColor: '#37474F',
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
        justifyContent: "center",
        alignItems: 'center',
        fontSize: 18,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 0.5,
        borderRadius: 20
      },
      bigbutton: {
        height: 50,
        width: 300,
        alignSelf: "center",
        backgroundColor: '#ffcd40',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
      },
      txtboton: {
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "500",
        color: "black"
      },
      logo: {
        height: 90,
        width: 260,
        alignSelf: 'center',
        marginTop: 5,
        marginLeft: 15,
        aspectRatio: 4, 
        resizeMode: 'contain',
      },

});

export default Forgot;

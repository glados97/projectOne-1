import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Alert } from 'react-native';
import Direcciones from './Direcciones';
import firebase from 'firebase';

class Perfil extends Component {

constructor (props) {
    super(props)
    this.state = {
        email: ""
    }
}

returner(){
    this.props.navigator.pop();
}

linker(comp){
  this.props.navigator.push({
      component: comp
  })
}


  render() {
    return (
    <View style={{backgroundColor: '#F5F5F5'}}>
    <View style={{flexDirection:'row', marginBottom: 20}}>

    <TouchableHighlight onPress={this.returner.bind(this)} underlayColor={'transparent'}>
                    <View style={styles.backbutton}>
                        <Text style={styles.backtxt}>{'<'}</Text>
                    </View>
    </TouchableHighlight>

    <Image 
            style={styles.logo}
            source={require('./images/search.png')}
            />
      </View>

      <View>
      <Image 
            style={styles.foto}
            //source={require('./images/descarga.jpg')}
            source={{ uri: this.props.data.imagen }}
            />
      </View>

        <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight:"600", fontSize: 24, color: "#000000"}}>{this.props.data.nombre}</Text>
            <Text style={{fontWeight:"300", fontSize: 18, color: "#606060"}}>{this.props.data.escuela}</Text>
        </View>

        <View
          style={{
            borderBottomColor: "#888888",
            borderBottomWidth: 2,
            margin:15
            }}
            />
       
        <View style={{flexDirection:'row', marginLeft: 20}}>
            <View style={{alignItems: 'flex-start'}}>
              <Text style={{fontSize: 16, color: "#000000"}}>Telefono:</Text>
              <Text style={{fontSize: 16, color: "#000000"}}>Correo:</Text>
              <Text style={{fontSize: 16, color: "#000000"}}>Ubicación:</Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={{fontSize: 16, color: "#000000"}}>{this.props.data.telefono}</Text>
              <Text style={{fontSize: 16, color: "#000000"}}>{this.props.data.correo}</Text>
              <Text style={{fontSize: 16, color: "#000000"}}>{this.props.data.ubicacion}</Text>
            </View>
        </View>

        <View style={{alignItems:'center'}}>
          <Text style={{fontSize: 20, fontWeight:"300", color: "#606060", margin: 10}}>Cubículo {this.props.data.cubiculo}</Text>
        </View>

        <View
          style={{
            borderBottomColor: "#888888",
            borderBottomWidth: 2,
            marginRight:15,
            marginLeft: 15
            }}
            />
      
      <TouchableHighlight onPress={this.linker.bind(this, Direcciones)} underlayColor={'transparent'}>
                    <View style={styles.boton}>
                        <Text style={styles.txtboton}>Mostrar Direcciones</Text>
                    </View>
      </TouchableHighlight>

      <TouchableHighlight underlayColor={'transparent'}>
                    <View style={styles.boton2}>
                        <Text style={styles.txtboton}>Agendar Cita</Text>
                    </View>
      </TouchableHighlight>

        
      </View>
    );
  }
}

{/* <Text>{this.props.data.nombre}</Text>
<Text>{this.props.data.cubiculo}</Text> */}

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
        marginTop: 40
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
        marginTop: 20,
        marginLeft: 20,
        justifyContent: "center",
        borderRadius: 25
      },
      backtxt: {
        color: "white",
        fontSize: 32,
        alignSelf: "center",
        marginTop: -5
      },
      boton: {
        height: 40,
        width: 200,
        alignSelf: "center",
        backgroundColor: '#ffcd40',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
      },
      boton2: {
        height: 40,
        width: 200,
        alignSelf: "center",
        backgroundColor: '#ffcd40',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3
      },
      txtboton: {
        alignSelf: "center",
        fontSize: 16,
        fontWeight: "bold",
        color: "#282828"
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
      foto: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        aspectRatio: 2, 
        resizeMode: 'contain',
        borderRadius: 140
      }

});

export default Perfil;

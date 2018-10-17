import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Alert } from 'react-native';
import firebase from 'firebase';

class Direcciones extends Component {

constructor (props) {
    super(props)
    this.state = {
        email: ""
    }
}

returner(){
    this.props.navigator.pop();
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
      txtboton: {
        alignSelf: "center",
        fontSize: 16,
        fontWeight: "bold",
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
      foto: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        aspectRatio: 2, 
        resizeMode: 'contain',
        borderRadius: 140
      }

});

export default Direcciones;

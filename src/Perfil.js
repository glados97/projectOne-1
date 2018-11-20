import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Dimensions, ScrollView } from 'react-native';
import Direcciones from './Direcciones';
import Horario from './Horario';
import firebase from 'firebase';
import Communications from 'react-native-communications';

const { height } = Dimensions.get('window');
const {width} = Dimensions.get('window');

class Perfil extends Component {

constructor (props) {
    super(props)
    this.state = {
      data: this.props.data,
      screenHeight:0,
    }
}

onContentSizeChange = (contentWidth, contentHeight) => {
  // Save the content height in state
  this.setState({ screenHeight: contentHeight });
};

returner(){
    this.props.navigator.pop();
}

linker(data){
  console.log(this.state.data)
  this.props.navigator.push({
      component: Direcciones,
      passProps: {   
        data: this.state.data
     },
  })
}

linker2(data){
  console.log(this.state.data)
  this.props.navigator.push({
      component: Horario,
      passProps: {   
        data: this.state.data
     },
  })
}

  render() {
    const scrollEnabled = this.state.screenHeight > height;
    let cub = this.props.data.ubicacion.toString().substr(0, 4);
    let tel = '818215'+this.props.data.extension;
    let direccion = this.props.data.direccion;
    let correo = this.props.data.correo;
    
    if((this.props.data.extension=="not found" && direccion =="DINE")){
      tel='8182151262';
    }else if((this.props.data.extension=="not found" && direccion =="DECS")){
      tel='8182151231';
    }else if((this.props.data.extension=="not found" && direccion =="DIEHU")){
      tel='8182151533';
    }else if((this.props.data.extension=="not found" && direccion =="DEAC")){
      tel='8182151071';
    }else if((this.props.data.extension=="not found" && direccion =="DIT")){
      tel='8182151206';
    }else if (this.props.data.extension=="not found")
      tel='8182151000';


    if(correo==null){
      correo='ayudaenlinea@udem.edu';
    }
    return (
      <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={styles.scrollview}
      scrollEnabled={scrollEnabled}
      onContentSizeChange={this.onContentSizeChange}
      //removeClippedSubviews={true} 
    >
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
            source={{ uri: this.props.data.foto }}
            />
      </View>

        <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight:"600", fontSize: 22, color: "#000000", alignSelf: 'center', textAlign:'center'}}>{this.props.data.nombre}</Text>
            <Text style={{fontWeight:"400", fontSize: 26, color: "#606060"}}>{this.props.data.direccion}</Text>
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
              <Text style={{fontSize: 14, color: "#000000"}}>Teléfono:</Text>
              <Text style={{fontSize: 14, color: "#000000"}}>Posición:</Text>
              <Text style={{fontSize: 14, color: "#000000"}}>Departamento:</Text>
              <Text style={{fontSize: 14, color: "#000000"}}>Correo:</Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={{fontSize: 14, color: "#000000"}}>81 8215 1000 Ext: {this.props.data.extension}</Text>
              <Text style={{fontSize: 14, color: "#000000"}}>{this.props.data.posicion}</Text>
              <Text style={{fontSize: 14, color: "#000000"}}> {this.props.data.departamento}</Text>
              <Text style={{fontSize: 14, color: "#000000"}}> {correo}</Text>
            </View>
        </View>

        <View style={{alignItems:'center'}}>
          <Text style={{fontSize: 20, fontWeight:"300", color: "#606060", margin: 10}}>Cubículo {cub}</Text>
        </View>

        <View
          style={{
            borderBottomColor: "#888888",
            borderBottomWidth: 2,
            marginRight:15,
            marginLeft: 15
            }}
            />
      
      <TouchableHighlight onPress={this.linker.bind(this, Direcciones )} underlayColor={'transparent'}>
                    <View style={styles.boton}>
                        <Text style={styles.txtboton}>Mostrar Direcciones</Text>
                    </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={this.linker2.bind(this, Horario )} underlayColor={'transparent'}>
                    <View style={styles.boton2}>
                        <Text style={styles.txtboton}>Mostrar Horario</Text>
                    </View>
      </TouchableHighlight>

       <TouchableHighlight onPress={() => Communications.phonecall(tel, true)} underlayColor={'transparent'}>
                    <View style={styles.boton}>
                        <Text style={styles.txtboton}>Llamar</Text>
                    </View>
      </TouchableHighlight>

      {/* <TouchableHighlight onPress={() => Communications.email(correo,null,null,null,null)} underlayColor={'transparent'}>
                    <View style={styles.boton2}>
                        <Text style={styles.txtboton}>Enviar Correo</Text>
                    </View>
      </TouchableHighlight> */}

 {correo!='ayudaenlinea@udem.edu' ? <TouchableHighlight onPress={() => Communications.email([correo],null,null,null,null)} underlayColor={'transparent'}>
                    <View style={styles.boton2}>
                        <Text style={styles.txtboton}>Enviar Correo</Text>
                    </View>
      </TouchableHighlight> 
      : 
      <TouchableHighlight onPress={() => Communications.email(['ayudaenlinea@udem.edu'],null,null,'Contacto de '+this.props.data.nombre,'Quiero contactar a '+this.props.data.nombre)} underlayColor={'transparent'}>
                    <View style={styles.boton2}>
                        <Text style={styles.txtboton}>Enviar Correo</Text>
                    </View>
      </TouchableHighlight>}

        
      </View>
      </ScrollView>
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
        //borderRadius: 140
      }

});

export default Perfil;

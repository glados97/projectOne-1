import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Alert, Dimensions, ScrollView } from 'react-native';
import firebase from 'firebase';

const { height } = Dimensions.get('window');

class Direcciones extends Component {

constructor (props) {
    super(props)
    this.state = {
        data: "",
        screenHeight:0,
    }
}

// var integer = 1234567;
// var subStr = integer.toString().substr(0, 1);

onContentSizeChange = (contentWidth, contentHeight) => {
  // Save the content height in state
  this.setState({ screenHeight: contentHeight });
};

linker(comp){
  //console.log(this.props.data.cubiculo)
  this.props.navigator.push({
      component: comp
  })
}


returner(){
    this.props.navigator.pop();
}


displayJsxMessage() {
let edificio = this.props.data.ubicacion.toString().substr(0, 1);
let edificioPiso = this.props.data.ubicacion.toString().substr(0, 2);

    const piso1_5 =
    <View style={{alignItems: 'center'}}>
      {/* <View style={{margin: 10}}>
      <Image 
      style={{width: 300, height: 150}}
      source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio_Entrada.jpg?alt=media&token=63466749-c2d2-4a67-a02a-9df7492db23a' }}
      />
      <Text>Entra al Edificio 5</Text>
      </View> */}
      <Image 
      style={{width: 300, height: 150}}
      source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio5_Piso1_Frontal.jpg?alt=media&token=3de43cfc-b7cf-49a0-b4f3-b833124fda31' }}
      />
      <Text>Estás en el primer piso del Edificio 5.</Text>
    </View>

    const piso1_6 =
    <View style={{alignItems: 'center'}}>
      {piso1_5}
      <View style={{margin: 10, alignItems: 'center'}}>
      <Image 
      style={{width: 300, height: 150}}
      source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio5_Piso1_Escaleras.jpg?alt=media&token=c1634ff5-30b6-40f9-ae22-541519690492' }}
      />
      <Text>Sube las escaleras</Text>
      </View>
      <Image 
      style={{width: 300, height: 150}}
      source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio6_Piso1_Izq.jpg?alt=media&token=5def3d7a-8dc3-4be8-aec6-bf510be30373' }}
      />
      <Text>Estás en el primer piso del Edificio 6.</Text>
    </View>

    const piso2_5 =
    <View style={{alignItems: 'center'}}>
      {piso1_5}
      {piso1_6}
      <View style={{margin: 10}}>
      <Image 
      style={{width: 300, height: 150}}
      source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio6_Piso1_Escaleras.jpg?alt=media&token=a2b8109a-7eca-4a81-b355-a3a213415fc6' }}
      />
      <Text>Sube las escaleras</Text>
      </View>
      <Image 
      style={{width: 300, height: 150}}
      source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio5_Piso2_Frontal.jpg?alt=media&token=9e389ded-4f0f-438f-98ad-db7a851aab4f' }}
      />
      <Text>Estas en el segundo piso del Edificio 5.</Text>
    </View>

    const piso2_6 =
    <View style={{alignItems: 'center'}}>
      {piso1_5}
      {piso1_6}
      {piso2_5}
      <View style={{margin: 10}}>
      <Image 
      style={{width: 300, height: 150}}
      source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio5_Piso2_Escaleras.jpg?alt=media&token=f2165b56-99e7-4bb1-aa0b-1514bde90acf' }}
      />
      <Text>Sube las escaleras</Text>
      </View>
      <Image 
      style={{width: 300, height: 150}}
      source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio6_Piso2_Frontal.jpg?alt=media&token=8122b26d-3f56-4c6b-afb0-096636ff9d92' }}
      />
      <Text>Estas en el segundo piso del Edificio 6.</Text>
    </View>

    const piso3_5 =
    <View style={{alignItems: 'center'}}>
      {piso1_5}
      {piso1_6}
      {piso2_5}
      {piso2_6}
      <View style={{margin: 10}}>
      <Image 
      style={{width: 300, height: 150}}
      source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio6_Piso2_Escaleras.jpg?alt=media&token=9a366aa5-892b-4684-8faa-a8a4dffd740d' }}
      />
      <Text>Sube las escaleras</Text>
      </View>
      <Image 
      style={{width: 300, height: 150}}
      source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio5_Piso3_Frontal.jpg?alt=media&token=7bcd33d8-0023-4645-b2a5-4cdc403ef863' }}
      />
      <Text>Estas en el tercer piso del Edificio 5.</Text>
    </View>

    const piso3_6 =
    <View style={{alignItems: 'center'}}>
      {piso1_5}
      {piso1_6}
      {piso2_5}
      {piso2_6}
      {piso3_5}
      <View style={{margin: 10}}>
      <Image 
      style={{width: 300, height: 150}}
      source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio5_Piso3_Escaleras.jpg?alt=media&token=c631f889-c123-4864-865b-3e65515181b0' }}
      />
      <Text>Sube las escaleras</Text>
      </View>
      <Image 
      style={{width: 300, height: 150}}
      source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio6_Piso3_Frontal.jpg?alt=media&token=f30ee035-856b-4aca-bf70-752a83f3d3ed' }}
      />
      <Text>Estas en el tercer piso del Edificio 6.</Text>
    </View>
    
    const piso4_5 =
    <View style={{alignItems: 'center'}}>
      {piso1_5}
      {piso1_6}
      {piso2_5}
      {piso2_6}
      {piso3_5}
      {piso3_6}
      <View style={{margin: 10}}>
      <Image 
      style={{width: 300, height: 150}}
      source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio6_Piso3_Escaleras.jpg?alt=media&token=43aa59c5-389c-4c8d-a7fd-ff0d06d989be' }}
      />
      <Text>Sube las escaleras</Text>
      </View>
      <Image 
      style={{width: 300, height: 150}}
      source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio5_Piso4_Frontal.jpg?alt=media&token=4e968af0-c666-4c11-99b4-19959890ce3d' }}
      />
      <Text>Estas en el cuarto piso del Edificio 5.</Text>
    </View>

    const piso4_6 =
    <View style={{alignItems: 'center'}}>
      {piso1_5}
      {piso1_6}
      {piso2_5}
      {piso2_6}
      {piso3_5}
      {piso3_6}
      {piso4_5}
      <View style={{margin: 10}}>
      <Image 
      style={{width: 300, height: 150}}
      source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio5_Piso4_Escaleras.jpg?alt=media&token=69acd3bf-8f49-44d0-9725-962c0b49779c' }}
      />
      <Text>Sube las escaleras</Text>
      </View>
      <Image 
      style={{width: 300, height: 150}}
      source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio6_Piso4_Frontal.jpg?alt=media&token=23e8afdc-e706-42a3-9833-772122abc216' }}
      />
      <Text>Estas en el cuarto piso del Edificio 6.</Text>
    </View>
  
    switch(edificioPiso) {
    case "51":
        return piso1_5;
        // {espacio<=7 ? piso1der : (espacio>=8 && espacio<=12 ? piso1izq : piso1fondo)};
    case "52":
        return piso2_5;
    case "53":
        return piso3_5;
    case "54":
        return piso4_5;
    case "61":
        return piso1_6;
    case "62":
        return piso2_6;
    case "63":
        return piso3_6;
    case "64":
        return piso4_6;
}
  }



  render() {
    const scrollEnabled = this.state.screenHeight > height;
    let floor;
    let edificio = this.props.data.ubicacion.toString().substr(0, 1);
    let piso = this.props.data.ubicacion.toString().substr(1, 1);
    let espacio = this.props.data.ubicacion.toString().substr(2, 2);
    
    const edificio5 =
    <View style={{margin: 10, alignItems: 'center'}}>
    <Image 
    style={{width: 300, height: 150}}
    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio_Entrada.jpg?alt=media&token=63466749-c2d2-4a67-a02a-9df7492db23a' }}
    />
    <Text style={{fontSize: 16}}>Entra al Edificio 5</Text>
    </View>
    
    const edificio6 = 
    <View style={{margin: 10, alignItems: 'center'}}>
    <Image 
    style={{width: 300, height: 150}}
    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio_Entrada.jpg?alt=media&token=63466749-c2d2-4a67-a02a-9df7492db23a' }}
    />
     <Text style={{fontSize: 16}}>Entra al Edificio 6</Text>
    </View>

    const piso1der = 
    <View>
     <Image 
    style={{width: 300, height: 150}}
     //imagen Derecha
    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio%206%2FPiso%201%2F61%20Derecha.jpeg?alt=media&token=99e18305-291f-4938-b975-73ee39446826' }}
    />
    <Text>Gira a la derecha.</Text>
    </View>

    const piso1izq = 
    <View>
    <Image 
    style={{width: 300, height: 150}}
     //imagen Derecha
    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio%206%2FPiso%201%2F61%20Derecha.jpeg?alt=media&token=99e18305-291f-4938-b975-73ee39446826' }}
    />
    <Text>Gira a la izquierda.</Text>
    </View>

    const piso1fondo = 
    <View>
    <Image 
    style={{width: 300, height: 150}}
     //imagen Fondo
    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio%206%2FPiso%201%2F61%20Derecha.jpeg?alt=media&token=99e18305-291f-4938-b975-73ee39446826' }}
    />
    <Text>Dirígete al fondo.</Text>
    </View>

    const piso2 =
    <View>
    <Text>Sube las escaleras.</Text>
    {/* insrtar foto */}
    <Text>Insertar foto</Text>
    <Image 
    style={{width: 300, height: 150}}
    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio%206%2FPiso%202%2F62%20Entrada.jpeg?alt=media&token=7f3d4318-3860-4bea-8a4a-b5b5486fd655' }}
    />
    <Text>Estas en el segundo piso.</Text>
    </View>

    const piso2der =
    <View>
    <Image 
    style={{width: 300, height: 150}}
    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio%206%2FPiso%202%2F62%20Derecha.jpeg?alt=media&token=8495bf26-4df3-4176-a200-c7e802ce1e76' }}
    />
    <Text>Gira a la derecha.</Text>
    </View>

    const piso2izq =
    <View>
    <Image 
    style={{width: 300, height: 150}}
    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio%206%2FPiso%202%2F62%20izquierda.jpeg?alt=media&token=5630225c-54bf-4495-acca-00cb2c1e360a' }}
    />
    <Text>Gira a la izquierda.</Text>
    </View>

//     switch(edificioPiso) {
//     case 51:
//         floor = piso1_5;
//         // {espacio<=7 ? piso1der : (espacio>=8 && espacio<=12 ? piso1izq : piso1fondo)};
//         break;
//     case 52:
//         floor = piso2_5;
//         break;
//     case 53:
//         floor = piso3_5;
//         break;
//     case 54:
//         floor = piso4_5;
//         break;
//     case 61:
//         floor = piso1_6;
//         break;
//     case 62:
//         floor = piso2_6;
//         break;
//     case 63:
//         floor = piso3_6;
//         break;
//     case 64:
//         floor = piso4_6;
//         break;
//     // default:
//     //     floor = "I have never heard of that fruit...";
// }

// switch(edificio) {
//   case 5:
//       edificio = edificio5;
//       // {espacio<=7 ? piso1der : (espacio>=8 && espacio<=12 ? piso1izq : piso1fondo)};
//       break;
//   case 6:
//       edificio = edificio5;
//       break;
//   default:
//       edificio = edificio5;
// }

// if (edificio==6) {
//   edificio = edificio6
// } else {
//   edificio = edificio5
// }
    
    // if ((espacio<=7)) {
    //   floor = piso1der
    // } 
    // else if (piso==1 && (espacio>=8 && espacio<=12)){
    //   floor=piso1izq
    // }
    // else  {
    //   floor = piso1fondo
    // }
 

    return (
      <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={styles.scrollview}
      scrollEnabled={scrollEnabled}
      onContentSizeChange={this.onContentSizeChange}
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
    <Text style={{fontWeight:"400", fontSize: 24, alignSelf: 'center'}}>Cubículo</Text>
    <Text style={{fontWeight:"600", fontSize: 26, alignSelf: 'center'}}>{this.props.data.ubicacion}</Text>

    <View style={{flexDirection:'row', justifyContent: 'space-evenly'}}>
      <Text style={{fontWeight:"300", color: '#202020', fontSize: 20, alignSelf: 'center'}}>Edificio</Text>
      <Text style={{fontWeight:"300", color: '#202020', fontSize: 20, alignSelf: 'center'}}>Piso</Text>
      <Text style={{fontWeight:"300", color: '#202020', fontSize: 20, alignSelf: 'center'}}>Espacio</Text>
    </View>

    <View style={{flexDirection:'row', justifyContent: 'space-evenly'}}>
      <Text style={{fontWeight:"300", color: '#202020', fontSize: 20, alignSelf: 'center'}}>{edificio}</Text>
      <Text style={{fontWeight:"300", color: '#202020', fontSize: 20, alignSelf: 'center'}}>{piso}</Text>
      <Text style={{fontWeight:"300", color: '#202020', fontSize: 20, alignSelf: 'center'}}>{espacio}</Text>
    </View>

    <View
          style={{
            borderBottomColor: "#888888",
            borderBottomWidth: 2,
            marginRight:15,
            marginLeft: 15,
            margin: 5,
            }}
            />
    
    <View>
    {edificio==6 ? edificio6 : edificio5}
    
    {this.displayJsxMessage()}

    {/* {floor} */}


    </View>
  
      </View>
      </ScrollView>
    );
  }
}


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

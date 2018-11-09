import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import firebase from 'firebase';
import ImageView from 'react-native-image-view';

const { height } = Dimensions.get('window');
const {width} = Dimensions.get('window');

class Direcciones extends Component {

constructor (props) {
    super(props)
    this.state = {
        data: "",
        screenHeight:0,
        isImageViewVisible: false,
        imageIndex: 0
    }
}


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




  render() {
    const scrollEnabled = this.state.screenHeight > height;
    let images = []
    let edificio = this.props.data.ubicacion.toString().substr(0, 1);
    let piso = this.props.data.ubicacion.toString().substr(1, 1);
    let edificioPiso = this.props.data.ubicacion.toString().substr(0, 2);
    let cub = this.props.data.ubicacion.toString().substr(0, 4);
    let espacio = this.props.data.ubicacion.toString().substr(2, 2);

    const paso5_1 = [ 
    {
      source:{
        //uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio_Entrada-min.jpg?alt=media&token=0ea8abeb-90f9-4452-9d13-5d3e81e4b545',
        uri: 'https://i.imgur.com/4Eenu6k.jpg',
      },
      title: 'Entra al Edificio de Colaboradores',
    },
    {
      source:{
        //uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio5_Piso1_Frontal-min.jpg?alt=media&token=82d924ac-d56c-4bc9-8d08-0c64afc356e4',
        uri:'https://i.imgur.com/grGPjEq.jpg'
      },
      title: '',
    },  
    ];

    const paso6_1 = [ 
      //...images5_1,
      {
        source:{
          //uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio5_Piso1_Escaleras-min.jpg?alt=media&token=4f7770e3-d313-4a6f-8341-38776618830d',
          uri: 'https://i.imgur.com/ZOlTf9r.jpg'
      },
        title: 'Sube las escaleras',
      },
        {
        source:{
          //uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio6_Piso1_Izq-min.jpg?alt=media&token=860fcdbb-9286-4d8e-90d5-1afe9f089e97',
          uri: 'https://i.imgur.com/LShWXM5.jpg'
        },
        title: 'Estás en el primer piso del Edificio 6.',
        }   
    ];

    const paso5_2 = [ 
      //...images5_1,
      // ...images6_1,
      {
        source:{
          //uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio6_Piso1_Escaleras-min.jpg?alt=media&token=69736fa3-792a-46a1-89eb-48a65afd3ac9',
          uri: 'https://i.imgur.com/TTrLiTy.jpg'
        },
        title: 'Sube las escaleras',
      },
        {
        source:{
          //uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio5_Piso2_Frontal-min.jpg?alt=media&token=5dc4b621-b92b-4c72-8576-bdf2ff3a5b92',
          uri: 'https://i.imgur.com/T5YyYTO.jpg'
        },
        title: 'Estas en el segundo piso del Edificio 5.',
        }   
    ];

    const paso6_2 = [ 
      // ...images5_1,
      // ...images6_1,
      // ...images5_2,
      {
        source:{
          //uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio5_Piso2_Escaleras-min.jpg?alt=media&token=5bae56b1-6dac-4174-a0ac-ae0b064218e6',
          uri: 'https://i.imgur.com/0ve4OUP.jpg'
        },
        title: 'Sube las escaleras',
      },
        {
        source:{
          //uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio6_Piso2_Frontal-min.jpg?alt=media&token=19b03314-ef07-4fdf-a98f-4db8b46579db',
          uri: 'https://i.imgur.com/qoHMtFB.jpg'
        },
        title: 'Estas en el segundo piso del Edificio 6.',
        }   
    ];

    const paso5_3 = [ 
      // ...images5_1,
      // ...images6_1,
      // ...images5_2,
      // ...images6_2,
      {
        source:{
          //uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio6_Piso2_Escaleras-min.jpg?alt=media&token=db874ca2-5b5e-4d75-8b64-0c4d7102ef4c',
          uri: 'https://i.imgur.com/9z6MuXp.jpg'
        },
        title: 'Sube las escaleras',
      },
        {
        source:{
          //uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio5_Piso3_Frontal-min.jpg?alt=media&token=ef9ea9f2-54ac-4ef6-9385-2ba9f94f748b',
          uri: 'https://i.imgur.com/aLyQHfD.jpg'
        },
        title: 'Estas en el tercer piso del Edificio 5.',
        }   
    ];

    const paso6_3 = [ 
      // ...images5_1,
      // ...images6_1,
      // ...images5_2,
      // ...images6_2,
      // ...images5_3,
      {
        source:{
          //uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio5_Piso3_Escaleras-min.jpg?alt=media&token=22029237-b3c9-4b16-8cfd-b48d7f180dcf',
          uri: 'https://i.imgur.com/gMdoYmg.jpg'
        },
        title: 'Sube las escaleras',
      },
        {
        source:{
          //uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio6_Piso3_Frontal-min.jpg?alt=media&token=6620c3a4-a384-43dd-9cac-0a29005aa56c',
          uri: 'https://i.imgur.com/oThPGew.jpg'
        },
        title: 'Estas en el tercer piso del Edificio 6.',
        }   
    ];

    const paso5_4 = [ 
      // ...images5_1,
      // ...images6_1,
      // ...images5_2,
      // ...images6_2,
      // ...images5_3,
      // ...images6_3,
      {
        source:{
          //uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio6_Piso3_Escaleras-min.jpg?alt=media&token=2e6e4db6-20b5-44db-87eb-626c71b5e538',
          uri: 'https://i.imgur.com/FVfzydW.jpg'
        },
        title: 'Sube las escaleras',
      },
        {
        source:{
          //uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio5_Piso4_Frontal-min.jpg?alt=media&token=44c71f4e-256f-4fba-a62a-90faaf01522b',
          uri: 'https://i.imgur.com/pFAExpx.jpg'
        },
        title: 'Estas en el cuarto piso del Edificio 5.',
        }   
    ];

    const paso6_4 = [ 
      // ...images5_1,
      // ...images6_1,
      // ...images5_2,
      // ...images6_2,
      // ...images5_3,
      // ...images6_3,
      // ...images5_4,
      {
        source:{
          //uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio5_Piso4_Escaleras-min.jpg?alt=media&token=be498a7a-1605-4896-8e03-b2f45e678e87',
          uri: 'https://i.imgur.com/LP1dsrp.jpg'
        },
        title: 'Sube las escaleras',
      },
        {
        source:{
          //uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio6_Piso4_Frontal-min.jpg?alt=media&token=ec5e0aed-7c3c-4738-854e-19561f977cf3',
          uri: 'https://i.imgur.com/jPHQlZC.jpg'
        },
        title: 'Estas en el cuarto piso del Edificio 6.',
        }   
    ];

    const images5_1 = paso5_1;
    const images6_1 = [...paso5_1, ...paso6_1];
    const images5_2 = [...paso5_1, ...paso6_1, ...paso5_2];
    const images6_2 = [...paso5_1, ...paso6_1, ...paso5_2, ...paso6_2];
    const images5_3 = [...paso5_1, ...paso6_1, ...paso5_2, ...paso6_2, ...paso5_3];
    const images6_3 = [...paso5_1, ...paso6_1, ...paso5_2, ...paso6_2, ...paso5_3, ...paso6_3];
    const images5_4 = [...paso5_1, ...paso6_1, ...paso5_2, ...paso6_2, ...paso5_3, ...paso6_3, ...paso5_4];
    const images6_4 = [...paso5_1, ...paso6_1, ...paso5_2, ...paso6_2, ...paso5_3, ...paso6_3, ...paso5_4, ...paso6_4];



    switch(edificioPiso) {
      case "51":
          images=images5_1;
          break;
      case "52":
          images=images5_2;
          break;
      case "53":
          images=images5_3;
          break;
      case "54":
          images=images5_4;
          break;
      case "61":
          images=images6_1;
          break;
      case "62":
          images=images6_2;
          break;
      case "63":
          images=images6_3;
          break;
      case "64":
          images=images6_4;
          break;
      default:
          images = [];
  }

    
    // const edificio5 =
    // <View style={{margin: 10, alignItems: 'center'}}>
    // <Image 
    // style={{width: 300, height: 150}}
    // source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio_Entrada.jpg?alt=media&token=63466749-c2d2-4a67-a02a-9df7492db23a' }}
    // />
    // <Text style={{fontSize: 16}}>Entra al Edificio 5</Text>
    // </View>
    
    // const edificio6 = 
    // <View style={{margin: 10, alignItems: 'center'}}>
    // <Image 
    // style={{width: 300, height: 150}}
    // source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/projectsearch-e7575.appspot.com/o/Edificios%2FEdificio_Entrada.jpg?alt=media&token=63466749-c2d2-4a67-a02a-9df7492db23a' }}
    // />
    //  <Text style={{fontSize: 16}}>Entra al Edificio 6</Text>
    // </View>

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

    
    // if ((espacio<=7)) {
    //   floor = piso1der
    // } 
    // else if (piso==1 && (espacio>=8 && espacio<=12)){
    //   floor=piso1izq
    // }
    // else  {
    //   floor = piso1fondo
    // }
 
    const {isImageViewVisible, imageIndex} = this.state;

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
    <Text style={{fontWeight:"400", fontSize: 24, alignSelf: 'center'}}>Cubículo</Text>
    <Text style={{fontWeight:"600", fontSize: 26, alignSelf: 'center'}}>{cub}</Text>

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
    
    {/* {edificio==6 ? edificio6 : edificio5} */}
    
    {/* {this.displayJsxMessage()} */}

    {/* {floor} */}

    <View>
    {images.map((image, index) => (
        <TouchableOpacity
            key={image.title}
            onPress={() => {
                this.setState({
                    imageIndex: index,
                    isImageViewVisible: true,
                });
            }}
        >
        <View style={{alignItems:'center'}}>
            <Image
                style={{width:300, height: 150, margin: 10,}}
                source={image.source}
                resizeMode="cover"
                resizeMethod='resize'
            />
            <Text style={{fontSize: 16}}>{image.title}</Text>
          </View>
        </TouchableOpacity>
    ))}
</View>
    <ImageView
      glideAlways
      images={images}
      imageIndex={imageIndex}
      animationType="fade"
      isVisible={this.state.isImageViewVisible}
      // isVisible={ModalVisibleStatus}
      onClose={() => this.setState({isImageViewVisible: false})}
      //renderFooter={(currentImage) => (<View><Text>My footer</Text></View>)}
    />
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

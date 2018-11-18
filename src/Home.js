import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, FlatList, ActivityIndicator  } from 'react-native';
import { List, ListItem, SearchBar, Icon } from 'react-native-elements';
import firebase from 'firebase';
import Login from './Login';
import Perfil from './Perfil';
import Direcciones from './Direcciones';
import firebaseApp from './Firebase';


console.ignoredYellowBox = ['Setting a timer'];

class Home extends Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {
  //       searchText: "",
  //       //items: []
  //   }
  //   this.itemsRef = this.getRef().child('/');
  // }

  // // getRef() {
  // //   return firebaseApp.database().ref();
  // // }

  // listenForItems(itemsRef) {
  //   itemsRef.on('value', (snap) => {

  //     // get children as an array
  //     var items = [];
  //     snap.forEach((child) => {
  //       items.push({
  //         Nombre: child.val().Nombre,
  //         Cubiculo: child.val().Cubiculo
  //       });
  //     });

  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(items)
  //     });

  //   });
  // }

  // // componentDidMount() {
  // //   this.listenForItems(this.itemsRef);
  // // }

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
    };

    this.arrayholder = [];
  }

  componentDidMount() {

    firebase.database().ref("/colaboradores").on('value', snapshot =>
    {
      snapshot.forEach(child => {
        //console.log(this.arrayholder);
        this.arrayholder.push ({
          idEmpleado: child.val().idEmpleado,
          idAlternativo: child.val().idAlternativo,
          ubicacion: child.val().ubicacion,
          nombre: child.val().nombre,
          posicion: child.val().posicion,
          departamento: child.val().departamento,
          extension: child.val().extension,
          direccion: child.val().direccion,
          correo: child.val().Correo,
          foto: child.val().Foto
        });
      });
    })
    this.makeRemoteRequest();

  }

  makeRemoteRequest = () => {
    this.setState({ loading: true });

    let recentPostsRef = firebase.database().ref("/colaboradores");
    recentPostsRef.once('value')
      .then((snapshot) => {
        //console.log(this.arrayholder);
        this.setState({
          data: this.arrayholder,
          error: res.error || null,
          loading: false,
        });
      //  this.arrayholder = snapshot.val();
      //console.log(this.arrayholder);
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };
  

  // makeRemoteRequest = () => {
  //   const url = `https://api.myjson.com/bins/117p1c`;
  //   this.setState({ loading: true });

  //   fetch(url)
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log(res.colaboradores);
  //       this.setState({
  //         data: res.colaboradores,
  //         error: res.error || null,
  //         loading: false,
  //       });
  //       this.arrayholder = res.colaboradores;
  //       console.log(this.arrayholder);
  //     })
  //     .catch(error => {
  //       this.setState({ error, loading: false });
  //     });
  // };


  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  searchFilterFunction = text => {

    this.arrayholder.sort(function(a, b) {
      return a.nombre.localeCompare(b.nombre);
   });
    
      const newData = this.arrayholder.filter(item => {
          
      const itemData = `${item.nombre.toUpperCase()} ${item.departamento.toUpperCase()} ${item.ubicacion}` ;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    
    this.setState({
      data: newData,
    });

  };


  renderHeader = () => {
    return (
    <View>
    <View style={{flexDirection:'row', backgroundColor:'#E1E9EC'}}>
    <TouchableHighlight onPress={this.returner.bind(this)} underlayColor={'transparent'}>
                    <View style={styles.backbutton}>
                        <Text style={styles.backtxt}>{'<'}</Text>
                    </View>
    </TouchableHighlight>

    <Image 
            style={styles.logo}
            source={require('./images/search.png')}
            />
    
      {/* <TouchableHighlight style= {styles.bigbutton} onPress={this.submitme.bind(this)} underlayColor={'transparent'}>
            <Text style={styles.txtboton}>LOG OUT</Text>
      </TouchableHighlight> */}
      <Icon
        name='md-log-out'
        type='ionicon'
        size={45}
        color='#37474F'
        underlayColor={'transparent'}
        containerStyle={{position:'absolute',alignSelf:'flex-end',marginLeft:305}}
        onPress={this.submitme.bind(this)}
      />
      </View>
      <SearchBar
        clearIcon
        placeholder="Colaborador UDEM..."
        lightTheme
        inputStyle={{fontSize: 16, fontWeight: 'bold'} }
        round
        platform="android"
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
      />
      </View>
    );
  };

  returner(){
    this.props.navigator.pop();
}

  linker(data){
    console.log(data)
    this.props.navigator.push({
       component: Perfil,
        passProps: {   
          data: data
       },
    })
}

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
  if (this.state.loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, marginTop: 0 }}>
    {/* <View style={{flexDirection:'row', backgroundColor:'#E1E9EC'}}>
    <Image 
            style={styles.logo}
            source={require('./images/search.png')}
            />
    
    <TouchableHighlight style= {styles.bigbutton} onPress={this.submitme.bind(this)} underlayColor={'transparent'}>
            <Text style={styles.txtboton}>LOG OUT</Text>
      </TouchableHighlight>
      </View> */}
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => (
          <ListItem
            onPress={this.linker.bind(this, item)}
            roundAvatar
            underlayColor={'transparent'}
            title={`${item.nombre}`}
            subtitle={item.departamento}
            avatar={{ uri: item.foto }}
            containerStyle={{ borderBottomWidth: 1 }}
          />
        )}
        keyExtractor={item => item.idAlternativo.toString()}
        ItemSeparatorComponent={this.renderSeparator}
        ListHeaderComponent={this.renderHeader}
      />
    </List>
  );
}
}



//   render() {
//     return (
//       <View style={styles.container}>

//         <TouchableHighlight onPress={this.submitme.bind(this)} underlayColor={'transparent'}>
//                     <View style={styles.bigbutton}>
//                         <Text style={styles.txtboton}>LOG OUT</Text>
//                     </View>
//         </TouchableHighlight>

//          {/* <Text style={styles.welcome}>Hi {firebase.auth().currentUser.email}</Text> */}

//          <View>
//         <Text style={styles.welcome}>Search For Teacher</Text>
//         <TextInput
//               style={styles.ramInput}
//               placeholder={"Buscar"}
//               //onChangeText={(searchText) => this.setState({searchText})}
//               placeholder={this.state.Nombre}
//             />
//         <TouchableHighlight
//                 //style = {styles.button}
//                 underlayColor= "transparent"
//                 //onPress = {this.firstSearch()}
//               >
//               <Text style={styles.txtboton}>SEARCH</Text>
//             </TouchableHighlight>
//       </View>

//       </View>
//     );
//   }
// }

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
        height: 40,
        width: 70,
        alignSelf: "center",
        //alignItems: 'center',
        //marginLeft: 5,
        backgroundColor: '#ffcd40',
        justifyContent: 'center'
      },
      txtboton: {
        color: 'white',
        alignSelf: "center",
        fontSize: 16,
        fontWeight: "500",
        color: "black"
      },
      logo: {
        height: 90,
        width: 260,
        alignSelf: 'center',
        //marginTop: 5,
        //marginLeft: 22,
        aspectRatio: 4, 
        resizeMode: 'contain',
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
});

export default Home;

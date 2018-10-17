import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, FlatList, ActivityIndicator  } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import firebase from 'firebase';
import Login from './Login';
import Perfil from './Perfil';
import firebaseApp from './Firebase';


console.ignoredYellowBox = ['Setting a timer'];

// var ref = firebase.database().ref("/");
// var query = ref.orderByChild("Nombre").equalTo("Consuelo Jimenez");

// query.on("value", snapshot => {
//     console.log(snapshot.val());
// });

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
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const url = `https://api.myjson.com/bins/117p1c`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.colaboradores,
          error: res.error || null,
          loading: false,
        });
        this.arrayholder = res.colaboradores;
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

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
          
      const itemData = `${item.nombre.toUpperCase()} ${item.escuela.toUpperCase()} ${item.cubiculo}` ;
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
    <Image 
            style={styles.logo}
            source={require('./images/search.png')}
            />
    
    <TouchableHighlight style= {styles.bigbutton} onPress={this.submitme.bind(this)} underlayColor={'transparent'}>
            <Text style={styles.txtboton}>LOG OUT</Text>
      </TouchableHighlight>
      </View>
      <SearchBar
        placeholder="Colaborador UDEM..."
        lightTheme
        inputStyle={{fontSize: 16, fontWeight: 'bold'} }
        //inputContainerStyle={{ color: "cyan" }}
        round
        platform="android"
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
      />
      </View>
    );
  };


  linker(data){
    //console.log(data)
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
            subtitle={item.correo}
            avatar={{ uri: item.imagen }}
            containerStyle={{ borderBottomWidth: 1 }}
          />
        )}
        keyExtractor={item => item.correo}
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
        marginTop: 5,
        marginLeft: 22,
        aspectRatio: 4, 
        resizeMode: 'contain',
      }
});

export default Home;

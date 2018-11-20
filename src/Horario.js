import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, FlatList, Dimensions } from 'react-native';
import Direcciones from './Direcciones';
import 'moment-timezone';
import moment from 'moment';
import 'moment/min/moment-with-locales'
import 'moment/locale/es';
import firebase from 'firebase';

const { height } = Dimensions.get('window');


class Horario extends Component {


    constructor(props) {
        super(props);
    
        this.state = {
          arrayholder: [],
          loading: false,
          data2: this.props.data,
          screenHeight:0
        };
    
        this.arrayholder = [];
      }

      componentDidMount() {

        let id = Number.parseInt(this.props.data.idAlternativo, 10)
        console.log(this.props.data.idAlternativo)
        firebase.database().ref("/horarios").orderByChild("IdEmpleado").equalTo(id).on('value', snapshot =>
        {
        //console.log(this.props.data.idEmpleado)
          let arrayholder= [];
          snapshot.forEach(child => {
            console.log(this.arrayholder);
            arrayholder.push ({
              ki: child.key,
              idEmpleado: child.val().IdEmpleado,
              materia: child.val().Materia,
              inicio: child.val().Inicio,
              fin: child.val().Fin,
              inicioT: child.val().InicioTiempo,
              finT: child.val().FinTiempo,
              domingo: child.val().Domingo,
              lunes: child.val().Lunes,
              martes: child.val().Martes,
              miercoles: child.val().Miercoles,
              jueves: child.val().Jueves,
              viernes: child.val().Viernes,
              sabado: child.val().Sabado,
            });
          });
          this.setState({
            arrayholder,
            loading:true,
            data2: this.props.data
        })
        })
      }

renderSeparator = () => {
return (
    <View
    style={{
        height: 0.5,
        width: '86%',
        backgroundColor: '#CED0CE',
        marginLeft: '14%',
    }}
    />
);
};

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



  render() {
    console.disableYellowBox = true;
    const scrollEnabled = this.state.screenHeight > height;
    const {arrayholder} = this.state;
    var date = moment.locale('es') 
    var now = moment().tz('America/Mexico_City').format('dddd, MMMM Do YYYY, H:mm');
    var dia = moment().tz('America/Mexico_City').format('dddd');
    var hora = moment().tz('America/Mexico_City').format('kkmm');
    var horaT = moment().tz('America/Mexico_City').format('h:mm');
    var x;
    const disp = <Text style={{fontWeight:"300", fontSize: 26, color: '#629632', textAlign:'center', margin: 10}}> DISPONIBLE </Text>;
    const nodisp = <Text style={{fontWeight:"300", fontSize: 26, color: '#cc0000', textAlign:'center', margin: 10}}> NO DISPONIBLE </Text>;
    //moment(hora).isBetween(inicioT,inicioF);
    x = disp;

    arrayholder.forEach(function (arrayholder, index) {
      if(moment(hora).isBetween(arrayholder.inicio,arrayholder.fin)){
        x = nodisp;
        return false;
      }
    });

    if (dia=="lunes"){
    return (
    <View style={{backgroundColor: '#F5F5F5'}}>
    <View style={{flexDirection:'row', marginBottom: 20, backgroundColor: '#F5F5F5'}}>

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
      <Text style={{fontWeight:"600", fontSize: 22, color: "#000000", alignSelf: 'center', textAlign:'center'}}>{this.props.data.nombre}</Text>

      <View style={{margin:10}}>
        <Text style={{fontWeight:"300", fontSize: 18, textAlign:'center'}}>{now}</Text>
      </View>

      <View style={{marginTop:10, marginRight: 10, marginLeft: 10}}>
        {x}
      </View>

      <View
          style={{
            borderBottomColor: "#888888",
            borderBottomWidth: 1,
            }}
            />
      
      <FlatList
      contentContainerStyle={styles.scrollview}
      scrollEnabled={scrollEnabled}
      onContentSizeChange={this.onContentSizeChange}
      data={arrayholder}
      renderItem={({item, index}) =>{
        if (item.lunes!=null){
          return(  
              <View>
              <Text style={{color: "#000000", fontWeight:"300", fontSize: 18}}> {item.materia} </Text>
              <Text style={{fontSize: 16}}>Hora de inicio: {item.inicioT} </Text>
              <Text style={{fontSize: 16}}>Hora fin: {item.finT} </Text>
              
                {/* {item.jueves!=null ? <Text style={{color: "#000000", fontWeight:"300", fontSize: 18}}> {item.materia} </Text> : null}
                {item.jueves!=null ? <Text style={{fontSize: 16}}>Hora de inicio: {item.inicioT} </Text> : null}
                {item.jueves!=null ? <Text style={{fontSize: 16}}>Hora fin: {item.finT} </Text> : null} */}
              </View>
          )}
      }}
      keyExtractor = { (item, index) => index.toString() }
      ItemSeparatorComponent={this.renderSeparator}
      />
        
      </View>
    );
    } else if(dia=="martes"){
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
        <Text style={{fontWeight:"600", fontSize: 22, color: "#000000", alignSelf: 'center', textAlign:'center'}}>{this.props.data.nombre}</Text>
  
        <View style={{margin:10}}>
        <Text style={{fontWeight:"300", fontSize: 18, textAlign:'center'}}>{now}</Text>
      </View>

      <View style={{marginTop:10, marginRight: 10, marginLeft: 10}}>
        {x}
      </View>

      <View
          style={{
            borderBottomColor: "#888888",
            borderBottomWidth: 1,
            }}
            />
        
        <FlatList
        contentContainerStyle={styles.scrollview}
        scrollEnabled={scrollEnabled}
        onContentSizeChange={this.onContentSizeChange}
        data={arrayholder}
        renderItem={({item, index}) =>{
          if (item.martes!=null){
            return(  
                <View>
                <Text style={{color: "#000000", fontWeight:"300", fontSize: 18}}> {item.materia} </Text>
                <Text style={{fontSize: 16}}>Hora de inicio: {item.inicioT} </Text>
                <Text style={{fontSize: 16}}>Hora fin: {item.finT} </Text>
                </View>
            )}
        }}
        keyExtractor = { (item, index) => index.toString() }
        ItemSeparatorComponent={this.renderSeparator} 
        />
        </View>
      );
      }else if (dia=="miercoles"){
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
            <Text style={{fontWeight:"600", fontSize: 22, color: "#000000", alignSelf: 'center', textAlign:'center'}}>{this.props.data.nombre}</Text>
      
            <View style={{margin:10}}>
              <Text style={{fontWeight:"300", fontSize: 18, textAlign:'center'}}>{now}</Text>
            </View>

            <View style={{marginTop:10, marginRight: 10, marginLeft: 10}}>
              {x}
            </View>

            <View
                style={{
                  borderBottomColor: "#888888",
                  borderBottomWidth: 1,
                  }}
                  />
            
            <FlatList
            contentContainerStyle={styles.scrollview}
            scrollEnabled={scrollEnabled}
            onContentSizeChange={this.onContentSizeChange}
            data={arrayholder}
            renderItem={({item, index}) =>{
              if (item.miercoles!=null){
                return(  
                    <View>
                    <Text style={{color: "#000000", fontWeight:"300", fontSize: 18}}> {item.materia} </Text>
                    <Text style={{fontSize: 16}}>Hora de inicio: {item.inicioT} </Text>
                    <Text style={{fontSize: 16}}>Hora fin: {item.finT} </Text>
                    </View>
                )}
            }}
            keyExtractor = { (item, index) => index.toString() }
            ItemSeparatorComponent={this.renderSeparator}
            />
            </View>
          );
      } else if (dia=="jueves"){
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
            <Text style={{fontWeight:"600", fontSize: 22, color: "#000000", alignSelf: 'center', textAlign:'center'}}>{this.props.data.nombre}</Text>
      
          <View style={{margin:10}}>
            <Text style={{fontWeight:"300", fontSize: 18, textAlign:'center'}}>{now}</Text>
          </View>

          <View style={{marginTop:10, marginRight: 10, marginLeft: 10}}>
            {x}
          </View>

          <View
            style={{
              borderBottomColor: "#888888",
              borderBottomWidth: 1,
              }}
              />
            
            <FlatList
            contentContainerStyle={styles.scrollview}
            scrollEnabled={scrollEnabled}
            onContentSizeChange={this.onContentSizeChange}
            data={arrayholder}
            renderItem={({item, index}) =>{
              if (item.jueves!=null){
                return(  
                    <View>
                    <Text style={{color: "#000000", fontWeight:"300", fontSize: 18}}> {item.materia} </Text>
                    <Text style={{fontSize: 16}}>Hora de inicio: {item.inicioT} </Text>
                    <Text style={{fontSize: 16}}>Hora fin: {item.finT} </Text>
                    </View>
                )}
            }}
            keyExtractor = { (item, index) => index.toString() }
            ItemSeparatorComponent={this.renderSeparator}
            />
            </View>
          );
      } else if (dia=="viernes"){
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
            <Text style={{fontWeight:"600", fontSize: 22, color: "#000000", alignSelf: 'center', textAlign:'center'}}>{this.props.data.nombre}</Text>
      
        <View style={{margin:10}}>
          <Text style={{fontWeight:"300", fontSize: 18, textAlign:'center'}}>{now}</Text>
        </View>

        <View style={{marginTop:10, marginRight: 10, marginLeft: 10}}>
          {x}
        </View>

        <View
            style={{
              borderBottomColor: "#888888",
              borderBottomWidth: 1,
              }}
              />
            
            <FlatList
            contentContainerStyle={styles.scrollview}
            scrollEnabled={scrollEnabled}
            onContentSizeChange={this.onContentSizeChange}
            data={arrayholder}
            renderItem={({item, index}) =>{
              if (item.viernes!=null){
                return(  
                    <View>
                    <Text style={{color: "#000000", fontWeight:"300", fontSize: 18}}> {item.materia} </Text>
                    <Text style={{fontSize: 16}}>Hora de inicio: {item.inicioT} </Text>
                    <Text style={{fontSize: 16}}>Hora fin: {item.finT} </Text>
                    </View>
                )}
            }}
            keyExtractor = { (item, index) => index.toString() }
            ItemSeparatorComponent={this.renderSeparator}
            />
            </View>
          );
      }else {
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
            <Text style={{fontWeight:"600", fontSize: 22, color: "#000000", alignSelf: 'center', textAlign:'center'}}>{this.props.data.nombre}</Text>
      
        <View style={{margin:10}}>
          <Text style={{fontWeight:"300", fontSize: 18, textAlign:'center'}}>{now}</Text>
        </View>

        <View style={{marginTop:10, marginRight: 10, marginLeft: 10}}>
          {x}
        </View>

        <View
            style={{
              borderBottomColor: "#888888",
              borderBottomWidth: 1,
              }}
              />
            
            <FlatList
            contentContainerStyle={styles.scrollview}
            scrollEnabled={scrollEnabled}
            onContentSizeChange={this.onContentSizeChange}
            data={arrayholder}
            renderItem={({item, index}) =>{
                return(  
                    <View>
                    <Text style={{color: "#000000", fontWeight:"300", fontSize: 18}}> {item.materia} </Text>
                    <Text style={{fontSize: 16}}>Hora de inicio: {item.inicioT} </Text>
                    <Text style={{fontSize: 16}}>Hora fin: {item.finT} </Text>
                    </View>
                )
            }}
            keyExtractor = { (item, index) => index.toString() }
            ItemSeparatorComponent={this.renderSeparator}
            />
            </View>
          );
          } //else
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

export default Horario;

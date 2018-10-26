import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import ImageView from 'react-native-image-view';

const {width} = Dimensions.get('window');
const { height } = Dimensions.get('window');

class ImagenVisor extends Component {

constructor (props) {
    super(props)
    this.state = {
      data: this.props.data,
      isImageViewVisible: false ,
      imageIndex: 0

    }
}

onContentSizeChange = (contentWidth, contentHeight) => {
  // Save the content height in state
  this.setState({ screenHeight: contentHeight });
};

ShowModalFunction(visible) {
    this.setState({ModalVisibleStatus: false});
  }

returner(){
    this.props.navigator.pop();
}


  render() {
    const scrollEnabled = this.state.screenHeight > height;

    const img1 = [ 
      {
      source:{
      uri: 'https://images.emojiterra.com/twitter/512px/1f1e8-1f1e6.png',
    },
      title: 'Canada',
      // width: 300,
      // height: 150,
    },  
    ];

    const img2 = [ 
      {
      source:{
      uri: 'https://conceptodefinicion.de/wp-content/uploads/2014/02/tierra.jpg',
    },
      title: 'Canada',
      // width: 300,
      // height: 150,
    },  
    ];

    const images = [
      ...img1,
      ...img2,
      {
      source:{
      uri: 'https://reactnativecode.com/wp-content/uploads/2018/02/desktop.jpeg',
    },
      title: 'USA',
      // width: 300,
      // height: 150,
    },
      {
        source:{
          uri: 'https://cdn.pixabay.com/user/2015/01/20/20-56-42-330_250x250.jpg',
        },
        title: 'Mex',
        // width: 300,
        // height: 150,
      },   
    ];

    //const images = [ ...img1, ...img2  ];

    // var photos = images.map(function(image) {
    //   return (<Image url={image} rounded />);
    //  });
    console.log(images.title)
    
    var tit = images.map((v,index)=>{
      return <View key={index}><Text style={{fontSize:50}}>{v.title}</Text></View>
    })

    const {isImageViewVisible, imageIndex} = this.state;

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

        {/* {photos} */}
    {/* <Modal 
          visible={this.state.ModalVisibleStatus}
          transparent={false}
          onRequestClose={ () =>  this.ShowModalFunction() }>
          <Text onPress={()=> {this.ShowModalFunction(true)}}>Close</Text>
 
            <ImageViewer imageUrls={images}/>
 
    </Modal> */}

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
                                style={{width:300, height: 150, margin: 10}}
                                source={image.source}
                                resizeMode="cover"
                            />
                            <Text>{image.title}</Text>
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
    renderFooter={(currentImage) => (<View>{tit}</View>)}
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

export default ImagenVisor;

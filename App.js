import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Canvas from './components/Canvas.js';

export default class App extends Component {
  render() {
    return(
      <View style = {styles.container}>
        <TouchableOpacity>
          <Image style = {styles.backbutton} source={require("./assets/icons/backbutton.png")}/>
          </TouchableOpacity>
        <View style = {styles.textBox}>
          <Text style = {styles.headerText}>Scribble!</Text>
          <Text style = {styles.text}>Feeling frustrated? Try drawing on the canvas</Text>
          <Canvas />
        </View>
        <View style = {styles.bottomView}>
        <TouchableOpacity>
          <Image style = {styles.checkButton} source={require("./assets/icons/checkmark.png")}/>
          </TouchableOpacity>
        </View>
      </View>
      );
    }
  }

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:60,
    paddingLeft : 30,
    backgroundColor: "#0F194D",
    paddingRight : 30,
  },
  textBox:{
    alignItems: "center",
  },
  headerText:{
    color:"#fff",
    fontSize: 20,
    fontFamily: 'CircularStd-Bold'
  },
  text: {
    paddingTop: 10,
    color: '#717AA7',
    fontSize: 11,
    fontFamily: 'ProximaNova-Regular',
    paddingBottom: 30
  },
  backbutton: {
    height: 10,
    width : 10
  },
  bottomView: {
    paddingTop: 30,
    paddingRight : 20,
    alignItems : "flex-end",
  },
  checkButton: {
    height: 30,
    width : 30
  }
  });

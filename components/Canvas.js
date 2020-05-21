import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';


import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <RNSketchCanvas
            containerStyle={{ backgroundColor: 'transparent', flex: 1 }}
            canvasStyle={{ backgroundColor: 'transparent', flex: 1 }}
            defaultStrokeIndex={0}
            defaultStrokeWidth={10}
          //  strokeComponent={color => (
            //  <View style={[{ backgroundColor: color }, styles.strokeColorButton]} />
            //)}
            //strokeSelectedComponent={(color, index, changed) => {
              //return (
                //<View style={[{ backgroundColor: color, borderWidth: 2 }, styles.strokeColorButton]} />
            //  )
          //  }}

            //onSketchSaved={(success, filePath) => { alert('filePath: ' + filePath); }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 520,
    width: 330,
    alignItems: "center",
    backgroundColor: "#DCE0F4",
    borderRadius: 20

  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  strokeColorButton: {
    marginHorizontal: 2.5, marginVertical: 8, width: 20, height: 20, borderRadius: 10,
  }
})

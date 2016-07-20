'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

export default class demo extends Component {

  constructor (props) {
    super(props);
    this.natValue = 3
    this.state = {
      leftValue: '',
      rightValue: '',
      resultValue: ''
    }
  }

  getResult = () => {
    this.setState({
      resultValue: parseInt(this.state.leftValue) + parseInt(this.state.rightValue)
    })
  }

  rightValueChange = (rightValue) => {
    this.setState({rightValue})
  }

  leftValueChange = (leftValue) => {
    this.setState({leftValue})
  }

  render() {

    return (
      <View style={styles.container}>

        <TextInput testID='left_value_text_input'
          style={styles.leftValue}
          keyboardType='numeric'
          value={this.state.leftValue}
          onChangeText={this.leftValueChange /*Using ES6 to assign function value*/}/>
        <Text style={styles.addSymblo}>+</Text>
        <TextInput testID='right_value_text_input'
          style={styles.rightValue}
          keyboardType='numeric'
          value={this.state.rightValue}
          onChangeText={(rightValue) => this.setState({rightValue})/*Using ES6 Direct function*/}/>
        <TouchableHighlight testID='cacule_touchable_highlight'
          style={styles.caculeButton}
          onPress={this.getResult}>
          <Text style={styles.caculeText}>=</Text>
        </TouchableHighlight>
        <Text testID='result_text' style={styles.resultText}>{this.state.resultValue}</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  leftValue: {
    marginTop: 100,
    height: 50,
    width: 50,
    borderColor: 'black',
    borderWidth: 1
  },
  rightValue: {
    marginTop: 100,
    height: 50,
    width: 50,
    borderColor: 'black',
    borderWidth: 1
  },
  addSymblo: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 100,
    height: 50,
    width: 65
  },
  caculeButton: {
    marginTop: 100,
    height: 50,
    width: 50
  },
  caculeText: {
    fontSize: 40,
    height: 50,
    width: 50,
    textAlign: 'center',
    color: 'blue'
  },
  resultText: {
    fontSize: 30,
    marginTop: 100,
    paddingTop: 8,
    height: 50,
    width: 100,
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1
  }

});

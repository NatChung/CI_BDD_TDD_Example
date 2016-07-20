/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 'use strict';

 import React, { Component } from 'react'
 import Demo from './js/demo'
 import { AppRegistry} from 'react-native'

 class ci_react_native_test extends Component {
   render() {
     return <Demo/>
   }
 }

 AppRegistry.registerComponent('ci_react_native_test', () => ci_react_native_test);

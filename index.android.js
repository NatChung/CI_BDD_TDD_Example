/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 'use strict';

 import React, { Component } from 'react'
 import Demo from './js/demo'
 import { AppRegistry} from 'react-native'

 class CI_BDD_TDD_Example extends Component {
   render() { return <Demo/> }
 }

 AppRegistry.registerComponent('CI_BDD_TDD_Example', () => CI_BDD_TDD_Example);

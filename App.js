import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {StackNavigator} from 'react-navigation'

import HomeContainer from './app/containers/HomeContainer'
import QuizContainer from './app/containers/QuizContainer'
import ResultsContainer from './app/containers/ResultsContainer'




// export default class App extends Component {
//   render() {
//     return (
//      <QuizContainer/>
//     );
//   }
// }

 const App = StackNavigator({
   Home: {screen: HomeContainer},
   Quiz: {screen: QuizContainer},
   Results: {screen: ResultsContainer},
 }, {
   headerMode: 'none'
 })

 export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

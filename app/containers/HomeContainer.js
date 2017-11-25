import React, {Component} from 'react' 
import PropTypes from 'prop-types' 
import {View, Text} from 'react-native' 

import HomeComponent from '../components/HomeComponent'

export default class HomeContainer extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <HomeComponent navigate={navigate}/>
        )
    }
}
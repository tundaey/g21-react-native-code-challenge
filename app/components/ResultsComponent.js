import React, {Component} from 'react' 
import PropTypes from 'prop-types' 
import {View, Text, StyleSheet} from 'react-native'
import {Button} from 'native-base'
import Result from './Result' 

import {
    Container,
    List,
    H1,
    ListItem,
    Content, } from 'native-base'

ResultsComponent.propTypes = {
    results: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
}

export default function ResultsComponent (props) {
    return (
        <Container>
            <Content contentContainerStyle={{backgroundColor: '#FFF'}}>
                <View style={{flex: 1,alignItems: 'center',}}>
                    <H1>You scored</H1>
                    <H1>{`${props.score}/${props.total}`}</H1>
                </View>
                <List>
                    {props.results.map((result, i)=> <Result key={i} result={result}/>)}
                </List>
                <Button full rounded info 
                    style={{ marginTop: 10, marginLeft: 10, marginRight: 10, marginBottom: 10 }}
                    onPress={() => props.navigate('Home')}>
                    <Text>Play Again</Text>
                </Button>
            </Content>
            
        </Container> 
    )
}
import React, {Component} from 'react' 
import PropTypes from 'prop-types' 
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native' 
import {
    Container,
    Body,
    H1,
    H2,
    Card,
    CardItem,
    Content, 
    Button} from 'native-base'

HomeComponent.propTypes = {

}

export default function HomeComponent (props) {
    return (
        <Container style={{backgroundColor: '#FFF'}}>
            <Content padder contentContainerStyle={{flex: 1,justifyContent: 'space-around'}}>
            <H1>Welcome to the Trivia Challenge</H1>
            <H2>You will be presented with 10 True or False questions</H2>
            <H2>Can you score 100% ?</H2>
          {/* <Card>
            <CardItem>
              <Body>
                <Text>Chat App to talk some awesome people!</Text>
              </Body>
            </CardItem>
          </Card> */}
          <Button full rounded info
            style={{ marginTop: 10 }}
            onPress={() => props.navigate('Quiz')}>
            <Text>Begin Trivia</Text>
          </Button>
        </Content>
      </Container>
    )
}

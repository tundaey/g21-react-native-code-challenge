import React, {Component} from 'react' 
import PropTypes from 'prop-types' 
import {View, Text} from 'react-native' 
import { ListItem, Content, Body, Icon } from 'native-base'

Result.propTypes = {

}

function Correct(){
    return (
        <Text style={{marginTop: 5, color: 'green'}} note>Correct</Text>
    )
}

function InCorrect(){
    return (
        <Text style={{marginTop: 5, color: 'red'}} note>InCorrect</Text>
    )
}

export default function Result({result}) {
    return (
        <ListItem>
            <Body>
                <Text>{result.question}</Text>
                <Text style={{marginTop: 5}} note>{`Your Answer ${result.answer}`}</Text>
                { result.correct_answer === result.answer 
                    ? <Correct/>
                    : <InCorrect/>}
            </Body>
      </ListItem>
    )
}
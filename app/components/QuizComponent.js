import React, {Component} from 'react' 
import PropTypes from 'prop-types' 
import {View, Text} from 'react-native' 

import {
    Container,
    Body,
    H3,
    H2,
    Card,
    CardItem,
    Content, 
    Button} from 'native-base'

// QuizComponent.propTypes = {
//     question: PropTypes.object.isRequired,
//     questionId: PropTypes.number.isRequired
// }

export default class QuizComponent extends Component {
    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={{justifyContent: 'center',  marginTop: 20}}>
                    <View 
                    style={{marginBottom: 50, marginTop: 10, alignSelf: 'center'}}>
                    <H2>{this.props.question.category}</H2></View>
                    <Card>
                        <CardItem>
                            <Body>
                                <H3>{this.props.question.question}</H3>
                            </Body>
                        </CardItem>
                    </Card> 
                    <H3 style={{marginBottom: 20, marginTop: 20, alignSelf: 'center'}}>{`${this.props.questionId + 1} of 10`}</H3>
                    <View>
                        <Button full rounded info style={{ marginTop: 10 }}
                                onPress={()=> this.props.gotoNextQuestion(this.props.questionId, 'True')}>
                                <View><Text>True</Text></View>
                        </Button>
                        <Button full rounded danger style={{ marginTop: 10 }}
                                onPress={()=>this.props.gotoNextQuestion(this.props.questionId, 'False')}>
                                <View><Text>False</Text></View>
                        </Button>
                    </View>
                </Content>
            </Container>
        )
    }

}
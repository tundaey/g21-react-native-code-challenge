import React, {Component} from 'react' 
import PropTypes from 'prop-types' 
import {View, Text, TouchableOpacity} from 'react-native' 
import {Container,Content, Spinner} from 'native-base'

import {getAllQuestions} from '../utils/api'
import QuizComponent from '../components/QuizComponent'


export default class QuizContainer extends Component {
    static navigationOptions = {
        title: 'Start Quiz',
    };

    constructor(props){
        super(props);

        this.state = {
            isLoading: true,
            error: null,
            questions: [],
            currentQuestion: {},
            currentQuestionId: 0,
            totalQuestions: 0,
            questionAnswered: []
        }

        this.gotoNextQuestion = this.gotoNextQuestion.bind(this)
    }

    componentDidMount(){
        getAllQuestions()
        .then((data)=> {
            this.setState({
                questions: data,
                totalQuestions: data.length,
                currentQuestion: data[0],
                isLoading: false
            })
        }).catch((error)=> {
            this.setState({
                error: 'Error Loading Data',
                isLoading: false
            })
        })
    }

    render() {
        return this.state.isLoading === true
        ? <Container>
            <Content padder contentContainerStyle={{flex: 1,justifyContent: 'space-around', alignContent:'center'}}>
                <Spinner color='blue' />
            </Content>
          </Container>
        : this.state.error === null
            ?<QuizComponent 
            questionId={this.state.currentQuestionId}
            question={this.state.currentQuestion}
            gotoNextQuestion={this.gotoNextQuestion}/> 
            :<Container>
                <Content padder contentContainerStyle={{flex: 1,justifyContent: 'space-around', alignContent:'center'}}>
                    <Text>{this.state.error}</Text>
                </Content>
            </Container>
        
    }

    gotoNextQuestion(questionId, answer){
        let nextQuestionId = questionId + 1;
        if(nextQuestionId >= this.state.totalQuestions){
            //this.props.navigation.navigate('Results', this.state.questionAnswered)
            this.goToResults(questionId, answer)
        }else{
            this.saveAnswer(questionId, answer)
            let nextQuestion = this.state.questions[nextQuestionId]
            this.setState({
                currentQuestionId: nextQuestionId,
                currentQuestion: nextQuestion
            })
        }
        
    }

    saveAnswer(questionId, answer){
        let questionAnswered = this.state.questions[questionId]
        questionAnswered['answer'] = answer;
        this.setState({
            questionAnswered: [...this.state.questionAnswered, questionAnswered]
        })
    }

    goToResults(questionId, answer){
        let questionAnswered = this.state.questions[questionId]
        questionAnswered['answer'] = answer;
        
        this.setState({
            questionAnswered: [...this.state.questionAnswered, questionAnswered]
        }, ()=> this.props.navigation.navigate('Results', this.state.questionAnswered))
    }
}
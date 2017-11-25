import React, {Component} from 'react' 
import PropTypes from 'prop-types' 
import {View, Text} from 'react-native'

import ResultsComponent from '../components/ResultsComponent'

// ResultsContainer.propTypes = {
//     navigation: PropTypes.object.isRequired
// }

export default class ResultsContainer extends Component {
    state = {
        isLoading: true,
        score: 0,
        total: 0,
        results: []
    }
    componentDidMount(){
        const results = this.props.navigation.state.params
        const total = results.length;
        let score = 0
        results.forEach((r)=> {
            if(r.answer === r.correct_answer) score++
        })
        this.setState({
            results: results,
            total: total,
            score: score,
            isLoading: false
        })

        
    }

    render() {
        return (
            this.state.isLoading === true
            ? <View><Text>Loading</Text></View>
            : <ResultsComponent 
                navigate={this.props.navigation.navigate}
                score={this.state.score}
                total={this.state.total}
                results={this.state.results}/>
        )
    }
}
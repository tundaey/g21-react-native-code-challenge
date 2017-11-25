import * as axios from 'axios'

const URL = "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
export function getAllQuestions(){
    return axios.get(URL)
    .then(({data})=> data.results)
}
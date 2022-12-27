import './Quiz.css';

import React, { Component } from 'react'

export default class Quiz extends Component {

constructor(props){
    super(props)

    this.state={
        questions:[
            {
                questionText:'which  is the capital of Iran?',
                answerQuestion:[
                    {answerText:'Tehran', isCorrect:true },
                    {answerText:'Shiraz', isCorrect:false},
                    {answerText:'Esfahan', isCorrect:false},
                    {answerText:'Ramsar', isCorrect:false}
                ]
            },
            {
                questionText:'Who is the queen of Iran?',
                answerQuestion:[
                {answerText:'RezaPahlavi', isCorrect:false },
                {answerText:'NoorPahlavi', isCorrect:true},
                {answerText:'FarahPahlavi', isCorrect:false},
                {answerText:'None', isCorrect:false}
            ]
        },
            {
                questionText:'which is the biggest continent?',
                answerQuestion:[
                {answerText:'America', isCorrect:false },
                {answerText:'Europe', isCorrect:false},
                {answerText:'Asia', isCorrect:true},
                {answerText:'Africa', isCorrect:false}
            ]
        },
            {
                questionText:'which is the longest river ?',
                answerQuestion:[
                {answerText:'Micicipi', isCorrect:false },
                {answerText:'Send', isCorrect:false},
                {answerText:'Volka', isCorrect:false},
                {answerText:'Nil', isCorrect:true}
            ]
        }

        ],
        currentQuestion: 0,
        showScore:false,
        score:0

    }
}

clickHandler(isCorrect){
    console.log(isCorrect);
    if(isCorrect){
        this.setState( prevState => {
            return{
                score:prevState.score + 1
            }
        })
    }

    if (this.state.currentQuestion === 3  ){
        this.setState({showScore : true})

    }else{
        this.setState(prevState => {
            return {
                    currentQuestion : prevState.currentQuestion +1
            }
        })
    }

    
}

  render() {
    return (
      <div className='app'>
        
        {this .state.showScore ? (<div className='score-section'>
            You score{this.state.score} out of {this.state.questions.length}
            </div> )
          : (
            <div>
               <div className='question-section'>
            <div className='question-count'> <span>question {this.state.currentQuestion +1}</span>
            / {this.state.questions.length}
            </div>
            <div className='question-text'>
                 {this.state.questions[this.state.currentQuestion].questionText}
            </div>
        </div>
         
         <div>
         {this.state.questions[this.state.currentQuestion].answerQuestion.map(answer =>(
          <button onClick ={this.clickHandler.bind(this, answer.isCorrect)}>
            {answer.answerText}
          </button>
         ) )}

         
          
        </div>
        
            </div>
          )}
        
      
      </div>
    )
  }
}

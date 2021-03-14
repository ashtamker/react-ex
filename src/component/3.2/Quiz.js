import React, { Component } from 'react';
import QuizTitle from './Quiztitle';
import Q1 from './Q1';
import Q2 from './Q2';

class Quiz extends Component {
    render() {
        return (
            <div className="quiz-title">
                <QuizTitle />
                <Q1 />
                <Q2 />
            </div>
        );
    }
}

export default Quiz;
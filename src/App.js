import React, { Component } from "react";
import Header from "./components/Header";
import QuestionSection from "./components/QuestionSection";
import "./App.css";
import AnswerSection from "./components/AnswerSection";

class App extends React.Component {
  constructor(props) {
    super(props);
    const questionAnswers = [
      {
        question: "Which river is Julius Caesar famous for crossing?",
        answer: "RUBICON",
      },
      {
        question: "Who was the first Christian Emperor?",
        answer: "CONSTANTINE",
        answerTwo: "PHILIP",
        answerThree: "PHILLIP",
      },
      {
        question:
          "Which Roman general defeated Hannibal at the Battle of Zama?",
        answer: "SCIPIO",
        answerTwo: "SCIPIO AFRICANUS",
      },
      {
        question: "This Roman Emperor wrote Meditations?",
        answer: "MARCUS AURELIUS",
      },
      {
        question: "The man who led elephants over the Alps to attack Rome?",
        answer: "HANNIBAL",
      },
      {
        question: "The first Emperor of the Roman Empire?",
        answer: "AUGUSTUS",
        answerTwo: "OCTAVIAN",
      },
      {
        question: "This military unit was the backbone of the Roman military",
        answer: "LEGION",
      },
      {
        question: "Which Emperor took the Empire to its territorial heights?",
        answer: "TRAJAN",
      },
      {
        question: "Which Emperor built a coast-to-coast wall in Britain?",
        answer: "HADRIAN",
      },
      {
        question: "Before the Emperors, what kind of government did Rome have?",
        answer: "REPUBLIC",
      },
    ];

    this.state = {
      score: 0,
      guess: "",
      question: [],
      won: false,
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <QuestionSection />
        <AnswerSection />
      </div>
    );
  }
}

export default App;

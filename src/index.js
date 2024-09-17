import React from 'react';
import ReactDOM from 'react-dom/client';
import Quiz from './components/Quiz';
import "./index.css"
import { QuizPorvider } from './QuizContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuizPorvider>
    <Quiz />
    </QuizPorvider>
  </React.StrictMode>
);



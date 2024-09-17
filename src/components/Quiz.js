
import { useContext, useEffect, useState } from "react";
import Question from "./Question"
import { Result } from "./Results";
import { QuizContext } from "../QuizContext";
import { Error } from "./Error";

const Quiz = () => {

    const [quizState, dispatch] = useContext(QuizContext); 
    const apiUrl = "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple&encode=url3986"
    useEffect(() =>{
        if(quizState.data.length > 0 || quizState.error)return;
        console.log("on initialize");
        fetch(apiUrl)
        .then((res)=> res.json())
        .then((data)=>{
            console.log("data ", data.results);
            if(data && data.results){
                console.log("jatin lodu h")
                dispatch({ type: "Load_Ques", payload : data.results});
            }
        }).catch(err =>{
            console.log("failed to fetch please reload")
            dispatch({type : "error", payload : err.message})
        })
    });
    const testOnClick = () =>{
        dispatch({type:"Next_Ques"});
    }
    return (
        <div className="quiz">
            {quizState.error && (<Error/>)}
            {quizState.stateResults && (<Result/>)}
            {!quizState.stateResults && quizState.data.length>0 && (
                <div>
                    <div className="score">
                        Question {quizState.currIdx + 1}/{quizState.data.length}
                    </div>
                    <Question />
                    <div className="next-button" onClick={testOnClick}>
                        Next question
                    </div>
                </div>)
            }
        </div>
    );
};
export default Quiz;

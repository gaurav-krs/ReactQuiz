import { createContext, useReducer } from "react";
import data from "./data"
import { normalize, shuffleAnswers } from "./Helpers";
const initState = {
    currIdx : 0,
    data : [],
    stateResults :false,
    currAns : '',
    answers : [],
    correctAnsCount : 0,
    error :null,
}

const reducer = (state, action) =>{
    switch(action.type){
        case "Next_Ques": {
            const showResults = state.currIdx === state.data.length-1;
            const newIdx = showResults? state.currIdx : state.currIdx+1; 
            const answers = showResults? [] : shuffleAnswers(state.data[newIdx]);
            return{
                ...state,
                currIdx : newIdx,
                stateResults : showResults,
                currAns : '',
                answers : answers,
            }
        }
        case "Load_Ques" :{
            console.log("in load ques")
            // console.log("debug pay " + action.payload[0].question)
            const normalizeQues = normalize(action.payload);
            console.log(normalizeQues);
            return{
                ...state,
                data : normalizeQues,
                answers : shuffleAnswers(normalizeQues[0]),
            }
        }
        case "Restart": {
            console.log("restart")
            return{
                ...state,
                currIdx : 0,
                currAns : '',
                stateResults : false,
                answers : shuffleAnswers(data[0]),
                correctAnsCount :0,
            }
        }
        case "slect_ans" : {
            console.log("selected " + action.payload)
            console.log("log " + state.data[state.currIdx].correctAnswer)
            console.log("log " + state.correctAnsCount)
            const correctAnsCount = action.payload === state.data[state.currIdx].correctAnswer
            ? state.correctAnsCount + 1
            : state.correctAnsCount;
            console.log("new count " + (correctAnsCount))
            return {
                ...state,
                currAns : action.payload,
                correctAnsCount,
            }
        }
        case "error" : {
            return {
                ...state,
                error : action.payload
            }
        }
        default :{
            return state;
        }
    }
}
export const QuizContext = createContext();
export const QuizPorvider = ({children}) => {
    const value = useReducer(reducer,initState);
    // const[currIdx, setCurrIdx] = useState(0);
    return <QuizContext.Provider value = {value}>{children}</QuizContext.Provider>
}
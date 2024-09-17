
import { useReducer } from "react";
import Question from "./Question"
const initState = {
    currIdx : 0,
    ques : [], 
};
const reducer = (state, action) =>{
    if(action.type === "next_question"){
        return {...state, currIdx: state.currIdx+1};
    }
    return state;
};
const QuizRedux = () => {
    // const [currIdx,setIdx] = useState(0);
    const [state, dispatch] = useReducer(reducer,initState)
    // const testClick = () =>{
    //     console.log("testClick");
    //     setIdx(currIdx+1);
    // }
    const testClick = () =>{
        console.log("testclick");
        dispatch(
            {type : "next_question"});
    };
    return (
        <div className="quiz">
            <div className="score">Question 1/8 </div>
            <Question />
            <div className="next-button" onClick = {testClick}>next question {state.currIdx}</div>
        </div>
    )
}
// export default Quiz;

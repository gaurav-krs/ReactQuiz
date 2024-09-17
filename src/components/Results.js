import { useContext } from "react"
import { QuizContext } from "../QuizContext"
export const Result = () =>{
    const [state, reducer] = useContext(QuizContext)
    // const clickFxn = () =>{
    //     reducer({type : "Restart"});
    // }
    console.log("result")
    return (
        <div className="results">
            <div className="congratulations">
                Congratulations</div>
            <div className="results-info">
                <div>you have completed the quiz.</div>
                <div>you've got {state.correctAnsCount} of {state.data.length}</div>
            </div>
            <div className="next-button" onClick={()=>reducer({type:"Restart"})}>
                Restart
            </div>
        </div>
    )
}
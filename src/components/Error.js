import { useContext } from "react"
import { QuizContext } from "../QuizContext"
export const Error = () =>{
    const [state, reducer] = useContext(QuizContext)

    console.log("result")
    return (
        <div className="results">
            <div className="congratulations">
                Error</div>
            <div className="results-info">
                <div> {state.error}</div>
            </div>
        </div>
    )
}
import { useContext } from "react";
import Answere from "./Answere"
import { QuizContext } from "../QuizContext";
const Question = () => {
    const [quizstate, reducer] = useContext(QuizContext)
    const currentQues = quizstate.data[quizstate.currIdx]
    return (
        <div>
            <div Question className="question">
                {currentQues.question}</div>
            <div className="answers">
                {quizstate.answers.map((ans, idx) => (
                    <Answere 
                    ansText={ans} 
                    key={idx}
                    index = {idx}
                    currentAns = {quizstate.currAns}
                    correctAns = {currentQues.correctAnswer}
                    onSelectAnswer={(ansText) => 
                    reducer({ type: "slect_ans", payload: ansText})} />
                ))}
            </div>
        </div>
    );
}
export default Question
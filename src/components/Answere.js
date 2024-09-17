

const Answere = ({ansText,index,onSelectAnswer,currentAns,correctAns}) =>{
    console.log(ansText);
    const letters  = ['A','B','C','D'];
    // console.log(key);
    const isCorrect = currentAns && correctAns === ansText;
    const isWrong = currentAns === ansText && correctAns !== ansText
    console.log("log iswrong " + isWrong);
    const correctClass = isCorrect? "correct-answer" : "";
    const worngClass = isWrong? "wrong-answer" : "";
    const disableClass = currentAns? "disabled-answer":"";
    return (
        <div className={`answer ${correctClass} ${worngClass} ${disableClass}`} onClick={()=>onSelectAnswer(ansText)}>
            <div className="answer-letter">{letters[index]}</div>
            <div className="answer-text">{ansText}</div>
        </div>
    )
}
export default Answere
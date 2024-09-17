export const shuffleAnswers = (question) =>{
    console.log("shuffle "+ question )
    const unshuffledAns = [question.correctAnswer,...question.incorrectAnswers];
    return unshuffledAns.map((a)=>({
        sort:Math.random(),
        value :a,
    })).sort((a,b)=>a.sort-b.sort)
    .map((a)=>a.value);
}

export const normalize = (backendData ) =>{
    // console.log("debug " + backendData[0].incorrect_answers)
    return backendData.map((data) => {
        const incorrectAnswers = data.incorrect_answers.map((ans) =>  decodeURIComponent(ans))
        return {
            correctAnswer : decodeURIComponent(data.correct_answer),
            question : decodeURIComponent(data.question),
            incorrectAnswers,
        }
    })
}
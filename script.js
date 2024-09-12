// Correct answers object
const correctAnswers = {
    q1: "All NFAs are not DFAs",
    q2: "DFA",
    q3: "DFA",
    q4: "NFA",
    q5: "DFA",
    q6: "NFA",
    q7: "Less",
    q8: "All DFAs are derived from NFAs",
    q9: "NFA",
    q10: "NFA"
};

// Function to calculate score and display correct answers
function calculateScore() {
    let score = 0;
    const totalQuestions = 10;
    let answers = '';

    // Loop through each question and check if the answer is correct
    for (let i = 1; i <= totalQuestions; i++) {
        const question = `q${i}`;
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        
        if (selectedAnswer) {
            const userAnswer = selectedAnswer.value;
            if (userAnswer === correctAnswers[question]) {
                score++;
                answers += `<p class="correct">${i}. Correct answer: ${correctAnswers[question]}</p>`;
            } else {
                answers += `<p class="incorrect">${i}. Your answer: ${userAnswer}. Correct answer: ${correctAnswers[question]}</p>`;
            }
        } else {
            answers += `<p class="incorrect">${i}. Not answered. Correct answer: ${correctAnswers[question]}</p>`;
        }
    }

    // Display score and answers
    document.getElementById('resultSection').style.display = 'block';
    document.getElementById('score').textContent = `Your score: ${score} out of ${totalQuestions}`;
    document.getElementById('answers').innerHTML = answers;
}

function calculateScore() {
    // Correct answers
    const correctAnswers = {
        q1: 'Paris',
        q2: 'Jupiter',
        q3: '2'
    };

    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;
    let answers = '';

    // Check each answer
    for (let question in correctAnswers) {
        let userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        
        if (userAnswer) {
            if (userAnswer.value === correctAnswers[question]) {
                score++;
                answers += `<p>${question.toUpperCase()} - Correct! (${correctAnswers[question]})</p>`;
            } else {
                answers += `<p class="incorrect">${question.toUpperCase()} - Incorrect. Correct answer: ${correctAnswers[question]}</p>`;
            }
        } else {
            answers += `<p class="incorrect">${question.toUpperCase()} - No answer selected. Correct answer: ${correctAnswers[question]}</p>`;
        }
    }

    // Show results
    document.getElementById('score').innerText = `You scored ${score} out of ${totalQuestions}`;
    document.getElementById('answers').innerHTML = answers;
    document.getElementById('resultSection').style.display = 'block';
}

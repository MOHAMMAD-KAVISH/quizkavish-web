function calculateScore() {
    const quizForm = document.forms['quizForm'];
    let score = 0;
    let answers = `
        <ul>
            <li>1. All of the above</li>
            <li>2. If the row is not present, replace will add a new row and update will not do anything.</li>
            <li>3. Tables</li>
            <li>4. DELETE does not free the space containing the table and TRUNCATE free the space containing the table</li>
            <li>5. Aborted transaction</li>
        </ul>
    `;

    // Correct Answers
    const correctAnswers = {
        q1: "All of the above",
        q2: "replace will add a new row",
        q3: "Tables",
        q4: "DELETE does not free space",
        q5: "Aborted transaction"
    };

    // Check answers
    for (let i = 1; i <= 5; i++) {
        const answer = quizForm[`q${i}`].value;
        if (answer === correctAnswers[`q${i}`]) {
            score++;
        }
    }

    // Display result
    document.getElementById('resultSection').style.display = 'block';
    document.getElementById('score').innerText = `${score} / 5`;
    document.getElementById('answers').innerHTML = answers;

    // Disable submit button after quiz is submitted
    document.querySelector('button').disabled = true;
}

// Disable copy-paste
document.addEventListener('DOMContentLoaded', function() {
    document.body.oncopy = function() { return false; }
    document.body.oncut = function() { return false; }
    document.body.onpaste = function() { return false; }
});

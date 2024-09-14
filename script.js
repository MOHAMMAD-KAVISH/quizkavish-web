function calculateScore() {
    const quizForm = document.forms['quizForm'];
    let score = 0;
    let answers = `
        <ul>
            <li>1. Foreign Key</li>
            <li>2. AUTOINCREMENT</li>
            <li>3. Repeatable Read prevents non-repeatable reads but allows phantom reads</li>
            <li>4. Deletes the specified column and its data from the table</li>
            <li>5. To create a temporary view for complex subqueries</li>
        </ul>
    `;

    // Correct Answers
    const correctAnswers = {
        q1: "Foreign Key",
        q2: "AUTOINCREMENT",
        q3: "Repeatable Read prevents non-repeatable reads but allows phantom reads",
        q4: "Deletes the column",
        q5: "Temporary view"
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

function submitData() {
    const question = document.getElementById('question').value;
    const category = document.getElementById('category').value;
    const correctAnswer = document.getElementById('correctAnswer').value;
    const incorrectAnswers = document.getElementById('incorrectAnswers').value.split(',').map(answer => answer.trim());
    const type = document.getElementById('type').value;
    const difficulty = document.getElementById('difficulty').value;

    const quizData = {
        category: category,
        correctAnswer: correctAnswer,
        incorrectAnswers: incorrectAnswers,
        question: question,
        type: type,
        difficulty: difficulty,
        tags: [],
        regions: [],
        isNiche: false
    };

    // Sending the data to the backend
    fetch('http://127.0.0.1:5000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(quizData)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        // Clear the form after submission
        document.getElementById('question').value = '';
        document.getElementById('category').value = '';
        document.getElementById('correctAnswer').value = '';
        document.getElementById('incorrectAnswers').value = '';
        document.getElementById('type').value = '';
        document.getElementById('difficulty').value = '';
    })
    .catch(error => console.error(error));
}

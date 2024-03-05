document.getElementById('addQuestion').addEventListener('click', function() {
    var questionsContainer = document.getElementById('questionsContainer');
    var questionIndex = questionsContainer.children.length;
    var questionDiv = document.createElement('div');
    questionDiv.innerHTML = `
        <label for="question${questionIndex}">Câu hỏi ${questionIndex + 1}:</label>
        <input type="text" id="question${questionIndex}" name="question${questionIndex}" required><br>
        <label for="answer${questionIndex}">Câu trả lời:</label>
        <input type="text" id="answer${questionIndex}" name="answer${questionIndex}" required><br>
    `;
    questionsContainer.appendChild(questionDiv);
});

document.getElementById('btn-create-exam').addEventListener('click', function() {
    document.getElementById('create-exam-container').style.display = 'block';
    document.getElementById('edit-exam-container').style.display = 'none';
});

document.getElementById('btn-edit-exam').addEventListener('click', function() {
    document.getElementById('create-exam-container').style.display = 'none';
    document.getElementById('edit-exam-container').style.display = 'block';
});
document.getElementById('btn-create-exam').addEventListener('click', function() {
    document.getElementById('create-exam-container').style.display = 'block';
    document.getElementById('edit-exam-container').style.display = 'none';
    document.getElementById('container-selection').style.display = 'none';
});

document.getElementById('btn-edit-exam').addEventListener('click', function() {
    document.getElementById('create-exam-container').style.display = 'none';
    document.getElementById('edit-exam-container').style.display = 'block';
    document.getElementById('container-selection').style.display = 'none';
});

document.getElementById('add-question').addEventListener('click', function() {
    const questionContainer = document.getElementById('questions-container');
    
    // Tạo một div để bọc câu hỏi và câu trả lời
    const questionDiv = document.createElement('div');
    questionDiv.style.display = 'flex';
    questionDiv.style.flexDirection = 'column';
    questionDiv.style.marginBottom = '10px';

    const questionInput = document.createElement('input');
    questionInput.type = 'text';
    questionInput.name = 'question';
    questionInput.placeholder = 'Nhập câu hỏi';
    questionInput.style.height = '25px';
    questionInput.style.width = '800px'; 
    questionInput.style.marginBottom = '10px';
    questionDiv.appendChild(questionInput);

    // Tạo các trường nhập liệu cho các đáp án
    const answerLabels = ['A', 'B', 'C', 'D'];
    const answerInputs = answerLabels.map(label => {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = `answer-${label}`;
        input.placeholder = `Nhập đáp án ${label}`;
        input.style.height = '25px';
        input.style.width = '800px'; 
        input.style.marginBottom = '10px'; // Đặt khoảng cách giữa các hộp là 10px
        return input;
    });

    answerInputs.forEach(input => questionDiv.appendChild(input));

    // Tạo label và dropdown để lựa chọn đáp án đúng
    const correctAnswerLabel = document.createElement('label');
    correctAnswerLabel.textContent = 'Đáp án chính xác:';
    questionDiv.appendChild(correctAnswerLabel);

    const correctAnswerSelect = document.createElement('select');
    correctAnswerSelect.name = 'correct-answer';
    correctAnswerSelect.style.width ='50px';
    answerLabels.forEach(label => {
        const option = document.createElement('option');
        option.value = label;
        option.textContent = label;
        correctAnswerSelect.appendChild(option);
    });
    correctAnswerSelect.style.marginBottom = '10px';
    questionDiv.appendChild(correctAnswerSelect);

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Xóa';
    deleteButton.style.width = '50px'; // Làm nút xóa nhỏ hơn
    deleteButton.addEventListener('click', function() {
        questionContainer.removeChild(questionDiv);
    });
    questionDiv.appendChild(deleteButton);

    questionContainer.appendChild(questionDiv);
});

document.querySelector('.submit-button').addEventListener('click', function() {
    // Lấy thông tin từ các hộp nhập liệu và dropdown
    const examName = document.getElementById('exam-name').value;
    const examDescription = document.getElementById('exam-description').value;
    const questions = Array.from(document.querySelectorAll('.question-input')).map(input => input.value);
    const answers = Array.from(document.querySelectorAll('.answer-input')).map(input => input.value);
    const correctAnswers = Array.from(document.querySelectorAll('.correct-answer-select')).map(select => select.value);

    // Kiểm tra đầy đủ thông tin
    if (!examName || !examDescription || questions.some(q => !q) || answers.some(a => !a) || correctAnswers.some(ca => !ca)) {
        alert('Vui lòng điền đầy đủ thông tin của kỳ thi.');
        return;
    }

    const newExam = {
        name: examName,
        description: examDescription,
    };

    // Lấy mảng các kỳ thi hiện tại từ sessionStorage
    let exams = JSON.parse(sessionStorage.getItem('examData')) || [];


    // Thêm kỳ thi mới vào mảng
    exams.push(newExam);


    // Lưu mảng cập nhật vào sessionStorage
    sessionStorage.setItem('examData', JSON.stringify(exams));

    // Hiển thị lại giao diện quản lý kỳ thi
    document.getElementById('create-exam-container').style.display = 'none';
    document.getElementById('edit-exam-container').style.display = 'none';
    document.getElementById('container-selection').style.display = 'block';
});


document.getElementById('btn-edit-exam').addEventListener('click', function() {
    // Lấy thông tin của các kỳ thi từ sessionStorage
    const examDataString = sessionStorage.getItem('examData');
    const exams = JSON.parse(examDataString);

    // Kiểm tra xem exams có phải là mảng hay không
        let examsHtml = '';
        exams.forEach(exam => {
            examsHtml += `<div class="exam-box">
                            <div><strong>Tên kỳ thi:</strong> ${exam.name}</div>
                            <div><strong>Nội dung kỳ thi:</strong> ${exam.description}</div>
                        </div>`;
        });

        // Hiển thị thông tin của các kỳ thi trong <div id="edit-exam-container">
        document.getElementById('edit-exam-container').innerHTML = examsHtml;

        // Hiển thị <div id="edit-exam-container">
        document.getElementById('edit-exam-container').style.display = 'block';

        // Ẩn các hộp tạo và chỉnh sửa kỳ thi
        document.getElementById('create-exam-container').style.display = 'none';
        document.getElementById('container-selection').style.display = 'none';
});
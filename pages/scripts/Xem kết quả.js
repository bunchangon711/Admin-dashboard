// Dữ liệu demo
const students = [
    { id: 'SV001', name: 'Nguyễn Văn A', exams: [
        { examId: 'KT001', score: 85, status: 'Hoàn thành', time: '2023-04-01', answers: [
            { questionId: 'Q001', studentAnswer: 'A', correctAnswer: 'A', explanation: 'Giải thích cho câu hỏi 1' },
            { questionId: 'Q002', studentAnswer: 'B', correctAnswer: 'C', explanation: 'Giải thích cho câu hỏi 2' },
            { questionId: 'Q003', studentAnswer: 'D', correctAnswer: 'D', explanation: 'Giải thích cho câu hỏi 3' },
            { questionId: 'Q004', studentAnswer: 'A', correctAnswer: 'B', explanation: 'Giải thích cho câu hỏi 4' },
            { questionId: 'Q005', studentAnswer: 'B', correctAnswer: 'A', explanation: 'Giải thích cho câu hỏi 5' }
        ]},
        { examId: 'KT002', score: 90, status: 'Hoàn thành', time: '2023-05-01', answers: [
            { questionId: 'Q001', studentAnswer: 'B', correctAnswer: 'A', explanation: 'Giải thích cho câu hỏi 1' },
            { questionId: 'Q002', studentAnswer: 'C', correctAnswer: 'C', explanation: 'Giải thích cho câu hỏi 2' },
            { questionId: 'Q003', studentAnswer: 'A', correctAnswer: 'D', explanation: 'Giải thích cho câu hỏi 3' },
            { questionId: 'Q004', studentAnswer: 'B', correctAnswer: 'B', explanation: 'Giải thích cho câu hỏi 4' },
            { questionId: 'Q005', studentAnswer: 'A', correctAnswer: 'A', explanation: 'Giải thích cho câu hỏi 5' }
        ]}
    ]},
    { id: 'SV002', name: 'Lê Thị B', exams: [
        { examId: 'KT001', score: 75, status: 'Hoàn thành', time: '2023-04-01', answers: [
            { questionId: 'Q001', studentAnswer: 'B', correctAnswer: 'A', explanation: 'Giải thích cho câu hỏi 1' },
            { questionId: 'Q002', studentAnswer: 'C', correctAnswer: 'C', explanation: 'Giải thích cho câu hỏi 2' },
            { questionId: 'Q003', studentAnswer: 'A', correctAnswer: 'D', explanation: 'Giải thích cho câu hỏi 3' },
            { questionId: 'Q004', studentAnswer: 'B', correctAnswer: 'B', explanation: 'Giải thích cho câu hỏi 4' },
            { questionId: 'Q005', studentAnswer: 'A', correctAnswer: 'A', explanation: 'Giải thích cho câu hỏi 5' }
        ]},
        { examId: 'KT002', score: 80, status: 'Hoàn thành', time: '2023-05-01', answers: [
            { questionId: 'Q001', studentAnswer: 'B', correctAnswer: 'A', explanation: 'Giải thích cho câu hỏi 1' },
            { questionId: 'Q002', studentAnswer: 'C', correctAnswer: 'C', explanation: 'Giải thích cho câu hỏi 2' },
            { questionId: 'Q003', studentAnswer: 'A', correctAnswer: 'D', explanation: 'Giải thích cho câu hỏi 3' },
            { questionId: 'Q004', studentAnswer: 'B', correctAnswer: 'B', explanation: 'Giải thích cho câu hỏi 4' },
            { questionId: 'Q005', studentAnswer: 'A', correctAnswer: 'A', explanation: 'Giải thích cho câu hỏi 5' }
        ]}
    ]}
];

function searchStudentResults() {
    const searchInput = document.getElementById('studentSearch').value;
    const resultsContainer = document.getElementById('studentResults');
    const examDetailsContainer = document.getElementById('examDetailsContainer');

    // Ẩn bảng chi tiết kỳ thi
    examDetailsContainer.innerHTML = '';

    resultsContainer.innerHTML = ''; // Xóa kết quả trước đó

    const foundStudents = students.filter(student => student.id.includes(searchInput) || student.name.includes(searchInput));

    // Tạo bảng
    const table = document.createElement('table');
    table.id = 'statisticsTable';
    table.style.width = '100%';
    table.style.marginTop = '50px';
    table.style.borderCollapse = 'collapse';
    table.style.backgroundColor = '#f9f9f9';

    // Tạo thead
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['Tên sinh viên', 'Mã số', 'Kỳ thi', 'Điểm số', 'Trạng thái', 'Thời gian tham gia'].forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Tạo tbody
    const tbody = document.createElement('tbody');
    foundStudents.forEach((student, index) => {
        student.exams.forEach(exam => {
            const row = document.createElement('tr');
            row.className = index % 2 === 0 ? 'even-row' : 'odd-row';
            row.innerHTML = `
                <td>${student.name}</td>
                <td>${student.id}</td>
                <td>${exam.examId}</td>
                <td>${exam.score}</td>
                <td>${exam.status}</td>
                <td>${exam.time}</td>
            `;
            // Thêm sự kiện click để hiển thị chi tiết kỳ thi
            row.addEventListener('click', () => {
                displayExamDetails(exam);
            });
            tbody.appendChild(row);
        });
    });
    table.appendChild(tbody);

    resultsContainer.appendChild(table);
}

function displayExamDetails(exam) {
    const detailsContainer = document.getElementById('examDetailsContainer');
    detailsContainer.innerHTML = ''; // Xóa kết quả trước đó

    // Tạo bảng chi tiết kỳ thi
    const detailsTable = document.createElement('table');
    detailsTable.id = 'examDetailsTable';
    detailsTable.style.width = '100%';
    detailsTable.style.marginTop = '20px';
    detailsTable.style.borderCollapse = 'collapse';
    detailsTable.style.backgroundColor = '#f9f9f9';

    // Tạo thead
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['Câu hỏi', 'Câu trả lời của sinh viên', 'Đáp án đúng', 'Giải thích'].forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    detailsTable.appendChild(thead);

    // Tạo tbody
    const tbody = document.createElement('tbody');
    let correctAnswersCount = 0; // Biến để đếm số câu trả lời đúng
    exam.answers.forEach(answer => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${answer.questionId}</td>
            <td>${answer.studentAnswer}</td>
            <td>${answer.correctAnswer}</td>
            <td>${answer.explanation}</td>
        `;
        if (answer.studentAnswer === answer.correctAnswer) {
            correctAnswersCount++; // Tăng biến đếm nếu câu trả lời đúng
        }
        tbody.appendChild(row);
    });

    // Thêm hàng cuối với thông tin số câu trả lời đúng/Tổng số câu
    const summaryRow = document.createElement('tr');
    summaryRow.innerHTML = `
        <td colspan="2">Tổng số câu: ${exam.answers.length}</td>
        <td colspan="2">Số câu trả lời đúng: ${correctAnswersCount}</td>
    `;
    tbody.appendChild(summaryRow);

    detailsTable.appendChild(tbody);

    detailsContainer.appendChild(detailsTable);
}
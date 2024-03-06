// Dữ liệu demo
// Dữ liệu demo
const students = [
    { id: 'SV003', name: 'Nguyễn Thị C', exams: [
        { examId: 'KT001', score: 95, status: 'Hoàn thành', time: '2023-04-01', answers: [
            { questionId: 'Q001', studentAnswer: 'A', correctAnswer: 'A', explanation: 'Giải thích cho câu hỏi 1' },
            { questionId: 'Q002', studentAnswer: 'B', correctAnswer: 'C', explanation: 'Giải thích cho câu hỏi 2' }
        ]},
        { examId: 'KT002', score: 85, status: 'Hoàn thành', time: '2023-05-01', answers: [
            { questionId: 'Q003', studentAnswer: 'D', correctAnswer: 'D', explanation: 'Giải thích cho câu hỏi 3' },
            { questionId: 'Q004', studentAnswer: 'A', correctAnswer: 'B', explanation: 'Giải thích cho câu hỏi 4' }
        ]}
    ]},
];

function searchStudentResults() {
    const searchInput = document.getElementById('studentSearch').value;
    const resultsContainer = document.getElementById('studentResults');
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
            // Thêm dữ liệu chi tiết kết quả
            const detailsCell = document.createElement('td');
            exam.answers.forEach(answer => {
                detailsCell.innerHTML += `
                    <p>Câu hỏi ${answer.questionId}: ${answer.studentAnswer} (Đáp án đúng: ${answer.correctAnswer})</p>
                    <p>${answer.explanation}</p>
                `;
            });
            row.appendChild(detailsCell);
            tbody.appendChild(row);
        });
    });
    table.appendChild(tbody);

    resultsContainer.appendChild(table);
}
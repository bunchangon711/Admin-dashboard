document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const resultsDiv = document.getElementById('results');
    const menu = document.getElementById('menu'); 
  
    // Dữ liệu mẫu cho sinh viên
    const studentData = [
      { 
        name: 'Vũ Quang Đại',
        studentID: 'B69HTTP420',
        results: [
          { exam: 'Midterm Exam', score: '85', status: 'Completed', timestamp: '2024-03-04 10:00:00' },
          { exam: 'Final Exam', score: '90', status: 'Completed', timestamp: '2024-03-06 10:00:00' }
        ]
      },
      { 
        name: 'Nguyễn Thị Hương',
        studentID: 'B69HTTP421',
        results: [
          { exam: 'Midterm Exam', score: '78', status: 'Completed', timestamp: '2024-03-03 09:00:00' },
          { exam: 'Final Exam', score: '88', status: 'Completed', timestamp: '2024-03-05 09:00:00' }
        ]
      },
      { 
        name: 'Trần Văn Nam',
        studentID: 'B69HTTP422',
        results: [
          { exam: 'Midterm Exam', score: '92', status: 'Completed', timestamp: '2024-03-04 11:00:00' },
          { exam: 'Final Exam', score: '95', status: 'Completed', timestamp: '2024-03-06 11:00:00' }
        ]
      },
      // Thêm dữ liệu sinh viên khác nếu cần
    ];
  
    document.getElementById('searchButton').addEventListener('click', function() {
        const studentQuery = document.getElementById('studentSearch').value;
        fetchStudentData(studentQuery);
    });
  
    function fetchStudentData(query) {
      // Lấy dữ liệu sinh viên từ mảng dữ liệu mẫu
      const filteredStudents = studentData.filter(student => {
        return student.name.toLowerCase().includes(query.toLowerCase()) || student.studentID.includes(query);
      });
  
      // Hiển thị kết quả
      displayResults(filteredStudents);
    }
  
    function displayResults(students) {
      resultsDiv.innerHTML = '';
      students.forEach(student => {
        const studentDiv = document.createElement('div');
        studentDiv.classList.add('student');
  
        const heading = document.createElement('h3');
        heading.textContent = `${student.name} (${student.studentID})`;
        studentDiv.appendChild(heading);
  
        const examsList = document.createElement('ul');
        student.results.forEach(result => {
          const examItem = document.createElement('li');
          examItem.textContent = `${result.exam} - Score: ${result.score}, Status: ${result.status}, Timestamp: ${result.timestamp}`;
          examsList.appendChild(examItem);
        });
        studentDiv.appendChild(examsList);
  
        resultsDiv.appendChild(studentDiv);
      });
    }
  });

  document.getElementById('searchButton').addEventListener('click', function() {
    const studentQuery = document.getElementById('studentSearch').value;
    fetchStudentData(studentQuery);
});
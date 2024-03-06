// Dữ liệu demo cố định
var statisticsData = [
    { examName: "Kỳ thi 1", totalParticipants: 100, completionRate: 80, averageScore: 75, examDate: "2023-04-01" },
    { examName: "Kỳ thi 2", totalParticipants: 120, completionRate: 90, averageScore: 80, examDate: "2023-05-01" },
    { examName: "Kỳ thi 1", totalParticipants: 100, completionRate: 80, averageScore: 75, examDate: "2023-04-01" },
    { examName: "Kỳ thi 2", totalParticipants: 120, completionRate: 90, averageScore: 80, examDate: "2023-05-01" },
    { examName: "Kỳ thi 3", totalParticipants: 150, completionRate: 75, averageScore: 85, examDate: "2023-06-01" },
    { examName: "Kỳ thi 4", totalParticipants: 130, completionRate: 85, averageScore: 78, examDate: "2023-07-01" },
    { examName: "Kỳ thi 5", totalParticipants: 110, completionRate: 95, averageScore: 82, examDate: "2023-08-01" },
    { examName: "Kỳ thi 6", totalParticipants: 140, completionRate: 80, averageScore: 76, examDate: "2023-09-01" },
    { examName: "Kỳ thi 7", totalParticipants: 160, completionRate: 92, averageScore: 83, examDate: "2023-10-01" },
    { examName: "Kỳ thi 8", totalParticipants: 170, completionRate: 90, averageScore: 81, examDate: "2023-11-01" },
    { examName: "Kỳ thi 9", totalParticipants: 180, completionRate: 93, averageScore: 84, examDate: "2023-12-01" },
    { examName: "Kỳ thi 10", totalParticipants: 190, completionRate: 91, averageScore: 85, examDate: "2024-01-01" }
    // Thêm dữ liệu khác nếu cần
];

// Tạo bảng thống kê
function createStatisticsTable(data) {
    var table = document.createElement('table');
    table.id = 'statisticsTable'; // Thêm id cho bảng
    var thead = document.createElement('thead');
    var headerRow = document.createElement('tr');
    ['Kỳ thi', 'Tổng thí sinh tham gia', 'Tỷ lệ hoàn thành', 'Điểm trung bình', 'Ngày thi'].forEach(function(header) {
        var th = document.createElement('th');
        th.textContent = header;
        th.classList.add('header-cell'); // Thêm class cho các header cell
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    var tbody = document.createElement('tbody');
    data.forEach(function(item, index) {
        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.examName}</td>
            <td>${item.totalParticipants}</td>
            <td>${item.completionRate}%</td>
            <td>${item.averageScore}</td>
            <td>${item.examDate}</td>
        `;
        if (index % 2 === 0) {
            row.classList.add('even-row'); // Thêm class cho các dòng chẵn
        } else {
            row.classList.add('odd-row'); // Thêm class cho các dòng không chẵn
        }
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    document.getElementById('statisticsTable').appendChild(table);
}

// Gọi hàm để tạo bảng thống kê
createStatisticsTable(statisticsData);

function filterStatistics() {
    var filterOption = document.getElementById('filterOption').value;


    var filteredData = statisticsData.sort(function(a, b) {
        switch (filterOption) {
            case 'examName':
                return a.examName.localeCompare(b.examName);
            case 'totalParticipants':
                return b.totalParticipants - a.totalParticipants;
            case 'completionRate':
                return b.completionRate - a.completionRate;
            case 'averageScore':
                return b.averageScore - a.averageScore;
            case 'examDate':
                return new Date(b.examDate) - new Date(a.examDate);
            default:
                return 0; // No sorting if no option is selected
        }
    });


    document.getElementById('statisticsTable').innerHTML = ''; // Clear the table
    createStatisticsTable(filteredData); // Recreate the table with sorted data
}
// Dữ liệu demo cố định
var statisticsData = [
    { examName: "Kỳ thi 1", totalParticipants: 100, completionRate: 80, averageScore: 75 },
    { examName: "Kỳ thi 2", totalParticipants: 120, completionRate: 90, averageScore: 80 },
    // Thêm dữ liệu khác nếu cần
];

// Tạo bảng thống kê
function createStatisticsTable(data) {
    var table = document.createElement('table');
    var headerRow = document.createElement('tr');
    ['Kỳ thi', 'Tổng thí sinh tham gia', 'Tỷ lệ hoàn thành', 'Điểm trung bình'].forEach(function(header) {
        var th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    data.forEach(function(item) {
        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.examName}</td>
            <td>${item.totalParticipants}</td>
            <td>${item.completionRate}%</td>
            <td>${item.averageScore}</td>
        `;
        table.appendChild(row);
    });

    document.getElementById('statisticsTable').appendChild(table);
}

// Gọi hàm để tạo bảng thống kê
createStatisticsTable(statisticsData);
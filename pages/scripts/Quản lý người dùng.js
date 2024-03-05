document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form
    var action = event.submitter.value; // Lấy giá trị của nút submit được nhấn
    var userName = document.getElementById('userName').value;
    var userEmail = document.getElementById('userEmail').value;
    var userRole = document.getElementById('userRole').value;

    // Xử lý dữ liệu dựa trên hành động (thêm mới, chỉnh sửa, xóa)
    // Ví dụ: gửi dữ liệu đến server hoặc cập nhật DOM
    console.log(action, userName, userEmail, userRole);
});
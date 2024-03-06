document.getElementById('addUserBtn').addEventListener('click', function() {
    // Lấy dữ liệu từ form
    var name = document.getElementById('userName').value;
    var email = document.getElementById('userEmail').value;
    var role = document.getElementById('userRole').value;

    // Tạo một đối tượng người dùng
    var user = {
        name: name,
        email: email,
        role: role
    };

    // Thêm người dùng vào bảng
    addUserToTable(user);
});

function toggleHeaderVisibility() {
    var table = document.getElementById('userTable');
    var tbody = table.querySelector('tbody');
    var rows = tbody.rows;

    // Kiểm tra nếu không có dữ liệu, ẩn các cột header
    if (rows.length === 0) {
        var header = table.querySelector('thead');
        header.style.display = 'none';
    } else {
        // Nếu có dữ liệu, hiển thị các cột header
        var header = table.querySelector('thead');
        header.style.display = '';
    }
}

toggleHeaderVisibility();

function addUserToTable(user) {
    // Tạo một dòng mới cho người dùng
    var row = document.createElement('tr');

    // Tạo các phần tử thông tin cho tên, email, và vai trò
    var nameCell = document.createElement('td');
    var nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = user.name;
    nameInput.disabled = true;
    nameCell.appendChild(nameInput);

    var emailCell = document.createElement('td');
    var emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.value = user.email;
    emailInput.disabled = true;
    emailCell.appendChild(emailInput);

    var roleCell = document.createElement('td');
    var roleSelect = document.createElement('select');
    roleSelect.innerHTML = `
        <option value="student" ${user.role === 'student' ? 'selected' : ''}>Sinh viên</option>
        <option value="admin" ${user.role === 'admin' ? 'selected' : ''}>Quản trị viên</option>
    `;
    roleSelect.disabled = true;
    roleCell.appendChild(roleSelect);

    // Tạo nút xóa, chỉnh sửa, cập nhật
    var actionCell = document.createElement('td');
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Xóa';
    deleteButton.onclick = function() {
        row.remove();
        toggleHeaderVisibility();
    };
    actionCell.appendChild(deleteButton);

    var editButton = document.createElement('button');
    editButton.textContent = 'Chỉnh sửa';
    editButton.onclick = function() {
        nameInput.disabled = false;
        emailInput.disabled = false;
        roleSelect.disabled = false;

        var updateButton = document.createElement('button');
        updateButton.textContent = 'Cập nhật';
        updateButton.onclick = function() {
            user.name = nameInput.value;
            user.email = emailInput.value;
            user.role = roleSelect.value;

            nameInput.disabled = true;
            emailInput.disabled = true;
            roleSelect.disabled = true;
            actionCell.removeChild(updateButton);
        };
        actionCell.appendChild(updateButton);
    };
    actionCell.appendChild(editButton);

    // Thêm các phần tử thông tin và cột thao tác vào dòng
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(roleCell);
    row.appendChild(actionCell);

    // Thêm dòng vào bảng
    var table = document.getElementById('userTable');
    var tbody = table.querySelector('tbody');
    tbody.appendChild(row);
    toggleHeaderVisibility();
}

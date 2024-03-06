// Ví dụ về việc tải nội dung vào main-content khi nhấp vào một liên kết
document.querySelectorAll('.sidebar ul li').forEach(function(menuItem) {
    menuItem.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
        var link = this.querySelector('a'); // Lấy phần tử <a> bên trong mục menu
        var name = link.textContent; // Lấy nội dung text của phần tử <a>
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.querySelector('.main-content').innerHTML = xhr.responseText;
                var script = document.createElement('script');
                script.src = 'pages/scripts/' + name + '.js';
                document.body.appendChild(script);
            }
        };
        xhr.open('GET', 'pages/' + name + '.html', true);
        xhr.send();
    });
});

document.querySelector('.sidebar-toggle').addEventListener('click', function() {
    var sidebar = document.querySelector('.sidebar');
    var mainContent = document.querySelector('.main-content');
    sidebar.classList.toggle('sidebar-open');
    if (sidebar.classList.contains('sidebar-open')) {
        // Khi sidebar mở, tăng margin-left của .main-content
        mainContent.style.marginLeft = "350px"; // Giả sử sidebar có chiều rộng là 300px
    } else {
        // Khi sidebar đóng, giảm margin-left của .main-content
        mainContent.style.marginLeft = "250px";
    }
});

function searchFunction() {
    var input = document.querySelector('.search-bar input');
    var searchValue = input.value;
    // Thực hiện việc tìm kiếm dựa trên giá trị của input
    console.log("Searching for: " + searchValue);
    // Đặt giá trị input về rỗng sau khi tìm kiếm
    input.value = '';
}

// Menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", function() {
  var scrollToTopButton = document.getElementById('scroll-to-top');

  window.addEventListener('scroll', function() {
    // Hiển thị hoặc ẩn mũi tên khi cuộn trang
    if (window.scrollY > 300) {
      scrollToTopButton.classList.add('show');
    } else {
      scrollToTopButton.classList.remove('show');
    }
  });

  // sự kiện click trên mũi tên
  scrollToTopButton.addEventListener('click', function() {
    // Cuộn lên đầu trang
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Lấy danh sách tất cả các ảnh trong phần Works
  const workImages = document.querySelectorAll(".works__img--single img");

  // Lặp qua từng ảnh để thêm sự kiện click
  workImages.forEach(function (image) {
    image.addEventListener("click", function () {
      // Lấy thông tin từ thuộc tính data-info
      const imageInfo = image.getAttribute("data-info");

      // Hiển thị thông tin của ảnh
      displayImageInfo(imageInfo);
      // Thay đổi đường dẫn của hình ảnh
      image.setAttribute("src", imagePath);
    });
  });

  // Hàm hiển thị thông tin ảnh
  function displayImageInfo(info) {
    // Tạo nội dung thông tin
    const infoContent = `
      <p>${info}</p>
    `;

    // Hiển thị overlay
    const overlay = document.getElementById("overlay");
    overlay.innerHTML = infoContent;
    overlay.classList.add("show");
  }

  // Đóng overlay khi nhấn vào nút đóng
  const overlay = document.getElementById("overlay");
  overlay.addEventListener("click", function () {
    overlay.classList.remove("show");
  });
});

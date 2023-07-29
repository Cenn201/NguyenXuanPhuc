
// Sử dụng JavaScript để lắng nghe sự kiện click vào search_icon
document.querySelector('.search_icon').addEventListener('click', function() {
    const searchInput = document.querySelector('#search');
    searchInput.classList.toggle('active');
  });
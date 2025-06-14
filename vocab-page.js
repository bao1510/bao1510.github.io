document.addEventListener('DOMContentLoaded', function() {
  const totalPages = 62;
  const pageInput = document.getElementById('page-input');
  const jumpButton = document.getElementById('jump-button');

  function goToPage() {
    const pageNum = parseInt(pageInput.value, 10);
    if (isNaN(pageNum) || pageNum < 1 || pageNum > totalPages) {
      alert('Vui lòng nhập một số trang hợp lệ từ 1 đến ' + totalPages);
      pageInput.value = '';
      return;
    }
    window.location.href = `vocab-n3_p${pageNum}.html`;
  }

  jumpButton.addEventListener('click', goToPage);
  pageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      goToPage();
    }
  });
});

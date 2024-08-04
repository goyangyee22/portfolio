// ./resources/js/index.js
document.addEventListener('DOMContentLoaded', () => {
  const descriptions = document.querySelectorAll('#main2 .description');
  const links = document.querySelectorAll('#main1 .fillUpBtn');

  links.forEach(link => {
    link.addEventListener('mouseover', (event) => {
      const descriptionId = event.target.getAttribute('data-description');
      descriptions.forEach(desc => {
        if (desc.id === descriptionId) {
          desc.style.display = 'block'; // 설명 표시
        } else {
          desc.style.display = 'none'; // 나머지 설명 숨기기
        }
      });
    });

    link.addEventListener('mouseout', () => {
      descriptions.forEach(desc => {
        desc.style.display = 'none'; // 모든 설명 숨기기
      });
    });
  });
});
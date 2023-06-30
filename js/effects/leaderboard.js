
function appear(sectionId) {
  let section = document.getElementById(sectionId);
  let isVisible = section.classList.contains('appear');

  let sections = document.querySelectorAll('.menu-section');
  sections.forEach(function(section) {
    section.classList.remove('appear');
  });

  if (!isVisible) {
    section.classList.add('appear');
    const div = document.getElementById("main-section");
    div.style.transform = 'translateX(600px)';
  } else {
    const div = document.getElementById("main-section");
    setTimeout(1);
    div.style.transform = 'translateX(0)';
  }
}
  
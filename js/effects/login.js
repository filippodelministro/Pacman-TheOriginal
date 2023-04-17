
function appear(sectionId) {
  var section = document.getElementById(sectionId);
  // var other = (sectionID == 'login' ? 'register' : 'login'); 
  var isVisible = section.classList.contains('appear');

  var sections = document.querySelectorAll('.input-container');
  sections.forEach(function(section) {
    section.classList.remove('appear');
    // other.classList.add('appear');
  });

  if (!isVisible) {
    section.classList.add('appear');
    // other.classList.remove('appear');
  //   const div = document.getElementById("main-section");
  //   div.style.transform = 'translateX(350px)';
  } else {
  //   const div = document.getElementById("main-section");
    setTimeout(1);
  //   div.style.transform = 'translateX(0)';
  }
}
  

const questionClickOpen = document.querySelectorAll('.label').length;

for (let i = 0; i < questionClickOpen; i++) {
  document.querySelectorAll('.label')[i].addEventListener('click', function () {
    document.querySelectorAll('.content')[i].classList.toggle('show-answer-content');
    document.querySelectorAll('.label')[i].classList.toggle('label-bold');
    document.querySelectorAll('.arrow-icon')[i].classList.toggle('arrow-rotate');
  });
}



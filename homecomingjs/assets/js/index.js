var btn = document.getElementById('voir-adversaires');

btn.addEventListener('mouseenter', changeDefOver);
btn.addEventListener('mouseleave', changeDefOut);

function changeDefOver() {
  btn.classList.add('hovered');
}

function changeDefOut() {
  btn.classList.remove('hovered');
}
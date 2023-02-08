const navbar = document.querySelector('#nav')
const navBtn = document.querySelector('#nav-btn')
const closeBtn = document.querySelector('#close-btn')
const sidebar = document.querySelector('#sidebar')
const date = document.querySelector('#date')
// navbar'a fixed classını ekleme
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add('navbar-fixed')
  } else {
    navbar.classList.remove('navbar-fixed')
  }
})
// sidebar gösterme
navBtn.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar')
})
closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar')
})
// yılı ayarlama
date.innerHTML = new Date().getFullYear()

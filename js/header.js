let toggle = document.querySelector(".toggle")
let nav = document.querySelector("nav")
let barTimes = toggle.querySelectorAll("svg")

toggle.addEventListener('click',e=>{
  nav.classList.toggle('none_m')
  barTimes[0].classList.toggle("none")
  barTimes[1].classList.toggle("none")

})

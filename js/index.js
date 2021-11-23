window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.pageYOffset > 0)
})

// var prevScrollpos = window.pageYOffset
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.background = "red"
//   } else {
//   	document.getElementById("navbar").style.background = "blue"
//   }
//   prevScrollpos = currentScrollPos
// }
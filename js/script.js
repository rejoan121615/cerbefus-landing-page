const anchoreTag = document.querySelectorAll('a');

anchoreTag.forEach(a => {
  a.onclick = (event) => {
    event.preventDefault()
  } 
})


// gsap file 
gsap.registerPlugin(ScrollTrigger);


// master timeline 
const masterTl = gsap.timeline();

// home page animation 

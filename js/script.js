const anchoreTag = document.querySelectorAll('a');

anchoreTag.forEach(a => {
  a.onclick = (event) => {
    event.preventDefault()
  } 
})
(function(){
  const frames = document.getElementsByTagName("div");
  let current = 0;
  setInterval(function() {
    frames[current].classList.toggle("active")
    current++;
    frames[current].classList.toggle("active")
  }, 125);
})()


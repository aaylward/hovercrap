(function(){
  const frames = document.getElementsByTagName("div");
  const length = frames.length;
  let current = 0;
  setInterval(function() {
    frames[current].classList.toggle("active")
    current++;
    current %= length;
    frames[current].classList.toggle("active")
  }, 400);
})()


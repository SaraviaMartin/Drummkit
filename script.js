function playSound(e){
    const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key= "${e.keyCode}"]`);
    if (!audio) return; //Detiene la funcion para correr a todas juntas
    audio.currentTime = 0; //Regresa al incio del sonido
    audio.play();
    key.classList.add("playing");
  };
  
  
  
  function removeTransition(e){
    if(e.propertyName !== "transform") return;
    this.classList.remove("playing");//remove the efect caught on css
  }
  
  const keys = document.querySelectorAll(".key");
  keys.forEach(key => key.addEventListener("transitionend", removeTransition));
  window.addEventListener("keydown", playSound);
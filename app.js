
// let logo = document.getElementsByClassName("logo")[0];

// const onMouseOut = (e) =>{
//   e.target.classList.toggle("againLogo");
// }

// logo.addEventListener("click", onMouseOut)

let menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", function rotateXY(){
  this.classList.toggle("rotate")
  alert('ok')
});



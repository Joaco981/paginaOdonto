/*function vermas(x, y){
    if(document.getElementById(x).style.display=='block'){
        document.getElementById(x).style.display='none';
        document.getElementById(y).innerHTML=='Ver Mas';
    }else{
        document.getElementById(x).style.display='block';
        document.getElementById(y).innerHTML=='Ocultar';
    }
}

*/

let readMore_btn = document.getElementById('readMore_btn');
let hideText = document.getElementById('hideText');

readMore_btn.addEventListener('click', toggleText);

function toggleText() {
  hideText.classList.toggle('showText');

  if(hideText.classList.contains('showText')) {
    readMore_btn.innerHTML = 'Ocultar'
  }
  else {
    readMore_btn.innerHTML = 'Ver Mas'
  }
}

// --popup--

let modal = document.getElementById("staticBackdrop");
let modalDeploy = document.getElementById("modal-deploy");
let modalClose = document.getElementById("modal-close")

modalDeploy.onclick = (e) => {
  e.preventDefault();
  modal.style.display = "block";
}
modalClose.onclick = (e) => {
  e.preventDefault();
  modal.style.display = "none";
}
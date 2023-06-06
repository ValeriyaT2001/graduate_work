let but = document.getElementById("button");
let button = document.getElementById("button");
  let y=[];
let button_0 = document.getElementById("button_0");
let button_1 = document.getElementById("button_1");
let button_2 = document.getElementById("button_2");
let button_3 = document.getElementById("button_3");
let td = document.getElementsByClassName("fun");

inactivebutton2(localStorage.getItem('vibor0'));
inactivebutton2(localStorage.getItem('vibor1'));
inactivebutton2(localStorage.getItem('vibor2'));
inactivebutton2(localStorage.getItem('vibor3'));

function inactivebutton(){
  but.setAttribute('disabled',true);
  }

inactivebutton();


function vibor0(x) {
localStorage.setItem('vibor0', x);
localStorage.setItem('vibor', x);
daleeno();
}

function vibor1(x) {
localStorage.setItem('vibor1', x);
localStorage.setItem('vibor', x);
daleeno();
}

function vibor2(x) {
localStorage.setItem('vibor2', x);
localStorage.setItem('vibor', x);
daleeno();
}

function vibor3(x) {
localStorage.setItem('vibor3', x);
localStorage.setItem('vibor', x);
daleeno();
}

function daleeno(){
 but.removeAttribute('disabled');
}

function dalee(){

  window.location.href = 'xz.html';
}

 function inactivebutton2(x){

  y[x]=x;
  if (y[0]==0) {
    button_0.setAttribute('disabled',true);
  }
  if (y[1]==1) {
    button_1.setAttribute('disabled',true);
  }
  if (y[2]==2) {
    button_2.setAttribute('disabled',true);
  }
  if (y[3]==3) {
    button_3.setAttribute('disabled',true);
  }

}

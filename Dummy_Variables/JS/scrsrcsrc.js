let td = document.getElementsByClassName("fun");
let vi = document.getElementsByClassName("vivod");
let nabor = document.getElementsByClassName("nabor");
let eror = 0;
let t = document.getElementById("t");
let but = document.getElementById("button");
let y=[];
let flag = [];
let o = document.getElementById("oshibka");
let x;

      o.style.color = "white";


for (let i = 0; i<16;i++){
    vi[i]=-1;
}


function inactivebutton(){
  but.setAttribute('disabled',true);
  }

inactivebutton()

function daleeno2(){
  for (let i = 0; i < 16; i++ ) {
    if(td[i].style.backgroundColor != "green"){
      return;
    }
  }
 but.removeAttribute('disabled');
}

function dalee2(){
  window.location.href = 'fict_or_essential.html';
}




function OneclickTD(index){
  for (let i = 0; i < 16; i++ ) {
    if(td[i].style.backgroundColor == "green"){
      return 0;
    }
  }
  td[index].style.backgroundColor = "green";
 if (x==0){
   if(index==8){
     vi[1].innerHTML = ( "2) " + nabor[index].innerHTML);
   }else if (index==9) {
     vi[3].innerHTML = ( "4) " + nabor[index].innerHTML);
   }else if (index==10) {
     vi[5].innerHTML = ( "6) " + nabor[index].innerHTML);
   }else if (index==11) {
     vi[7].innerHTML = ( "8) " + nabor[index].innerHTML);
   }else if (index==12) {
     vi[9].innerHTML = ( "10) " + nabor[index].innerHTML);
   }else if (index==13) {
     vi[11].innerHTML = ( "12) " + nabor[index].innerHTML);
   }else if (index==14) {
     vi[13].innerHTML = ( "14) " + nabor[index].innerHTML);
   }else if (index==15) {
     vi[15].innerHTML = ( "16) " + nabor[index].innerHTML);
   }else{
     vi[(index * 2)].innerHTML = ((((index+1)*2)-1) + ") " + nabor[index].innerHTML);
   }

 }
 if (x==1){
   if(index==8){
     vi[8].innerHTML = ( "9) " + nabor[index].innerHTML);
     return;
   }else if (index==9) {
     vi[10].innerHTML = ( "11) " + nabor[index].innerHTML);
     return;
   }else if (index==10) {
     vi[12].innerHTML = ( "13) " + nabor[index].innerHTML);
     return;
   }else if (index==11) {
     vi[14].innerHTML = ( "15) " + nabor[index].innerHTML);
     return;
   }else if (index==12) {
     vi[9].innerHTML = ( "10) " + nabor[index].innerHTML);
     return;
   }else if (index==13) {
     vi[11].innerHTML = ( "12) " + nabor[index].innerHTML);
     return;
   }else if (index==14) {
     vi[13].innerHTML = ( "14) " + nabor[index].innerHTML);
     return;
   }else if (index==15) {
     vi[15].innerHTML = ( "16) " + nabor[index].innerHTML);
     return;
   }else if (index==4) {
     vi[1].innerHTML = ( "2) " + nabor[index].innerHTML);
     return;
   }else if (index==5) {
     vi[3].innerHTML = ( "4) " + nabor[index].innerHTML);
     return;
   }else if (index==6) {
     vi[5].innerHTML = ( "6) " + nabor[index].innerHTML);
     return;
   }else if (index==7) {
     vi[7].innerHTML = ( "8) " + nabor[index].innerHTML);
     return;
   }else{
     vi[(index * 2)].innerHTML = ((((index+1)*2)-1) + ") " + nabor[index].innerHTML);
     return;
   }
 }
 if (x==2){
   if(index==0){
     vi[0].innerHTML = ( "1) " + nabor[index].innerHTML);
     return;
   }else if (index==2) {
     vi[1].innerHTML = ( "2) " + nabor[index].innerHTML);
     return;
   }else if (index==1) {
     vi[2].innerHTML = ( "3) " + nabor[index].innerHTML);
     return;
   }else if (index==4) {
     vi[4].innerHTML = ( "5) " + nabor[index].innerHTML);
     return;
   }else if (index==3) {
     vi[3].innerHTML = ( "4) " + nabor[index].innerHTML);
     return;
   }else if (index==6) {
     vi[5].innerHTML = ( "6) " + nabor[index].innerHTML);
     return;
   }else if (index==5) {
     vi[6].innerHTML = ( "7) " + nabor[index].innerHTML);
     return;
   }else if (index==8) {
     vi[8].innerHTML = ( "9) " + nabor[index].innerHTML);
     return;
   }else if (index==7) {
     vi[7].innerHTML = ( "8) " + nabor[index].innerHTML);
     return;
   }else if (index==10) {
     vi[9].innerHTML = ( "10) " + nabor[index].innerHTML);
     return;
   }else if (index==9) {
     vi[10].innerHTML = ( "11) " + nabor[index].innerHTML);
     return;
   }else if (index==12) {
     vi[12].innerHTML = ( "13) " + nabor[index].innerHTML);
     return;
   }else if (index==11) {
     vi[11].innerHTML = ( "12) " + nabor[index].innerHTML);
     return;
   }else if (index==14) {
     vi[13].innerHTML = ( "14) " + nabor[index].innerHTML);
     return;
   }else if (index==13) {
     vi[14].innerHTML = ( "15) " + nabor[index].innerHTML);
     return;
   }else if (index==15) {
     vi[15].innerHTML = ( "16) " + nabor[index].innerHTML);
     return;
   }

 }
 if (x==3){
   vi[index].innerHTML=((index+1) + ") " + nabor[index].innerHTML);
 }
  return 1;
}
function error(){
  let e = document.getElementById("error");
  o.style.color = "black";

  e.innerHTML =("Количество ошибок: " + eror);
  if (eror == 3){
    localStorage.clear();
      window.location.href = 'povtoriteoriu.html';

  }
}

function white(index){
  td[index].style.backgroundColor = "white";
}


function letclick(index){
  if (td[index].style.backgroundColor == "green"){
    return;
    if (  o.style.color == "black"){
        o.style.color = "white";
    }
  }
  for (let i = 0; i < 16; i++ ){
    if(td[i].style.backgroundColor == "green" && td[(i + 8)%16].style.backgroundColor != "green" && ((i + 8)%16) != index)
    {
      td[index].style.backgroundColor = "red";
      setTimeout(white, 1000, index);
      eror++;
      error();

      explanation();
      return;
    }
  }
      td[index].style.backgroundColor = "green";
      if (  o.style.color == "black"){
          o.style.color = "white";
      }
      if(index==8){
        vi[1].innerHTML = ( "2) " + nabor[index].innerHTML);
        return;
      }else if (index==9) {
        vi[3].innerHTML = ( "4) " + nabor[index].innerHTML);
        return;
      }else if (index==10) {
        vi[5].innerHTML = ( "6) " + nabor[index].innerHTML);
        return;
      }else if (index==11) {
        vi[7].innerHTML = ( "8) " + nabor[index].innerHTML);
        return;
      }else if (index==12) {
        vi[9].innerHTML = ( "10) " + nabor[index].innerHTML);
        return;
      }else if (index==13) {
        vi[11].innerHTML = ( "12) " + nabor[index].innerHTML);
        return;
      }else if (index==14) {
        vi[13].innerHTML = ( "14) " + nabor[index].innerHTML);
        return;
      }else if (index==15) {
        vi[15].innerHTML = ( "16) " + nabor[index].innerHTML);
        return;
      }else{
        vi[(index * 2)].innerHTML = ((((index+1)*2)-1) + ") " + nabor[index].innerHTML);
        return;
      }

}

/*function explanation(){
  document.onclick = function() {
    document.getElementById('oshibka').style.display = 'none';
  }

}*/

function letclick2(index){
  if (td[index].style.backgroundColor == "green"){
    return;
  }
  for (let i = 0; i < 8; i++ ){
    if(td[i].style.backgroundColor == "green" && td[(i+4)%8].style.backgroundColor != "green" && ((i+4)%8) != index)
    {
      td[index].style.backgroundColor = "red";
      setTimeout(white, 1000, index);
      eror++;
        o.innerHTML = "Ошибка! Нужно выбирать набор, где отличается только значение исследуемой переменной";
      error()
      return;
    }
  }
  for (let i = 8; i < 16; i++ ){
    if(td[i].style.backgroundColor == "green" && td[((i+4)%8)+8].style.backgroundColor != "green" && (((i+4)%8)+8) != index)
    {
      td[index].style.backgroundColor = "red";
      setTimeout(white, 1000, index);
      eror++;
      error()
      return;
    }
  }
  td[index].style.backgroundColor = "green";
  if (  o.style.color == "black"){
      o.style.color = "white";
  }
  if(index==8){
    vi[8].innerHTML = ( "9) " + nabor[index].innerHTML);
    return;
  }else if (index==9) {
    vi[10].innerHTML = ( "11) " + nabor[index].innerHTML);
    return;
  }else if (index==10) {
    vi[12].innerHTML = ( "13) " + nabor[index].innerHTML);
    return;
  }else if (index==11) {
    vi[14].innerHTML = ( "15) " + nabor[index].innerHTML);
    return;
  }else if (index==12) {
    vi[9].innerHTML = ( "10) " + nabor[index].innerHTML);
    return;
  }else if (index==13) {
    vi[11].innerHTML = ( "12) " + nabor[index].innerHTML);
    return;
  }else if (index==14) {
    vi[13].innerHTML = ( "14) " + nabor[index].innerHTML);
    return;
  }else if (index==15) {
    vi[15].innerHTML = ( "16) " + nabor[index].innerHTML);
    return;
  }else if (index==4) {
    vi[1].innerHTML = ( "2) " + nabor[index].innerHTML);
    return;
  }else if (index==5) {
    vi[3].innerHTML = ( "4) " + nabor[index].innerHTML);
    return;
  }else if (index==6) {
    vi[5].innerHTML = ( "6) " + nabor[index].innerHTML);
    return;
  }else if (index==7) {
    vi[7].innerHTML = ( "8) " + nabor[index].innerHTML);
    return;
  }else{
    vi[(index * 2)].innerHTML = ((((index+1)*2)-1) + ") " + nabor[index].innerHTML);
    return;
  }

    //  td[index].style.backgroundColor = "green";
}

function letclick4(index){
  if (td[index].style.backgroundColor == "green"){
    return;
  }
  for (let i = 0; i < 16; i+=2 ){
    if(td[i].style.backgroundColor == "green" && td[i+1].style.backgroundColor != "green" && (i+1) != index)
    {
      td[index].style.backgroundColor = "red";
      setTimeout(white, 1000, index);
      eror++;
      error()
      return;
    }}

      td[index].style.backgroundColor = "green";
      if (  o.style.color == "black"){
          o.style.color = "white";
      }

      if(index==0){
        vi[0].innerHTML = ( "1) " + nabor[index].innerHTML);
        return;
      }else if (index==1) {
        vi[1].innerHTML = ( "2) " + nabor[index].innerHTML);
        return;
      }else if (index==2) {
        vi[2].innerHTML = ( "3) " + nabor[index].innerHTML);
        return;
      }else if (index==3) {
        vi[3].innerHTML = ( "4) " + nabor[index].innerHTML);
        return;
      }else if (index==4) {
        vi[4].innerHTML = ( "5) " + nabor[index].innerHTML);
        return;
      }else if (index==5) {
        vi[5].innerHTML = ( "6) " + nabor[index].innerHTML);
        return;
      }else if (index==6) {
        vi[6].innerHTML = ( "7) " + nabor[index].innerHTML);
        return;
      }else if (index==7) {
        vi[7].innerHTML = ( "8) " + nabor[index].innerHTML);
        return;
      }else if (index==8) {
        vi[8].innerHTML = ( "9) " + nabor[index].innerHTML);
        return;
      }else if (index==9) {
        vi[9].innerHTML = ( "10) " + nabor[index].innerHTML);
        return;
      }else if (index==10) {
        vi[10].innerHTML = ( "11) " + nabor[index].innerHTML);
        return;
      }else if (index==11) {
        vi[11].innerHTML = ( "12) " + nabor[index].innerHTML);
        return;
      }else if (index==12) {
        vi[12].innerHTML = ( "13) " + nabor[index].innerHTML);
        return;
      }else if (index==13) {
        vi[13].innerHTML = ( "14) " + nabor[index].innerHTML);
        return;
      }else if (index==14) {
        vi[14].innerHTML = ( "15) " + nabor[index].innerHTML);
        return;
      }else if (index==15) {
        vi[15].innerHTML = ( "16) " + nabor[index].innerHTML);
        return;
      }

}



function letclick3(index){
  if (td[index].style.backgroundColor == "green"){
    return;
  }
  for (let i = 0; i < 4; i++ ){
    if(td[i].style.backgroundColor == "green" && td[(i+2)%4].style.backgroundColor != "green" && ((i+2)%4) != index)
    {
      td[index].style.backgroundColor = "red";
      setTimeout(white, 1000, index);
      eror++;
      error()
      return;
    }}
  for (let i = 4; i < 8; i++ ){
  if(td[i].style.backgroundColor == "green" && td[((i+2)%4)+4].style.backgroundColor != "green" && (((i+2)%4)+4) != index)
  {
    td[index].style.backgroundColor = "red";
    setTimeout(white, 1000, index);
    eror++;
    error()
    return;
  }
}
  for (let i = 8; i < 12; i++ ){
  if(td[i].style.backgroundColor == "green" && td[((i+2)%4)+8].style.backgroundColor != "green" && (((i+2)%4)+8) != index)
  {
    td[index].style.backgroundColor = "red";
    setTimeout(white, 1000, index);
    eror++;
    error()
    return;
  }
}
  for (let i = 12; i < 16; i++ ){
  if(td[i].style.backgroundColor == "green" && td[((i+2)%4)+12].style.backgroundColor != "green" && (((i+2)%4)+12) != index)
  {
    td[index].style.backgroundColor = "red";
    setTimeout(white, 1000, index);
    eror++;
    error()
    return;
  }
}
      td[index].style.backgroundColor = "green";
      if (  o.style.color == "black"){
          o.style.color = "white";
      }

      if(index==0){
        vi[0].innerHTML = ( "1) " + nabor[index].innerHTML);
        return;
      }else if (index==2) {
        vi[1].innerHTML = ( "2) " + nabor[index].innerHTML);
        return;
      }else if (index==1) {
        vi[2].innerHTML = ( "3) " + nabor[index].innerHTML);
        return;
      }else if (index==4) {
        vi[4].innerHTML = ( "5) " + nabor[index].innerHTML);
        return;
      }else if (index==3) {
        vi[3].innerHTML = ( "4) " + nabor[index].innerHTML);
        return;
      }else if (index==6) {
        vi[5].innerHTML = ( "6) " + nabor[index].innerHTML);
        return;
      }else if (index==5) {
        vi[6].innerHTML = ( "7) " + nabor[index].innerHTML);
        return;
      }else if (index==8) {
        vi[8].innerHTML = ( "9) " + nabor[index].innerHTML);
        return;
      }else if (index==7) {
        vi[7].innerHTML = ( "8) " + nabor[index].innerHTML);
        return;
      }else if (index==10) {
        vi[9].innerHTML = ( "10) " + nabor[index].innerHTML);
        return;
      }else if (index==9) {
        vi[10].innerHTML = ( "11) " + nabor[index].innerHTML);
        return;
      }else if (index==12) {
        vi[12].innerHTML = ( "13) " + nabor[index].innerHTML);
        return;
      }else if (index==11) {
        vi[11].innerHTML = ( "12) " + nabor[index].innerHTML);
        return;
      }else if (index==14) {
        vi[13].innerHTML = ( "14) " + nabor[index].innerHTML);
        return;
      }else if (index==13) {
        vi[14].innerHTML = ( "15) " + nabor[index].innerHTML);
        return;
      }else if (index==15) {
        vi[15].innerHTML = ( "16) " + nabor[index].innerHTML);
        return;
      }



}

function Button_1(btnIndex){
  if (x==0){
  if(  OneclickTD(btnIndex) == 1){

    localStorage.setItem('flag', 0);
    //flag[0]=1;
    return;
  }
  letclick(btnIndex);
  daleeno2()
}
if(x==1){
if(  OneclickTD(btnIndex) == 1)
{
  localStorage.setItem('flag', 1);
  //  flag[1]=1;
  return;
}
  letclick2(btnIndex);
  daleeno2()
}
if(x==2){
if(  OneclickTD(btnIndex) == 1)
{
  localStorage.setItem('flag', 2);
  //  flag[2]=1;
  return;
}
  letclick3(btnIndex);
  daleeno2()
}
if(x==3){
if(  OneclickTD(btnIndex) == 1)
{
  localStorage.setItem('flag', 3);
  //  flag[3]=1;
  return;
}
  letclick4(btnIndex);
  daleeno2()
}
}


for(let i = 0; i<=3; i++){
  y[i]=-1;
}
x=(localStorage.getItem('vibor'));
y[0] = (localStorage.getItem('vibor0'));
y[1] = (localStorage.getItem('vibor1'));
y[2] = (localStorage.getItem('vibor2'));
y[3] = (localStorage.getItem('vibor3'));
console.log(y[0]);
console.log(y[1]);
console.log(y[2]);
console.log(y[3]);

function Start(){
  let result, a_2;
    let arr = [];
  let k=0;
  for (let i = 0; i<=3;i++){
    if (y[i]!=null){
      k++;
    }
  }
  function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
 return null;
}

function eraseCookie(name) {
  document.cookie = name + '=; Max-Age=-99999999;';
}
  if (k==1){
    console.log(k);
    function getRandomInt() {
    return Math.floor(Math.random()*2);
    }

    for (let i = 0; i < 16; i++) {

      arr[i]=getRandomInt();

    }
    result = JSON.stringify(arr);
    console.log("Массив: ", result);
    setCookie("mass", result, 7);
}
      a_2=JSON.parse(getCookie("mass"));
    console.log("Массив2: ",a_2);

for (let i = 0; i < 16; i++) {
    td[i].innerHTML = a_2[i];}
}



const MAIN = "MAIN";
if(MAIN === 'MAIN'){
  Start();
}

// Перва\ кнопка, она даолжна быть зеленной

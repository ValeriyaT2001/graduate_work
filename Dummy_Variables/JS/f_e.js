let td = document.getElementsByClassName("fun");
let y=[];
let x=(localStorage.getItem('vibor'));
let zadanie = document.getElementById("exe");
let a=[];
  let t=0;
let end=0;
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

let g=getCookie("mass");

y[0] = (localStorage.getItem('vibor0'));
y[1] = (localStorage.getItem('vibor1'));
y[2] = (localStorage.getItem('vibor2'));
y[3] = (localStorage.getItem('vibor3'));
console.log(y[0]);
console.log(y[1]);
console.log(y[2]);
console.log(y[3]);

a=JSON.parse(g);

for (let i = 0; i < 16; i++) {
    td[i].innerHTML = a[i];}

function exercise(num){
console.log(num);

if(num==0){
  zadanie.innerHTML="Сравните половины вектора значений функции и сделайте вывод, какой является переменная";
}
if(num==1){
  zadanie.innerHTML="Сравните четвертины вектора значений функции и сделайте вывод, какой является переменная";
}
if(num==2){
  zadanie.innerHTML="Сравните осьмушки вектора значений функции и сделайте вывод, какой является переменная";
}
if(num==3){
  zadanie.innerHTML="Сравните шестнадцатые части вектора значений функции и сделайте вывод, какой является переменная";
}
}

    function dalee_1(){
      if (t==0){
          window.location.href = 'index.html';
      }else{

          for (let i = 0; i<4;i++){
            if(y[i]!=i){
              end=0;
            }else{
              end++;
            }
          }
          if(end==4){
            localStorage.clear();
          }
          window.location.href = 'opredilenie.html';
      }
    }
      function dalee_2(){
        if (t==0){
            window.location.href = 'opredilenie.html';
        }else{
          for (let i = 0; i<4;i++){
            if(y[i]!=i){
              end=0;
            }else{
              end++;
            }
          }
          if(end==4){
            localStorage.clear();
          }
            window.location.href = 'index.html';

        }
      }

function answer(num){
  let b=[];
  if(num==0){
    for (let i = 0; i < 8; i++ ){
      if (a[i]==a[i+8]){
        b[i]=0;
      }else {
        b[i]=1;
      }
    }

   for (let i = 0; i < 8; i++) {
    if(b[i]==1){
      t=1;
    }
   }

  }
  if(num==1){
    for (let i = 0; i < 4; i++ ){
      if (a[i]==a[i+4]){
        b[i]=0;
      }else {
        b[i]=1;
      }
    }
    for (let i = 8; i < 12; i++ ){
      if (a[i]==a[i+4]){
        b[i-4]=0;
      }else {
        b[i-4]=1;
      }
    }
   for (let i = 0; i < 8; i++) {
    if(b[i]==1){
      t=1;
    }
   }
  }
  if(num==2){
    for (let i = 0; i < 2; i++ ){
      if (a[i]==a[i+2]){
        b[i]=0;
      }else {
        b[i]=1;
      }
    }
    for (let i = 4; i < 6; i++ ){
      if (a[i]==a[i+2]){
        b[i-2]=0;
      }else {
        b[i-2]=1;
      }
    }
    for (let i = 8; i < 10; i++ ){
      if (a[i]==a[i+2]){
        b[i-4]=0;
      }else {
        b[i-4]=1;
      }
    }
    for (let i = 12; i < 14; i++ ){
      if (a[i]==a[i+2]){
        b[i-6]=0;
      }else {
        b[i-6]=1;
      }
    }
    for (let i = 0; i < 8; i++) {
     if(b[i]==1){
       t=1;
     }
    }
  }
  if(num==3){
    for (let i = 0; i < 16; i+=2 ){
      if(a[i] == a[i+1]){
        b[i/2]=0;
      }else {
        b[i/2]=1;
      }
    }
  }
  for (let i = 0; i < 8; i++) {
   if(b[i]==1){
     t=1;
   }
  }
}
answer(x);

exercise(x);

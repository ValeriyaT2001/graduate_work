let a = document.getElementById("fic");
let b = document.getElementById("fic_1");
let c = document.getElementById("esse");
let d = document.getElementById("esse_1");



function oneclick(){
  a.addEventListener("click", () => {
  a.style.backgroundColor = 'green';
  return 0;
});
  b.addEventListener("click", () => {
  b.style.backgroundColor = 'green';
    return 0;
});
  c.addEventListener("click", () => {
  c.style.backgroundColor = 'green';
    return 0;
});
  d.addEventListener("click", () => {
  d.style.backgroundColor = 'green';
    return 0;
});
}

function click(){
  a.addEventListener("click", () => {
    if (b.style.backgroundColor == "green"){
      a.style.backgroundColor = 'green';
      good();
    }else if (d.style.backgroundColor == "green" && c.style.backgroundColor == "green") {
      a.style.backgroundColor = 'green';
      good();
    }else if (c.style.backgroundColor == "green") {
      a.style.backgroundColor = 'white';
      good();
    }else if (d.style.backgroundColor == "green") {
      a.style.backgroundColor = 'red';
        window.location.href = 'povtoriteoriu.html';
        good();
    }
  });
  b.addEventListener("click", () => {
    if (a.style.backgroundColor == "green"){
      b.style.backgroundColor = 'green';
      good();
    }else if (d.style.backgroundColor == 'green' && c.style.backgroundColor == 'green') {
      b.style.backgroundColor = 'green';
      good();
    }else if (c.style.backgroundColor == "green") {
      b.style.backgroundColor = 'red';
      good();
      window.location.href = 'povtoriteoriu.html';
    }else if (d.style.backgroundColor == "green") {
      b.style.backgroundColor = 'white';
      good();
    }
  });
  c.addEventListener("click", () => {
    if (b.style.backgroundColor == "green" && a.style.backgroundColor == "green") {
      c.style.backgroundColor = 'green';
      good();
    }else if(a.style.backgroundColor == "green"){
      c.style.backgroundColor = 'white';
      good();
    }else if (b.style.backgroundColor == "green") {
      c.style.backgroundColor = 'red';
      good();
      window.location.href = 'povtoriteoriu.html';
    }else if (d.style.backgroundColor == "green") {
      c.style.backgroundColor = 'green';
      good();
    }
  });
  d.addEventListener("click", () => {
    if (b.style.backgroundColor == "green" && a.style.backgroundColor == "green") {
      d.style.backgroundColor = 'green';
      good();
    }else if(a.style.backgroundColor == "green"){
      d.style.backgroundColor = 'red';
      good();
      window.location.href = 'povtoriteoriu.html';
    }else if (b.style.backgroundColor == "green") {
      d.style.backgroundColor = 'white';
      good();
    }else if (c.style.backgroundColor == "green") {
      d.style.backgroundColor = 'green';
      good();
    }
  });
}

function good(){
  if (b.style.backgroundColor == "green" && a.style.backgroundColor == "green" && d.style.backgroundColor == 'green' && c.style.backgroundColor == 'green'){
      window.location.href = 'fict_or_essential.html';
  }
}
oneclick();
click();

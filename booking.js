function reservation(event){
    event.preventDefault();
    var blur = document.getElementById("blur");
    blur.classList.toggle('active');
    var blur = document.getElementById("popup");
    blur.classList.toggle('active');
};

function reserve1(){
    var x = document.getElementById("t1");
       if (x.innerHTML === "1") {
          x.innerHTML = "1 RESERVED";
        } else {
          x.innerHTML = "1";
        }
      var t1 = document.getElementById("t1");
      t1.classList.toggle('reserve');
}

function reserve2(){
    var x = document.getElementById("t2");
       if (x.innerHTML === "2") {
          x.innerHTML = "2 RESERVED";
        } else {
          x.innerHTML = "2";
        }
      var t2 = document.getElementById("t2");
      t2.classList.toggle('reserve');
}

function reserve3(){
    var x = document.getElementById("t3");
       if (x.innerHTML === "3") {
          x.innerHTML = "3 RESERVED";
        } else {
          x.innerHTML = "3";
        }
      var t3 = document.getElementById("t3");
      t3.classList.toggle('reserve');
}

function reserve4(){
    var x = document.getElementById("t4");
       if (x.innerHTML === "4") {
          x.innerHTML = "4 RESERVED";
        } else {
          x.innerHTML = "4";
        }
      var t4 = document.getElementById("t4");
      t4.classList.toggle('reserve');
}

function reserve5(){
    var x = document.getElementById("t5");
       if (x.innerHTML === "5") {
          x.innerHTML = "5 RESERVED";
        } else {
          x.innerHTML = "5";
        }
      var t5 = document.getElementById("t5");
      t5.classList.toggle('reserve');
}

function reserve6(){
    var x = document.getElementById("t6");
       if (x.innerHTML === "6") {
          x.innerHTML = "6 RESERVED";
        } else {
          x.innerHTML = "6";
        }
      var t6 = document.getElementById("t6");
      t6.classList.toggle('reserve');
}

function reserve7(){
    var x = document.getElementById("t7");
       if (x.innerHTML === "7") {
          x.innerHTML = "7 RESERVED";
        } else {
          x.innerHTML = "7";
        }
      var t7 = document.getElementById("t7");
      t7.classList.toggle('reserve');
}

function reserve8(){
    var x = document.getElementById("t8");
       if (x.innerHTML === "8") {
          x.innerHTML = "8 RESERVED";
        } else {
          x.innerHTML = "8";
        }
      var t8 = document.getElementById("t8");
      t8.classList.toggle('reserve');
}

function reserve9(){
    var x = document.getElementById("t9");
       if (x.innerHTML === "9") {
          x.innerHTML = "9 RESERVED";
        } else {
          x.innerHTML = "9";
        }
      var t9 = document.getElementById("t9");
      t9.classList.toggle('reserve');
}


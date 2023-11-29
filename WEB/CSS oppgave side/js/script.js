function myFunction() {
    var x = document.getElementById("oppgave1Img");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  

  function myFunction2() {
    var x = document.getElementById("text2");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  function myFunction3() {
    var x = document.getElementById("text3");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function myFunction4() {
    var x = document.getElementById("text4");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function myFunction5() {
    var x = document.getElementById("text5");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }




  const button = document.getElementbyId("btn");

let count = 0;

button.addEventListener("click", ()=>{
   count = count + 1;
   alert("button is clicked" + count);
})
if (count < 1){
  getElementById("btn").style.display === "none"
}

function workouterror()
{
    alert("Click the dice to change workout")
}

function getRndInteger(min, max) {
    let x = Math.floor(Math.random() * (max - min)) + min;
    if(x == 6) {
      alert("You got a 6" )
      window.location="ex6.html"
      
    }
    if(x == 1) {
        alert("You got a 1" )
        window.location="ex1.html"
     
    }
    if(x == 2) {
      
      alert("You got a 2" )
      window.location="ex2.html"

    }
    if(x == 3) {
      alert("You got a 3" )
      window.location="ex3.html"
      
    }
    if(x == 4) {
      alert("You got a 4" )
      window.location="ex4.html"
       
    }
    if(x == 5) {
      alert("You got a 5" )
      window.location="ex5.html"
      
    }
  }


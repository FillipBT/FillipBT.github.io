function number_guess() {
    let number = Number(document.getElementById("number").value); // Number gjør sånn at inputet blir lest som et tall
    let randint = Number(Math.random(1, 10))

    if( number == 0 ) /* check if number = 0 */ {
        document.getElementById("answer").innerHTML = ("wrong the answer was, " + randint)        //alert no value
    } else if( number = NaN) /* Check if number = NaN */ {
        document.getElementById("asnwer").innerHTML = alert(NaN)//Alert NaN
    } else{
        if (number == randint) {
            getElementById("answer").innerHTML = ("You win!")
    
        }
    }
}

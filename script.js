function CalculateArea(){
    var radius = document.getElementsByClassName("userRadius")[0].value;
    var result = (radius * Math.PI);
    //console.log(result);
    var circleWidth = radius * 2;
    var circleHeight = radius * 2;
    //console.log(circleWidth);
    //console.log(circleHeight);
        

    document.getElementsByClassName("circleOutput")[0].style.height= circleHeight + "px";
    document.getElementsByClassName("circleOutput")[0].style.width= circleWidth + "px";


    if (radius <= 15) {
        //console.log("purple circle");
        document.getElementsByClassName("circleOutput")[0].style.backgroundColor = "purple";
    }

    
    if (radius > 15 && radius <= 30) {
        document.getElementsByClassName("circleOutput")[0].style.backgroundColor = "red";
    }
    
    if (radius > 30 && radius <= 45) {   
        document.getElementsByClassName("circleOutput")[0].style.backgroundColor = "#E2612E";
    }
        
    if (radius > 45 && radius <= 60) {
        document.getElementsByClassName("circleOutput")[0].style.backgroundColor = "green";
    }
    
    if (radius > 60) {
        document.getElementsByClassName("circleOutput")[0].style.backgroundColor = "yellow";
    }


    message = "The area of a circle with a radius of " + radius + " is " + result + ".";


    outputMessage();
   // movement();

}

function outputMessage () {
    var text = document.getElementsByClassName("outputText")[0];
    text.innerText = message;
}

/*function movement() {
var move = true;
    while (move === true) { 
        var position = 0;
        //var time = setInterval(frame, 10);
        
          
           if (position == 61) {
            move === false;
            } 

            if (position < 60) {
            position++; 
            document.getElementsByClassName("circleOutput")[0].style.top = position + 'px'; 
            document.getElementsByClassName("circleOutput")[0].style.left = position + 'px';
            }
        
    }

}
*/






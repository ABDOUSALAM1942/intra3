function clearScreen() {
    document.getElementById("result").value = "";
    }
    
    function display(value) {
    document.getElementById("result").value += value;
    }
    
    
    function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    }   
// theme
    document.getElementById("theme1").addEventListener("click", function() {
        document.body.style.backgroundColor = "rgb(41, 83, 162)";
        var calculator = document.querySelector(".calculator2");
        calculator.style.backgroundColor = "hsl(223, 31%, 20%)";
        calculator.style.color = "white";
        var calculator2 = document.querySelector(".display-box");
        calculator2.style.backgroundColor = "hsl(223, 31%, 20%)";
        calculator2.style.color = "white";
    });
    
    document.getElementById("theme2").addEventListener("click", function() {
        document.body.style.backgroundColor = "#f0f0f0";
        document.body.style.color = "white";
        var calculator = document.querySelector(".calculator2");
        calculator.style.backgroundColor = "hsl(223, 18%, 77%)";
        calculator.style.color = "white";
        var calculator2 = document.querySelector(".display-box");
        calculator2.style.backgroundColor = "#f0f0f0";
        calculator2.style.color = "black";
    });
    
    document.getElementById("theme3").addEventListener("click", function() {
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "black";
        var calculator = document.querySelector(".calculator2");
        calculator.style.backgroundColor = "hsl(290, 100%, 50%)";
        calculator.style.color = "black";
        var bouton = document.getElementById('btn');
        bouton.style.backgroundColor = "hsl(290, 100%, 50%)";
        var bouton1 = document.getElementById('btn1');
        bouton1.style.backgroundColor = "hsl(290, 100%, 50%)";
        var bouton2 = document.getElementById('btn2');
        bouton2.style.backgroundColor = "hsl(290, 100%, 50%)";
        var bouton3 = document.getElementById('bt');
        bouton3.style.backgroundColor = "hsl(290, 100%, 50%)";

    });

    // document.getElementById("theme1").addEventListener("click", function() {
    //     var calculator = document.querySelector(".calculator2");
    //     calculator.style.backgroundColor = "rgb(41, 83, 162)";
    // });
    
    // document.getElementById("theme2").addEventListener("click", function() {
    //     var calculator = document.querySelector(".calculator2");
    //     calculator.style.backgroundColor = "#f0f0f0";
    //     calculator.style.color = "white";
    // });
    
    // document.getElementById("theme3").addEventListener("click", function() {
    //     var calculator = document.querySelector(".calculator2");
    //     calculator.style.backgroundColor = "#ffffff";
    //     calculator.style.color = "black";
    // });
    


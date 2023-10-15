// Fonction pour afficher les chiffres et opérateurs sur l'écran de la calculatrice
function display(value) {
    var currentValue = document.getElementById("result").value;

    // Vérifier si la virgule existe déjà dans la valeur actuelle
    if (value === "." && currentValue.includes(".")) {
        return; // Ne rien faire si la virgule existe déjà
    }

    document.getElementById("result").value += value;
}

// Fonction pour effacer le dernier caractère de l'écran de la calculatrice
function clearLastDigit() {
    var currentValue = document.getElementById("result").value;
    // Supprimer le dernier caractère de la valeur actuelle
    var newValue = currentValue.slice(0, -1);
    // Mettre à jour l'affichage avec la nouvelle valeur
    document.getElementById("result").value = newValue;
}

// Fonction pour effacer complètement l'écran de la calculatrice
function clearScreen() {
    document.getElementById("result").value = "";
}

// Fonction pour effectuer une opération d'addition
function add(x, y) {
    return x + y;
}

// Fonction pour effectuer une opération de soustraction
function subtract(x, y) {
    return x - y;
}

// Fonction pour effectuer une opération de multiplication
function multiply(x, y) {
    return x * y;
}

// Fonction pour effectuer une opération de division
function divide(x, y) {
    if (y !== 0) {
        return x / y;
    } else {
        return "Erreur";
    }
}

// Fonction pour calculer le résultat en utilisant les fonctions mathématiques
function calculate() {
    var expression = document.getElementById("result").value;
    var num1, num2, operator, result;

    var regex = /(\d+\.?\d*)\s*([+\-*/])\s*(\d+\.?\d*)/;
    var match = expression.match(regex);

    if (match) {
        num1 = parseFloat(match[1]);
        operator = match[2];
        var num2 = parseFloat(match[3]);

if (!Number.isInteger(num2)) {
    // Le nombre n'est pas un entier, donc c'est un décimal
    num2 = parseFloat(num2);
}

        switch (operator) {
            case '+':
                result = add(num1, num2);
                break;
            case '-':
                result = subtract(num1, num2);
                break;
            case '*':
                result = multiply(num1, num2);
                break;
            case '/':
                result = divide(num1, num2);
                break;
            default:
                result = "Erreur";
        }

        document.getElementById("result").value = result;
    } else {
        document.getElementById("result").value = "Erreur";
    }
}



// theme
    document.getElementById("theme1").addEventListener("click", function() {
        document.body.style.backgroundColor = "rgb(41, 83, 162)";
        var bouton = document.querySelector('.title');
        bouton.style.color = "white";
        var resul = document.getElementById('result');
        resul.style.backgroundColor = "hsl(222, 26%, 31%)";
        var calculator = document.querySelector(".calculator2");
        calculator.style.backgroundColor = "hsl(223, 31%, 20%)";
        calculator.style.color = "white";
        var calculator2 = document.querySelector(".display-box");
        calculator2.style.backgroundColor = "hsl(223, 31%, 20%)";
        calculator2.style.color = "white";
        var titre = document.getElementById('tit');
        titre.style.color = "white";
        var theme = document.querySelector('.troutheme');
        theme.style.backgroundColor = "hsl(223, 31%, 20%)";
        var boutons = document.querySelectorAll('.bt');
        boutons.forEach(function(bouton) {
            bouton.style.backgroundColor = "white";
            bouton.style.color = "black";
        });
    });
    
    document.getElementById("theme2").addEventListener("click", function() {
        document.body.style.backgroundColor = "#f0f0f0";
        document.body.style.color = "white";
        var bouton = document.querySelector('.title');
        bouton.style.color = "black";
        var bouton = document.getElementById('btn');
        bouton.style.backgroundColor = "#078D8F";
        var bouton1 = document.getElementById('btn1');
        bouton1.style.backgroundColor = "#078D8F";
        var ega = document.getElementById('btn2');
        ega.style.backgroundColor = "hsl(25, 98%, 40%)";
        var calculator = document.querySelector(".calculator2");
        calculator.style.backgroundColor = "hsl(0, 0%, 90%)";
        calculator.style.color = "white";
        var calculator2 = document.querySelector(".display-box");
        calculator2.style.backgroundColor = "#f0f0f0";
        calculator2.style.color = "black";
        var titre = document.getElementById('tit');
        titre.style.color = "black";
        var theme = document.querySelector('.troutheme');
        theme.style.backgroundColor = "hsl(0, 0%, 90%)";
        var resul = document.getElementById('result');
        resul.style.backgroundColor = "hsl(0, 0%, 93%)";
        var boutons = document.querySelectorAll('.bt');
        boutons.forEach(function(bouton) {
            bouton.style.backgroundColor = "white";
            bouton.style.color = "black";
        });
    });
    
    document.getElementById("theme3").addEventListener("click", function() {
        document.body.style.backgroundColor = "hsl(268, 71%, 12%)";
        document.body.style.color = "black";
        var calculator = document.querySelector(".calculator2");
        calculator.style.backgroundColor = "hsl(268, 71%, 12%)";
        calculator.style.color = "black";
        var bouton = document.getElementById('btn');
        bouton.style.backgroundColor = "hsl(281, 89%, 26%)";
        var bouton1 = document.getElementById('btn1');
        bouton1.style.backgroundColor = "hsl(290, 100%, 50%)";
        var bouton2 = document.getElementById('btn2');
        bouton2.style.backgroundColor = "hsl(290, 100%, 50%)";
        var boutons = document.querySelectorAll('.bt');
        boutons.forEach(function(bouton) {
            bouton.style.backgroundColor = "hsl(281, 89%, 26%)";
            bouton.style.color = "hsl(52, 100%, 62%)";
        });
        var resul = document.getElementById('result');
        resul.style.backgroundColor = "hsl(268, 71%, 12%)";
        resul.style.color = "hsl(52, 100%, 62%)";
        var titre = document.getElementById('tit');
        titre.style.color =  "hsl(52, 100%, 62%)";
        var bouton = document.querySelector('.title');
        bouton.style.color = "hsl(52, 100%, 62%)";
        var ega = document.getElementById('btn2');
        ega.style.backgroundColor = "hsl(176, 100%, 44%)";
        var res = document.getElementById('btn1');
        res.style.backgroundColor = "hsl(281, 89%, 26%)";
        res.style.boxShadow = "hsl(290, 70%, 36%)";
        var theme = document.querySelector('.troutheme');
        theme.style.backgroundColor = "hsl(268, 71%, 12%)";

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
    


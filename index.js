var step = 0;
var step2 = 1337;
var x1 = 0;
var level = 1;
var seed = 1;
var key = 1;
var number_step = 0;
var arr = [];
function generateEquation1() {
    numb = Number(document.getElementById("input_numb").value);
    console.log(numb);
    var allEduation = "Вычислите сумму чисел <br>";
    for (var i = 0; i < numb; i++) {
        allEduation += generateEquation();
        if (i % 5 == 0) {
            allEduation += "\n";
        }

    }
    allEduation += "<br>Ответ запишите в десятичной системе счисления."
    printTXT("equation", allEduation);
}
function generateEquation() {
    key = Number(document.getElementById("input_key").value);
    console.log(key);
    level = Number(document.getElementById("input_level").value);
    console.log(level);
    numb = Number(document.getElementById("input_numb").value);
    console.log(numb);

    x1 = 0;
    var text = "";

    switch (level) {
        case 1:
        {
            let a = rand(key, level) % 20 + 1;
            let b = rand(key, level) % 20 + 1;
            x1 = a + b;
            arr.push(x1);
            number_step += 2;

            
            return createEquation(a, b);
        }

        case 2:
        {
            let a = rand(key, level) % 50;
            let b = rand(key, level) % 50;
            let c = rand(key, level) % 50;
            x1 = a + b + c;
            arr.push(x1);
            number_step += 3;

            return createEquation(a, b, c);
        }

        case 3:
        {
            let a = rand(key, level) % 100;
            let b = rand(key, level) % 100;
            let c = rand(key, level) % 100;
            let d = rand(key, level) % 100;
            x1 = a + b + c + d;
            arr.push(x1);
            number_step += 4;

            return createEquation(a, b, c, d);
        }

    }

    console.log(text);

    printTXT("equation", text);
}

function showAnswer() {
    numb = Number(document.getElementById("input_numb").value);
    console.log(numb);
    let text1 = "";
        for (var i = 0; i < numb; i++)
            text1 += "$$" + (i + 1) + ")\tx = " + arr[arr.length - numb + i] + "$$\t";
    printTXT("answer", text1);
}

function createEquation(a, b, c, d, e) {
    switch (level) {
        case 1:
        {
            var s1 = rand1();
            var s2 = rand1();
            let str1 = a.toString(s1);
            let str2 = b.toString(s2);

            return "$$" + str1 + "_{" + s1 +"} + " + str2 + "_{" + s2 + "} =     $$\t";
        }

        case 2:
        {
            var s1 = rand1();
            var s2 = rand1();
            var s3 = rand1();
            let str1 = a.toString(s1);
            let str2 = b.toString(s2);
            let str3 = c.toString(s3);

            return "$$" + str1 + "_{" + s1 + "} + " + str2 + "_{" + s2 + "} + " + str3  + "_{" + s3 + "} =     $$\t";      
         }

        case 3:
        {
            var s1 = rand1();
            var s2 = rand1();
            var s3 = rand1();
            var s4 = rand1();
            let str1 = a.toString(s1);
            let str2 = b.toString(s2);
            let str3 = c.toString(s3);
            let str4 = d.toString(s4);


            return  "$$" + str1 + "_{" + s1 + "} + " + str2 + "_{" + s2 + "} + " + str3  + "_{" + s3 + "} + " + str4  + "_{" + s4 + "} =     $$\t";
        }
    }
}

function printTXT(divID, printText) {
    var div = document.getElementById(divID);
    div.innerHTML = printText;
    MathJax.Hub.Queue(['Typeset',MathJax.Hub,'result']);
}
function rand(kay, level) {
    const a = 45;
    const c = 21;
    seed = (key + step * step * level) % 100000;
    var value = Math.abs(Math.floor(Math.cos(key % 10000 + step * step) * 1337 * level));
    const rand = (a * seed + c) % 10000 + value;
    step += 1;
    return rand;
}
function rand1(a, b) {
    var value = Math.abs(Math.floor(Math.cos(step2 * step2) * 1337)) % 30;
    step2 += 1; 
    return value;
}
var res = generateEquation();
console.log(res);
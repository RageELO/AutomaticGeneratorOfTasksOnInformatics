var step = 0;
var step2 = 1337;
var x1 = 0;
var level = 1;
var seed = 1;
var key = 1;

var arr = [];
var arr_anser = [];

function generateEquation1(){
    var numb = 12;

    if (Number(document.getElementById("input_numb").value != null))
        numb = Number(document.getElementById("input_numb").value);
    
    printInDiv("equation", "Вычислите сумму чисел <br>");
    var table = document.querySelector('#table1');

    for (var i = 0; i < Math.ceil(numb/4); ++i) 
        arr.push([generateEquation(), generateEquation(), generateEquation(), generateEquation()]);

    fillTable(table, arr);
    function fillTable(table, arr) {
        var i1 = 1;
        for (var i = 0; i < arr.length; i++) {
            var tr = document.createElement("tr");
            for (var j = 0; j < arr[i].length; j++) {
                var td = document.createElement('td');
                td.innerHTML = (i1) + ')' + arr[i][j];
                tr.appendChild(td);
                i1++;
            }
            table.appendChild(tr);
        }
        i1 = 1;
    }
    foo("input_key");
    foo("input_level");
    foo("text0");
    foo("text1");
    foo("text2");
    foo("text3");
    foo("gen");
    foo("input_numb");
    showhide("text4");
    showhide("gen_new");
    showhide("input_key_check");
    showhide("ans1");
    printInDiv("equation2", "<br>Ответ запишите в десятичной системе счисления.");
}
function generateEquation() {
    if (Number(document.getElementById("input_key").value) != null) {
        key = Number(document.getElementById("input_key").value);
        console.log(key);
    }
    level = Number(document.getElementById("input_level").value);
    console.log(level);
    if (Number(document.getElementById("input_numb").value) != null) {
        numb = Number(document.getElementById("input_numb").value);
        console.log(numb);

    }

    x1 = 0;
    var text = "";

    switch (level) {
        case 1:
        {
            let a = rand(key, level) % 20 + 1;
            let b = rand(key, level) % 20 + 1;
            x1 = a + b;
            arr_anser.push(x1);

            
            return createEquation(a, b);
        }

        case 2:
        {
            let a = rand(key, level) % 50;
            let b = rand(key, level) % 50;
            let c = rand(key, level) % 50;
            x1 = a + b + c;
            arr_anser.push(x1);

            return createEquation(a, b, c);
        }

        case 3:
        {
            let a = rand(key, level) % 100;
            let b = rand(key, level) % 100;
            let c = rand(key, level) % 100;
            let d = rand(key, level) % 100;
            x1 = a + b + c + d;
            arr_anser.push(x1);

            return createEquation(a, b, c, d);
        }

    }

    console.log(text);

    printInDiv("equation", text);
}

function showAnswer() {
  if (parseInt(Number(document.getElementById("input_key").value)) == parseInt(Number(document.getElementById("input_key_check").value))) {
    var table = document.querySelector('#table2');
    fillTable(table, arr_anser);
    function fillTable(table, arr_anser) {
        var i1 = 1;
        for (var i = 0; i < arr.length; i++) {
            var tr = document.createElement("tr");
            for (var j = 0; j < arr[i].length; j++) {
                var td = document.createElement('td');
                td.innerHTML = (i1) + ')' + arr_anser[i1-1];
                tr.appendChild(td);
                i1++;
            }
            table.appendChild(tr);
        }
        i1 = 1;
    }
    foo("table1");
    foo("equation");
    foo("equation2");
    foo("text4");
    foo("ans1");
    foo("input_key_check");

  }
}

function createEquation(a, b, c, d, e) {
    switch (level) {
        case 1:
        {
            var s1 = rand1();
            var s2 = rand1();
            let str1 = a.toString(s1);
            let str2 = b.toString(s2);

            return "$$" + str1 + "_{" + s1 +"} + " + str2 + "_{" + s2 + "} =     $$";
        }

        case 2:
        {
            var s1 = rand1();
            var s2 = rand1();
            var s3 = rand1();
            let str1 = a.toString(s1);
            let str2 = b.toString(s2);
            let str3 = c.toString(s3);

            return "$$" + str1 + "_{" + s1 + "} + " + str2 + "_{" + s2 + "} + " + str3  + "_{" + s3 + "} =     $$";      
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


            return  "$$" + str1 + "_{" + s1 + "} + " + str2 + "_{" + s2 + "} + " + str3  + "_{" + s3 + "} + " + str4  + "_{" + s4 + "} =     $$";
        }
    }
}

function printInDiv(divID, printText) {
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
    if (value < 2) {
        value = 2;
    }
    if (value > 32) {
        value = 32;
    }
    return value;
}
var res = generateEquation();
function foo(id) { 
  if (document.getElementById(id).style.display == "none")
     {document.getElementById(id).style.display = "block"}
  else 
     {document.getElementById(id).style.display = "none"}
}
function showhide(id) {
        document.getElementById(id).style.display = (document.getElementById(id).style.display == 'block') ? 'none' : 'block';
     }
console.log(res);

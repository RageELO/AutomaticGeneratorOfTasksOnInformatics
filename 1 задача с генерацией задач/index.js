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
    
    printInDiv("equation", "Исполнитель Робот ходит по клеткам бесконечной вертикальной клетчатой доски, переходя по одной из команд вверх, вниз, вправо, влево в соседнюю клетку в указанном направлении. Робот выполнил следующую программу: <br>");
    var table = document.querySelector('#table1');

    fillTable(table);
    function fillTable(table) {
        var i1 = 1;
        for (var i = 0; i < Math.ceil(numb/8); i++) {
            var tr = document.createElement("tr");
            for (var j = 0; j < 9; j++) {
                var td = document.createElement('td');
                td.innerHTML = (i1) + ')' + generateEquation();
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
    printInDiv("equation2", "Укажите наименьшее возможное число команд в программе, которая вернет Робота в начальную точку.");
}


function showAnswer() {
  if (parseInt(Number(document.getElementById("input_key").value)) == parseInt(Number(document.getElementById("input_key_check").value))) {
    var table = document.querySelector('#table2');

    numb = Number(document.getElementById("input_numb").value);
    fillTable(table, arr_anser);
    function fillTable(table, arr_anser) {
        var i1 = 1;
        for (var i = 0; i < Math.ceil(numb/8); i++) {
            var tr = document.createElement("tr");
            for (var j = 0; j < 9; j++) {
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

function generateEquation() {
    level = Number(document.getElementById("input_level").value);
    var res2 = "";
    var x = 0, y = 0;

    for (var i = 0; i < 4 + level*2; ++i) {
            a = rand(key, level);
            a = a % 4;
            if (a == 0) {
                y+=1;
                res2 += "вверх<br>";
            } else if (a == 1) {
                y-=1;
                res2 += "вниз<br>";
            } else if (a == 2) {
                x-=1;
                res2 += "влево<br>";
            } else if (a == 3) {
                x+=1;
                res2 += "вправо<br>";
            }
        }
        arr_anser.push(Math.abs(x) +Math.abs(y));
        return res2;
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

function CalcReturn(){
var x = document.getElementById('init').value;
var y = document.getElementById('time').value;
var zz = document.getElementById('rate').value;
var z = zz /100 + 1
var c = document.getElementById('dep').value;
var r = Math.pow(z,y);
var total = x*r+c*((r-1)/(zz/100));
total = total.formatMoney(2 , '.' , ',')
document.getElementById('tax').value = "$"+total;
}

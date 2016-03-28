function CalcTFSA(){
var x = document.getElementById('TFSAage').value;
var total;
if (x > 23){
total = 46500;
}
else if (x == 23){
total = 41500;
}
else if (x == 22){
total = 36500;
}
else if (x == 21){
total = 31500;
}
else if (x == 20){
total = 26500;
}
else if (x == 19){
total = 21000;
}
else if (x == 18){
total = 15500;
}
else if (x == 17){
total = 5500;
}
else{
total = 0;
}
total = total.formatMoney(2 , '.' , ',')
document.getElementById('TFSAlimit').value = "$"+total;
}

function CalcRRSP(){
var x = document.getElementById('RRSPinc').value;
var total = x*0.18
if (total > 24930){
total = 24930;
}
total = total.formatMoney(2 , '.' , ',')
document.getElementById('RRSPtax').value = "$"+total;
}

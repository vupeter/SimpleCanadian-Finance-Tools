function CalcPropertyTax(){
var x = document.getElementById('PropValue').value;
var total = x * 0.007056037;
total = total.formatMoney(2 , '.' , ',')
document.getElementById('PropTax').value = "$"+total;
}

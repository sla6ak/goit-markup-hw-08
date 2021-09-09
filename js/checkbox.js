
function fun1() {
var chbox;
chbox=document.getElementById('selected');
	if (chbox.checked) {
		document.getElementById('castom').classList.add('agrey');
	}
	else {
		document.getElementById('castom').classList.remove('agrey');
	}
}
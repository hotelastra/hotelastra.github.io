function divone() {
document.getElementById('done').style.display="block";
document.getElementById('dtwo').style.display="none";
document.getElementById('dthree').style.display="none";
document.getElementById('dfour').style.display="none";
document.getElementById('dfive').style.display="none";
window.location.href='#done';
}
function divtwo() {
document.getElementById('done').style.display="none";
document.getElementById('dtwo').style.display="block";
document.getElementById('dthree').style.display="none";
document.getElementById('dfour').style.display="none";
document.getElementById('dfive').style.display="none";
window.location.href='#dtwo';
}
function divthree() {
document.getElementById('done').style.display="none";
document.getElementById('dtwo').style.display="none";
document.getElementById('dthree').style.display="block";
document.getElementById('dfour').style.display="none";
document.getElementById('dfive').style.display="none";
window.location.href='#dthree';
}
function divfour() {
document.getElementById('done').style.display="none";
document.getElementById('dtwo').style.display="none";
document.getElementById('dthree').style.display="none";
document.getElementById('dfour').style.display="block";
document.getElementById('dfive').style.display="none";
window.location.href='#dfour';
}
function divfive() {
document.getElementById('done').style.display="none";
document.getElementById('dtwo').style.display="none";
document.getElementById('dthree').style.display="none";
document.getElementById('dfour').style.display="none";
document.getElementById('dfive').style.display="block";
window.location.href='#dfive';
}
function init(){
//add your javascrip between these two lines of code
function myEventFunction(){
  var textbox = document.getElementById('entryinput');
  document.getElementById('textoutput').innerHTML = textbox.value;
  alert('Edwin Bahena: This is a test');
}



var alerd = document.getElementById('entrybutton');

alerd.addEventListener('click', myEventFunction);

}
window.addEventListener('load', init);
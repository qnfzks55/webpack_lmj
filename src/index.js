if(module.hot){
    module.hot.accept();
}
require('./style.css');
var Please = require('pleasejs');
var div = document.getElementById('color');
var button = document.getElementById('button');

function changeColor(){
    div.style.backgroundColor = Please.make_color();
}
button.addEventListener('click', changeColor);
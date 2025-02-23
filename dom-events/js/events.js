//Option - 1 for click event handler
function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}
function makeRed() {
    document.body.style.backgroundColor = 'red';
}


//Option - 2 for click event handler

const btnMakeBlue = document.getElementById('btn-make-blue');
//console.log(btnMakeBlue);
btnMakeBlue.onclick = function () {
    document.body.style.backgroundColor = 'blue';
}

//Option - 3 slightly different way

const btnMakePurple = document.getElementById('btn-make-purple');

btnMakePurple.onclick = makePurple;   //here we do not use parenthesis!

function makePurple(){
    document.body.style.backgroundColor = 'purple';
}
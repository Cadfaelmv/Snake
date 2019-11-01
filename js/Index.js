/**
 * Created by Админ on 14.01.2017.
 */
document.body.oncontextmenu = function (e) {return false;}
var m = 40;
var n = 75;
var time = 0;
var direction = 'right';
var len = 3;

var appContainer = document.getElementsByClassName('app-container')[0]
var btnRestart = document.createElement('button');
btnRestart.className = 'btnRestart';
btnRestart.innerHTML = "Новая игра";
btnRestart.onclick = function(){
    createField();
    resTimer();
}
appContainer.appendChild(btnRestart);


var timer = document.createElement('input');
timer.type = 'text';
timer.className = 'timer';
timer.disabled = true;
timer.value = 0;
appContainer.appendChild(timer);




var gameTimer = setInterval("setTime();" , 1000);
var speedTimer = setInterval("move();" , 50);
var addPiecesTimer = setInterval("add();" , 5000);
createField();
var A = new Array(len);
A[0] = getElementByXY(30,20);
A[1] = getElementByXY(31,20);
A[2] = getElementByXY(32,20);
A.forEach(function (b) {
    b.style.backgroundColor = 'green';
    b.setAttribute('snake',1);
});
function changeDirection(e) {
    switch (e.keyCode) {
        case 37:
            if (direction != 'right') {
                direction = 'left';
            }
            break;
        case 38:
            if (direction != 'down') {
                direction = 'top';
            }
            break;
        case 39:
            if (direction != 'left') {
                direction = 'right';
            }
            break;
        case 40:
            if (direction != 'top') {
                direction = 'down';
            }
            break;
    }
}
addEventListener("keydown",changeDirection);
function createField(){
    var gameContainer = document.getElementsByClassName('game-container')[0]
    gameContainer.innerHTML = '';
    gameContainer.style.width  = "750px";
    gameContainer.style.height = "400px";
    for(var i = 0 ; i < m; i++){
        for(var j = 0; j < n; j++){
            var cell = document.createElement('button');
            cell.setAttribute('x', j);
            cell.setAttribute('y', i);
            cell.className = 'cell';
            cell.disabled = true;
            cell.setAttribute('snake',0);
            gameContainer.appendChild(cell);
        }
    }
}

function move() {
    if (direction == 'right'){
        moveRt();
    }
    if (direction == 'top'){
        moveTp();
    }
    if (direction == 'down'){
        moveDn();
    }
    if (direction == 'left'){
        moveLt();
    }
}
function moveRt(){
    if (A[len-1].getAttribute('x') != n-1) {
        var but = getElementByXY(+A[len-1].getAttribute('x')+1,A[len-1].getAttribute('y'));
        if (but.style.backgroundColor == 'green' && but.getAttribute('snake') == 0) {
            var B = new Array(len+1);
            for(var j = 0 ; j < len ; j++){
                B[j] = A[j];
            }
            B[len] = but;
            but.setAttribute('snake', 1);
            A = B;
            len++;
        }
        else {
            A[0].style.backgroundColor = 'lightgrey';
            but.style.backgroundColor = 'green';
            A[0].setAttribute('snake', 0);
            but.setAttribute('snake', 1);
            for (var i = 0; i <= len - 1; i++) {
                A[i] = A[i + 1];
            }
            A[len - 1] = but;
        }
    }
    else{
        var but = getElementByXY(0,A[len-1].getAttribute('y'));
        A[0].style.backgroundColor = 'lightgrey';
        but.style.backgroundColor = 'green';
        A[0].setAttribute('snake',0);
        but.setAttribute('snake',1);
        for (var i = 0; i<=len-1; i++){
            A[i] = A[i+1];
        }
        A[len-1] = but;
    }
}
function moveTp(){
    if (A[len-1].getAttribute('y') != 0) {
        var but = getElementByXY(A[len-1].getAttribute('x'),+A[len-1].getAttribute('y') - 1);
        if (but.style.backgroundColor == 'green' && but.getAttribute('snake') == 0) {
            var B = new Array(len+1);
            for(var j = 0 ; j < len ; j++){
                B[j] = A[j];
            }
            B[len] = but;
            but.setAttribute('snake', 1);
            A = B;
            len++;
        }
        else {
            A[0].style.backgroundColor = 'lightgrey';
            but.style.backgroundColor = 'green';
            A[0].setAttribute('snake', 0);
            but.setAttribute('snake', 1);
            for (var i = 0; i <= len - 1; i++) {
                A[i] = A[i + 1];
            }
            A[len - 1] = but;
        }
    }
    else{
        var but = getElementByXY(A[len-1].getAttribute('x'),m - 1);
        A[0].style.backgroundColor = 'lightgrey';
        but.style.backgroundColor = 'green';
        A[0].setAttribute('snake',0);
        but.setAttribute('snake',1);
        for (var i = 0; i<=len-1; i++){
            A[i] = A[i+1];
        }
        A[len-1] = but;
    }
}
function moveLt(){
    if (A[len-1].getAttribute('x') != 0) {
        var but = getElementByXY(+A[len-1].getAttribute('x')-1,A[len-1].getAttribute('y'));
        if (but.style.backgroundColor == 'green' && but.getAttribute('snake') == 0) {
            var B = new Array(len+1);
            for(var j = 0 ; j < len ; j++){
                B[j] = A[j];
            }
            B[len] = but;
            but.setAttribute('snake', 1);
            A = B;
            len++;
        }
        else {
            A[0].style.backgroundColor = 'lightgrey';
            but.style.backgroundColor = 'green';
            A[0].setAttribute('snake', 0);
            but.setAttribute('snake', 1);
            for (var i = 0; i <= len - 1; i++) {
                A[i] = A[i + 1];
            }
            A[len - 1] = but;
        }
    }
    else{
        var but = getElementByXY(n - 1,A[len-1].getAttribute('y'));
        A[0].style.backgroundColor = 'lightgrey';
        but.style.backgroundColor = 'green';
        A[0].setAttribute('snake',0);
        but.setAttribute('snake',1);
        for (var i = 0; i<=len-1; i++){
            A[i] = A[i+1];
        }
        A[len-1] = but;
    }
}
function moveDn(){
    if (A[len-1].getAttribute('y') != m - 1) {
        var but = getElementByXY(A[len - 1].getAttribute('x'), +A[len - 1].getAttribute('y') + 1);
        if (but.style.backgroundColor == 'green' && but.getAttribute('snake') == 0) {
            var B = new Array(len + 1);
            for (var j = 0; j < len; j++) {
                B[j] = A[j];
            }
            B[len] = but;
            but.setAttribute('snake', 1);
            A = B;
            len++;
        }
        else {
            A[0].style.backgroundColor = 'lightgrey';
            but.style.backgroundColor = 'green';
            A[0].setAttribute('snake', 0);
            but.setAttribute('snake', 1);
            for (var i = 0; i <= len - 1; i++) {
                A[i] = A[i + 1];
            }
            A[len - 1] = but;
        }
    }
    else{
        var but = getElementByXY(A[len-1].getAttribute('x'),0);
        A[0].style.backgroundColor = 'lightgrey';
        but.style.backgroundColor = 'green';
        A[0].setAttribute('snake',0);
        but.setAttribute('snake',1);
        for (var i = 0; i<=len-1; i++){
            A[i] = A[i+1];
        }
        A[len-1] = but;
    }
}
function add(){
    var it = 0;
    while (it < 1){
        var anyButton = getElementByXY(getRandom(n) - 1,getRandom(m) - 1);
        if (anyButton.getAttribute('snake') == 0 ) {
            anyButton.style.backgroundColor = 'green';
            it++;
        }
    }
}
function setTime(){
    timer.value = ++time;
}
function getRandom(max)
{
    return Math.floor(Math.random() * max) + 1;
}

function getElementByXY(x,y) {
    return document.querySelector("[x='" + x + "'][y='"+y+"']")
}

function resTimer() {
    clearInterval(gameTimer);
    time = 0;
    timer.value = 0;
    gameTimer = setInterval("setTime()" , 1000);
}
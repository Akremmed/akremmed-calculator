let screen=document.getElementById("screen");

function insert(value){
    screen.value+=value;
}

function clean(){
    screen.value="";
}

function calculate(){
    let result=eval(screen.value);
    screen.value=result
}

function delet(){
    let x = screen.value.slice(0, -1);
    screen.value=x
}
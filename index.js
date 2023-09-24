
var txt = document.getElementById("txt")
let result=document.getElementById('res');
let Isfirst = true;

function Cleartxt() {
    txt.innerHTML=0;
    result.innerHTML=0;
    Isfirst=true;
}

function isOp(value) {return value == '%' || value == '+' || value == '-' || value == '*' || value == '/';}


function getValue(value) {
    if (Isfirst && !isOp(value)) {txt.innerHTML = "";}

    if (value == 'C') {
        Cleartxt();
    }
    else if (value == '⌫') {
        if (txt.innerHTML.length <= 1) Cleartxt();
        else txt.innerHTML = txt.innerHTML.substring(0, txt.innerHTML.length - 1);
    }
    else {
        if (isOp(value) && isOp(txt.innerHTML[txt.innerHTML.length-1])) {
            txt.innerHTML = txt.innerHTML.substring(0, txt.innerHTML.length - 1);
        }
        txt.innerHTML += value;
        if(Isfirst){Isfirst = false;};
    }
}

function Result(){
    if(!isOp(txt.innerHTML[txt.innerHTML.length-1]))result.innerHTML=eval(txt.innerHTML);
}


let IsDark=true;
function SwitchMode(){
    let calc=document.getElementById('calc');
    let top2=document.getElementsByClassName('top-2');
    let inputs=document.getElementsByTagName('input');
    let line=document.getElementById('line');
    let elips=document.getElementById('ellipse');
    let switc=document.getElementById('switch');
    let icn=document.getElementById('icn');
    if(IsDark){
        calc.style.backgroundColor="#ecfafd";
        calc.style.color="black";
        top2[0].style.color="#43d8f9";
        line.style.backgroundColor="#4d545a";
        elips.style.backgroundColor="#4d545a";
        icn.style.color='#4d545a'
        switc.style.backgroundColor="#43d8f9";
        elips.style.transform="translateX(35px)";
        icn.style.transform="translateX(-35px)";
        icn.className='fa-solid fa-sun';
        for (let i = 0; i < inputs.length; i++) {
            if(inputs[i].className=="")inputs[i].style.setProperty('color', '#52646e', 'important');
            else if(inputs[i].className=="op"){
                inputs[i].style.setProperty('background-color', 'transparent', 'important');
                inputs[i].style.setProperty('color', '#43d8f9', 'important');
            }
        }
    }
    else{
        calc.style.backgroundColor="#52646e";
        calc.style.color="white";
        top2[0].style.color="white";
        line.style.backgroundColor="white";
        switc.style.backgroundColor="black";
        elips.style.backgroundColor="#43d8f9";
        icn.style.color="#43d8f9";
        icn.className='fa-solid fa-moon';
        elips.style.transform="translateX(0px)";
        icn.style.transform="translateX(0px)";
        for (let i = 0; i < inputs.length; i++) {
            if(inputs[i].className=="")inputs[i].style.setProperty('color', 'white', 'important');
            else if(inputs[i].className=="op"){
                inputs[i].style.setProperty('background-color', 'rgba(72,166,204,255)', 'important');
                inputs[i].style.setProperty('color', 'white', 'important');
            }
        }
    }
    IsDark=!IsDark;
}
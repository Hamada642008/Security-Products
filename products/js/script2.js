let next=document.querySelector('.next');
let prev=document.querySelector('.prev');

let input=document.getElementsByClassName('input');
let small=document.querySelectorAll('small');
let inputs=document.getElementsByClassName('inputs')
let texts=document.getElementsByClassName('texts')
function submit(){
    if (input[0].value=='') {
        small[0].style.color='red'
        small[0].innerHTML='Please Enter Your Name'
    }
    if (input[1].value=='') {
        small[1].style.color='red'
        small[1].innerHTML='Please Enter Your Email'
    }
    if (input[2].value=='') {
        small[2].style.color='red'
        small[2].innerHTML='Please Enter Your Password'
    }

    if (input[0].value.length>0) {
        small[0].innerHTML=''
    }
    if (input[1].value.length>0) {
        small[1].innerHTML=''
    }
    if (input[2].value.length>0) {
        small[2].innerHTML=''
    }
    if (!input[1].value.match(/@/) || !input[1].value.match(/./)) {
        small[1].style.color = 'red';
        small[1].innerHTML = 'Please enter a valid email containing @ and .';
    }
    if (input[0].value.length>0&&input[1].value.length>0&&input[2].value.length>0) {
        alert("Successful✔")
        small[0].innerHTML=''
        small[1].innerHTML=''
        small[2].innerHTML=''
    }
}
function send(){
    if (inputs[0].value=='') {
        texts[0].style.color='red'
        texts[0].innerHTML='Please Enter Your Email'
    }
    if (inputs[1].value=='') {
        texts[1].style.color='red'
        texts[1].innerHTML='Please Enter Your Subject'
    }
    if (inputs[2].value=='') {
        texts[2].style.color='red'
        texts[2].innerHTML='Please Enter Your Message'
    }

    if (inputs[0].value.length>0) {
        texts[0].innerHTML=''
    }
    if (inputs[1].value.length>0) {
        texts[1].innerHTML=''
    }
    if (inputs[2].value.length>0) {
        texts[2].innerHTML=''
    }
    if (!inputs[0].value.includes('@') || !inputs[0].value.includes('.')) {
        texts[0].style.color = 'red';
        texts[0].innerHTML = 'Please enter a valid email containing @ and .';
    }
}

window.onscroll=function(){
    let up=document.getElementById('up')
    if (scrollY >= 819) {
        up.style.display='block'
    }
    else {
        up.style.display='none'
    }
}
up.addEventListener('click',()=>{
    scroll({
        top:0,
        behavior:'smooth'
    })
})
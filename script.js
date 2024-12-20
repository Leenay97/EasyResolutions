let promises = ['Give up a bad habit', 'Find a new hobby',]


let balls = document.querySelectorAll('ball');

let ball1 = document.querySelector('.ball1');
let b1 = 2;
let c1 = 2;
let p1 = 2;
let h1 = 2;
let m1 = 2;

let ball2 = document.querySelector('.ball2');

let ball3 = document.querySelector('.ball3');

let ball4 = document.querySelector('.ball4');

let ball5 = document.querySelector('.ball5');

ball1.addEventListener('click', ()=>{
    
    ball1.style.backgroundImage = `url("pics/ball/${b1}.png")`;
    b1+=1;
    if (b1== 11) b1=1;
});

ball2.addEventListener('click', ()=>{
    
    ball2.style.backgroundImage = `url("pics/candy/${c1}.png")`;
    c1+=1;
    if (c1== 10) c1=1;
});

ball3.addEventListener('click', ()=>{
    
    ball3.style.backgroundImage = `url("pics/present/${p1}.png")`;
    p1+=1;
    if (p1== 10) p1=1;
});

ball4.addEventListener('click', ()=>{
    
    ball4.style.backgroundImage = `url("pics/horse/${h1}.png")`;
    h1+=1;
    if (h1== 10) h1=1;
});

ball5.addEventListener('click', ()=>{
    
    ball5.style.backgroundImage = `url("pics/mitten/${m1}.png")`;
    m1+=1;
    if (m1== 10) m1=1;
});

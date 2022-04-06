let _btn = document.getElementsByTagName('button');
let _body = document.querySelector('body');
let mainTit = document.querySelector('h1>a');
let navLi = document.querySelectorAll('li');
let navList = document.querySelectorAll('li>a');
let _content = document.querySelector('#content>p');
let _hr = document.querySelector('hr');

for(let idx=0;idx<_btn.length;idx++){
    _btn[idx].addEventListener('mouseover', (event)=>{
        event.target.style.opacity = 1;
    });
}
for(let idx=0;idx<_btn.length;idx++){
    _btn[idx].addEventListener('mouseout', (event)=>{
        event.target.style.opacity = 0.3;
    });
}




_btn.addEventListener('click', function(){
    _body.style.backgroundColor = '#000';
    mainTit.style.color = 'lightblue';
    for(let idx=0;idx<navLi.length;idx++){
        navLi[idx].style.color = '#aaf';
    }
    for(let idx=0;idx<navList.length;idx++){
        navList[idx].style.color = '#aaf';
    }
    _content.style.color = '#fff';
    _hr.style.backgroundColor = `#fff`;
    
})
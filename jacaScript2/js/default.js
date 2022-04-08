import * as myFunAll from './lib/myFunction.js' // myfunction의 모든 것
// import {day, night} from './myFunction.js' // myfunction의 day와 night 함수만
let _btn = document.querySelector('button');

// 마우스오버
_btn.addEventListener('mouseover', (event)=>{
    event.target.style.opacity = 1;
});

// 마우스아웃
_btn.addEventListener('mouseout', (event)=>{
    event.target.style.opacity = 0.3;
});

// 클릭이벤트
_btn.addEventListener('click', (e)=>{
    let btnTxt = e.target.innerHTML;
    if(btnTxt == '👓'){
        e.target.innerHTML = '🕶';
        myFunAll.setObj.setday();
    }else{
        e.target.innerHTML = '👓';
        myFunAll.setObj.setnight();
    }
});










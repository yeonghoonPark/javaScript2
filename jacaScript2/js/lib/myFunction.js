let _btn = document.querySelector('button');
let _body = document.querySelector('body');
let mainTit = document.querySelector('h1>a');
let navLi = document.querySelectorAll('li');
let navList = document.querySelectorAll('li>a');
let _content = document.querySelector('#content>p');
let _hr = document.querySelector('hr');

// night 함수
function night(){
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
}

// day 함수
function day(){
    _btn.addEventListener('click', function(){
        _body.style.backgroundColor = '#fff';
        mainTit.style.color = '#8b0000';
        for(let idx=0;idx<navLi.length;idx++){
            navLi[idx].style.color = '#000';
        }
        for(let idx=0;idx<navList.length;idx++){
            navList[idx].style.color = '#000';
        }
        _content.style.color = '#000';
        _hr.style.backgroundColor = `#000`;
    })
}

let setObj = {};
setObj = {
    setday:day, // 함수를 호출하는게 아니라 키값의 property라 ()가 없나?
    setnight:night
}
export {setObj};
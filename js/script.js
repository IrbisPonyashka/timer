
// new Data() - глобальный обьект который отдает время и дату из вашего пк
// рекурсия это функция вызывающая саму себя 

// let i = 0;
// function reg() {
//     if(i < 100){
//         i++
//         setTimeout(() => reg(), 1000);
//     }
// }
// console.log(i); 


// function animate() {
//     items.forEach((item) => {
//         item.addEventListener('click', () => {
//             items.forEach((el) => el.classList.remove('active'))
//             item.classList.add('active');    
//         })
//     })
// }
// animate()




let sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    hourNumber = document.querySelector('.hours'),
    minNumber = document.querySelector('.minutes');

function clock() {
    let time = new Date();
    let seconds = time.getSeconds() * 6;
    let minuts = time.getMinutes() * 6;
    let hours = time.getHours() * 30;
    
    sec.style = `transform:rotate(${seconds}deg)`;
    min.style = `transform:rotate(${minuts}deg)`;
    hour.style = `transform:rotate(${hours}deg)`;
    
    hourNumber.innerHTML = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
    minNumber.innerHTML = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
        
    
    setTimeout(() => clock(),1000);

}
clock()


let links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');


for(let i = 0; i < links.length;i++) {
    links[i].addEventListener('click', function(event) {
        event.preventDefault()
        for(let x = 0; x < links.length;x++){
            links[x].classList.remove('active');
            tabs[x].classList.remove('active');
        }
        links[i].classList.add('active');
        tabs[i].classList.add('active');
    })
}



// let i = 0;
// function reg() {
    
//     console.log(i);
//     if(i < 60){
//         i++
//         setTimeout(() => reg(), 1000);
//     }
// }

let seconds = document.querySelector('.stopwatch__seconds'),
    minutes = document.querySelector('.stopwatch__minutes'),
    hours = document.querySelector('.stopwatch__hours'),
    start = document.querySelector('.stopwatch__btn'),
    clear = document.querySelector('.tabsLink__span');

let timeOut; 

start.addEventListener('click', (() => {
    alert('Время ускорено');
    (start.innerHTML == 'start') ? timer() : 
    (start.innerHTML == 'stop') ? stopTimer() :
    clearTimer(); 
}))

function timer() {
    
    start.innerHTML = 'stop';
    clear.classList.add("active");
    if(seconds.innerHTML < 60){
        seconds.innerHTML++
        seconds.innerHTML = seconds.innerHTML < 10 ? `0${seconds.innerHTML}` : seconds.innerHTML;
        timeOut = setTimeout(() => timer(), 100); 
    }else if( seconds.innerHTML = 59) {
        seconds.innerHTML = 0;
        minutes.innerHTML++;
        minutes.innerHTML = minutes.innerHTML < 10 ? `0${minutes.innerHTML}` : minutes.innerHTML;
        timeOut = setTimeout(() => timer(), 100);
        if( minutes.innerHTML == 60){
            minutes.innerHTML = 0;
            hours.innerHTML++;
            hours.innerHTML = hours.innerHTML < 10 ? `0${hours.innerHTML}` : hours.innerHTML;
            timeOut = setTimeout(() => timer(), 100)
            if( hours.innerHTML == 24) {
            hours.innerHTML = 0;
            }
        }    
    }
}

function stopTimer(){
    start.innerHTML = 'clear';
    clearTimeout(timeOut);
    clear.classList.remove('active');
    clear.classList.add("active_clear"); 
}
function clearTimer() {
    clear.classList.remove('active_clear')
    start.innerHTML = 'start';
    seconds.innerHTML = 0;
    minutes.innerHTML = 0;
    hours.innerHTML = 0;
}

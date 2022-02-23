let btn = document.querySelector('#map1');
let map1 = document.querySelector('#src1');
let btn2 = document.querySelector('#map2');
let map2 = document.querySelector('#src2');
let btn3 = document.querySelector('#map3');
let map3 = document.querySelector('#src3');
let btn4 = document.querySelector('#map4');
let map4 = document.querySelector('#src4');

window.addEventListener('load', function () {
  let flag;
  btn.addEventListener('click', function () {
    if (flag) {
        map1.style.display = 'none';
        btn.style.backgroundColor = 'rgb(24, 214, 214)';
        btn.innerHTML = 'Show map';
    }
    else{
        map1.style.display = 'block';
        btn.innerHTML = 'Hide';
        btn.style.backgroundColor = 'lightblue';
    } 
    flag = !flag;
 });

  btn2.addEventListener('click', function () {
    if (flag) {
        map2.style.display = 'none';
        btn2.style.backgroundColor = 'rgb(24, 214, 214)';
        btn2.innerHTML = 'Show map';
    }
    else{
        map2.style.display = 'block';
        btn2.innerHTML = 'Hide';
        btn2.style.backgroundColor = 'lightblue';
    } 
    flag = !flag;
 });

 btn3.addEventListener('click', function () {
    if (flag) {
        map3.style.display = 'none';
        btn3.style.backgroundColor = 'rgb(24, 214, 214)';
        btn3.innerHTML = 'Show map';
    }
    else{
        map3.style.display = 'block';
        btn3.innerHTML = 'Hide';
        btn3.style.backgroundColor = 'lightblue';
    } 
    flag = !flag;
 });

 btn4.addEventListener('click', function () {
    if (flag) {
        map4.style.display = 'none';
        btn4.style.backgroundColor = 'rgb(24, 214, 214)';
        btn4.innerHTML = 'Show map';
    }
    else{
        map4.style.display = 'block';
        btn4.innerHTML = 'Hide';
        btn4.style.backgroundColor = 'lightblue';
    } 
    flag = !flag;
 }); 

});
 
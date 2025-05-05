"use strict"

const documentActions = (e) => {
  const currElement = e.target
  if(currElement.closest(".icon-menu")) {
    document.documentElement.classList.toggle("open-menu")
  }
  
}

document.addEventListener('click', documentActions)

//анімація появи
//intersection observable - observe classes
const options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  //Відсоток від розміру об'єкту
  //при появі якого спрацьовує подія
  //Де 0 це будь яка поява
  //1 це повна поява об'єкта у в'юпорті
  threshold: 0.2,
}
const callback = (entries, observer) => {
  entries.forEach(entry => {
    const currentElement = entry.target
    if(entry.isIntersecting) {
      currentElement.classList.add('--animate')
      console.log('I see you')
    } else {
      currentElement.classList.remove('--animate')
      console.log('I don`t see you',entry.isIntersection,currentElement)
    }
  });
}
const observer = new IntersectionObserver(callback, options);

const animElements = document.querySelectorAll('[class*="--anim"]')
animElements.forEach(animElement => {
  observer.observe(animElement)
})

// function findOdd(arr) {
//   let count = 0;
//   let num = 0;
//   let unic = new Set(arr);
//   for(let k of unic) {
//     for(let i = 0; i < arr.length; i++) {
//       k===arr[i] && count++;
//     }
//     count % 2 === 0 ? unic.delete(k) : num = k
//     count = 0;
//   }
//   return num;
// }

// findOdd([20, 5, 5])

//  const fib = (number) => {

//   if(number === 0 || number === 1) return 1;
//   let prev1 =1;  // first and second values are done
//   let prev2 = 1

//   for(let i = 3; i<=number; i++) {
//       let next = prev1 + prev2;
//       prev1 = prev2; 
//       prev2 = next;
//       console.log(next);
      
//   }
  
//   return prev2;

//  }

// bad for big values -long-long
// const fib = (n) => {
//   return n <=1 ? n : fib(n-1)+fib(n-2);
// } 
 
 
 function fibonacciSequence() {
  let a = 1n;
  let b = 1n;

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      const current = a;
      [a, b] = [b, a + b];
      return { value: current, done: false };
    }
  };
}
const fib = fibonacciSequence()
 for(let i = 0; i < 10; i++) {
  console.log(fib.next().value)
 }

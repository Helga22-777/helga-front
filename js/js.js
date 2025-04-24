"use strict"

const documentActions = (e) => {
  const currElement = e.target
  if(currElement.closest(".icon-menu")) {
    document.documentElement.classList.toggle("open-menu")
  }
  
}

document.addEventListener('click', documentActions)

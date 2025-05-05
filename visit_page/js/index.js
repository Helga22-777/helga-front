let timerId;
const nav = document.querySelector('nav')
const iconMenu = document.querySelector('.menu-icon' )
const iconMenuOpen = document.querySelector('.menu-icon-open')

document.querySelectorAll(".dropdown-toggle").forEach(el => {
 
  el.addEventListener('click' , (e) => {
    const menu = e.target.dataset.path;

    document.querySelectorAll(".dropdown-menu").forEach( item => {

      item.classList.remove("menu-active");
      item.classList.remove("open");

      if(!document.querySelector(`[data-target=${menu}]`).classList.contains("open")) {
        document.querySelector(`[data-target=${menu}]`).classList.add("menu-active")
        timerId = setTimeout(() => {
          document.querySelector(`[data-target=${menu}]`).classList.add("open")
        }, 0)
      }

      if(document.querySelector(`[data-target=${menu}]`).classList.contains("open")) {
        document.querySelector(`[data-target=${menu}]`).classList.remove("menu-active")
        timerId = setTimeout(() => {
          document.querySelector(`[data-target=${menu}]`).classList.remove("open")
        }, 0)
        
      }
      clearTimeout(timerId)

      item.addEventListener('mouseleave', (e) => {
        document.querySelector(`[data-target="${menu}"]`).classList.remove("menu-active");
        document.querySelector(`[data-target="${menu}"]`).classList.remove("open");
      })
    })
  })
  
})

iconMenu.addEventListener('click', (e) => {
  if(!nav.classList.contains('active-side')) {
    nav.classList.add('active-side');
    iconMenu.style.display = 'none';
    iconMenuOpen.style.display = 'block';
  }
})

iconMenuOpen.addEventListener('click', (e) => {
  if(nav.classList.contains('active-side')) {
    nav.classList.remove('active-side');
    iconMenu.style.display = 'block';
    iconMenuOpen.style.display = 'none';
  }
})



window.addEventListener('resize', (e) => {
  const screenSize = window.innerWidth;   
  if(screenSize > 772) {
    nav.classList.remove('active-side');
    iconMenu.style.display = 'none';
    iconMenuOpen.style.display = 'none';
  } else {
    iconMenu.style.display = 'block';
    iconMenuOpen.style.display = 'none';
    window.onclick = (e) => {
      const target = e.target;
      if (!target.closest('.dropdown-toggle') && !target.closest('.menu-icon') && !target.closest('nav')) {
        nav.classList.remove('active-side');
        iconMenu.style.display = 'block';
        iconMenuOpen.style.display = 'none';
      } 
    };
  }
})

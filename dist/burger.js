// the function below is to make the hamburger
// menu functionality 


function Menu(e){
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = 'close',
    list.classList.add('top-[80px]'),
    list.classList.add('opacity-100'))
    :(e.name = 'menu', 
    list.classList.remove('top-[80px]'),
    list.classList.remove('opacity-100'))
}



const swiper = new Swiper('#swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true, 
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  });
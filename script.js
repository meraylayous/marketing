let menu = document.querySelector(".menu");

menu.onclick = function(){
   let  navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
}

 let header =document.querySelector(".header-content");

/*window.onscroll = () => {
    if(window.scrollY > 100 ){
        header.classList.toggle("active");
        
}
}*/
window.addEventListener('scroll' , () => {

console.log(window.scrollY);
if(window.scrollY >= 50){
    header.classList.add('active1')
}
else{
    header.classList.remove('active1')
}
})

var swiper = new Swiper('.swiper-container', {
  

        slidesPerView :3,
        spaceBetween:25,
        slidesPerGroup:3,
        loop:true,
        loopFillGroupWithBlank:true,
     
       pagination: {
       el: '.swiper-pagination',
        
     clickable:'true'
   },
   breakpoints:{
    0:{
        slidesPerView:1,
    },
    520:{
        slidesPerView:2,
    },
    950:{
        slidesPerView:3,
    },
   }
 });


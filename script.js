let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}

let section = document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header.navbar a');

window.onscroll = ()=>{
  menu.class=List.remove('fa-times');
  navbar.classList.remove('active')

  section.forEach(sec=>{
    let top=window.scrollY;
    let height=sec.offsetHeight;
    let offset = sec.offsetTop-150;
    let id=sec.getAttribute('id');

    if(top>=offset&&top<offset+height){
      navLinks.forEach(links=>{
        links.classList.remove('active');
        document.querySelector('header.navbar a[hre*='+id+']').classList.add('active');
      });
    };
  });
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop:true,
  });
  

  var swiper = new Swiper(".review-slider",{
    spaceBetween: 20,
    centredSlides:true,
    autoplay:{
      delay:5000,
      disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
    breakpoints:{
      0:{
        slidesPerView:1,
      },
      640:{
        slidesPerView:2,

      },
      768:{
        slidesPerView:2,
      },
      1024:{
        slidesPerView:3,
      },
    },
  });



  function star (icon) {
  $(icon).toggleClass('fas far');
}

 function heart (icon) {
  $(icon).toggleClass('fas far');
}

// -------------email validation-------------------

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return (true);
  }
  alert("You have entered an invalid email address!");
  return (false);
}

function logout() {
  // Redirect the user to the logout page
  window.location.replace("./index.html");
}

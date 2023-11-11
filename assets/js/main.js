/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
searchClose = document.getElementById('search-close'),
searchContent = document.getElementById('search-content');
/*=============== SEARCH SHOW===============*/

if(searchButton){
    searchButton.addEventListener('click',()=>{
        searchContent.classList.add('show-search')
    })
}
/*=============== SEARCH HIDDEN===============*/

if(searchClose){
    searchClose.addEventListener('click',()=>{
        searchContent.classList.remove('show-search');
    })
}



/*=============== LOGIN ===============*/
const loginButton = document.getElementById('login-button'),
loginClose = document.getElementById('login-close'),
loginContent = document.getElementById('login-content');
/*=============== LOGIN SHOW===============*/

if(loginButton){
    loginButton.addEventListener('click',()=>{
        loginContent.classList.add('show-login')
    })
}
/*=============== LOGIN HIDDEN===============*/

if(loginClose){
    loginClose.addEventListener('click',()=>{
        loginContent.classList.remove('show-login');
    })
}

/*=============== ADD SHADOW HEADER ===============*/
const showHeader = () =>{
    const header = document.getElementById('header');
    this.scrollY >= 50? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header');
}
window.addEventListener('scroll', showHeader);

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper',{
    loop:true,
    spaceBetween:-24,
    grabCursor:true,
    slidesPerView:'auto',
    centeredSlides:'auto',

    autoplay:{
        delay:3000,
        disableOnInteraction:false
    },

    breakpoints:{
        1220:{
            spaceBetween:-32,
        }
    }
})

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured__swiper',{
    loop:true,
    spaceBetween:16,
    grabCursor:true,
    slidesPerView:'auto',
    centeredSlides:'auto',

    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        1150:{
            slidesPerView:4,
            centeredSlides:false
        }
    }
})

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new__swiper',{
    loop:true,
    spaceBetween:16,
    slidesPerView:'auto',
    breakpoints:{
        1150:{
            slidesPerView:3,
        }
    }
})

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonials = new Swiper('.testimonial__swiper',{
    loop:true,
    spaceBetween:16,
    grabCursor:true,
    slidesPerView:'auto',
    centeredSlides:'auto',
    breakpoints:{
        1150:{
            slidesPerView:3,
            centeredSlides:false
        }
    }
})

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = ()=>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/

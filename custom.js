$(document).ready(function(){

    // Change CSS with Scroll
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('.gototop').addClass('active')
    }
    else {
      $('.gototop').removeClass('active')
    }   
  })

 
  /* controller scroll */
  let slides = document.querySelector('.best_slide_ctn');
  let slideImg = document.querySelectorAll('.best_slide_ctn li');
  currentIdx = 0;
  slideCount = slideImg.length;
  prev = document.querySelector('#prev');
  next = document.querySelector('#next');
  slideWidth = 700;
  // slideMargin = 0;
  // makeClone();
  // initfunction();

  function makeClone(){
    let cloneSlide_first = slideImg[0].cloneNode(true);
    let cloneSlide_last = slides.lastElementChild.cloneNode(true);
    slides.append(cloneSlide_first);
    slides.insertBefore(cloneSlide_last, slides.firstElementChild);
  }
  function initfunction(){
    slides.style.width = (slideWidth) * (slideCount + 2) + 'px';
  }

  next.addEventListener('click', function () {
    //다음 버튼 눌렀을때
    if (currentIdx <= slideCount - 1) {
      //슬라이드이동
      slides.style.left = -(slideWidth) + 'px';
      slides.style.transition = `${0.5}s ease-out`; //이동 속도
    }
    currentIdx += 1;
  });

  prev.addEventListener('click', function () {
    //이전 버튼 눌렀을때
    console.log(currentIdx);
    if (currentIdx >= 0) {
      slides.style.left = 0 + 'px';
      slides.style.transition = `${0.5}s ease-out`;
    }
    currentIdx -= 1;
  });




  /* hold and drah scroll */
  const g_slider = document.querySelector('.gallery_slider');
  let isDown = false;
  let startX;
  let scrollLeft;

  g_slider.addEventListener('mousedown', e => {
    isDown = true;
    g_slider.classList.add('active');
    startX = e.pageX - g_slider.offsetLeft;
    scrollLeft = g_slider.scrollLeft;
  });

  g_slider.addEventListener('mouseleave', () => {
    isDown = false;
    g_slider.classList.remove('active');
  });

  g_slider.addEventListener('mouseup', () => {
    isDown = false;
    g_slider.classList.remove('active');
  });

  g_slider.addEventListener('mousemove', e => {
    if (!isDown) return; 
    e.preventDefault();
    const x = e.pageX - g_slider.offsetLeft;
    const walk = x - startX;
    g_slider.scrollLeft = scrollLeft - walk;
  });

   // content7 가로 스트롤
   const i_slider = document.querySelector('.instagram_slider');
 
   i_slider.addEventListener('mousedown', e => {
     isDown = true;
     i_slider.classList.add('active');
     startX = e.pageX - i_slider.offsetLeft;
     scrollLeft = i_slider.scrollLeft;
   });
 
   i_slider.addEventListener('mouseleave', () => {
     isDown = false;
     i_slider.classList.remove('active');
   });
 
   i_slider.addEventListener('mouseup', () => {
     isDown = false;
     i_slider.classList.remove('active');
   });
 
   i_slider.addEventListener('mousemove', e => {
     if (!isDown) return; 
     e.preventDefault();
     const x = e.pageX - i_slider.offsetLeft;
     const walk = x - startX;
     i_slider.scrollLeft = scrollLeft - walk;
   });
})


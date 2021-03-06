$(document).ready(function(){

  /* Change CSS with Scroll */
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('.gototop').addClass('active')
    }
    else {
      $('.gototop').removeClass('active')
    }   
  })


 
  /* content2 slide controller */
  let slides = document.querySelector('.best_slide_ctn');
  let slideImg = document.querySelectorAll('.best_slide_ctn li');
  currentIdx = 0;
  slideCount = slideImg.length;
  prev = document.querySelector('#prev');
  next = document.querySelector('#next');
  slideWidth = 700;

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
    if (currentIdx >= 0) {
      slides.style.left = 0 + 'px';
      slides.style.transition = `${0.5}s ease-out`;
    }
    currentIdx -= 1;
  });

  /* content4 controller scroll */
  let s_slides = document.querySelector('.showroom_slider_ctn');
  let s_slideImg = document.querySelectorAll('.showroom_slider_ctn li');
  s_currentIdx = 0; //현재 인덱스
  s_slideCount = s_slideImg.length; // 슬라이드 안 콘텐츠 갯수
  s_prev = document.querySelector('#s_prev'); //이전 버튼
  s_next = document.querySelector('#s_next'); //다음 버튼
  s_slideWidth = 885; //슬라이드이미지 넓이
  s_slideMargin = 0; //슬라이드 끼리의 마진값

  makeClone(); // 처음이미지와 마지막 이미지 복사 함수
  initfunction(); //슬라이드 넓이와 위치값 초기화 함수

  function makeClone() {
    let cloneSlide_first = s_slideImg[0].cloneNode(true);
    let cloneSlide_last = s_slides.lastElementChild.cloneNode(true);
    s_slides.append(cloneSlide_first);
    s_slides.insertBefore(cloneSlide_last, s_slides.firstElementChild);
  }
  function initfunction() {
    s_slides.style.width = (s_slideWidth + s_slideMargin) * (s_slideCount + 2) + 'px';
    s_slides.style.left = -(s_slideWidth + s_slideMargin) + 'px';
  }

  s_next.addEventListener('click', function () {
    //다음 버튼 눌렀을때
    if (s_currentIdx <= s_slideCount - 1) {
      //슬라이드이동
      s_slides.style.left = -(s_currentIdx + 2) * (s_slideWidth + s_slideMargin) + 'px';
      s_slides.style.transition = `${0.5}s ease-out`; //이동 속도
    }
    if (s_currentIdx === s_slideCount - 1) {
      //마지막 슬라이드 일때
      setTimeout(function () {
        //0.5초동안 복사한 첫번째 이미지에서, 진짜 첫번째 위치로 이동
        s_slides.style.left = -(s_slideWidth + s_slideMargin) + 'px';
        s_slides.style.transition = `${0}s ease-out`;
      }, 500);
      s_currentIdx = -1;
    }
    s_currentIdx += 1;
  });
  s_prev.addEventListener('click', function () {
    //이전 버튼 눌렀을때
    if (s_currentIdx >= 0) {
      s_slides.style.left = -s_currentIdx * (s_slideWidth + s_slideMargin) + 'px';
      s_slides.style.transition = `${0.5}s ease-out`;
    }
    if (s_currentIdx === 0) {
      setTimeout(function () {
        s_slides.style.left = -s_slideCount * (s_slideWidth + s_slideMargin) + 'px';
        s_slides.style.transition = `${0}s ease-out`;
      }, 500);
      s_currentIdx = s_slideCount;
    }
    s_currentIdx -= 1;
  });


    /* content5 hold and drag scroll */
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

   
   /* content7 hold and drag scroll */
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


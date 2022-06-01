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

    // slide
    var slide_container;
    var slide_count;
    var slide_position = 1;

    slide_container = $('.best_slide_container');
    slide_count = slide_container.children().length;

    $('#prev').click(function(){
        prev();
    })
    $('#next').click(function(){
        next();
    })

    function prev(){
        if(1<slide_position){
            slide_container.animate({
                left:'+=700px'
            });
            slide_position--;
        }
    }
    function next(){
        if(slide_count>slide_position){
            slide_container.animate({
                left:'-=700px'
            });
            slide_position++;
        }
    }

    // content5 가로 스트롤
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


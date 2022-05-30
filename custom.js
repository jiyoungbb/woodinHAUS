$(document).ready(function(){
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
  const slider = document.querySelector('.gallery_slider');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', e => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', e => {
    if (!isDown) return; 
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
  });
})


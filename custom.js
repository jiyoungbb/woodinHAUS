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
})
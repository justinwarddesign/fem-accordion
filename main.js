$(document).ready(function(){
    $('.question').click(function(){
        $(this).toggleClass('active');
        $(this).next('.answer').toggle(200);
    })
});

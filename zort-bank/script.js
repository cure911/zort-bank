$(document).ready(function () {
    $('.card-cont-gold').click(function(){
        var check = $(this).css('background');
        if(check == "rgb(255, 255, 254) none repeat scroll 0% 0% / auto padding-box border-box"){
            var thiss = $(this);
            $('.card-cont').fadeOut();
            $('.card-cont-gold').fadeOut();
            setTimeout(function(){
                thiss.css('background', 'linear-gradient(0deg, rgba(184,147,46,1) 0%, rgba(248,246,165,1) 55%, rgba(234,216,115,1) 100%)');
                thiss.children('.header').children('img').attr('src', 'img/png2.png');
                thiss.children('.number-card').children('.card-nm').children('p').text('•••• 7564');
                thiss.parent('.card-main').children('.card-cont').css('background', '#ffffffe');
                thiss.parent('.card-main').children('.card-cont').children('.header').children('img').attr('src', 'img/png3.png');
                thiss.parent('.card-main').children('.card-cont').children('.number-card').children('.card-nm').children('p').text('•••• 7564');
                $('.card-cont').css('background','#fffffe');
                $('.card-cont').fadeIn();
                $('.card-cont-gold').fadeIn();
            },500)
            console.log(check)
        } else{
            var thisss = $(this);
            console.log(check)
            $('.card-cont').fadeOut();
            $('.card-cont-gold').fadeOut();
            setTimeout(function(){
                thisss.css('background', '#fffffe');
                thisss.children('.header').children('img').attr('src', 'img/png3.png');
                thisss.children('.number-card').children('.card-nm').children('p').text('•••• 7564');
                thisss.parent('.card-main').children('.card-cont').css('background', 'linear-gradient(0deg, rgba(184,147,46,1) 0%, rgba(248,246,165,1) 55%, rgba(234,216,115,1) 100%)');
                thisss.parent('.card-main').children('.card-cont').children('.header').children('img').attr('src', 'img/png2.png');
                thisss.parent('.card-main').children('.card-cont').children('.number-card').children('.card-nm').children('p').text('•••• 3131');
                $('.card-cont').fadeIn();
                $('.card-cont-gold').fadeIn();
            },500)
        }
    })
});
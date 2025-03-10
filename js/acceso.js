$(document).ready(function() {
    $('.leftbutton').on('click', function(){
       $('#sidebar').toggleClass("active")
    })

    $('#cuadro4').on('click', function () {
        $('body').toggleClass("nuevoeti");
        $('#cuadro4').toggleClass("imgact_wh");
    })

    $('#cuadro6').on('click', function () {
        $('body').toggleClass("dislexia_text");
        $('#cuadro6').toggleClass("dislexia_wh");
    })

    $('#cuadro5').on('click', function () {
        $('body').toggleClass("cursor-view");
        $('#cuadro5').toggleClass("cursor_wh");
    })

    /***********************  audio       **********************/ 
    $('#cuadro1').on('click',function() {
        $('#cuadro1').addClass("playact_wh");
        $('#cuadro1').removeClass("active_sonund");
        $('#cuadro2').removeClass("stopact_wh");

        $('audio')[0].play();
    });

    $('#cuadro2').on('click',function() {
        $('audio')[0].pause();
        $('#cuadro2').addClass("stopact_wh");
        $('#cuadro1').addClass("active_sonund");
        $('#cuadro1').addClass("playact_wh");
    });

    $('#cuadro3').on('click',function() {
         $('audio')[0].currentTime = 0;
        $('audio')[0].pause();
        //$('audio')[0].play();
       /*  $('audio')[0].ended; */
         $('#cuadro1').removeClass("playact_wh");
    });
    
    /******************** guia lectura  *************************** */
    $('#cuadro9').on('click',function() {
        $('#read_guide').toggleClass("sc_read_guide_bar");
        $('#cuadro9').toggleClass("guidereadingact_wh");

        $('body').mousemove( function(e) {
            let x = e.pageX;
            let y = e.pageY;
            //
            let ejex = x+25+"px";
            let ejey = y+"px";

            $('#read_guide').css('top',ejey);
            $('#read_guide').css('left',ejex);

            console.log(ejex,ejey)
        });
    })  

     $('#cuadro12').on('click', function(){
        $('body').toggleClass("c-4");
        $('#cuadro12').toggleClass("book_read");
    })

     $('#cuadro13').on('click', function () {
        $('body').toggleClass("c-1");
       $('body').removeClass("c-2");
    })

    $('#cuadro14').on('click', function () {
        $('body').toggleClass("c-2");
       $('body').removeClass("c-1");
    })

    $('#cuadro15').on('click', function () {
        $('body').removeClass("c-2");
        $('body').removeClass("c-1");
        $('body').toggleClass("c-3"); 
     })

    $('#cuadro16').on('click', function () {   
       $('body').removeClass("c-2");
       $('body').removeClass("c-1");
       $('body').removeClass("c-3"); 
    })
});

var i = 0;
 
(function ($) {
    $.fn.fontText = function (options) {
        var settings = {
            increaseBtn: $('#cuadro7'),
            decreaseBtn: $('#cuadro8')
        };

        options = $.extend(settings, options);
        
        return this.each(function () {
            var element = $(this), clicks = 0;
            
            options.increaseBtn.on('click', function (e) {
                e.preventDefault();
                if (clicks < 3) {
                    var baseFontSize = parseInt(element.css('font-size'));
                    var baseLineHeight = parseInt(element.css('line-height'));
                    element.css('font-size', (baseFontSize + 2) + 'px');
                    element.css('line-height', (baseLineHeight + 2) + 'px');
                    $('#cuadro7').find('div').addClass('cuadroincrease');
                    $('.cuadroincrease').text(clicks+1);
                    clicks += 1;
                }
            });
            
            options.decreaseBtn.on('click', function (e) {
                e.preventDefault();
                if (clicks > 0) {
                    var baseFontSize = parseInt(element.css('font-size'));
                    var baseLineHeight = parseInt(element.css('line-height'));
                    element.css('font-size', (baseFontSize - 2) + 'px');
                    element.css('line-height', (baseLineHeight - 2) + 'px');
                    $('.cuadroincrease').text(clicks-1);
                    clicks -= 1;

                    if (clicks == 0 || clicks == -1) {
                        $('.cuadroincrease').text(' ');
                        $('#cuadro7').find('div').removeClass('cuadroincrease');
                    }
                }
            });
        });
    };
})(jQuery);

$(function () {
    $('p').fontText();
});

var j = 0;
/* -- spacios */ 
(function ($) {
    $.fn.fontSpaceText = function (options) {
        var settings = {
            increaseBtn: $('#cuadro10'),
            decreaseBtn: $('#cuadro11')
        };

        options = $.extend(settings, options);
        
        return this.each(function () {
            var element = $(this), clicks = 0;
            
            options.increaseBtn.on('click', function (e) {
                e.preventDefault();
                if (clicks < 3) {
                    var baseFontSize = parseInt(element.css('letter-spacing'));
                    var baseLineHeight = parseInt(element.css('line-height'));
                    element.css('letter-spacing', (baseFontSize + 2) + 'px');
                    element.css('line-height', (baseLineHeight + 2) + 'px');
                    $('#cuadro10').find('div').addClass('cuadroincrease-space');
                    $('.cuadroincrease-space').text(clicks+1);
                    clicks += 1;
                }
            });
            
            options.decreaseBtn.on('click', function (e) {
                e.preventDefault();
                if (clicks > 0) {
                    var baseFontSize = parseInt(element.css('letter-spacing'));
                    var baseLineHeight = parseInt(element.css('line-height'));
                    element.css('letter-spacing', (baseFontSize - 2) + 'px');
                    element.css('line-height', (baseLineHeight - 2) + 'px');
                    $('.cuadroincrease-space').text(clicks-1);
                    clicks -= 1;
                    if (clicks == 0 || clicks == -1) {
                        $('.cuadroincrease-space').text(' ');
                        $('#cuadro10').find('div').removeClass('cuadroincrease-space');
                    }
                }
            });
        });
    };
})(jQuery);

$(function () {
    $('p').fontSpaceText();
});
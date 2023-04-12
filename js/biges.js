// test load jQuery

zagr = 0;
try {
    $(window).on('load', function(){
      zagr=1;
      console.log("Success");
});
} catch (ReferenceError) {              
window.onload = function() {
   setTimeout(() => { if (zagr!=1){ alert('Перезагрузите страницу, библиотека Jquery была поздно подгружена') } }, 2000);
      console.log("Success base");
}
}

// slaider
var day_text = ["Данный день содержит упражнения на бицепц,грудь,пресс,предплечье","Данный день содержит упражнения на спину,трицепц,пресс,предплечье","Данный день содержит упражнения на ноги,плечи,пресс,предплечье"]
var currentSlide = 0;

function days(){

  if (currentSlide == 0) {
    g='первый'
  };
  if (currentSlide == 1) {
    g='второй'
  };
  if (currentSlide == 2) {
    g='третий'
  };
  return g
}
function nextSlide(e) {
  slides_parent = $(e).parent(),
  slides_list = $(slides_parent).find('.piat_tren')
  text = document.querySelectorAll('.zal');
  var day = document.querySelectorAll('.piat_1_p_1');
  currentSlide = slides_list.index($(slides_parent).find('.show'))
  if (currentSlide+1==3){

    slides_list[0].classList.add('show');
    slides_list[currentSlide].classList.remove('show');
    currentSlide = 0;
    if (text[0]!=undefined){
    text[0].innerHTML = day_text[currentSlide]
      day[2].innerHTML = `день ${days()}`
  }else{
    day[2].innerHTML = `день ${days()}`
  }
}else{
  slides_list[currentSlide+1].classList.add('show');
  slides_list[currentSlide].classList.remove('show');
  currentSlide = currentSlide+1;
  if (text[0]!=undefined){
  text[0].innerHTML = day_text[currentSlide]
    day[2].innerHTML = `день ${days()}`
}else{
  day[2].innerHTML = `день ${days()}`
}
}
}
function prevSlide(e) {
  slides_parent = $(e).parent(),
  slides_list = $(slides_parent).find('.piat_tren')
  text = document.querySelectorAll('.zal');
  var day = document.querySelectorAll('.piat_1_p_1');
  currentSlide = slides_list.index($(slides_parent).find('.show'))
  if (currentSlide+1 == 1){
    
    slides_list[2].classList.add('show');
    slides_list[currentSlide].classList.remove('show');
    currentSlide = 2;
    if (text[0]!=undefined){
    text[0].innerHTML = day_text[currentSlide]
      day[2].innerHTML = `день ${days()}`
  }else{
    day[2].innerHTML = `день ${days()}`
  }
}else{
  slides_list[currentSlide-1].classList.add('show');
  slides_list[currentSlide].classList.remove('show');
  if (text[0]!=undefined){
    currentSlide -= 1
  text[0].innerHTML = day_text[currentSlide]
    day[2].innerHTML = `день ${days()}`
}else{
  day[2].innerHTML = `день ${days()}`
}

currentSlide = currentSlide-1;
}

}

// ajax
    function step1(url){
    window.history.pushState(null, null,"/"+url);
  f=window.location.href
  $(".preload").fadeIn(500);
  $.ajax({
                method: 'get',
                url: `${f}`,
            success: function(data){
      var fieldNameElement = document.getElementById('osnova');
      fieldNameElement.innerHTML = data;
      window.scrollTo(0, 0);
      document.title=data.match(/<title>(.*?)<\/title>/)[1];
      $(".preload").fadeOut(500);
      },
        error: function(){
              console.log('error');
  },
            });
  if (url="test.html"){
    $.getScript('/js/test.js');
  }

}
$(window).on('load', function(){
      $(".preload").fadeOut(500);
});

      $(window).on('popstate',function() {
  $(".preload").fadeIn(500);
       f = window.location.href;
       $.ajax({
                method: 'get',
                url: `${f}`,
            success: function(data){
      var fieldNameElement = document.getElementById('osnova');
      fieldNameElement.innerHTML = data;
      document.title=data.match(/<title>(.*?)<\/title>/)[1];
      $(".preload").fadeOut(500);
      },
        error: function(){
              console.log('error');
  },
            });

    });
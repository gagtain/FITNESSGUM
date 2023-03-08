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
function nextSlide() {
  slides = document.querySelectorAll('.piat_tren');
  text = document.querySelectorAll('.zal');
  var day = document.querySelectorAll('.piat_1_p_1');
  if (currentSlide+1==3){

    slides[0].classList.add('show');
    slides[currentSlide].classList.remove('show');
    currentSlide = 0;
    if (text[0]!=undefined){
    text[0].innerHTML = day_text[currentSlide]
      day[2].innerHTML = `день ${days()}`
  }else{
    day[2].innerHTML = `день ${days()}`
  }
}else{
  slides[currentSlide+1].classList.add('show');
  slides[currentSlide].classList.remove('show');
  currentSlide = currentSlide+1;
  if (text[0]!=undefined){
  text[0].innerHTML = day_text[currentSlide]
    day[2].innerHTML = `день ${days()}`
}else{
  day[2].innerHTML = `день ${days()}`
}
}
}
function prevSlide() {
  slides = document.querySelectorAll('.piat_tren');
  text = document.querySelectorAll('.zal');
  var day = document.querySelectorAll('.piat_1_p_1');
  if (currentSlide+1 == 1){
    slides[2].classList.add('show');
    slides[currentSlide].classList.remove('show');
    currentSlide = 2;
    if (text[0]!=undefined){
    text[0].innerHTML = day_text[currentSlide]
      day[2].innerHTML = `день ${days()}`
  }else{
    day[2].innerHTML = `день ${days()}`
  }
}else{
  slides[currentSlide-1].classList.add('show');
  slides[currentSlide].classList.remove('show');
  currentSlide = currentSlide-1;
  if (text[0]!=undefined){
  text[0].innerHTML = day_text[currentSlide]
    day[2].innerHTML = `день ${days()}`
}else{
  day[2].innerHTML = `день ${days()}`
}
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
//test
  s=0
  n=0
  vids = 0
  text = ''
  x=1


  vopr = [{
    text: 'Сколько раз вы отжимаетесь?',
    vopr1: 'Меньше 10',
    vopr2: '10-20',
    vopr3: '20 и более',
  },
  {
    text: 'Сколько раз вы подтягиваетесь?',
    vopr1: 'Меньше 10',
    vopr2: '10-15',
    vopr3: '15 и более',
  },
  {
    text: 'На сколько вы оцениваете свою физическую подготовку?',
    vopr1: '1-4',
    vopr2: '5-7',
    vopr3: '8-10',
  },
  {
    text: 'Сколько повторений вы делаете классический пресс?',
    vopr1: 'Меньше 10',
    vopr2: '10-20',
    vopr3: '20 и более',
  },
  {
    text: 'Сколько времени вы готовы уделять для тренировки?',
    vopr1: 'Меньше часа',
    vopr2: '1-2 часа',
    vopr3: 'более 2-х часов',
  },
  {
    text: 'Какое у вас телосложение?',
    vopr1: 'худое или полное',
    vopr2: 'среднее',
    vopr3: 'мускулистое',
  },
  {
    text: 'Какое расстояние вы можете пробежать?',
    vopr1: 'Меньше 500м',
    vopr2: '500-1000м',
    vopr3: 'более 1000м',
  },
  {
    text: 'Какой у вас стаж тренировок?',
    vopr1: 'Нету',
    vopr2: '1-2 месяца',
    vopr3: 'более 2-х месяцев',
  },
  {
    text: 'Сколько времени вы держите планку?',
    vopr1: 'Меньше 30 секунд',
    vopr2: '30-60 секунд',
    vopr3: 'более 60-ти секунд',
  },
  {
    text: 'Сколько вам лет?',
    vopr1: 'менее 14',
    vopr2: '14-16',
    vopr3: 'более 16',
  },
  {
    text: 'Сколько раз вы делаете жим лежа со своим весом?',
    vopr1: '1-4 раза',
    vopr2: '5-7 раз',
    vopr3: '8 и более раз',
  },
];
    function otvet(pk){
      nomer = document.querySelectorAll('.test_nomer')[0].innerHTML;
      nomers = document.querySelectorAll('.test_nomer')[0];
      vid = document.querySelectorAll('.test_vopr')[0];
      vopros = document.querySelectorAll('.otvet');
      if (vid.innerHTML == 'Где вы предпочитаете заниматься?'){
        if (pk==1){
          vids = pk;
        }
          if (pk==2){
            vids = pk;
          }
            if (pk==3){
              vids = pk;
            }
      }else{
        s=s+pk;
      }
      f = nomer.split('/')[0];
      n++
      if (n>11){
      test = document.querySelectorAll('.test')[0];
      if (s<13){
        if (vids == 1){
          text = 'ДЛЯ ДОМА: НАЧАЛЬНЫЙ'
          scr =  'dom/nachal.html'
        }
        if (vids == 2){
          text = 'ДЛЯ ЗАЛА: НАЧАЛЬНЫЙ'
          scr =  'zal/nachal.html'
        }
        if (vids == 3){
          text = 'ДЛЯ УЛИЦЫ: НАЧАЛЬНЫЙ'
          scr =  'ylitca/nachal.html'
        }
      test.innerHTML =`<div class="result"><p class="result_title">ВАМ ПОДХОДИТ ТРЕНИРОВКА:</p><p class="a_test result_name" onclick="step1('${scr}')">${text}</p></div>`
      s=0
      n=0
      }
      if ((s<25) && (s>12)){
        if (vids == 1){
          text = 'ДЛЯ ДОМА: СРЕДНИЙ'
          scr =  'dom/sred.html'
        }
        if (vids == 2){
          text = 'ДЛЯ ЗАЛА: СРЕДНИЙ'
          scr =  'zal/sred.html'
        }
        if (vids == 3){
          text = 'ДЛЯ УЛИЦЫ: СРЕДНИЙ'
          scr =  'ylitca/sred.html'
        }
        test.innerHTML =`<div class="result"><p class="result_title">ВАМ ПОДХОДИТ ТРЕНИРОВКА:</p><p class="a_test result_name" onclick="step1('${scr}')">${text}</p></div>`
        s=0
        n=0
      }
      if (s>24){
        if (vids == 1){
          text = 'ДЛЯ ДОМА: ПРОФИ'
          scr =  'dom/prof.html'
        }
        if (vids == 2){
          text = 'ДЛЯ ЗАЛА: ПРОФИ'
          scr =  'zal/prof.html'
        }
        if (vids == 3){
          text = 'ДЛЯ УЛИЦЫ: ПРОФИ'
          scr =  'ylitca/prof.html'
        }
        test.innerHTML =`<div class="result"><p class="result_title">ВАМ ПОДХОДИТ ТРЕНИРОВКА:</p><p class="a_test result_name" onclick="step1('${scr}')">${text}</p></div>`
        s=0
        n=0
      }
      } else{
      f = nomer.split('/')[0];
      nomers.innerHTML = Number(f)+1+'/12';
      vid.innerHTML = vopr[f-1].text;
    vopros[0].innerHTML=vopr[f-1].vopr1;
    vopros[1].innerHTML=vopr[f-1].vopr2;
    vopros[2].innerHTML=vopr[f-1].vopr3;
    };
    }
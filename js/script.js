$(function() {
  // ハンバーガーメニュー
  $('.burger-btn').on('click', function() {
    $('.header-nav').fadeToggle(300);
    $(this).toggleClass('cross');
    $('body').toggleClass('noscroll');
  });

  // スティッキーヘッダー
  var $win = $(window),
      $mv = $('.mv'),
      $header = $('.header'),
      mvHeight = $mv.height();
      fixedClass = 'fixed';

    $win.on('scroll', function() {
      var value = $(this).scrollTop();
      // if ($win.width() > 768) {
        if (value > mvHeight) {
          $header.addClass(fixedClass);
        } else {
          $header.removeClass(fixedClass);
        } 
      // }
    });
    
    // スライダー（横スクロール）
      // var timer;

      // $('#slider').prepend($('#slider li:last-child'));

      // $('#slider').css('left', '-100%');

      // timer = setInterval(sliderTimer, 3000);

      // function sliderTimer() {
      //   $('#slider').animate({'left' : '-=100%'}, 700,
      //   function() {
      //     $(this).append($('#slider li:first-child'));

      //     $(this).css('left', '-100%');
      //   });
      // }

      // スライダー（フェイドイン/フェイドアウト）
      var $current = 1,
          $next = 2,
          $timer,
          $count = $('#slider li').length;

          $('#slider li:not(:first-child)').hide();
          
          $timer = setInterval(sliderTimer, 3000);

          function sliderTimer() {
            $('#slider li:nth-child(' + $current + ')').fadeOut(500);

            $('#slider li:nth-child(' + $next + ')').fadeIn(500);

            $current = $next;

            $next = ++$next;

            if ($next > $count) {
              $next = 1;
            }
          }

  //  プラグイン
    // $('.slider').slick({
      //   autoplay: true,
      //   autoplaySpeed: 2000,
      //   speed: 1000,
      //   fade: true;
      //   cssEase: 'linear'
      // });
});
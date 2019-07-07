$(function () {

  new slideObj({
    images: '#gallery .photos img',
    prev: '#gallery .buttons .prev',
    next: '#gallery .buttons .next',
    auto: false,

  });

/*  new slideObj({
    images: '#gallery .photos img',
    prev: '#gallery .buttons .prev',
    next: '#gallery .buttons .next',
    auto: true,
    rate: 2000
  });*/


  function slideObj(obj) {
    this.images = $(obj.images);
    this.next = obj.next;
    this.prev = obj.prev;
    this.auto = obj.auto;
    this.rate = obj.rate || 5000;

    var i = 0;
    var ctx = this;

    ctxWidth = ctx.images.eq(0).width();
    ctxHeight = ctx.images.eq(0).height();

    var isRun = false;


    this.prevSlide = function () {

      if(isRun){
        return;
      }

      isRun = true;

      ctx.images.eq(i).css({
        left: 0,
        top: 0,
        right: 'auto',
        bottom: 'auto'
      }).animate({
        width: 0,
      }, 2000);
      i--;
      if(i < 0){
        i = ctx.images.length - 1;
      }

      ctx.images.eq(i).css({
        left: 'auto',
        top: 'auto',
        right: 0,
        bottom: 0
      }).animate({
        width: '100%',
      }, 2000, function () {
        isRun = false;
      });
    };


    // Показать следующий
    this.nextSlide = function () {

      if(isRun){
        return;
      }

      isRun = true;

      ctx.images.eq(i).css({
        left: 0,
        top: 0,
        right: 'auto',
        bottom: 'auto'
      }).animate({
        width:0,
      }, 2000);
      i++;


      if(i >= ctx.images.length){
        i = 0;
      }


      ctx.images.eq(i).css({
        left: 'auto',
        top: 'auto',
        right: 0,
        bottom: 0
      }).animate({
        width: '100%',

      }, 2000, function () {
        isRun = false;
      });

    };



    $(ctx.prev).on('click', function(){ctx.prevSlide();});
    $(ctx.next).on('click', function(){ctx.nextSlide();});

    if(ctx.auto){
      setInterval(ctx.nextSlide, ctx.rate);
    }

  }
});


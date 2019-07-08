$(function () {

  new slideObj({
    images: '#gallery .photos img',
    prev: '#gallery .buttons .prev',
    next: '#gallery .buttons .next',
    auto: false,
    rate: 2000
  });

  new slideObj2({
    images: '#gallery .photos2 img',
    prev: '#gallery .buttons2 .prev2',
    next: '#gallery .buttons2 .next2',
    auto: false,
    rate: 5000
  });

/*=====================First Slider===========================*/

  function slideObj(obj) {
    this.images = $(obj.images);
    this.next = obj.next;
    this.prev = obj.prev;
    this.auto = obj.auto;
    this.rate = obj.rate || 5000;

    var i = 0;
    var ctx = this;

    var isRun = false;


    this.prevSlide = function () {

      if(isRun){
        return;
      }

      isRun = true;
    // Скрыть предыдущий
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
      //Показать предыдущий
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


    // Скрыть следующий
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

    // Показать следующий
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


  /*=====================Second Slider===========================*/

  function slideObj2(obj) {

    this.next = obj.next;
    this.prev = obj.prev;
    this.img = $(obj.images);
    this.auto = obj.auto;
    this.rate = obj.rate || 5000;

    var j = 0;
    var slider = this;

    sWt= slider.img.eq(0).width();
    sHt = slider.img.eq(0).height();


    // Предыдущий слайд
    this.prevSlide2 = function () {

    // Скрыть предыдущий слайд
      slider.img.eq(j).css({
        height: sHt,
        width: sWt,
      }).animate({
        left: - sWt,
      }, 2000);
      j--;
      if(j < 0){
        j = slider.img.length - 1;
      }

      // Показать предыдущий слайд
      slider.img.eq(j).css({
        height: sHt,
        width: sWt,
        left: sWt,
      }).animate({
        left:0,
      }, 2000);

    };


    // Следующий слайд
    this.nextSlide2 = function () {

    // Скрыть следующий слайд
      slider.img.eq(j).css({
        height: sHt,
        width: sWt,
      }).animate({
        left:  sWt,
      }, 2000);
      j++;
      if(j >= slider.img.length){
        j =  0;
      }

      // Показать следующий слайд
      slider.img.eq(j).css({
        height: sHt,
        width: sWt,
        left: -sWt,
      }).animate({
        left:0,
      }, 2000);

    };

    if(slider.auto){
      setInterval(slider.nextSlide2, slider.rate);
    }


    $(slider.prev).on('click', function () {slider.prevSlide2();});
    $(slider.next).on('click', function () {slider.nextSlide2();});

  }

});


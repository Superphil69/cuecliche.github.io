$(function() {
	clientStuff();
});

function clientStuff() {

  $('.pic-reel, .pic-thumb').click(function() {
    var $this = $(this),
        position = $this.parent().children().index($this);

    $('.pic-reel').removeClass('active-client').eq(position).addClass('active-client');
    $('.pic-thumb').removeClass('active-client').eq(position).addClass('active-client');
  });


  $('.pic-control-next, .pic-control-prev').click(function() {

    var $this = $(this),
        curActiveClient = $('.pic-belt').find('.active-client'),
        position = $('.pic-belt').children().index(curActiveClient),
        clientNum = $('.pic-reel').length;

      if($this.hasClass('pic-control-next')) {

        if(position < clientNum -1){
          $('.active-client').removeClass('active-client').next().addClass('active-client');
        } else {
          $('.pic-reel').removeClass('active-client').first().addClass('active-client');
          $('.pic-thumb').removeClass('active-client').first().addClass('active-client');
        }

      } else {

        if (position === 0) {
          $('.pic-reel').removeClass('active-client').last().addClass('active-client');
          $('.pic-thumb').removeClass('active-client').last().addClass('active-client');
        } else {
          $('.active-client').removeClass('active-client').prev().addClass('active-client');
        }

      }

  });

}

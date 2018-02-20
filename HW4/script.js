(function ($) {
    $(function () {
       $('.tabs__caption').on('click', 'li', function (event) {
           $('ul.tabs__caption').on('click', 'li', function() {
               $(this).toggleClass('active');
           })
       });
    });
})(jQuery);

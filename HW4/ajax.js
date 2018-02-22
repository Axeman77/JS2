(function ($) {
  $(function () {  // Ждём загрузки страницы
    $('#city').on('keyup',  function (event) { // срабатывет на отпускание кнопки
      $('#city-list').empty();
          if($(this).val().length > 2) { // нужно минимум 3 буквы
            var value = $(this).val(); // здесь начало названия города

            $.post('http://api.spacenear.ru/index.php', {pattern: value}, function(data) {
               try {
                    var result = JSON.parse(data);

                    if (result.length > 0) {
                      $('#city-list').addClass('active');
                      for (var i = 0; i < result.length; i++) {
                        var city = $('<div>').addClass('list').append(result[i]['name']);
                        $('#city-list').append(city);
                      }
                    }
                  } catch(err) {
                    console.log(err);
                  }
                });
          }
        });

        // выбор города из списка городов по клику мыши

        $('#form').on('click', '#city-list', function(event) {
          var cityName = $(this).text();


          if (cityName.length > 0) {
              $('#city').val(cityName);
            }

            $('#city-list').empty().removeClass('active');
        });
    }); // end ready
})(jQuery);

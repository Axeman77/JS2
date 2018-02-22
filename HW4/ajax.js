(function ($) {
  $(function () {  // Ждём загрузки страницы
    $('#city').on('keyup',  function (event) { // срабатывет на отпускание кнопки
      $('#city-list').empty();
          if($(this).val().length > 2) { // нужно минимум 3 буквы
            var value = $(this).val(); // здесь начало названия города

            $.post('http://api.spacenear.ru/index.php', {pattern: value}, function(data) {
               try {
                    var result = JSON.parse(data); // записываем распарсенные данные в переменную

                    if (result.length > 0) {
                      $('#city-list').addClass('active'); // берем блок и присваиваем класс
                      for (var i = 0; i < result.length; i++) {
                        var city = $('<div>').addClass('list').append(result[i]['name']);
                        // создаем див добавляем класс и вставляем имя из пременной
                        $('#city-list').append(city); //  вставляем созданый блок
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
          var cityName = $(this).text(); // берм текст из блока


          if (cityName.length > 0) {
              $('#city').val(cityName); // вставляем в инпут
            }

            $('#city-list').empty().removeClass('active'); // чистим инпут
        });
    }); // end ready
})(jQuery);

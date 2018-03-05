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

(function ($) {
    $(function () {
        $('#dob').datepicker({
            changeMonth: true,
            changeYear: true,
            yearRange: '-120:+0',
            maxDate: 0,
            dateFormat:'dd.mm.yy',
            monthNames: [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
                        'Октябрь', 'Ноябрь', 'Декабрь' ],
            numberOfMonths: 3,
            firstDay: 1,
            dayNamesMin: ['Вс', 'Пн','Вт','Ср','Чт','Пт','Сб' ],

        });
    });
})(jQuery);


(function ($) {
    $(function () {
        var leftUIEl = $('.carousel-arrow-left');
        var rightUIEl = $('.carousel-arrow-right');
        var elementsList = $('.carousel-list');

        var pixelsOffset = 125;
        var currentLeftValue = 0;
        var elementsCount = elementsList.find('li').length;
        var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
        var maximumOffset = 0;

        leftUIEl.click(function() {
            if (currentLeftValue != maximumOffset) {
                currentLeftValue += 125;
                elementsList.animate({left: currentLeftValue + 'px'}, 500);
            }
        });

        rightUIEl.click(function() {
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= 125;
                elementsList.animate({left: currentLeftValue + 'px'}, 500);
            }
        });
    });
})(jQuery);


(function ($) {
    $(function () {

        function isName( value ) {
            return (/[a-zA-Zа-яёА-Я]+/g).test( value );
        }

        function isPhone( value ) {
            return (/^\+7\(\d{3}\)\d{3}-\d{4}$/g).test( value );
        }

        function isEmail( value ) {
            return (/\w+\@mail\.ru|\w+\.\w+\@mail\.ru|\w+-\w+\@mail\.ru/g).test( value );
        }

        function isText( value ) {
            return (/[\S]+/g).test( value );
        }

        $('#submit').on('click', function (evt) {
            evt.preventDefault();

            var user = document.getElementById('user_name');
            var phone = document.getElementById('user_phone');
            var email = document.getElementById('user_email');
            var text = document.getElementById('user_text');

            if ( !isName(user.value) ) {
                $(user).effect('bounce', { times: 3 }, 'slow');
                $('#err_name').dialog();
            }

            if ( !isPhone(phone.value) ) {
                $(phone).effect('bounce', { times: 3 }, 'slow');
                $('#err_phone').dialog();
            }

            if ( !isEmail(email.value) ) {
                $(email).effect('bounce', { times: 3 }, 'slow');
                $('#err_email').dialog();
            }

            if ( !isText(text.value) ) {
                $(text).effect('bounce', { times: 3 }, 'slow');
                $('#err_text').dialog();
            }
        });
    });
})(jQuery);
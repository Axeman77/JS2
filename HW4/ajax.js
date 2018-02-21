(function ($) { // Ждём загрузки страницы
    $('#submit').on('click',  function (event) {
        jQuery.ajax({    // Начало конструкции для работы с Ajax через jQuery
            type: 'POST', // Метод, которым получаем данные из формы
            url: 'http://api.spacenear.ru/index.php', // Обработчик формы.
            data: jQuery("#form").serialize(), // Этот метод, берет форму с id=form и достает оттуда данные
            success: function(html) {    // функция выполняемая при успешном отправлении данных
            jQuery("body").empty();    // очищаем тело документа
            jQuery("body").append("<h2><center>Ваше сообщение успешно отправлено.</center></h2>"); // вставляем сообщение об успехе
            }
        });
    });
})(jQuery);


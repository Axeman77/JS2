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


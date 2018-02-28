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

  // проверка формы

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
    };

    document.getElementById('submit').addEventListener('click', function (evt) {
        evt.preventDefault();

        var user = document.getElementById('user_name');
        var phone = document.getElementById('user_phone');
        var email = document.getElementById('user_email');
        var text = document.getElementById('user_text');

        if ( !isName(user.value) ) {
            user.classList.add('red');
            document.getElementById("err_name").style.display="block";
        }
        if ( !isPhone(phone.value) ) {
            phone.classList.add('red');
            document.getElementById("err_phone").style.display="block";
        }
        if ( !isEmail(email.value) ) {
            email.classList.add('red');
            document.getElementById("err_email").style.display="block";
        }
        if ( !isText(text.value) ) {
            text.classList.add('red');
            document.getElementById("err_text").style.display="block";
        }
    });

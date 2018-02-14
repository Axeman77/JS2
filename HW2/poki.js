var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/?limit=151', true);

xhr.send();

xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
          var info = xhr.responseText;
          try {
            var p = JSON.parse(info);
            console.log(p);
          } catch (err) {
            alert ( "Извините, в данных ошибка" );
            alert( err.name );
            alert( err.message );
          }
      }
      console.log(p.results[1].name);
    }
};


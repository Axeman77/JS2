
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

          var pokemons = p.results;
          var ul = document.createElement('ul');

          for(var i = 0; i < pokemons.length; i++) {
              var li = document.createElement('li');
              var image = document.createElement('img');
              var span = document.createElement('span');
              span.textContent = pokemons[i].name;
              image.src = (i + 1) + '.png';
              li.appendChild(span);
              li.appendChild(image);
              ul.appendChild(li);
          }

          document.body.appendChild(ul);
      }
    }
};



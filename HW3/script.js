window.onload = function() {

  // замена одинарных кавычек на двойные

  function repWord () {

  text = document.getElementById('txt');

  text.replace(/'/g, '"');

    return text;

  }

  repWord();
}; // end window.onload

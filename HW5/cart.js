function Container() {
    this.id = '';
    this.className = '';
    this.element = null;
}

Container.prototype.render = function() {
    if(this.element) {
      return this.element;
    } else {
      var div = document.createElement('div');
      div.id = this.id;
      div.classList.add(this.className);
      this.element = div;
      return div;
    }
};

function Cart(options) {
  Container.call(this);
  var content;
  this.id = options.id;
  this.className = options.className;

  this.init = function (callback) {
    var xhr = new XMLHTTPRequest();
    xhr.open = ('GET', Cart.endpoint + '/get');
    xhr.send = ('userId = options.userId')

    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHTTPRequest.DONE) {
        if (xhr.status === 200) {
          try {
            var response = JSON.parse(xhr.responseText);
            content = response.basket;
            if (typeof callback === 'function') {
              callback();
            }
          } catch (err) {
            console.error(err);
          }
        }
      }
    }
  }

  this.getContent = function() {
    return content;
  }

  this.getTotalSum = function() {
    if (content && content.length) {
      return content.reduce(function(acc, item) {
        return acc + item.price;
      }, 0)
    }
  }
}

Cart.endpoint = 'http://localhost:3000/cart';

Cart.prototype = Object.create(Container.prototype);
Cart.prototype = function () {
  if (this.getContent()) {

  } else {
    this.init(function() {

    });
  }
}

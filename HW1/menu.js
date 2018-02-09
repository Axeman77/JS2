function Container() {
    this.id = '';
    this.className = '';
}

Container.prototype.render = function() {
    var div = document.createElement('div');
    div.id = this.id;
    div.classList.add(this.className);

    return div;
};

function Menu(_id, _class, _items) {
    Container.call(this);

    this.id = _id;
    this.className = _class;
    this.items = _items;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;

Menu.prototype.render = function() {
    var ul = document.createElement('ul');
    ul.id = this.id;
    ul.classList.add(this.className);
    for(var i = 0; i < this.items.length; i++) {
        if(this.items[i] instanceof MenuItem) {
            ul.appendChild(this.items[i].render());
        }
    }

    return ul;
};

function MenuItem(href, label) {
    Container.call(this);

    this.href = href;
    this.label = label;
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.constructor = MenuItem;

MenuItem.prototype.render = function() {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = this.href;
    a.textContent = this.label;
    li.appendChild(a);

    return li;
}

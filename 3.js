var owl = {
    name: 'Сова',
    says: function () {
        console.log(this.name + ' говорит: ух!');
    }
};


var owl2 = {
    name: 'Ещё одна сова',
    says: function () {
        console.log(this.name + ' говорит: ух!');
    }
};

function Owl(name) {
    this.name = name;
}

Owl.prototype.says = function () {
    console.log(this.name + ' говорит: ух!');
};

var owl3 = new Owl('Прототипная сова');
ow3.says();


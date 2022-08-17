class List{
    constructor(){
        this.data = [];
    }

    add(nome){
        this.data.push(nome);
        console.log(this.data);
    }
}

class ToList extends List{
    constructor(){
        super();
        this.usuario = 'Patrick';
    }

    getusuario(){
        console.log(this.usuario);
    }

    static soma(a, b){
        return a+b;
    }
}

const tolist = new ToList();

/* document.getElementById('newtodo').onclick = () => {
    tolist.add('Perrin');
    tolist.getusuario();
} */

console.log(ToList.soma(5, 9));

function teste(x){
    let y=4;
    if(x>2){
        y=6;
        console.log(x, y);
    }
}

teste(10);

const arr = [1,2 ,3, 4, 6, 8, 9];

const newArr = arr.map((item) => item * 2);

console.log(newArr);

const soma = arr.reduce(function(total, next){
    return total + next;
})

console.log(soma);

const filter = arr.filter((item) => item % 2 === 0);

console.log(filter);

const find = arr.find((item) => item === 3);

console.log(find);

const test = () => {
    return {nome: 'Patick'};
}
console.log(test());

function somaDefault (a = 2, b = 3){
    return a+b;
}

console.log(somaDefault(9))
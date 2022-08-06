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
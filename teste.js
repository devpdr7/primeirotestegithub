class Nota {
    constructor(descricao) {
        this.descricao = descricao;
    }
    exibir() {
        console.log(this.descricao);
        console.log('------------');
    }
}

class Gerenciador {
    lista = new Array();
    
    adicionar(descricao) {
        let nota = new Nota(descricao);
        notas.push(nota);
    }

    exibirTodas() {
       for(let nota in notas) {
        nota.exibir();
       }
    }
}

let gerenciador = new Gerenciador();

while(true) {
    console.log(`1. Adicionar Notas`);
}
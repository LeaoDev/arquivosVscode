class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome,profissao = 'medico'){
        super(sobrenome)
        this.profissao = profissao
        
    }
}

class Filho extends Pai{
    constructor(){
        super('leao')
    }
}

const filho = new Filho
console.log(filho)
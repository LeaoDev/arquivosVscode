const a = 1
const b = 2
const c = 3

const obj1 = {a: a ,b: b ,c: c} // pode mudar os atributos 
const obj2 = { a, b , c } // nao pode mudar os atributos

console.log(obj1,obj2)

const nome = 'nota'
const valor = 7.21

const obj3 = {}
obj3[nome] =  valor

console.log(obj3)

const obj4 = {[nome]: valor}
console.log(obj4)


const  obj5 = {
    funcao1: function () {
        // ...
    },
    funcao2(){

    }
}
console.log(obj5)





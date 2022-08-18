// Funcion constructora = plantilla = classs
/* function Carro(Modelos) {
    this.Modelos = Modelos;

    this.velocidad = function (){
        return `${this.Modelos} velocidad Max 260 mph`
    }
}

Carro.prototype.velocidadKm = function(){
    return `${this.Modelos} velocidad Max 418 kmph`
}

const mercedez = new Carro("Mercedez c500");
const audy = new Carro("Audy Rs7");
console.log(mercedez.velocidad())
console.log(audy.velocidadKm()) */

class Carro {
    constructor (Modelo,año){
        this.Modelo = Modelo;
        this.año = año;
    }
    
    
    velocidad(){
        return `${this.Modelo} Alcanza 260 mph`
    }

    static velocidadKm (Modelo){
      return `${Modelo} -Aceleracion inicial `;
    }
}




class Confecionary extends Carro {

   #color = []

    set serColor(color){
        this.#color.push(color)
    }

    get getColor(){
        return this.#color
    }

    
}

console.log(Carro.velocidadKm('Audy en etapa de : '))

const audy = new Confecionary('Audy S8 r', 2018);

audy.serColor = 'Aqua blue'
audy.serColor = 'White bones'
audy.serColor = 'Red Carmessi'

console.log(audy.getColor)
//console.log(audy.velocidad())
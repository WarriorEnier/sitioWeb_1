/* Funcion del nav */
/* window.addEventListener('scroll', bajando);

function bajando() {
    let header = document.getElementById('header');

    if (window.scrollY >= 500) {
        header.classList.remove('transparente');
    } else {
        header.classList.add('transparente');
    }
}

/* Funcion de Hamburguesa 
document.addEventListener('click', abrirBurguer);

function abrirBurguer() {
    const burguer = document.getElementById('burguer');
    const menu = document.getElementById('menu');
    burguer.classList.toggle('abierto');
    menu.classList.toggle('abierto');
}

let screenW = screen.width;
console.log(screenW); */


class ClassWithPrivateField {
    #privateField
  
    constructor() {
      this.#privateField = 42
      //this.#randomField = 666 // Syntax error
    }

    set setPrivateField(valor){
        this.#privateField = valor;
    }

    get getPrivateField(){
        return this.#privateField;
    }
}
  
  const instance = new ClassWithPrivateField()
  console.log(instance.getPrivateField);

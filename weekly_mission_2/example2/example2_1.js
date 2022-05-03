console.log("POO")

//Objeto de js
const woopa_obj = {
    name: "Woopa",
    mission: "Node JS",
    age: "12",
    color: "pink"
}

//Crear una clase
/*
1. Como crear una clase
2. Como instanciar un objeto de una clase
3. Instanciar varios objetos de una misma clase
4. Como agregar el constructor para guardar a atributos al crear un objeto
5. Crear métodos
*/
class Ajolonauta {
    constructor(name, mission, age, color){
        this.name = name
        this.mission = mission
        this.age = age
        this.color = color
    }

    sayHello(){
        return `${this.name} is saying Hello!`
    }

}

console.log(Ajolonauta)

const woopa = new Ajolonauta("Woopa", "Node JS", 18, "pink") //instanciar un objeto
const wooper = new Ajolonauta("Wooper", "Java", 10, "Blue")
console.log(wooper.name)

//const woopy = new Ajolonauta()

const woopa_obj_js = {}

console.log(woopa)
console.log(woopa.sayHello())
console.log(wooper)
//console.log(woopy)  //Objeto que viene de uan clase

console.log(woopa_obj_js) //Objeto de JS


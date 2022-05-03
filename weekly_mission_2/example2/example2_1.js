console.log("POO")

//Objeto de js
const woopa_obj = {
    name: "Woopa",
    mission: "Node JS",
    age: "12",
    color: "pink"
}

//Crear una clase
class Ajolonauta {
    constructor(name, mission, age, color){
        this.name = name
        this.mission = mission
        this.age = age
        this.color = color
    }
}

console.log(Ajolonauta)

const woopa = new Ajolonauta("Woopa", "Node JS", 18, "pink") //instanciar un objeto
const wooper = new Ajolonauta("Wooper", "Java", 10, "Blue")
//const woopy = new Ajolonauta()

const woopa_obj_js = {}

console.log(woopa)
console.log(wooper)
//console.log(woopy)  //Objeto que viene de uan clase

console.log(woopa_obj_js) //Objeto de JS


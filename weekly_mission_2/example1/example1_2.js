console.log("Creación de un objeto con propiedades")

const explorer = {
    name: "Cristobal",
    age: 30,
    mission: "NodeJS",
    stack: ["js", "node", "react", "vue"],
    blog: { 
        url: "github.com/CrisBarrera/blog",
        posts: 5
    } // esto es un objeto
}

console.log(explorer)

console.log("Accediendo a las propiedades del objeto")
console.log(explorer.name)
console.log(explorer["name"])
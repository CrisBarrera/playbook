const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

console.log(explorers)

console.log("Ejercicio 2.1")
// => es como si se definiera una función 
explorers.forEach(explorer => console.log(explorer.name))
console.log("Ejercicio 2.2")
explorers.forEach(explorer => console.log(explorer.stack))

console.log("Ejercicio 2.3")
//Map crea una nueva lista apartir de lo que se quiera
const explorers_stack = explorers.map(explorer => explorer.stack)
console.log(explorers_stack)

console.log("Ejercicio 2.4")
const explorers_with_js = explorers.filter(explorer => explorer.stack.includes("js"))
console.log(explorers_with_js)

console.log("Ejercicio 2.5")
const first_explorer_in_cdmx = explorers.find(explorer => explorer.city === "CDMX")
console.log(first_explorer_in_cdmx)

console.log("Ejercicio 2.6")
// La variable acc es el acumulador que necesita la función 
const all_exercises = explorers.reduce((acc, explorer) => acc + explorer.exercises_completed, 0)
console.log(all_exercises)
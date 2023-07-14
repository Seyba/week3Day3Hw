class Governor {
    static officials = ['mayors', 'officers', 'judges']
    constructor(state, terms) {
      this.state = state
      this.terms = terms
      isElected = true
    }
  
    static resign() {
      console.log(`governor's resignation notice!!!`)
    }
    static addNewOfficial(newOfficial) {
      this.officials.push(newOfficial)
    }
    static notElected(){
      return this.isElected = false
    }
  }
  Governor.resign()
  const officialsCount = Governor.officials.length
  console.log(Governor.officials[0])
  const electionsYet = Governor.notElected()
  console.log('Governor Election ', electionsYet)
  console.log(officialsCount)
  
  
  class Person {
    constructor(name, age, gender) {
      this.name = name
      this.age = age
      this.gender = gender
    }
  }
  
  class PostalWorker extends Person {
    dispatchMailMan() {
      console.log('dispatching mailman')
    }
    hireDriver() {
      console.log('Hiring drivers')
    }
  
  }
  
  class Chef extends Person {
    makeDinner() {
      return 'Making dinner'
    }
    makeLunch() {
      return 'making lunch'
    }
  }
  
  const johnDoe = new PostalWorker('John Doe', 34, 'M')
  const janeDoe = new PostalWorker('Jane Doe', 29, 'F')
  console.log(johnDoe.age)
  
  const chefMike = new Chef('Mike', 43, 'M')
  const chefTina = new Chef('Tina', 45, 'F')
  console.log(chefMike)
  console.log(chefTina)
  console.log(`${chefMike.name} is`, chefMike.makeDinner())
  console.log(chefTina.gender)
export class User {
    firstName: string = ""
    lastName: string = ""
    private age = 0
    static BIRTH_YEAR: number

    setFirstname(firstName: string){
        this.firstName = this.firstName
    }

    setLastname(lastName: string){
        this.lastName = this.lastName
    }

    setAge(age: number){
        this.age = this.age
    }

    getAge(){
        return this.age
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

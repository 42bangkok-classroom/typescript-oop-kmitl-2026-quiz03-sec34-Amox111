export class User {
    firstName: string = ""
    lastName: string = ""
    private age = 0

    setFirstname(){
        this.firstName = this.firstName
    }

    setLastname(){

    }

    setAge(){

    }

    getAge(){
        return 
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Customer{
    ime: string
    prezime: string

    constructor(name: string,prez: string){
        this.ime = name
        this.prezime = prez
    }
}

let newObj = new Customer("Tarik","Curic")
console.log(newObj)

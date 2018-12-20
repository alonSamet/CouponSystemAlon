export class Customer {

    constructor(public id: number,
                public name: string,
                public password: string) { }

    setId(id: number) {
        this.id = id;
    }
    setName(name: string) {
        this.name = name;
    }
    setPassword(password: string) {
        this.password = password;
    }

}

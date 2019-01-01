
// This class generates the company object, which has id, name, password & email

export class Company {
    
    constructor   ( public id : number,
                    public name : string, 
                    public password : string, 
                    public email : string,      ){}

    setId(id : number) {
        this.id = id;
    }
    setName(name : string) {
        this.name = name;
    }
    setPassword(password : string) {
        this.password = password;
    }
    setEmail(email : string) {
        this.email = email;
    }

}

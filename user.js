class User{
    constructor(name, email,age){
        this.name = name;
        this.email =email;
        this.age =age;
    }

    login(){
        return 'welcome ' + this.name;

    }
}

exports.User = User;
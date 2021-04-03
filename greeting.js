function greet (name){
    if (name == '' || name == ' '){
    return 'Hello, my friend.'
    }
    else if (name == name.toUpperCase()){
        return 'HELLO, ' + name + "!!!";
    }
    else{
        return 'Hello, ' + name;
    }
}


exports.greet = greet;
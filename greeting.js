function greet (name){
    if(Array.isArray(name) && name.length > 0){
        return 'Hello ' + name[0] + ' and '+ name[1];
    }
    else{
    if (name == '' || name == ' '){
    return 'Hello, my friend.'
    }
    else if (name == name.toUpperCase()){
        return 'HELLO, ' + name + "!";
    }
    else{
        return 'Hello, ' + name;
    }
}


}



exports.greet = greet;
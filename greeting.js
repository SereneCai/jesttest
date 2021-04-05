function greet (name){
    if(Array.isArray(name) && name.length === 2){
        return 'Hello ' + name.join(" and ");
    }
    else if(Array.isArray(name) && name.length === 3){
        // return 'Hello ' + name[0] + ', ' + name[1] + " and " + name[2];
        name = name.slice(0, name.length-1).join(', ') + ' and ' + name.slice(name.length-1);
        return "Hello " + name;
    }
    else{
    if (name == '' || name == ' '){
    return 'Hello, my friend.'
    }
    else if (name == name.toUpperCase()){
        return 'HELLO, ' + name + "!";
    }
    else{
        return hello() + name;
    }
}
}

function hello(){
    return "Hello, ";
}



exports.greet = greet;
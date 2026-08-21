// console.log(name); //ReferenceError: name is not defined

function varHost() {
    console.log(name);
    console.log(Name);
    var name = "Kasi";
    console.log(name);

    if (false) {
        console.log(Name);
        var Name = "Reddy";
        console.log(Name);

    }
}

varHost();

// Before execution, JavaScript does hoisting.
// The engine internally treats it roughly like this:

/*
function varHost(){

    var name; // hoisted
    var Name; // hoisted

    console.log(name);
    console.log(Name);

    name = "Kasi";
    console.log(name);

    if(false){
        console.log(Name);
        Name = "Reddy";
        console.log(Name);
    }
}
    */
function fullName(person: {firstName: string, lastName: string}) {

    console.log(`${person.firstName} ${person.lastName}`);

}


let p = {

    firstName: 'Bruce',
    lastName : 'Wayne's
}

fullName(p);




//o para hacerlo mas elegante primero creamos una interface 
//y decimos que el objeto va a tener la forma de esa interface
interface Person {

    firstName: string;
    // parametro opcional (?:)
    lastName?: string;
}

function fullName2(person: Person) {

    console.log(`${person.firstName} ${person.lastName}`);
}

fullName2(p);
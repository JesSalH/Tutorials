


// ejemplo de enum
enum Color {Red = 5, Green, Blue}

let c:Color = Color.Green 
console.log(c)//-> Devuelve un 6



// las variables pueden tener tipo any o unknown,
let var1: any = 10;
var1 = 'Pepe'   // -> le hemos asignado un valor de otro tipo

//tipo unknown
let var2: unknown = 10;

console.log(myVariable.name); // esto da error porque aun no hemos hecho el casting de la varible a string
 myVariable();  // esto tb da error, pero si la pusieramos de tipo any si que se podr'ia hacer
 (myVariable as string).toUpperCase() // --> el uppercase si que funciona porque antes hemos hecho un casting de UNKNOWN A STRING



//funcion que tiene como parametro un objeto (objParam) de tipo any
//devuelve un tipo objParam que tiene un string llamado name
 function hasName(objParam: any): objParam is {name: string} {

        // toda esta m significa:
            // vamos a devolver un objeto tipo objParam
        return  !!objParam &&
            //  esto significa que el tipo de este elemento devuelto es object ...?
            typeof objParam === "object" &&
            //  y esto que  la variable name tiene que estar dentro del objeto devuelto
            "name" in objParam

 }


//  Funciones

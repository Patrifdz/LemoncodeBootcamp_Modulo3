console.log("________________________________________")
console.log("EJERCICIO CALCULAR PRECIO COMPRA CON IVA");

const product = {
     count: 3, 
     price: 12.55, 
     type: "ropa" 
}

// Declaro las variables "precioTotal" e "IVA", con "let" para poder asignarles después valor dependiendo de la cantidad, precio y tipo de producto: 
let precioTotal;
let IVA;

// Este ternario es para que no calcule importes negativos, cuando se de el caso de que haya stock negativo, asignando el valor "0" a precioTotal, lo que hará que la multiplicación de "count" por "price" sea cero en dichos casos. 
product.count>=0 ? precioTotal : precioTotal = 0;

// Calculo precioTotal sin IVA:
precioTotal = product.count * product.price;
console.log("El precio total SIN IVA es: " + precioTotal);

// Este switch determina el porcentaje de IVA a aplicar dependiendo del tipo de producto de que se trate:
switch (product.type) {
    case "ropa": IVA = 0.21;
    break;
    case "alimentacion": IVA = 0.04;
    break;
    case "libro": IVA = 0.1;
    break;
};

// Sumo precioTotal más el porcentaje de IVA:
precioTotal += precioTotal*IVA;
console.log("El precio total CON IVA es: " + precioTotal);

console.log("_______________________________________")
console.log("EJERCICIO CALCULAR NÓMINA CON RETENCIÓN");

const empleado = {
    bruto: 12000,
    hijos: 2,
    pagas: 14
   }

// Declaro las variables:
let retencion;
let sueldoAnual;

// Con este "if" determino el porcentaje de retención de IRPF dependiendo del sueldo anual del trabajador:
if (empleado.bruto < 12000) {
    retencion = 0;
} else if (empleado.bruto>=12000 && empleado.bruto<24000) {
    retencion = 0.08;
} else if (empleado.bruto>=24000 && empleado.bruto<34000){
    retencion = 0.16;
} else 
    retencion = 0.30;

// Con este ternario, determino si la retención calculado con el "if" debe reducirse si el empleado tiene hijos y si tiene retención mayor que cero según su salario anual:
(retencion >0 && empleado.hijos>0) ? retencion= retencion - 0.02 : retencion;

// Calculo sueldo anual total restandole la retención que le corresponda según su situación:
sueldoAnual = empleado.bruto - empleado.bruto*retencion;
console.log("El sueldo anual del empleado es: " + sueldoAnual);

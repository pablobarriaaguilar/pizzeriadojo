function pizzaOven(tipoCorteza, tipo, quesos, ingredientes) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipo = tipo;
    pizza.quesos = quesos;
    pizza.ingredientes = ingredientes;
    return pizza;
}
    
var s1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);

var s2 = pizzaOven("Lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceituas", "cebollas"]);

var s3 = pizzaOven("Lanzada a mano", "marinara", ["mozzarella", "feta"], ["pollo", "pepperoni", "cebollas"]);

var s4 = pizzaOven("Lanzada a mano", "marinara", ["mozzarella", "feta"], ["tocino", "champiñones", "aceitunas"]);

console.log("primera pizza:");
console.log(s1);
console.log("segunda pizza");
console.log(s2);
console.log("tercera pizza");
console.log(s3);
console.log("cuarta pizza");
console.log(s4);
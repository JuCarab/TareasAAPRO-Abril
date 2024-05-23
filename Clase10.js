var nombre;
var nombre = "Julieta";

var apellido;
var apellido= "Carabajal";

console.log(nombre+" "+apellido);

var numero1= 18;
var numero2= 80;
var suma;

suma = numero1 + numero2;
console.log(suma);

var numero3;
var numero3 = 30;

numero3 = suma + numero3;
console.log(numero3);


var topping = "Rocklets";
var precioFinal = 8000;


if (topping >= 10 && topping <= 25){
    if(topping == "Oreo"){
        precioFinal = precioFinal + 10 }
        
     else if(topping == "Kitkat"){
        precioFinal = precioFinal + 15 }
    else if( topping == "Kinder"){
        precioFinal = precioFinal  + 25 }
    } else {
        console.log("No tenemos este topping")
    }
    console.log("El precio del helado es de " + precioFinal);
    
        
    precioFinal = helado + topping;
    console.log(precioFinal);
    

    var pedido; 
    switch (pedido) {
        case "Carne":
          console.log("Vino tinto");
          break;
        case "Pescado":
          console.log("Vino blanco");
          break;
        case "Verdura":
          console.log("Agua");
          break;
        default:
          console.log("Elija carne, pescado o verdura");
          break;
      }

      let edades = [10, 25, 30, 40, 50, 60, 70];
      console.log(edades);
      console.log(edades[0]);
      console.log(edades[6]);
      for( let index = 0 ; index < edades.length ; index++){
        const element = edades[index];

      }

      var numero = 5;
      while(numero<11) {
        console.log(numero + "El numero es menor que 11")
        numero++
      }
      
      

      
      
      



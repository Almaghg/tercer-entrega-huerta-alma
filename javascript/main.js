  

const producto = function (tipo, nombre, precio, stock){
  this.tipo = tipo
  this.nombre = nombre
  this.precio = precio
  this.stock = stock
} 

let producto1 = new producto("Guarnición", "Arroz a la jardinera", 75, 20);
let producto2 = new producto("Guarnición", "Frijoles refritos", 75, 15);
let producto3 = new producto("Guarnición", "Papas adobadas", 75, 10);
let producto4 = new producto("Guiso", "Tinga de pollo", 90, 15);
let producto5 = new producto("Guiso", "Bistec a la mexicana", 90, 10);
let producto6 = new producto("Guiso", "Fajitas de pollo", 90, 20);
let producto7 = new producto("Guiso", "Bistec encacahuatado", 90, 25);
let producto8 = new producto("Vegetariano", "Guisado de garbanzo", 75, 10);
let producto9 = new producto("Vegetariano", "Suflé de verduras", 75, 15);
let producto10 = new producto("Vegetariano", "Soya adobada", 75, 20);

let menu = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10]

const agregarAlCarrito = document.getElementsByClassName("agregar");
const card = document.getElementsByClassName("card-menu")


agregarAlCarrito.addEventListener("click", ()=>{
  const buyProduct = document.createElement("div")
  buyProduct.innerHTML
  `
  let titulo = item.getElementsByClassName('card-text').innerText;
  let imagenSrc = item.getElementsByClassName('card-img-top').src;
  
  `
  card.appenchild(buyProduct)

  agregarAlCarrito(titulo, imagenSrc);
})
//No funciona el evento :(

// Código para formulario de página contacto 
const inputName = document.getElementById("inputName")
const inputMail = document.getElementById("inputMail")
const inputComentario = document.getElementById("inputComentario")


const enviarFormulario = document.getElementById("enviarFormulario")

enviarFormulario.addEventListener("click", function(){
  localStorage.setItem("name", inputName.value)
  localStorage.setItem("mail", inputMail.value)
  localStorage.setItem("comentario", inputComentario.value)
})





/* const buscar = getElementById("buscar");

buscar.addEventListener("click", function buscarProducto (){
  let productoBuscado = ge("Buscar").trim().toUpperCase()
  let resultado = menu.filter((producto) => producto.nombre.toUpperCase().includes(productoBuscado))

if(resultado.length > 0){
	console.table(resultado)
}else{
	alert("No se encontró coincidencia para " + productoBuscado)

}})
 */





// Ejercicio 9: Promesas y fetch

fetch("https://api.randomuser.me/?nat=US&results=1").then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
});

// Ejercicio 8: Operador de propagación

// const arr1 = [1, 2, 4, 5, 3];
// const arr2 = [4, 5, 6];

// const arrCompleto = [...arr2, ...arr1];
// console.log(arrCompleto);

// const personalData = {
//   name: "Uriel",
//   age: 25,
// };

// const contactData = {
//   email: "uriel@hola.mx",
//   phone: "1234567890",
// };

// const completeData = {
//   ...personalData,
//   ...contactData,
// };

// console.log(completeData);
// const completeData2 = { ...completeData, phone: "444444444" };
// console.log(completeData2);

// Ejercicio 7: Desestructuración anidada
// const person = {
//   name: "Uriel",
//   age: 25,
//   address: {
//     street: "Calle inventada",
//     number: 123,
//     city: "León",
//   },
// };

// const {
//   address: { city },
// } = person;
// alert(city);

// const printAddress = ({ address: { street, number, city } }) => {
//   alert(`Tu dirección es: ${street} ${number}, ${city}`);
// };

// printAddress(person);

// Ejercicio 6: Función arrow con contexto y desestructuración
// const tahoe = {
//   name: "Tahoe",
//   getFormattedTitle: function () {
//     console.log(this);
//     alert(this.name.toUpperCase());
//   },
//   getFormattedTitleDelay: function () {
//     setTimeout(() => {
//       console.log(this);
//       alert(this.name.toUpperCase());
//     }, 3000);
//   },
// };

// const { name: mountainName } = tahoe;
// alert(`El nombre de la montaña es: ${mountainName}`);

// Ejercicio 5: Funciones Arrow
// const holaMundo = (nombre) => alert(`Hola, ${nombre}`);
// holaMundo("Uriel");

// Ejercicio 4: Funciones expresivas
// const holaMundo = function (nombre) {
//   alert(`Hola, ${nombre}`);
// };

// holaMundo("Uriel");

// Ejercicio 3: Funciones declarativas (Hoisting)
// function holaMundo(nombre) {
//   alert(`Hola, ${nombre}`);
// }

// Ejercicio 2: Variables (uso de let en ciclos)
/*
const container = document.getElementById("container");

for (let i = 0; i < 5; i++) {
  const div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.margin = "10px";
  div.style.backgroundColor = "green";
  container.appendChild(div);
  div.addEventListener("click", () => {
    alert("Soy el div número " + i);
  });
}
*/

// Ejercicio 1: Variables

// var text = "Hola";

// if (true) {
//   let text = "Mundo";
//   console.log(text);
// }

// console.log(text);

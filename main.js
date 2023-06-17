// //* consumir la api de Rick and Morty

// // prompt para ingresar valores del usuario
// //var nombreUS = prompt("ingresa tu nombre");


// // Alert para mostrar mensaje al usuario
// // alert(nombreUS + " Bienvenido a la api de Rick and Morty");

// var numero = parseInt(
//     prompt("ingresa un numero"
//     )
// ); // convierte un string a un numero entero
// var numero2 = parseInt(
//     prompt("ingresa otro numero"
//     )
// ); // convierte un string a un numero entero

// var suma = numero + numero2;
// alert("la suma de los numeros es: " + suma);

// //parseInt("1");  // convierte un string a un numero entero

// personajes(mostrarDatos);
// function personajes(done) {

//     const url = 'https://rickandmortyapi.com/api/character';

//     fetch(url)
//         .then(resp => resp.json())
//         .then(data => done(data))
//         .catch(error => console.log(error))
//         .finally(() => console.log('finalizo'));
// }

// const mostrarPersonajes = (resultados) => {
//     console.log(data.resultados);
//     const results = data.results;
//     const section = document.querySelector('.section');
//     let html = '';
//     results.forEach(element => {
//         html += `
//         <div class="card">
//         <img src="${element.image}" alt="${element.name}">
//         <h2>${element.name}</h2>
//         <p>${element.species}</p>
//         </div>
//         `
//     });
//     section.innerHTML = html;
// }


// url referencia a la Api 
const url = 'https://rickandmortyapi.com/api/character';
const url2 = 'https://hp-api.onrender.com/api/characters'


// fetch para consumir la api
const resp = fetch(url)
    .then(resp => resp.json())
    .then(data => { return data.results })
    .catch(error => console.log(error))
    .finally(() => console.log('finalizo'));



const getPersonajes = async () => {


    const personajes = await results.map(
        (personaje) => {
            return {
                id: personaje.id,
                nombre: personaje.name,
                casa: personaje.house
            }
        }
    )

    console.log(personajes);
    return personajes;
}

setTimeout(async () => {
    console.log(await resp);
}, 2000);

async function mostrarDatos(resp) {

    const data = await resp;

    const results = data.results;
    const section = document.querySelector('.section');
    let html = '';
    data.forEach(element => {
        html += `
        <div class="card">
        <img src="${element.image}" alt="${element.name}">
        <h2>${element.name}</h2>
        <p>${element.species}</p>
        </div>
        `
    });
    section.innerHTML = html;
}

mostrarDatos(resp);





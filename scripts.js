/* DEMONSTRAÇÃO DE WINDOW */

// window.alert("Olá mundo");
// window.prompt("Digite seu nome");
// const array = [1,2,3,4,5];
// window.console.log(array);

/* EXPLICAÇÃO DE NÓS E NODELIST */

// const listaPratos = document.querySelector("#pratos")
// const elementos = listaPratos.childElementCount;
// console.log(elementos);
// const nodes = listaPratos.childNodes;
// console.log(nodes);


/* NODELIST E ARRAYS */

// const listaPratosQSA = document.querySelectorAll('li')
// console.log(listaPratosQSA);

// const listaManual = ["Pizza","Macarronada","Feijoada","Churrasco"];
// console.log(listaManual.length);

// let array1 = [...listaPratosQSA];
// console.log(array1);

// let array2 = Array.from(listaPratosQSA);
// console.log(array2);

 /* DIFERENÇA ENTRE CLASSE E ID */

// const listaPratoclass = document.querySelector("ul");
// console.log(listaPratoclass);

// const listaPratoid = document.querySelector("#comida");
// console.log(listaPratoid);

/* DIFERENÇA ENTRE QUERYSELECTOR E GETELEMENTBYID */

// const listaPratosQS = document.querySelector('#pratos li')
// console.log(listaPratosQS);

// const listaPratosID = document.getElementById('pratos')
// console.log(listaPratosID);


/* DIFERENÇA ENTRE QUERYSELECTORALL E GETELEMENTSBY */

// const listaPratosClass = document.getElementsByClassName('prato')
// console.log(listaPratosClass);

// const listaPratosQSA = document.querySelectorAll('.prato')
// console.log(listaPratosQSA);


/* DIFERENÇA ENTRE HTML COLLECTION E NODELIST */


// const pratos = document.getElementsByClassName("prato");
// console.log(pratos);
// for (let i = 0; i < pratos.length; i ++) {
//     console.log(pratos[i])
// }

// const pratos = document.querySelectorAll("li");
// console.log(pratos);
// pratos.forEach(prato => {
//     console.log(prato);
// })


/* DIFERENÇA ENTRE TEXTOS */

// const lista = document.querySelector(".ul")
// const conteudoLista1 = lista.innerText;
// console.log(conteudoLista1);
// const conteudoLista2 = lista.innerHTML;
// console.log(conteudoLista2);
// const conteudoLista3 = lista.textContent;
// console.log(conteudoLista3);

/* CRIAÇÃO DE ELEMENTOS DIRETAMENTE PELO JS */

// const novaDiv = document.createElement("div")
// novaDiv.classList.add ("nova-classe")
// console.log(novaDiv);
// const novoParagrafo = document.createElement("p")
// novoParagrafo.innerHTML += "Criar elementos aqui";
// console.log (novoParagrafo);
// novaDiv.appendChild(novoParagrafo);
// console.log (novaDiv);
// const body = document.querySelector("body");
// body.appendChild(novaDiv);

/* LISTA ESTÁTICA X LISTA DINÂMICA */

// const listaPratos = document.getElementById("pratos");

/* Com esse comando a lista dinâmica não funciona
// const listaItens = document.querySelectorAll("li")

/* Com esse comando a lista dinâmica funciona */
// const listaItens = document.getElementsByTagName("li")

// const button = document.querySelector("button");
// console.log(button)
// button.addEventListener('click', () => {
//     const li = document.createElement("li");
//     li.textContent += "pastel";
//     listaPratos.appendChild(li);
//     console.log(listaItens.length);
// })
























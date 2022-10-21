let table = '';
let row = '';
let array = [];
let array1 = [];
let x = 0;
let amounts = 0;
function displayProduct(product) {
    amounts++;
    row = `<th>${product}</th> <td><button onclick="edit()">Edit</button></td> <td><button onclick="deleteProduct(x)">Delete</button></td> <br>`;
    array.push(row);
    array1.push(product);
    document.querySelector('#resultproduct').innerHTML += array[array.length-1];
}

function addProduct() {
    let product = document.querySelector('#product').value;
    displayProduct(product);
    document.querySelector('#amounts').innerHTML = amounts;

}

function edit() {

}

function deleteProduct(x) {

    amounts--;
    document.querySelector('#amounts').innerHTML = amounts;
}
let row = '';
let array = [];
let amounts = 0;

function displayProduct() {
    let str = '';
    for (let i = 0; i < array.length; i++) {
        str += `<tr>
                <th>${array[i]}</th> 
                <td><button onclick="editProduct(`+ i +`)">Edit</button></td> 
                <td><button onclick="deleteProduct(`+ i +`)">Delete</button></td>
                </tr>`;
    }
    document.querySelector('#resultproduct').innerHTML = str;
}

displayProduct();

function addProduct() {
    let product = document.querySelector('#product').value;
    array.push(product);
    displayProduct();
    document.querySelector('#amounts').innerHTML = array.length;
    document.querySelector('#product').value = '';
}

function editProduct(inDex) {
    let str = '';
    str = `<input type="text" id="editProduct" value="` + array[inDex] + `">
            <button onclick="saveProduct(` + inDex + `)">Save</button>`;
    document.querySelector('#div2').innerHTML = str;
}

function saveProduct(inDex) {
    array[inDex] = document.querySelector('#editProduct').value;
    displayProduct();
    document.querySelector('#div2').innerHTML = '';
}

function deleteProduct(inDex) {
    array.splice(inDex, 1);
    displayProduct();
    document.querySelector('#amounts').innerHTML = array.length;
}
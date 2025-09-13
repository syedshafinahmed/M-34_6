const handleAddProduct = () =>{
    const productElement = document.getElementById('product')
    const quantityElement = document.getElementById('quantity')
    const product = productElement.value;
    const quantity = quantityElement.value;
    // console.log("add Product", product, quantity);
    displayProduct(product, quantity);
    addProductToCart(product,quantity);
    productElement.value = '';
    quantityElement.value = '';
}

const getCart = () =>{
    const cart = {};
    return cart;
}

const addProductToCart = (product, quantity) =>{
    const cart = getCart();
    cart[product] = quantity;
    console.log("Cart",cart);
}

const displayProduct = (product, quantity) =>{
    const li = document.createElement("li");
    li.innerText = `${product} : ${quantity}`;
    const ul = document.getElementById("products-container");
    ul.appendChild(li);
}

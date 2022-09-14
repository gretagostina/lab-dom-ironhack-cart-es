// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let result = price * quantity;
  product.querySelector('.subtotal span').textContent = result;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelectorAll('.product');
  let totalPrice = 0;
  // Hacemos loop en los productos.
  products.forEach((product, key) => {
    // Usamos la función que actualiza el subtotal
    updateSubtotal(product);
    // El subtotal viene como si fuera texto, encuentro función 'parseInt' que lo convierte a entero.
    let priceValue = parseInt(product.querySelector('.subtotal span').innerHTML);
    totalPrice = totalPrice + priceValue;
  });
  document.querySelector('#total-value span').textContent = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  //Target = el botón 'Remove' que hemos seleccionado.
  const target = event.currentTarget;
  // Buscamos el elemento con clase .product más proximo al botón de borrar seleccionado.
  let productToRemove = event.currentTarget.closest(".product");
  // Borramos todo el html del elemento .product.
  productToRemove.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const products = document.querySelectorAll('.product');
  products.forEach((product, key) => {
    let eliminarProducto = product.querySelector('.btn-remove')
    eliminarProducto.addEventListener('click', removeProduct);
  });
});

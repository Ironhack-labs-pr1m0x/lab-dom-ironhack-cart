// ✅ ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');

  const subTotalCal = Number(price) * Number(quantity);

  subtotal.innerText = subTotalCal;

  return subTotalCal;
}
function calculateAll() {
  // ✅ ITERATION 2

  let sumSubTotals = 0;

  const products = document.querySelectorAll('#cart > tbody > .product');
  products.forEach((product) => {
    sumSubTotals += updateSubtotal(product);
  });

  // ✅ ITERATION 3

  const totalPrice = document.querySelector('#total-value span');
  totalPrice.innerText = sumSubTotals;
}

// ✅ ITERATION 4

function removeProduct(event) {
  event.target.closest('tr').remove();

  // ▼ Recalculate total, when product is removed //
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productsContainer = document.querySelector('#cart tbody');
  const [name, price] = document.querySelectorAll('.create-product input');

  const tr = `<tr class="product">
    <td class="name">
      <span>${name.value}</span>
    </td>
    <td class="price">$<span>${price.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>`;

  productsContainer.insertAdjacentHTML('beforeend', tr);

  // ▼ Re-add remove btn functionality for new updated cart //
  document.querySelectorAll('.btn-remove').forEach((el) => {
    el.addEventListener('click', removeProduct);
  });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // ▼ Add remove functionality //
  document.querySelectorAll('.btn-remove').forEach((el) => {
    el.addEventListener('click', removeProduct);
  });

  // ▼ Add create product functionality //
  document.getElementById('create').addEventListener('click', createProduct);
});

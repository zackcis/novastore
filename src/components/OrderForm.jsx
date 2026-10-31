import { formatPrice } from '../utils/formatPrice.js';

export default function OrderForm({ products, selectedProductId }) {
  function handleChange(event) {
    // target is the edited input/select. value is its current text value.
    // Open F12 > Console to see this. Logging does not require state.
    // Classroom demo only: avoid logging customer information in real shops.
    console.log(`${event.target.name}:`, event.target.value);
  }

  function handleSubmit(event) {
    // Stop the browser from navigating/reloading when the form is submitted.
    event.preventDefault();

    // Read the submitted form; this does not modify the DOM.
    // Inputs are uncontrolled: the browser holds their current values.
    const form = event.currentTarget;
    const data = new FormData(form);
    const customerName = String(data.get('customerName') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const productId = Number(data.get('productId'));
    // An empty field must not accidentally become Number('') === 0.
    const quantityText = String(data.get('quantity') ?? '').trim();
    const quantity = quantityText === '' ? NaN : Number(quantityText);
    const product = products.find((item) => item.id === productId);

    if (!customerName) {
      alert('Please enter your name.');
      return; // Stop here instead of calculating an invalid order.
    }
    if (!email || !form.elements.namedItem('email').validity.valid) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!product) {
      alert('Please select a product.');
      return;
    }
    if (!product.available) {
      alert('This product is out of stock.');
      return;
    }
    if (!Number.isInteger(quantity) || quantity <= 0) {
      // A LIVE JSX error would require a re-render (normally with useState).
      // In this no-state correction, show the error in an alert on submission.
      alert('Quantity must be greater than 0 and must be a whole number.');
      return;
    }
    if (quantity > product.quantity) {
      alert(`Only ${product.quantity} units of ${product.name} are available.`);
      return;
    }

    const subtotal = product.price * quantity;
    // Strictly ABOVE 2,000 MAD. Exactly 2,000 does not receive a discount.
    const discount = subtotal > 2000 ? Math.round(subtotal * 0.1 * 100) / 100 : 0;
    const total = Math.round((subtotal - discount) * 100) / 100;
    const summary = `Customer: ${customerName}\nEmail: ${email}\nProduct: ${product.name}\nQuantity: ${quantity}\nUnit price: ${formatPrice(product.price)}\nSubtotal: ${formatPrice(subtotal)}\nDiscount: ${formatPrice(discount)}\nTotal: ${formatPrice(total)}`;

    // Cancel leaves the input values intact, so the user can edit the order.
    if (window.confirm(`Review your order:\n\n${summary}\n\nConfirm this demo order?`)) {
      alert(`Demo order confirmed!\n\n${summary}\n\nNo payment was taken. No real order was placed.`);
    }
  }

  return (
    // noValidate lets our handler show specific messages, including quantity 0.
    // We still inspect the browser's email validity above.
    <form className="order-form" onSubmit={handleSubmit} noValidate>
      <div className="form-section-heading"><span>01</span><h2>Your details</h2></div>
      <div className="form-row">
        <label htmlFor="customerName">Full name<input id="customerName" name="customerName" type="text" placeholder="e.g. Walid Amrani" autoComplete="name" required onChange={handleChange} /></label>
        <label htmlFor="email">Email address<input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required onChange={handleChange} /></label>
      </div>
      <div className="form-section-heading"><span>02</span><h2>Your essentials</h2></div>
      <label htmlFor="productId">Select a product
        {/* defaultValue sets an initial selection without controlling the field. */}
        <select id="productId" name="productId" defaultValue={selectedProductId} required onChange={handleChange}>
          <option value="" disabled>Choose from the collection</option>
          {products.map((product) => (
            <option key={product.id} value={product.id} disabled={!product.available}>
              {product.name} · {formatPrice(product.price)}{!product.available ? ' · Out of stock' : ''}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="quantity">Quantity<input id="quantity" name="quantity" type="number" min="1" step="1" defaultValue="1" required aria-describedby="quantity-help" onChange={handleChange} /></label>
      <p className="field-help" id="quantity-help">Enter a whole number greater than 0. Availability is checked on submission.</p>
      <div className="form-note"><span aria-hidden="true">✳</span><p>Orders above <strong>2,000 MAD</strong> receive a <strong>10% discount.</strong></p></div>
      <button type="submit" className="button button-primary button-large submit-button">Review order <span aria-hidden="true">↗</span></button>
      <p className="field-help">You’ll see a summary before confirming this demo order.</p>
    </form>
  );
}

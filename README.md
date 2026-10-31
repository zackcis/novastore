# NOVA STORE — MolenGeek React correction

A complete, commented classroom project: React + Vite + React Router + plain CSS.

## Run on your Windows computer

1. Install Node.js 22.12 or newer (Node 24 LTS recommended): https://nodejs.org/
2. Extract the ZIP first. Do not run it from inside the ZIP.
3. Open the extracted `nova-store` folder in VS Code or Cursor.
4. Open Terminal > New Terminal. Make sure the terminal is in the folder containing `package.json`.
5. Run:

```bash
npm install
npm run dev
```

6. Open the Local URL printed in the terminal, usually http://localhost:5173.
7. To stop the server, press Ctrl+C in the terminal.

Do not use Go Live or double-click index.html: Vite runs this React project.
Internet is required for the first npm install. Product illustrations and styles are local.
No API keys, accounts or .env files are needed.

If PowerShell blocks npm.ps1, use the Command Prompt terminal or run:

```bat
npm.cmd install
npm.cmd run dev
```

Optional production check:

```bash
npm run build
npm run preview
```

## What is included

- Home, Products, Order, About and 404 pages.
- Navbar, active NavLink styles, Footer and responsive layouts.
- Six products, local SVG illustrations, reusable ProductCard and ProductList.
- `.map()`, stable keys, props and a parent function passed to child cards.
- `onClick`, `onChange`, `onSubmit`, function references and arrow wrappers.
- `&&`, ternary rendering, conditional CSS and disabled out-of-stock buttons.
- Uncontrolled inputs, FormData, validation, total calculation and stock checks.
- 10% discount above 2,000 MAD, confirmation dialog and order summary alert.
- No useState, useEffect, querySelector, innerHTML or addEventListener.

## Important correction to the original exercise

There are two different quantities:

- `product.quantity`: fixed stock in `src/data/products.js`. JSX displays Out of stock when it is 0 and disables Buy now. Change this data in your editor to demonstrate conditional rendering.
- Form `quantity`: the number the customer wants to order. It is read on submission. A zero, negative, empty or fractional value produces an error alert and stops the order.

A JSX error that updates live as the user types needs a re-render, normally using React state. That conflicts with this exercise's no-state restriction. This correction therefore validates form quantity in the submit handler and uses JSX conditional rendering for product stock. Do not teach that changing a normal variable automatically updates JSX.

`useNavigate` and `useSearchParams` are router hooks. They navigate and read the selected product from the URL; they are not useState or useEffect.

## Read the source in this order

1. `src/main.jsx`: start React and wrap App in BrowserRouter.
2. `src/App.jsx`: shared layout and page routes.
3. `src/data/products.js`: product array and availability derived from stock.
4. `src/components/ProductList.jsx`: map products, define handleBuy, pass onBuy.
5. `src/components/ProductCard.jsx`: receive props, render conditions, wire clicks.
6. `src/pages/Order.jsx`: read the selected product from the URL.
7. `src/components/OrderForm.jsx`: log changes, read FormData, validate and calculate.
8. `src/styles/`: responsive CSS split by purpose.

Comments inside the source explain why each important step exists.

## Classroom walkthrough

1. Open Products: show six cards, badges and unavailable City Sneakers.
2. Click View details: show the name, category, price and stock alert.
3. Click Buy now for Studio Headphones: dismiss the alert; Order opens with that product selected.
4. Open browser developer tools (F12 > Console). Type in the form to demonstrate onChange and event.target.value.
5. Submit without a name: an error stops the order. Repeat with an invalid email.
6. Fill valid details and enter quantity 0: an error stops the order.
7. Enter quantity 9 for Studio Headphones: only 8 are in stock.
8. Enter quantity 3: subtotal 2,670 MAD, discount 267 MAD, total 2,403 MAD.
9. Cancel the confirmation: no success alert; values remain for editing.
10. Submit again and confirm: the summary appears in an alert.
11. Visit `/something-that-does-not-exist` to demonstrate the wildcard 404 route.
12. Reduce the browser width to show the mobile layout.

This is a simulator, not a real shop. Confirming an order does not save anything,
charge money, send email or reduce stock. Contact information uses example data.
Input values are logged only for the lesson; do not log customer details in production.

## Documentation

Validation completed: production build and 22 browser checks passed, including
routes, image loading, disabled stock controls, invalid quantities, stock limits,
discount calculations, confirmation/cancellation and 320px/390px layouts.

- https://react.dev/learn/responding-to-events
- https://react.dev/learn/conditional-rendering
- https://react.dev/reference/react-dom/components/form
- https://reactrouter.com/start/declarative/routing
- https://vite.dev/guide/
# novastore

import { Product } from "./Product.js";
import { UI } from "./UI.js";

// DOM Events
document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    // Override the default Form behaviour
    e.preventDefault();

    // Getting Form Values
    const name = document.getElementById("name").value,
      refer = document.getElementById("refer").value,
      state = document.getElementById("state").value,
      price = document.getElementById("price").value,
      dias = document.getElementById("dias").value,
      pay = document.getElementById("pay").value;

    // Create a new Oject Product
    const product = new Product(name, refer, state, price, dias, pay);

    // Create a new UI instance
    const ui = new UI();

    // Input User Validation
    if (name === "" || refer === "" || state === "" || price ==="" || dias === "" || pay ==="") {
      ui.showMessage("Debes completar todos los campos", "danger");
    }

    // Save Product
    ui.addProduct(product);
    ui.showMessage("Genial! Pendiente Agregado!", "success");
    ui.resetForm();
  });

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});

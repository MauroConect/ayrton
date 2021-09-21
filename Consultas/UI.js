// UI Constructor
export class UI {
  // Add a new Product
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Nombre</strong>: ${product.name} -
                    <strong>Referencia</strong>: ${product.refer} -
                    <strong>Estado</strong>: ${product.state} -
                    <strong>Precio</strong>: ${product.price} - 
                    <strong>Dias de entrega</strong>: ${product.dias}
                    <a href="${product.pay}" class="btn btn-primary about:blank" name="pay">Pagar Online</a>
                </div>
            </div>
        `;
    productList.appendChild(element);
  }

  resetForm() {
    document.getElementById("product-form").reset();
  }

  // deleteProduct(element) {
  //   if (element.name === "pay")    }
  // }

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));

    // Show in The DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#App");

    // Insert Message in the UI
    container.insertBefore(div, app);

    // Remove the Message after 3 seconds
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}

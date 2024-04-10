console.log('product-card success!!');
if (!sessionStorage.getItem('cart')) {
   console.log('no existe!!!');
   sessionStorage.setItem('cart', JSON.stringify([]))
}

var cart = JSON.parse(sessionStorage.getItem('cart'));
const showProductsInCart = (cart) => {
   showCart.innerHTML = null;

   if (cart.length) {
      cart.forEach(item => {
         showCart.innerHTML += `
         <div class="col-12 col-md-6 col-lg-4">
   
         <article class="cart-item">
            <h2 class="titulo">${item.name}</h2>
            <div class="dis">
               <div class="container-img">
                  <img class="imagen" src="/img/${item.image}" alt="${item.name}">
               </div>
               <div class="cont-precio">
                  <p class="price">$${item.price} </p>
               </div>
            </div>
            <div class="cart-item-details">
   
   
   
               <div class="cart-container">
                  <div class="counter-box">
                     <button class="btn-minus" onclick="decrementQuantity('${item.id}')">-</button>
                     <span id="item-counter${item.id}">${item.quantity}</span>
                     <button class="btn-plus" onclick="incrementQuantity('${item.id}')">+</button>
                  </div>
   
   
                  <div class="cart-item-buttons">
                     <button onclick="removeItemCart('${item.id}')" class="delete-btn">Eliminar</button>
                  </div>
   
   
               </div>
         </article>
      </div>
   
         `
      });

      document.getElementById('total').innerHTML = cart.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0)
      document.querySelectorAll('.buyHidden').forEach(item => item.style.display = 'block')
   } else {
      showCart.innerHTML = `
          <div class="col-12 col-md-6">
          <div class="alert alert-warning">
             El carrito está vacío
             </div>
             </div>`
      document.querySelectorAll('.buyHidden').forEach(item => item.style.display = 'none')

   }

}



function incrementQuantity(id) {
   const counter = document.getElementById('item-counter' + id)
   let currentValue = parseInt(counter.textContent);
   counter.textContent = currentValue + 1;
   modifyQuantity(id, currentValue + 1)
};

// Función para decrementar el contador
function decrementQuantity(id) {
   const counter = document.getElementById('item-counter' + id)
   let currentValue = parseInt(counter.textContent);
   if (currentValue > 1) {
      counter.textContent = currentValue - 1;
      modifyQuantity(id, currentValue - 1)
   }
};

window.onload = () => {

   if (cart.length) {
      document.getElementById('showTotal').innerHTML = cart.length
   }

   const showCart = document.getElementById('showCart');

   if (showCart) {

      showProductsInCart(cart)


   }

}

let size = {};
let color = {};
let quantity = 1;
const sizeChosen = (id, name) => {
   size = { id, name }
};
const colorChosen = (id, name) => {
   color = { id, name }
};
const quantityChosen = (count) => {
   quantity = count
}
const addItemCart = (id_product, name, price, image) => {
   if (!size.id || !color.id) {
      alert("Por favor, seleccione un color y un talle antes de agregar al carrito.");
      return; 
   }

   let cartUpdated;
   const itemCart = cart.find(item => item.id_product == id_product && item.size.id == size.id && item.color.id == color.id)
   if (itemCart) {
      cartUpdated = cart.map(item => {
         if (item.id == itemCart.id) {
            item.quantity = item.quantity + 1
         }
         return item
      })
   } else {
      const newItem = {
         id: crypto.randomUUID(),
         id_product,
         name,
         price,
         image,
         quantity,
         size,
         color,
      }
      cartUpdated = [...cart, newItem]
   }
   sessionStorage.setItem('cart', JSON.stringify(cartUpdated))
   document.getElementById('showTotal').innerHTML = JSON.parse(sessionStorage.getItem('cart')).length
   alert("¡Producto agregado al carrito correctamente!");
}

const removeItemCart = (id) => {
   const cart = JSON.parse(sessionStorage.getItem('cart'))
   const cartUpdated = cart.filter(item => item.id !== id)
   sessionStorage.setItem('cart', JSON.stringify(cartUpdated))
   showProductsInCart(cartUpdated)
   document.getElementById('showTotal').innerHTML = JSON.parse(sessionStorage.getItem('cart')).length
  const confirmDelete = confirm("¿Estás seguro de que quieres eliminar este producto del carrito?");
   if (!confirmDelete) {
      return; 
   }
}

const modifyQuantity = (id, quantity) => {
   const cart = JSON.parse(sessionStorage.getItem('cart'))
   const cartUpdated = cart.map(item => {
      if (item.id == id) {
         item.quantity = quantity + quantity
      }
      return item
   });
   sessionStorage.setItem('cart', JSON.stringify(cartUpdated))
   document.getElementById('total').innerHTML = cartUpdated.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0)
}

const emptyCart = () => {
   sessionStorage.setItem('cart', JSON.stringify([]));
   showCart.innerHTML = `
   <div class="col-12 col-md-6">
   <div class="alert alert-warning">
      El carrito está vacío
      </div>
      </div>`
   document.getElementById('showTotal').innerHTML = null

}  

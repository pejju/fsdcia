let productsArray = [];
    const container = document.querySelector('#products');
    
    
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        productsArray = data.products;
        displayProducts(productsArray);
      });

    
    function displayProducts(products) {
      container.innerHTML = '';
      products.forEach(product => {
        const card = document.createElement('div');
        card.className = "bg-white p-4 rounded shadow w-60 text-center hover:scale-105 transition-transform";

        card.innerHTML = `
          <img src="${product.images[0]}" alt="${product.title}" class="h-40 w-full object-contain mb-2 rounded" />
          <h2 class="text-sm font-semibold h-12 overflow-hidden">${product.title}</h2>
          <p class="text-gray-600 font-medium">₹${product.price}</p>
        `;
        container.appendChild(card);
      });
    }

    
   
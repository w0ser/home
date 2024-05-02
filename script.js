const filterButtons = document.querySelectorAll('.filter-button');
const typeButtons = document.querySelectorAll('.type-button');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

typeButtons.forEach(button => {
    button.addEventListener('click', () => {
      typeButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  const sections = document.querySelectorAll('.wideSection,.smallSection');

  sections.forEach((section) => {
    section.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const sectionRect = section.getBoundingClientRect();
      const centerX = sectionRect.left + sectionRect.width / 2;
      const centerY = sectionRect.top + sectionRect.height / 2;
      const distanceX = x - centerX;
      const distanceY = y - centerY;
      const rotateX = distanceY / 10;
      const rotateY = distanceX / 10;
      section.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  
    section.addEventListener('mouseleave', () => {
      section.style.transform = 'none';
    });
  });

  
  const product = document.querySelector('.cartProduct');
  const price = parseFloat(product.querySelector('.price').innerText.slice(1));
  const quantityInput = product.querySelector('.quantity-input');
  const total = product.querySelector('.total');
  const minusButton = product.querySelector('.minus');
  const plusButton = product.querySelector('.plus');
  const totalCartAmount = document.getElementById('total-cart-amount');
  
  quantityInput.addEventListener('input', () => {
    const quantity = parseInt(quantityInput.value);
    const subtotal = price * quantity;
    total.innerText = `$${subtotal.toFixed(2)}`;
    updateTotalCartAmount(); // Add this line
  });
  
  minusButton.addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
      quantityInput.value = quantity - 1;
      const subtotal = price * quantityInput.value;
      total.innerText = `$${subtotal.toFixed(2)}`;
      updateTotalCartAmount(); // Add this line
    }
  });
  
  plusButton.addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value);
    quantityInput.value = quantity + 1;
    const subtotal = price * quantityInput.value;
    total.innerText = `$${subtotal.toFixed(2)}`;
    updateTotalCartAmount(); // Add this line
  });


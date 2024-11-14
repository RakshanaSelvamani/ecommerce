// Function to toggle mobile menu visibility
function men() {
    let header = document.querySelector('.header');
    header.classList.toggle('active');
}

// Cart functionality
let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    alert(`${productName} added to cart!`);
    console.log(cart); // Log cart to console for debugging
}

// Add event listeners for "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.product .contant .box a');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const productBox = button.closest('.box');
        const productName = productBox.querySelector('h3').textContent;
        const price = productBox.querySelector('h4').textContent.replace('$', '');

        addToCart(productName, price);
    });
});

// Additional functionalities can be added for cart display, removing items, etc.

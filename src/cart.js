// Cart State
let cart = JSON.parse(localStorage.getItem('minato_cart')) || [];

// Save to local storage so cart doesn't reset on refresh
const saveCart = () => {
    localStorage.setItem('minato_cart', JSON.stringify(cart));
    updateCartCount();
};

// Update the red badge number on the nav icon
const updateCartCount = () => {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const badge = document.getElementById('cart-count');
    if (badge) {
        badge.innerText = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }
};

// ADD TO CART
export function addToCart(productId, menuData) {
    const product = menuData.find(item => item.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1; // Default add +1
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }
    
    saveCart();
    renderCart();
    openCart(); // Open sidebar automatically when item is added
}

// CHANGE QUANTITY (Handles +1, -1, or +4)
window.changeQuantity = (productId, amount) => {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += amount;

    // Remove item if quantity drops to 0 or below
    if (item.quantity <= 0) {
        cart = cart.filter(item => item.id !== productId);
    }

    saveCart();
    renderCart();
};

// RENDER CART HTML INSIDE SIDEBAR
export function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('open-checkout-btn');
    const emptyMsg = document.getElementById('empty-cart-msg');

    // Clear current content
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p id="empty-cart-msg">Your panier is empty.</p>';
        totalEl.innerText = "$0.00";
        checkoutBtn.disabled = true;
        return;
    }

    checkoutBtn.disabled = false;
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;

        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
            </div>
            <div class="cart-item-actions">
                <div class="qty-control">
                    <button class="qty-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
                </div>
                <div class="item-total">$${(item.price * item.quantity).toFixed(2)}</div>
            </div>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    totalEl.innerText = `$${total.toFixed(2)}`;
}

// UI Toggle Functions
export function openCart() {
    document.getElementById('cart-sidebar').classList.add('active');
    document.getElementById('cart-overlay').classList.add('active');
}

export function closeCart() {
    document.getElementById('cart-sidebar').classList.remove('active');
    document.getElementById('cart-overlay').classList.remove('active');
}

export function openCheckout() {
    if (cart.length === 0) return;
    closeCart();
    document.getElementById('checkout-modal').classList.add('active');
}

export function closeCheckout() {
    document.getElementById('checkout-modal').classList.remove('active');
}

// Get cart data safely for the email service
export function getCartData() {
    return [...cart];
}

export function clearCart() {
    cart = [];
    saveCart();
    renderCart();
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    renderCart();
});

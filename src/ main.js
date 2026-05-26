// Menu Data
const menuData = {
    plateaux: [
        { id: 1, name: 'Plateau 1 - P1', price: 37.500, desc: '8 Maki Saumon - 8 Californien - Saumon Avocat', pieces: '16 pièces', emoji: '🍱', popular: true },
        { id: 2, name: 'Plateau 2 - P2', price: 61.000, desc: '8 Maki Saumon - 8 Californien - Saumon Avocat - 8 Crunchy Las Vegas', pieces: '24 pièces', emoji: '🍱', popular: true },
        { id: 3, name: 'Plateau Crunchy', price: 69.000, desc: '8 Crunchy Maki Spicy Ebi Tempura - 8 Las Vegas - 6 Godzilla', pieces: '22 pièces', emoji: '🍱', popular: true },
        { id: 4, name: 'Plateau Deluxe', price: 89.000, desc: 'Assortiment premium de nos meilleures spécialités', pieces: '32 pièces', emoji: '🍱', popular: false },
        { id: 5, name: 'Plateau Veggie', price: 42.000, desc: 'Sélection de sushis végétariens frais et savoureux', pieces: '20 pièces', emoji: '🥬', popular: false },
        { id: 6, name: 'Plateau Spicy', price: 58.000, desc: 'Pour les amateurs de sensations fortes - épices garanties', pieces: '24 pièces', emoji: '🌶️', popular: false }
    ],
    maki: [
        { id: 7, name: 'Maki Saumon', price: 18.500, desc: 'Saumon', pieces: '8 pièces', emoji: '🍣', popular: true },
        { id: 8, name: 'Maki Cheesy Saumon', price: 20.000, desc: 'Saumon - Fromage', pieces: '8 pièces', emoji: '🍣', popular: false },
        { id: 9, name: 'Maki Spicy Saumon', price: 18.500, desc: 'Saumon - Sauce Ondori', pieces: '8 pièces', emoji: '🍣', popular: true },
        { id: 10, name: 'Maki Avocat', price: 15.000, desc: 'Avocat frais', pieces: '8 pièces', emoji: '🥑', popular: false },
        { id: 11, name: 'Maki Thon', price: 19.000, desc: 'Thon rouge', pieces: '8 pièces', emoji: '🐟', popular: false },
        { id: 12, name: 'Maki California', price: 21.000, desc: 'Crabe - Avocat - Concombre', pieces: '8 pièces', emoji: '🍙', popular: true }
    ],
    nigiri: [
        { id: 13, name: 'Nigiri Saumon', price: 16.000, desc: '2 pièces de saumon frais sur riz', pieces: '2 pièces', emoji: '🍣', popular: true },
        { id: 14, name: 'Nigiri Thon', price: 18.000, desc: '2 pièces de thon rouge', pieces: '2 pièces', emoji: '🐟', popular: false },
        { id: 15, name: 'Nigiri Crevette', price: 15.000, desc: '2 pièces de crevette cuite', pieces: '2 pièces', emoji: '🦐', popular: false },
        { id: 16, name: 'Nigiri Anguille', price: 17.000, desc: '2 pièces d\'anguille grillée', pieces: '2 pièces', emoji: '🐍', popular: false }
    ],
    sashimi: [
        { id: 17, name: 'Sashimi Saumon', price: 28.000, desc: '5 tranches de saumon frais', pieces: '5 pièces', emoji: '🐟', popular: true },
        { id: 18, name: 'Sashimi Thon', price: 32.000, desc: '5 tranches de thon rouge', pieces: '5 pièces', emoji: '🐟', popular: false },
        { id: 19, name: 'Sashimi Mixte', price: 35.000, desc: 'Assortiment saumon et thon', pieces: '8 pièces', emoji: '🍽️', popular: true }
    ],
    sidedishes: [
        { id: 20, name: 'Edamame', price: 8.000, desc: 'Fèves de soja vapeur sel de mer', pieces: '', emoji: '🫘', popular: false },
        { id: 21, name: 'Gyoza', price: 12.000, desc: 'Raviolis japonais grillés', pieces: '6 pièces', emoji: '🥟', popular: true },
        { id: 22, name: 'Tempura', price: 14.000, desc: 'Legumes et crevettes en tempura', pieces: '8 pièces', emoji: '🍤', popular: false },
        { id: 23, name: 'Miso Soup', price: 6.000, desc: 'Soupe traditionnelle japonaise', pieces: '', emoji: '🍲', popular: false }
    ],
    noodles: [
        { id: 24, name: 'Ramen Tonkotsu', price: 22.000, desc: 'Bouillon de porc - Noodles - Chashu', pieces: '', emoji: '🍜', popular: true },
        { id: 25, name: 'Udon', price: 18.000, desc: 'Noodles épais - Bouillon dashi', pieces: '', emoji: '🍜', popular: false },
        { id: 26, name: 'Yakisoba', price: 19.000, desc: 'Noodles sautés aux légumes', pieces: '', emoji: '🍝', popular: false }
    ],
    desserts: [
        { id: 27, name: 'Mochi Ice Cream', price: 10.000, desc: 'Glace enrobée de pâte de riz', pieces: '3 pièces', emoji: '🍡', popular: true },
        { id: 28, name: 'Taiyaki', price: 8.000, desc: 'Gâteau en forme de poisson', pieces: '2 pièces', emoji: '🐟', popular: false },
        { id: 29, name: 'Green Tea Ice Cream', price: 7.000, desc: 'Glace au thé vert', pieces: '2 boules', emoji: '🍦', popular: false }
    ],
    extras: [
        { id: 30, name: 'Riz Supplémentaire', price: 3.000, desc: 'Portion de riz', pieces: '', emoji: '🍚', popular: false },
        { id: 31, name: 'Sauce Soja', price: 1.000, desc: 'Sauce soja premium', pieces: '', emoji: '🥣', popular: false },
        { id: 32, name: 'Gingembre', price: 2.000, desc: 'Gingembre mariné', pieces: '', emoji: '🫚', popular: false }
    ]
};

const categories = [
    { id: 'plateaux', name: 'Plateaux', icon: '🍱' },
    { id: 'maki', name: 'Maki', icon: '🍙' },
    { id: 'nigiri', name: 'Nigiri', icon: '🍣' },
    { id: 'sashimi', name: 'Sashimi', icon: '🐟' },
    { id: 'sidedishes', name: 'Side Dishes', icon: '🍤' },
    { id: 'noodles', name: 'Noodles', icon: '🍜' },
    { id: 'desserts', name: 'Desserts', icon: '🍡' },
    { id: 'extras', name: 'Extras', icon: '🥢' }
];

// Cart State
let cart = JSON.parse(localStorage.getItem('minato_cart')) || [];
let currentCategory = 'plateaux';
let quantities = {};

// Initialize quantities
Object.values(menuData).flat().forEach(product => {
    quantities[product.id] = 1;
});

// DOM Elements
const categoryList = document.getElementById('categoryList');
const productsGrid = document.getElementById('productsGrid');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const cartPanel = document.getElementById('cartPanel');
const cartToggle = document.getElementById('cartToggle');
const closeCart = document.getElementById('closeCart');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const closeModal = document.getElementById('closeModal');
const cancelOrder = document.getElementById('cancelOrder');
const confirmOrder = document.getElementById('confirmOrder');
const successModal = document.getElementById('successModal');
const closeSuccess = document.getElementById('closeSuccess');
const categoryTitle = document.getElementById('categoryTitle');

// Render Categories
function renderCategories() {
    if (!categoryList) return;
    
    categoryList.innerHTML = categories.map(cat => `
        <li class="category-item ${cat.id === currentCategory ? 'active' : ''}" data-category="${cat.id}">
            <span class="category-icon">${cat.icon}</span>
            <span class="category-name">${cat.name}</span>
        </li>
    `).join('');

    document.querySelectorAll('.category-item').forEach(el => {
        el.addEventListener('click', () => {
            currentCategory = el.dataset.category;
            renderCategories();
            renderProducts();
        });
    });
}

// Render Products
function renderProducts() {
    if (!productsGrid) return;
    
    const products = menuData[currentCategory] || [];
    const category = categories.find(c => c.id === currentCategory);
    
    if (categoryTitle) {
        categoryTitle.textContent = category ? category.name : 'Our Menu';
    }
    
    if (products.length === 0) {
        productsGrid.innerHTML = '<p style="text-align: center; color: var(--text-light); padding: 40px;">No items in this category</p>';
        return;
    }
    
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">
                <span style="font-size: 80px;">${product.emoji}</span>
                ${product.popular ? '<span class="product-badge">Popular</span>' : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.desc}</p>
                ${product.pieces ? `<p class="product-pieces">${product.pieces}</p>` : ''}
                <div class="product-price">$${product.price.toFixed(3)}</div>
                <div class="quantity-control">
                    <button class="qty-btn" onclick="updateQuantity(${product.id}, -1)">−</button>
                    <span class="qty-value" id="qty-${product.id}">${quantities[product.id]}</span>
                    <button class="qty-btn" onclick="updateQuantity(${product.id}, 1)">+</button>
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})" id="btn-${product.id}">
                    Add to Order
                </button>
            </div>
        </div>
    `).join('');
}

// Update Quantity
function updateQuantity(productId, change) {
    quantities[productId] = Math.max(1, Math.min(10, quantities[productId] + change));
    const qtyEl = document.getElementById(`qty-${productId}`);
    if (qtyEl) {
        qtyEl.textContent = quantities[productId];
    }
}

// Add to Cart
function addToCart(productId) {
    const allProducts = Object.values(menuData).flat();
    const product = allProducts.find(p => p.id === productId);
    const quantity = quantities[productId];
    
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    saveCart();
    renderCart();
    
    // Visual feedback
    const btn = document.getElementById(`btn-${productId}`);
    if (btn) {
        const originalText = btn.textContent;
        btn.classList.add('added');
        btn.textContent = '✓ Added';
        
        setTimeout(() => {
            btn.classList.remove('added');
            btn.textContent = originalText;
        }, 2000);
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
}

// Update Cart Item Quantity
function updateCartItemQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            renderCart();
        }
    }
}

// Save Cart
function saveCart() {
    localStorage.setItem('minato_cart', JSON.stringify(cart));
}

// Render Cart
function renderCart() {
    if (!cartItems || !cartTotal || !cartCount) return;
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartCount.textContent = totalItems;
    cartTotal.textContent = `$${totalPrice.toFixed(3)}`;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <p>Your cart is empty</p>
                <p class="cart-hint">Add items from the menu to get started</p>
            </div>
        `;
        if (checkoutBtn) checkoutBtn.disabled = true;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.emoji}</div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${(item.price * item.quantity).toFixed(3)}</div>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="updateCartItemQuantity(${item.id}, -1)">−</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateCartItemQuantity(${item.id}, 1)">+</button>
                        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
                    </div>
                </div>
            </div>
        `).join('');
        if (checkoutBtn) checkoutBtn.disabled = false;
    }
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }
}

// Cart Toggle
function initCartToggle() {
    if (cartToggle) {
        cartToggle.addEventListener('click', () => {
            cartPanel.classList.add('active');
        });
    }
    
    if (closeCart) {
        closeCart.addEventListener('click', () => {
            cartPanel.classList.remove('active');
        });
    }
}

// Checkout Modal
function initCheckoutModal() {
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            checkoutModal.classList.add('active');
            cartPanel.classList.remove('active');
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            checkoutModal.classList.remove('active');
        });
    }
    
    if (cancelOrder) {
        cancelOrder.addEventListener('click', () => {
            checkoutModal.classList.remove('active');
        });
    }
}

// Confirm Order - Send via Brevo
async function confirmOrderHandler() {
    const form = document.getElementById('checkoutForm');
    if (!form) return;
    
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    const address = document.getElementById('customerAddress').value;
    const note = document.getElementById('customerNote').value;
    
    if (!name || !phone || !address) {
        alert('Please fill in all required fields');
        return;
    }
    
    const customerDetails = { name, phone, address, note };
    
    // Show loading
    const confirmBtn = document.getElementById('confirmOrder');
    const originalText = confirmBtn.textContent;
    confirmBtn.textContent = 'Processing...';
    confirmBtn.disabled = true;
    
    try {
        // Import and call the email service
        const { sendOrderToMinato } = await import('./email-service.js');
        const result = await sendOrderToMinato(cart, customerDetails);
        
        if (result.success) {
            // Clear cart
            cart = [];
            saveCart();
            renderCart();
            
            // Close modal
            checkoutModal.classList.remove('active');
            
            // Show success
            successModal.classList.add('active');
            
            // Reset form
            form.reset();
        } else {
            alert('Failed to send order. Please call the restaurant directly.');
        }
    } catch (error) {
        console.error('Error sending order:', error);
        alert('An error occurred. Please try again or call the restaurant.');
    } finally {
        confirmBtn.textContent = originalText;
        confirmBtn.disabled = false;
    }
}

// Close Success Modal
function initSuccessModal() {
    if (closeSuccess) {
        closeSuccess.addEventListener('click', () => {
            successModal.classList.remove('active');
        });
    }
}

// Navbar Scroll Effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderProducts();
    renderCart();
    initMobileMenu();
    initCartToggle();
    initCheckoutModal();
    initSuccessModal();
    initNavbarScroll();
    
    if (confirmOrder) {
        confirmOrder.addEventListener('click', confirmOrderHandler);
    }
});

// Make functions global for inline onclick handlers
window.updateQuantity = updateQuantity;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartItemQuantity = updateCartItemQuantity;

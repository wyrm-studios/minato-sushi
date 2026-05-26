// ==========================================
// MINATO WEBSITE - MAIN APPLICATION LOGIC
// ==========================================

import { init3DScene } from './3d-scene.js';
import { addToCart, renderCart, openCart, closeCart, openCheckout, closeCheckout, getCartData, clearCart } from './cart.js';
import { sendOrderToMinato } from './email-service.js';

// Global Variables
let menuData = [];

// ==========================================
// 1. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', async () => {
    
    // Initialize 3D Scene (Desktop Only)
    init3DScene();

    // Load Menu Data
    await loadMenu();

    // Setup Event Listeners
    setupEventListeners();

    // Initial UI Updates
    renderCart();
});

// ==========================================
// 2. LOAD MENU DATA
// ==========================================
async function loadMenu() {
    try {
        const response = await fetch('src/data/menu.json');
        if (!response.ok) throw new Error("Menu file not found");
        menuData = await response.json();
        renderMenuGrid(menuData);
    } catch (error) {
        console.error("Error loading menu:", error);
        document.getElementById('menu-grid').innerHTML = '<p style="grid-column: 1/-1; text-align:center; color: var(--color-red);">Error loading menu. Please try again later.</p>';
    }
}

// ==========================================
// 3. RENDER MENU GRID
// ==========================================
function renderMenuGrid(itemsToRender) {
    const grid = document.getElementById('menu-grid');
    grid.innerHTML = ''; // Clear grid

    if (itemsToRender.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color: var(--color-navy);">No items found in this category.</p>';
        return;
    }

    itemsToRender.forEach(item => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="card-img" loading="lazy">
            <div class="card-body">
                <div class="card-category">${item.category}</div>
                <h3 class="card-title">${item.name}</h3>
                <p class="card-desc">${item.desc}</p>
                <div class="card-footer">
                    <span class="card-price">$${item.price.toFixed(2)}</span>
                    <button class="btn-add" data-id="${item.id}">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    // Add event listeners to all new "Add" buttons
    document.querySelectorAll('.btn-add').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.getAttribute('data-id'));
            addToCart(id, menuData);
        });
    });
}

// ==========================================
// 4. EVENT LISTENERS
// ==========================================
function setupEventListeners() {
    
    // --- Cart Sidebar ---
    document.getElementById('open-cart-btn').addEventListener('click', openCart);
    document.getElementById('close-cart-btn').addEventListener('click', closeCart);
    document.getElementById('cart-overlay').addEventListener('click', closeCart);
    
    // --- Checkout Modal ---
    document.getElementById('open-checkout-btn').addEventListener('click', openCheckout);
    document.getElementById('close-checkout-btn').addEventListener('click', closeCheckout);
    
    // Close modal if clicking outside the glass box
    document.getElementById('checkout-modal').addEventListener('click', (e) => {
        if (e.target.id === 'checkout-modal') closeCheckout();
    });

    // --- Menu Filters ---
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update Active State UI
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            // Filter Data
            const filter = e.target.getAttribute('data-filter');
            if (filter === 'all') {
                renderMenuGrid(menuData);
            } else {
                const filteredData = menuData.filter(item => item.category === filter);
                renderMenuGrid(filteredData);
            }
        });
    });

    // --- Final Checkout Form Submission ---
    document.getElementById('checkout-form').addEventListener('submit', handleCheckout);

    // --- Simple Contact Form (Optional UI feedback) ---
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Thank you for contacting Minato! We will get back to you soon.");
        e.target.reset();
    });
}

// ==========================================
// 5. HANDLE FINAL CHECKOUT & SEND EMAIL
// ==========================================
async function handleCheckout(e) {
    e.preventDefault();

    // 1. Get User Inputs
    const name = document.getElementById('cust-name').value.trim();
    const phone = document.getElementById('cust-phone').value.trim();
    const address = document.getElementById('cust-address').value.trim();
    const note = document.getElementById('cust-note').value.trim();

    if (!name || !phone || !address) {
        alert("Please fill in all required fields.");
        return;
    }

    const customerDetails = { name, phone, address, note };
    const currentCart = getCartData();

    // 2. UI Loading State
    const submitBtn = document.getElementById('checkout-btn');
    const originalText = submitBtn.innerText;
    submitBtn.innerText = "Sending Order to Kitchen...";
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.6';

    try {
        // 3. Call Brevo Email Service
        const result = await sendOrderToMinato(currentCart, customerDetails);

        // 4. Handle Result
        if (result.success) {
            // Success Flow
            closeCheckout();
            clearCart();
            document.getElementById('checkout-form').reset();
            
            // Show Success Message (Simple alert for now, can be upgraded to a nice modal later)
            alert("🎉 Order Placed Successfully! \n\nWe have received your order. The driver is on the way. Payment is due upon delivery.");
        } else {
            // Error Flow
            alert("❌ " + result.message);
        }
    } catch (error) {
        console.error("Checkout error:", error);
        alert("An unexpected error occurred. Please try again or call us directly.");
    } finally {
        // 5. Reset Button State
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
    }
}

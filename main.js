/* ==========================================
   MINATO SUSHI - PREMIUM INTERACTION ENGINE
   ========================================== */

// === 1. DATA (50+ Items) ===
const menuData = {
    plateaux: [
        { id: 1, name: 'Plateau 1 - P1', price: 37.500, desc: '8 Maki Saumon - 8 Californien - Saumon Avocat', pieces: '16 pièces', emoji: '🍱', popular: true },
        { id: 2, name: 'Plateau 2 - P2', price: 61.000, desc: '8 Maki Saumon - 8 Californien - Saumon Avocat - 8 Crunchy Las Vegas', pieces: '24 pièces', emoji: '🍱', popular: true },
        { id: 3, name: 'Plateau Crunchy', price: 69.000, desc: '8 Crunchy Maki Spicy Ebi Tempura - 8 Las Vegas - 6 Godzilla', pieces: '22 pièces', emoji: '', popular: true },
        { id: 4, name: 'Plateau Deluxe', price: 89.000, desc: 'Assortiment premium de nos meilleures spécialités', pieces: '32 pièces', emoji: '', popular: false },
        { id: 5, name: 'Plateau Veggie', price: 42.000, desc: 'Sélection de sushis végétariens frais', pieces: '20 pièces', emoji: '🥬', popular: false },
        { id: 6, name: 'Plateau Spicy', price: 58.000, desc: 'Pour les amateurs de sensations fortes', pieces: '24 pièces', emoji: '🌶️', popular: false },
        { id: 7, name: 'Plateau Family', price: 120.000, desc: 'Idéal pour 4-6 personnes', pieces: '50 pièces', emoji: '👨‍‍👧‍👦', popular: true },
        { id: 8, name: 'Plateau Couple', price: 75.000, desc: 'Parfait pour deux personnes', pieces: '28 pièces', emoji: '💑', popular: false },
        { id: 9, name: 'Plateau Solo', price: 29.000, desc: 'Menu individuel complet', pieces: '12 pièces', emoji: '🍱', popular: true },
        { id: 10, name: 'Plateau Premium', price: 150.000, desc: 'Le summum de nos créations', pieces: '60 pièces', emoji: '👑', popular: true }
    ],
    maki: [
        { id: 11, name: 'Maki Saumon', price: 18.500, desc: 'Saumon frais', pieces: '8 pièces', emoji: '🍣', popular: true },
        { id: 12, name: 'Maki Cheesy Saumon', price: 20.000, desc: 'Saumon - Fromage fondu', pieces: '8 pièces', emoji: '', popular: false },
        { id: 13, name: 'Maki Spicy Saumon', price: 18.500, desc: 'Saumon - Sauce épicée', pieces: '8 pièces', emoji: '🌶️', popular: true },
        { id: 14, name: 'Maki Avocat', price: 15.000, desc: 'Avocat frais crémeux', pieces: '8 pièces', emoji: '🥑', popular: false },
        { id: 15, name: 'Maki Thon', price: 19.000, desc: 'Thon rouge premium', pieces: '8 pièces', emoji: '🐟', popular: false },
        { id: 16, name: 'Maki California', price: 21.000, desc: 'Crabe - Avocat - Concombre', pieces: '8 pièces', emoji: '🍙', popular: true },
        { id: 17, name: 'Maki Crevette', price: 17.000, desc: 'Crevette tempura croustillante', pieces: '8 pièces', emoji: '🦐', popular: false },
        { id: 18, name: 'Maki Concombre', price: 12.000, desc: 'Concombre frais et croquant', pieces: '8 pièces', emoji: '🥒', popular: false },
        { id: 19, name: 'Maki Anguille', price: 24.000, desc: 'Anguille grillée sauce teriyaki', pieces: '8 pièces', emoji: '🐍', popular: true },
        { id: 20, name: 'Maki Philadelphia', price: 22.000, desc: 'Saumon - Fromage cream - Avocat', pieces: '8 pièces', emoji: '🍣', popular: true },
        { id: 21, name: 'Maki Dynamite', price: 23.000, desc: 'Crevette épicée - Mayo - Tobiko', pieces: '8 pièces', emoji: '💥', popular: false },
        { id: 22, name: 'Maki Boston', price: 20.000, desc: 'Saumon - Avocat - Fromage', pieces: '8 pièces', emoji: '🍣', popular: false }
    ],
    nigiri: [
        { id: 23, name: 'Nigiri Saumon', price: 16.000, desc: '2 pièces de saumon frais', pieces: '2 pièces', emoji: '🍣', popular: true },
        { id: 24, name: 'Nigiri Thon', price: 18.000, desc: '2 pièces de thon rouge', pieces: '2 pièces', emoji: '🐟', popular: true },
        { id: 25, name: 'Nigiri Crevette', price: 15.000, desc: '2 pièces de crevette cuite', pieces: '2 pièces', emoji: '🦐', popular: false },
        { id: 26, name: 'Nigiri Anguille', price: 17.000, desc: '2 pièces d\'anguille grillée', pieces: '2 pièces', emoji: '🐍', popular: false },
        { id: 27, name: 'Nigiri Oeuf', price: 12.000, desc: '2 pièces d\'omelette japonaise', pieces: '2 pièces', emoji: '🥚', popular: false },
        { id: 28, name: 'Nigiri Poulpe', price: 16.000, desc: '2 pièces de poulpe tendre', pieces: '2 pièces', emoji: '🐙', popular: false },
        { id: 29, name: 'Nigiri Crevette Crue', price: 19.000, desc: '2 pièces de crevette crue', pieces: '2 pièces', emoji: '🦐', popular: true },
        { id: 30, name: 'Nigiri Dauphin', price: 20.000, desc: '2 pièces de thon blanc', pieces: '2 pièces', emoji: '', popular: false }
    ],
    sashimi: [
        { id: 31, name: 'Sashimi Saumon', price: 28.000, desc: '5 tranches de saumon frais', pieces: '5 pièces', emoji: '🐟', popular: true },
        { id: 32, name: 'Sashimi Thon', price: 32.000, desc: '5 tranches de thon rouge', pieces: '5 pièces', emoji: '🐟', popular: true },
        { id: 33, name: 'Sashimi Mixte', price: 35.000, desc: 'Assortiment saumon et thon', pieces: '8 pièces', emoji: '🍽️', popular: true },
        { id: 34, name: 'Sashimi Bar', price: 30.000, desc: '5 tranches de bar frais', pieces: '5 pièces', emoji: '🐟', popular: false },
        { id: 35, name: 'Sashimi Poulpe', price: 26.000, desc: '5 tranches de poulpe', pieces: '5 pièces', emoji: '🐙', popular: false },
        { id: 36, name: 'Sashimi Premium', price: 45.000, desc: 'Assortiment premium 12 pièces', pieces: '12 pièces', emoji: '', popular: true }
    ],
    sidedishes: [
        { id: 37, name: 'Edamame', price: 8.000, desc: 'Fèves de soja vapeur', pieces: '', emoji: '', popular: false },
        { id: 38, name: 'Gyoza', price: 12.000, desc: 'Raviolis grillés', pieces: '6 pièces', emoji: '🥟', popular: true },
        { id: 39, name: 'Tempura', price: 14.000, desc: 'Légumes et crevettes', pieces: '8 pièces', emoji: '🍤', popular: false },
        { id: 40, name: 'Miso Soup', price: 6.000, desc: 'Soupe traditionnelle', pieces: '', emoji: '', popular: false },
        { id: 41, name: 'Salade Wakame', price: 9.000, desc: 'Salade d\'algues wakame', pieces: '', emoji: '🥗', popular: false },
        { id: 42, name: 'Poulet Karaage', price: 15.000, desc: 'Poulet frit japonais', pieces: '6 pièces', emoji: '🍗', popular: true },
        { id: 43, name: 'Tofu Agedashi', price: 10.000, desc: 'Tofu frit en sauce dashi', pieces: '4 pièces', emoji: '🧈', popular: false },
        { id: 44, name: 'Crabe Rangoon', price: 13.000, desc: 'Raviolis au crabe croustillants', pieces: '6 pièces', emoji: '🦀', popular: false }
    ],
    noodles: [
        { id: 45, name: 'Ramen Tonkotsu', price: 22.000, desc: 'Bouillon de porc - Chashu', pieces: '', emoji: '🍜', popular: true },
        { id: 46, name: 'Udon', price: 18.000, desc: 'Noodles épais - Bouillon dashi', pieces: '', emoji: '🍜', popular: false },
        { id: 47, name: 'Yakisoba', price: 19.000, desc: 'Noodles sautés aux légumes', pieces: '', emoji: '🍝', popular: false },
        { id: 48, name: 'Soba Froid', price: 16.000, desc: 'Noodles de sarrasin froids', pieces: '', emoji: '🍜', popular: false },
        { id: 49, name: 'Ramen Épicé', price: 24.000, desc: 'Bouillon épicé - Boeuf', pieces: '', emoji: '', popular: true },
        { id: 50, name: 'Udon Tempura', price: 21.000, desc: 'Udon avec crevettes tempura', pieces: '', emoji: '🍤', popular: false }
    ],
    desserts: [
        { id: 51, name: 'Mochi Ice Cream', price: 10.000, desc: 'Glace enrobée de riz gluant', pieces: '3 pièces', emoji: '🍡', popular: true },
        { id: 52, name: 'Taiyaki', price: 8.000, desc: 'Gâteau en forme de poisson', pieces: '2 pièces', emoji: '🐟', popular: false },
        { id: 53, name: 'Green Tea Ice Cream', price: 7.000, desc: 'Glace au thé vert', pieces: '2 boules', emoji: '🍦', popular: true },
        { id: 54, name: 'Dorayaki', price: 9.000, desc: 'Pancakes fourrés haricot rouge', pieces: '2 pièces', emoji: '🥞', popular: false },
        { id: 55, name: 'Matcha Tiramisu', price: 12.000, desc: 'Tiramisu au thé vert', pieces: '1 portion', emoji: '🍰', popular: true },
        { id: 56, name: 'Cheesecake Japonais', price: 11.000, desc: 'Cheesecake léger et fluffy', pieces: '1 portion', emoji: '🍰', popular: false }
    ],
    poke: [
        { id: 57, name: 'Poke Saumon', price: 22.000, desc: 'Saumon - Riz - Avocat - Edamame', pieces: '', emoji: '', popular: true },
        { id: 58, name: 'Poke Thon', price: 24.000, desc: 'Thon - Riz - Mangue - Concombre', pieces: '', emoji: '', popular: true },
        { id: 59, name: 'Poke Veggie', price: 18.000, desc: 'Tofu - Riz - Légumes frais', pieces: '', emoji: '', popular: false },
        { id: 60, name: 'Poke Mixte', price: 26.000, desc: 'Saumon et thon - Riz - Avocat', pieces: '', emoji: '🥗', popular: true },
        { id: 61, name: 'Poke Crevette', price: 23.000, desc: 'Crevettes - Riz - Mangue', pieces: '', emoji: '', popular: false }
    ],
    chirashi: [
        { id: 62, name: 'Chirashi Saumon', price: 25.000, desc: 'Saumon sur riz vinaigré', pieces: '', emoji: '🍚', popular: true },
        { id: 63, name: 'Chirashi Mixte', price: 32.000, desc: 'Assortiment de poissons', pieces: '', emoji: '', popular: true },
        { id: 64, name: 'Chirashi Deluxe', price: 38.000, desc: 'Sélection premium 8 poissons', pieces: '', emoji: '', popular: false }
    ],
    extras: [
        { id: 65, name: 'Riz Supplémentaire', price: 3.000, desc: 'Portion de riz', pieces: '', emoji: '', popular: false },
        { id: 66, name: 'Sauce Soja', price: 1.000, desc: 'Sauce soja premium', pieces: '', emoji: '', popular: false },
        { id: 67, name: 'Gingembre', price: 2.000, desc: 'Gingembre mariné', pieces: '', emoji: '', popular: false },
        { id: 68, name: 'Wasabi', price: 1.500, desc: 'Wasabi frais', pieces: '', emoji: '', popular: false },
        { id: 69, name: 'Sauce Spicy Mayo', price: 2.000, desc: 'Mayonnaise épicée', pieces: '', emoji: '🌶️', popular: false },
        { id: 70, name: 'Sauce Teriyaki', price: 2.000, desc: 'Sauce teriyaki maison', pieces: '', emoji: '', popular: false }
    ]
};

const categories = [
    { id: 'plateaux', name: 'Plateaux', icon: '' },
    { id: 'maki', name: 'Maki', icon: '🍙' },
    { id: 'nigiri', name: 'Nigiri', icon: '' },
    { id: 'sashimi', name: 'Sashimi', icon: '' },
    { id: 'sidedishes', name: 'Accompagnements', icon: '🍤' },
    { id: 'noodles', name: 'Noodles', icon: '🍜' },
    { id: 'poke', name: 'Poke', icon: '🥗' },
    { id: 'chirashi', name: 'Chirashi', icon: '🍚' },
    { id: 'desserts', name: 'Desserts', icon: '🍡' },
    { id: 'extras', name: 'Extras', icon: '' }
];

// === 2. STATE MANAGEMENT ===
let cart = JSON.parse(localStorage.getItem('minato_cart')) || [];
let currentCategory = 'plateaux';
let quantities = {};
Object.values(menuData).flat().forEach(p => quantities[p.id] = 1);

// === 3. DOM ELEMENTS ===
const els = {
    categoryList: document.getElementById('categoryList'),
    productsGrid: document.getElementById('productsGrid'),
    cartCount: document.getElementById('cartCount'),
    navCartCount: document.getElementById('navCartCount'),
    categoryTitle: document.getElementById('categoryTitle'),
    mobileToggle: document.querySelector('.mobile-toggle'),
    navLinks: document.querySelector('.nav-links')
};

// === 4. RENDER FUNCTIONS ===
function renderCategories() {
    if (!els.categoryList) return;
    els.categoryList.innerHTML = categories.map(cat => `
        <div class="cat-item ${cat.id === currentCategory ? 'active' : ''}" onclick="switchCategory('${cat.id}')">
            <span class="cat-icon">${cat.icon}</span>
            <span>${cat.name}</span>
        </div>
    `).join('');
}

function switchCategory(catId) {
    currentCategory = catId;
    renderCategories();
    renderProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderProducts() {
    if (!els.productsGrid) return;
    const products = menuData[currentCategory] || [];
    const category = categories.find(c => c.id === currentCategory);
    
    if (els.categoryTitle) els.categoryTitle.textContent = category ? category.name : 'Menu';
    
    if (products.length === 0) {
        els.productsGrid.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:40px;">Aucun article</p>';
        return;
    }
    
    els.productsGrid.innerHTML = products.map((product, index) => `
        <div class="product-card scale-in" style="transition-delay: ${index * 0.05}s">
            <div class="prod-img">
                ${product.popular ? '<span class="badge-popular">Populaire</span>' : ''}
                <span>${product.emoji}</span>
            </div>
            <div class="prod-details">
                <div class="prod-name">${product.name}</div>
                <div class="prod-desc">${product.desc}</div>
                ${product.pieces ? `<div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:10px;">${product.pieces}</div>` : ''}
                <span class="prod-price">${product.price.toFixed(3)} DT</span>
                <div class="qty-control">
                    <button class="qty-btn" onclick="updateQuantity(${product.id}, -1)">−</button>
                    <span class="qty-val" id="qty-${product.id}">${quantities[product.id]}</span>
                    <button class="qty-btn" onclick="updateQuantity(${product.id}, 1)">+</button>
                </div>
                <button class="btn-add" onclick="addToCart(${product.id})" id="btn-${product.id}">
                    + Ajouter au Panier
                </button>
            </div>
        </div>
    `).join('');
    
    // Trigger animations for new items
    setTimeout(() => {
        document.querySelectorAll('.scale-in').forEach(el => el.classList.add('active'));
    }, 50);
}

// === 5. CART LOGIC ===
function updateQuantity(productId, change) {
    quantities[productId] = Math.max(1, Math.min(10, quantities[productId] + change));
    const qtyEl = document.getElementById(`qty-${productId}`);
    if (qtyEl) qtyEl.textContent = quantities[productId];
}

function addToCart(productId) {
    const allProducts = Object.values(menuData).flat();
    const product = allProducts.find(p => p.id === productId);
    const quantity = quantities[productId];
    
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) existingItem.quantity += quantity;
    else cart.push({ ...product, quantity });
    
    saveCart();
    updateCartCount();
    renderCartPage(); // Update panier page if open
    
    // Button Animation
    const btn = document.getElementById(`btn-${productId}`);
    if (btn) {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span>✓ Ajouté</span>';
        btn.style.background = 'var(--primary)';
        btn.style.borderColor = 'var(--primary)';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.style.borderColor = '';
        }, 1500);
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCartPage();
    updateCartCount();
}

function updateCartItemQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) removeFromCart(productId);
        else { saveCart(); renderCartPage(); updateCartCount(); }
    }
}

function saveCart() {
    localStorage.setItem('minato_cart', JSON.stringify(cart));
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (els.cartCount) els.cartCount.textContent = count;
    if (els.navCartCount) els.navCartCount.textContent = count;
    
    // Animate count change
    const badge = document.querySelector('.cart-count');
    if (badge) {
        badge.style.transform = 'scale(1.3)';
        setTimeout(() => badge.style.transform = 'scale(1)', 200);
    }
}

// === 6. CART PAGE RENDER ===
function renderCartPage() {
    const cartContent = document.getElementById('cartContent');
    const emptyCart = document.getElementById('emptyCart');
    
    if (!cartContent) return;
    
    if (cart.length === 0) {
        cartContent.style.display = 'none';
        emptyCart.style.display = 'block';
        return;
    }
    
    cartContent.style.display = 'block';
    emptyCart.style.display = 'none';
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartContent.innerHTML = `
        <div class="cart-grid">
            <div>
                <h2 class="reveal">Articles (${cart.length})</h2>
                <div class="cart-items-list">
                    ${cart.map(item => `
                        <div class="cart-item-row reveal-left">
                            <div class="cart-item-img">${item.emoji}</div>
                            <div class="cart-item-info">
                                <h3 class="cart-item-name">${item.name}</h3>
                                <p class="cart-item-desc">${item.desc}</p>
                                <div class="cart-item-price">${(item.price * item.quantity).toFixed(3)} DT</div>
                            </div>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateCartItemQuantity(${item.id}, -1)">−</button>
                                <span class="qty-val">${item.quantity}</span>
                                <button class="qty-btn" onclick="updateCartItemQuantity(${item.id}, 1)">+</button>
                            </div>
                            <button class="cart-remove" onclick="removeFromCart(${item.id})">🗑️</button>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="cart-summary reveal-right">
                <h3>Résumé de la Commande</h3>
                <div class="summary-row"><span>Sous-total</span><span>${total.toFixed(3)} DT</span></div>
                <div class="summary-row"><span>Livraison</span><span style="color:#4CAF50;">Gratuite</span></div>
                <div class="summary-total"><span>Total</span><span>${total.toFixed(3)} DT</span></div>
                <button onclick="openCheckoutModal()" class="btn-primary btn-checkout">Commander Maintenant</button>
                <p style="text-align:center;margin-top:15px;font-size:0.85rem;color:var(--text-muted);">💵 Paiement à la livraison</p>
            </div>
        </div>
    `;
    
    // Trigger scroll animations for cart items
    setTimeout(initScrollAnimations, 100);
}

// === 7. SCROLL ANIMATIONS (Intersection Observer) ===
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .scale-in').forEach(el => {
        observer.observe(el);
    });
}

// === 8. MODALS & CHECKOUT ===
function openCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    if (!modal) return;
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const summaryDiv = document.getElementById('orderSummaryItems');
    const totalDisplay = document.getElementById('orderTotalDisplay');
    
    if (summaryDiv) {
        summaryDiv.innerHTML = cart.map(item => `
            <div class="order-item"><span>${item.quantity}x ${item.name}</span><span style="font-weight:600;">${(item.price * item.quantity).toFixed(3)} DT</span></div>
        `).join('');
    }
    if (totalDisplay) totalDisplay.textContent = total.toFixed(3) + ' DT';
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// === 9. CONFETTI ANIMATION (For Success) ===
function fireConfetti() {
    const canvas = document.createElement('canvas');
    canvas.className = 'confetti-canvas';
    document.getElementById('successModal').appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const colors = ['#5B9BD5', '#FF554D', '#FFD700', '#4CAF50', '#ffffff'];
    
    for (let i = 0; i < 150; i++) {
        particles.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            w: Math.random() * 10 + 5,
            h: Math.random() * 10 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 20,
            vy: (Math.random() - 0.5) * 20 - 5,
            gravity: 0.5,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let active = false;
        
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += p.gravity;
            p.rotation += p.rotationSpeed;
            
            if (p.y < canvas.height) {
                active = true;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation * Math.PI / 180);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                ctx.restore();
            }
        });
        
        if (active) requestAnimationFrame(animate);
        else canvas.remove();
    }
    
    animate();
}

// === 10. ORDER SUBMISSION (EmailJS) ===
async function submitOrder() {
    const form = document.getElementById('checkoutForm');
    if (!form) return;
    
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const address = document.getElementById('customerAddress').value.trim();
    const note = document.getElementById('customerNote').value.trim();
    
    if (!name || !phone || !address) {
        alert('Veuillez remplir tous les champs obligatoires');
        return;
    }
    
    const btn = document.getElementById('confirmOrderBtn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span style="display:flex;align-items:center;gap:10px;">Envoi en cours... <span class="loader"></span></span>';
    btn.disabled = true;
    
    try {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        const templateParams = {
            from_name: name,
            phone: phone,
            address: address,
            note: note || 'Aucune',
            order_items: cart.map(i => `${i.quantity}x ${i.name} - ${(i.price * i.quantity).toFixed(3)} DT`).join('\n'),
            total: total.toFixed(3),
            date: new Date().toLocaleString('fr-FR')
        };

        const serviceID = 'service_2vklqtm';
        const templateID = 'template_zozfs9y';
        
        await emailjs.send(serviceID, templateID, templateParams);
        
        // Success
        cart = [];
        localStorage.setItem('minato_cart', JSON.stringify(cart));
        updateCartCount();
        renderCartPage();
        
        closeCheckoutModal();
        document.getElementById('successModal').classList.add('active');
        fireConfetti(); // Trigger the art animation
        
    } catch (error) {
        console.error('EmailJS Error:', error);
        alert('Erreur de connexion. Veuillez réessayer.');
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

// === 11. INITIALIZATION ===
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderProducts();
    updateCartCount();
    initScrollAnimations();
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });
    
    // Mobile menu
    if (els.mobileToggle && els.navLinks) {
        els.mobileToggle.addEventListener('click', () => {
            els.navLinks.classList.toggle('active');
        });
    }
});

// Global exports
window.updateQuantity = updateQuantity;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartItemQuantity = updateCartItemQuantity;
window.openCheckoutModal = openCheckoutModal;
window.closeCheckoutModal = closeCheckoutModal;
window.submitOrder = submitOrder;
window.switchCategory = switchCategory;

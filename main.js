const menuData = {
    plateaux: [
        { id: 1, name: 'Plateau 1 - P1', price: 37.500, desc: '8 Maki Saumon - 8 Californien - Saumon Avocat', pieces: '16 pièces', emoji: '🍱', popular: true },
        { id: 2, name: 'Plateau 2 - P2', price: 61.000, desc: '8 Maki Saumon - 8 Californien - Saumon Avocat - 8 Crunchy Las Vegas', pieces: '24 pièces', emoji: '🍱', popular: true },
        { id: 3, name: 'Plateau Crunchy', price: 69.000, desc: '8 Crunchy Maki Spicy Ebi Tempura - 8 Las Vegas - 6 Godzilla', pieces: '22 pièces', emoji: '', popular: true },
        { id: 4, name: 'Plateau Deluxe', price: 89.000, desc: 'Assortiment premium de nos meilleures spécialités', pieces: '32 pièces', emoji: '🍱', popular: false },
        { id: 5, name: 'Plateau Veggie', price: 42.000, desc: 'Sélection de sushis végétariens frais', pieces: '20 pièces', emoji: '🥬', popular: false },
        { id: 6, name: 'Plateau Spicy', price: 58.000, desc: 'Pour les amateurs de sensations fortes', pieces: '24 pièces', emoji: '🌶️', popular: false },
        { id: 7, name: 'Plateau Family', price: 120.000, desc: 'Idéal pour 4-6 personnes - variété et quantité', pieces: '50 pièces', emoji: '👨‍👩‍👧‍👦', popular: true },
        { id: 8, name: 'Plateau Couple', price: 75.000, desc: 'Parfait pour deux - assortiment romantique', pieces: '28 pièces', emoji: '💑', popular: false },
        { id: 9, name: 'Plateau Solo', price: 29.000, desc: 'Menu individuel complet', pieces: '12 pièces', emoji: '🍱', popular: true },
        { id: 10, name: 'Plateau Premium', price: 150.000, desc: 'Le summum de nos créations', pieces: '60 pièces', emoji: '👑', popular: true }
    ],
    maki: [
        { id: 11, name: 'Maki Saumon', price: 18.500, desc: 'Saumon frais', pieces: '8 pièces', emoji: '🍣', popular: true },
        { id: 12, name: 'Maki Cheesy Saumon', price: 20.000, desc: 'Saumon - Fromage fondu', pieces: '8 pièces', emoji: '🧀', popular: false },
        { id: 13, name: 'Maki Spicy Saumon', price: 18.500, desc: 'Saumon - Sauce épicée', pieces: '8 pièces', emoji: '🌶️', popular: true },
        { id: 14, name: 'Maki Avocat', price: 15.000, desc: 'Avocat frais crémeux', pieces: '8 pièces', emoji: '🥑', popular: false },
        { id: 15, name: 'Maki Thon', price: 19.000, desc: 'Thon rouge premium', pieces: '8 pièces', emoji: '🐟', popular: false },
        { id: 16, name: 'Maki California', price: 21.000, desc: 'Crabe - Avocat - Concombre', pieces: '8 pièces', emoji: '🍙', popular: true },
        { id: 17, name: 'Maki Crevette', price: 17.000, desc: 'Crevette tempura croustillante', pieces: '8 pièces', emoji: '', popular: false },
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
        { id: 40, name: 'Miso Soup', price: 6.000, desc: 'Soupe traditionnelle', pieces: '', emoji: '🍲', popular: false },
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
        { id: 61, name: 'Poke Crevette', price: 23.000, desc: 'Crevettes - Riz - Mangue', pieces: '', emoji: '🦐', popular: false }
    ],
    chirashi: [
        { id: 62, name: 'Chirashi Saumon', price: 25.000, desc: 'Saumon sur riz vinaigré', pieces: '', emoji: '🍚', popular: true },
        { id: 63, name: 'Chirashi Mixte', price: 32.000, desc: 'Assortiment de poissons', pieces: '', emoji: '', popular: true },
        { id: 64, name: 'Chirashi Deluxe', price: 38.000, desc: 'Sélection premium 8 poissons', pieces: '', emoji: '', popular: false }
    ],
    extras: [
        { id: 65, name: 'Riz Supplémentaire', price: 3.000, desc: 'Portion de riz', pieces: '', emoji: '🍚', popular: false },
        { id: 66, name: 'Sauce Soja', price: 1.000, desc: 'Sauce soja premium', pieces: '', emoji: '🥣', popular: false },
        { id: 67, name: 'Gingembre', price: 2.000, desc: 'Gingembre mariné', pieces: '', emoji: '🫚', popular: false },
        { id: 68, name: 'Wasabi', price: 1.500, desc: 'Wasabi frais', pieces: '', emoji: '', popular: false },
        { id: 69, name: 'Sauce Spicy Mayo', price: 2.000, desc: 'Mayonnaise épicée', pieces: '', emoji: '🌶️', popular: false },
        { id: 70, name: 'Sauce Teriyaki', price: 2.000, desc: 'Sauce teriyaki maison', pieces: '', emoji: '🥫', popular: false }
    ]
};

const categories = [
    { id: 'plateaux', name: 'Plateaux', icon: '🍱' },
    { id: 'maki', name: 'Maki', icon: '🍙' },
    { id: 'nigiri', name: 'Nigiri', icon: '🍣' },
    { id: 'sashimi', name: 'Sashimi', icon: '' },
    { id: 'sidedishes', name: 'Accompagnements', icon: '🍤' },
    { id: 'noodles', name: 'Noodles', icon: '🍜' },
    { id: 'poke', name: 'Poke', icon: '🥗' },
    { id: 'chirashi', name: 'Chirashi', icon: '🍚' },
    { id: 'desserts', name: 'Desserts', icon: '🍡' },
    { id: 'extras', name: 'Extras', icon: '' }
];

let cart = JSON.parse(localStorage.getItem('minato_cart')) || [];
let currentCategory = 'plateaux';
let quantities = {};

Object.values(menuData).flat().forEach(p => quantities[p.id] = 1);

const els = {
    categoryList: document.getElementById('categoryList'),
    productsGrid: document.getElementById('productsGrid'),
    cartItems: document.getElementById('cartItems'),
    cartTotal: document.getElementById('cartTotal'),
    cartCount: document.getElementById('cartCount'),
    cartPanel: document.getElementById('cartPanel'),
    cartToggle: document.getElementById('cartToggle'),
    closeCart: document.getElementById('closeCart'),
    checkoutBtn: document.getElementById('checkoutBtn'),
    checkoutModal: document.getElementById('checkoutModal'),
    closeModal: document.getElementById('closeModal'),
    cancelOrder: document.getElementById('cancelOrder'),
    confirmOrder: document.getElementById('confirmOrder'),
    successModal: document.getElementById('successModal'),
    closeSuccess: document.getElementById('closeSuccess'),
    categoryTitle: document.getElementById('categoryTitle'),
    checkoutForm: document.getElementById('checkoutForm'),
    mobileToggle: document.querySelector('.mobile-toggle'),
    navLinks: document.querySelector('.nav-links')
};

function renderCategories() {
    if (!els.categoryList) return;
    els.categoryList.innerHTML = categories.map(c => `
        <li class="category-item ${c.id === currentCategory ? 'active' : ''}" data-category="${c.id}">
            <span class="category-icon">${c.icon}</span>
            <span class="category-name">${c.name}</span>
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

function renderProducts() {
    if (!els.productsGrid) return;
    const products = menuData[currentCategory] || [];
    const cat = categories.find(c => c.id === currentCategory);
    if (els.categoryTitle) els.categoryTitle.textContent = cat ? cat.name : 'Menu';
    
    if (products.length === 0) {
        els.productsGrid.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:40px;">Aucun article</p>';
        return;
    }
    
    els.productsGrid.innerHTML = products.map(p => `
        <div class="product-card">
            <div class="product-image">
                <span>${p.emoji}</span>
                ${p.popular ? '<span class="product-badge">Populaire</span>' : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${p.name}</h3>
                <p class="product-desc">${p.desc}</p>
                ${p.pieces ? `<p class="product-pieces">${p.pieces}</p>` : ''}
                <div class="product-price">${p.price.toFixed(3)} DT</div>
                <div class="quantity-control">
                    <button class="qty-btn" onclick="updateQuantity(${p.id}, -1)">−</button>
                    <span class="qty-value" id="qty-${p.id}">${quantities[p.id]}</span>
                    <button class="qty-btn" onclick="updateQuantity(${p.id}, 1)">+</button>
                </div>
                <button class="add-to-cart" onclick="addToCart(${p.id})" id="btn-${p.id}">+ Ajouter</button>
            </div>
        </div>
    `).join('');
}

function renderCart() {
    if (!els.cartItems || !els.cartTotal || !els.cartCount) return;
    const totalItems = cart.reduce((s, i) => s + i.quantity, 0);
    const totalPrice = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    els.cartCount.textContent = totalItems;
    els.cartTotal.textContent = totalPrice.toFixed(3) + ' DT';
    
    if (cart.length === 0) {
        els.cartItems.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🍣</div><p>Votre panier est vide</p><p class="cart-hint">Ajoutez des articles depuis le menu</p></div>`;
        if (els.checkoutBtn) els.checkoutBtn.disabled = true;
    } else {
        els.cartItems.innerHTML = cart.map(i => `
            <div class="cart-item">
                <div class="cart-item-image">${i.emoji}</div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${i.name}</div>
                    <div class="cart-item-price">${(i.price * i.quantity).toFixed(3)} DT</div>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="updateCartItemQuantity(${i.id}, -1)">−</button>
                        <span>${i.quantity}</span>
                        <button class="qty-btn" onclick="updateCartItemQuantity(${i.id}, 1)">+</button>
                        <button class="cart-item-remove" onclick="removeFromCart(${i.id})">✕</button>
                    </div>
                </div>
            </div>
        `).join('');
        if (els.checkoutBtn) els.checkoutBtn.disabled = false;
    }
}

function updateQuantity(id, change) {
    quantities[id] = Math.max(1, Math.min(10, quantities[id] + change));
    const el = document.getElementById(`qty-${id}`);
    if (el) el.textContent = quantities[id];
}

function addToCart(id) {
    const all = Object.values(menuData).flat();
    const product = all.find(p => p.id === id);
    if (!product) return;
    const qty = quantities[id];
    const existing = cart.find(i => i.id === id);
    if (existing) existing.quantity += qty;
    else cart.push({...product, quantity: qty});
    saveCart();
    renderCart();
    const btn = document.getElementById(`btn-${id}`);
    if (btn) {
        const orig = btn.textContent;
        btn.classList.add('added');
        btn.textContent = '✓ Ajouté';
        setTimeout(() => { btn.classList.remove('added'); btn.textContent = orig; }, 2000);
    }
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    renderCart();
}

function updateCartItemQuantity(id, change) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += change;
        item.quantity <= 0 ? removeFromCart(id) : (saveCart(), renderCart());
    }
}

function saveCart() {
    localStorage.setItem('minato_cart', JSON.stringify(cart));
}

function initMobileMenu() {
    if (!els.mobileToggle || !els.navLinks) return;
    els.mobileToggle.addEventListener('click', () => {
        els.navLinks.classList.toggle('active');
        els.mobileToggle.classList.toggle('active');
    });
}

function initCartToggle() {
    if (!els.cartToggle || !els.cartPanel) return;
    els.cartToggle.addEventListener('click', () => els.cartPanel.classList.add('active'));
    if (els.closeCart) els.closeCart.addEventListener('click', () => els.cartPanel.classList.remove('active'));
    document.addEventListener('click', e => {
        if (els.cartPanel.classList.contains('active') && !els.cartPanel.contains(e.target) && !els.cartToggle.contains(e.target)) {
            els.cartPanel.classList.remove('active');
        }
    });
}

function initModals() {
    if (els.checkoutBtn) els.checkoutBtn.addEventListener('click', () => { els.checkoutModal.classList.add('active'); els.cartPanel.classList.remove('active'); });
    if (els.closeModal) els.closeModal.addEventListener('click', () => els.checkoutModal.classList.remove('active'));
    if (els.cancelOrder) els.cancelOrder.addEventListener('click', () => els.checkoutModal.classList.remove('active'));
    if (els.closeSuccess) els.closeSuccess.addEventListener('click', () => els.successModal.classList.remove('active'));
}

async function confirmOrderHandler() {
    if (!els.checkoutForm) return;
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const address = document.getElementById('customerAddress').value.trim();
    const note = document.getElementById('customerNote').value.trim();
    if (!name || !phone || !address) { alert('Veuillez remplir tous les champs'); return; }
    
    const confirmBtn = els.confirmOrder;
    const orig = confirmBtn.textContent;
    confirmBtn.textContent = 'Envoi...';
    confirmBtn.disabled = true;
    
    try {
        const response = await fetch('/api/send-order', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ cartData: cart, customerDetails: { name, phone, address, note } })
        });
        const result = await response.json();
        if (result.success) {
            cart = []; saveCart(); renderCart();
            els.checkoutModal.classList.remove('active');
            els.successModal.classList.add('active');
            els.checkoutForm.reset();
        } else {
            alert('Erreur. Appelez le restaurant directement.');
        }
    } catch (e) {
        console.error(e);
        alert('Erreur de connexion. Veuillez réessayer.');
    } finally {
        confirmBtn.textContent = orig;
        confirmBtn.disabled = false;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderProducts();
    renderCart();
    initMobileMenu();
    initCartToggle();
    initModals();
    if (els.confirmOrder) els.confirmOrder.addEventListener('click', confirmOrderHandler);
});

window.updateQuantity = updateQuantity;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartItemQuantity = updateCartItemQuantity;

// Confirm Order - Send via Netlify Function
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
        // Call Netlify Function
        const response = await fetch('/.netlify/functions/send-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cartData: cart,
                customerDetails: customerDetails
            })
        });
        
        const result = await response.json();
        
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
            console.error('Order error:', result);
        }
    } catch (error) {
        console.error('Error sending order:', error);
        alert('An error occurred. Please try again or call the restaurant.');
    } finally {
        confirmBtn.textContent = originalText;
        confirmBtn.disabled = false;
    }
}

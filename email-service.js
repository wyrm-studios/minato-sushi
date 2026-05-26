import SibApiV3Sdk from 'sib-api-v3-sdk';

// 1. Initialize Brevo API Client
const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];

// -----------------------------------------------------
// YOUR BREVO API KEY
// -----------------------------------------------------
apiKey.apiKey = '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';

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

// 2. Main Export Function to send order
export const sendOrderToMinato = async (cartData, customerDetails) => {
    
    // Calculate Total
    const total = cartData.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    // Construct a beautiful HTML Email Body
    const htmlContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
            <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; border-top: 5px solid #465162;">
                <h2 style="color: #465162; margin-bottom: 5px;">🍣 New Delivery Order!</h2>
                <p style="color: #777; font-size: 14px;">A new order has been placed on the Minato Website.</p>
                
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                
                <h3 style="color: #000;">Customer Details:</h3>
                <p><strong>Name:</strong> ${customerDetails.name}</p>
                <p><strong>Phone:</strong> ${customerDetails.phone}</p>
                <p><strong>Address:</strong> ${customerDetails.address}</p>
                <p><strong>Payment:</strong> Cash/Card on Delivery</p>
                
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                
                <h3 style="color: #000;">Order Summary:</h3>
                <ul style="list-style: none; padding: 0;">
                    ${cartData.map(item => `
                        <li style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee;">
                            <span>${item.quantity}x ${item.name}</span>
                            <strong style="color: #465162;">$${(item.price * item.quantity).toFixed(3)}</strong>
                        </li>
                    `).join('')}
                </ul>
                
                <div style="text-align: right; margin-top: 20px; font-size: 20px; color: #FF554D;">
                    <strong>TOTAL: $${total.toFixed(3)}</strong>
                </div>

                ${customerDetails.note ? `
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                    <h3 style="color: #000;">📝 Customer Note:</h3>
                    <p style="background: #EAE8FD; padding: 15px; border-radius: 5px; font-style: italic;">${customerDetails.note}</p>
                ` : ''}
                
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                <p style="text-align: center; color: #777; font-size: 12px;">
                    Order placed at ${new Date().toLocaleString()}
                </p>
            </div>
        </div>
    `;

    // 3. Setup Email Parameters
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    
    sendSmtpEmail.sender = { 
        name: "Minato Website Order", 
        email: "noreply@minato.com" 
    };
    
    sendSmtpEmail.to = [{ 
        email: "minato.sushi00@gmail.com", 
        name: "Minato Restaurant" 
    }];
    
    sendSmtpEmail.subject = `NEW ORDER: $${total.toFixed(3)} from ${customerDetails.name}`;
    sendSmtpEmail.htmlContent = htmlContent;

    // 4. Send the email via Brevo
    try {
        const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log("✅ Order email sent successfully! ID:", data.messageId);
        return { success: true, message: "Order sent to kitchen!" };
    } catch (error) {
        console.error("❌ Error sending email via Brevo:", error);
        return { success: false, message: "Failed to send order. Please call the restaurant." };
    }
};

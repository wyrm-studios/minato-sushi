const SibApiV3Sdk = require('sib-api-v3-sdk');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { cartData, customerDetails } = req.body;
    const total = cartData.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Brevo Setup
    const defaultClient = SibApiV3Sdk.ApiClient.instance;
    defaultClient.authentications['api-key'].apiKey = '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';
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    // HTML Email
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; border-top: 5px solid #465162;">
          <h2 style="color: #465162;">🍣 New Order Received!</h2>
          <p style="color: #666; font-size: 14px;">Placed at ${new Date().toLocaleString()}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <h3 style="margin: 0 0 10px;">Customer</h3>
          <p><strong>Name:</strong> ${customerDetails.name}<br><strong>Phone:</strong> ${customerDetails.phone}<br><strong>Address:</strong> ${customerDetails.address}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <h3 style="margin: 0 0 10px;">Items</h3>
          <ul style="list-style: none; padding: 0;">
            ${cartData.map(item => `<li style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; display: flex; justify-content: space-between;"><span>${item.quantity}x ${item.name}</span><strong>$${(item.price * item.quantity).toFixed(3)}</strong></li>`).join('')}
          </ul>
          <div style="text-align: right; margin-top: 20px; font-size: 22px; color: #FF554D;"><strong>TOTAL: $${total.toFixed(3)}</strong></div>
          ${customerDetails.note ? `<hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;"><p><strong>📝 Note:</strong> ${customerDetails.note}</p>` : ''}
        </div>
      </div>
    `;

    const email = new SibApiV3Sdk.SendSmtpEmail();
    email.sender = { name: "Minato Orders", email: "noreply@minato.com" };
    email.to = [{ email: "minato.sushi00@gmail.com", name: "Minato Restaurant" }];
    email.subject = ` New Order: $${total.toFixed(2)} from ${customerDetails.name}`;
    email.htmlContent = htmlContent;

    await apiInstance.sendTransacEmail(email);
    return res.status(200).json({ success: true, message: "Order placed successfully!" });
  } catch (error) {
    console.error("Brevo Error:", error);
    return res.status(500).json({ success: false, message: "Failed to place order. Please call us." });
  }
}

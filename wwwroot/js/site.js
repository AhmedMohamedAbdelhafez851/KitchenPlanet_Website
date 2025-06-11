document.addEventListener('DOMContentLoaded', function () {
    // WhatsApp Button
    const whatsappBtn = document.createElement('a');
    whatsappBtn.className = 'whatsapp-btn';
    whatsappBtn.href = 'https://wa.me/1234567890'; // Replace with your WhatsApp number
    whatsappBtn.target = '_blank';
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    document.body.appendChild(whatsappBtn);

    // Loader
    document.getElementById('loader').style.display = 'flex';
    window.addEventListener('load', function () {
        document.getElementById('loader').style.display = 'none';
    });
});
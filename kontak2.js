document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let statusMessage = document.getElementById('statusMessage');

    // Validasi sederhana
    if (name === '' || email === '' || message === '') {
        statusMessage.textContent = 'Semua kolom wajib diisi.';
    } else {
        statusMessage.style.color = 'green';
        statusMessage.textContent = 'Pesan Anda berhasil dikirim!';
        
        // Reset form setelah submit sukses
        document.getElementById('contactForm').reset();
    }
});

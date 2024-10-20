// script.js
document.querySelectorAll('article').forEach(article => {
    article.addEventListener('click', () => {
        alert(`Anda mengklik: ${article.querySelector('h3').innerText}`);
    });
});
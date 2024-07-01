const clicar = document.getElementById('card_image');
const textosElement = document.querySelector('.textos');
clicar.addEventListener('click', () => {
    if (textosElement.style.display === 'none') {
        textosElement.style.display = 'block';
        clicar.style.transform = 'scale(1)'
    } else {
        textosElement.style.display = 'none';
        clicar.style.transform = 'scale(1.5)'
    }
});
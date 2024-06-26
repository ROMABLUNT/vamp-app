document.addEventListener("DOMContentLoaded", function() {
    function adjustHeight() {
        // Определяем высоту устройства
        const deviceHeight = window.innerHeight;
        
        // Находим элемент с классом .main-div
        const mainDiv = document.querySelector('.main-div');
        
        // Устанавливаем высоту элемента
        mainDiv.style.height = deviceHeight + 'px';
    }

    // Настраиваем высоту при загрузке страницы
    adjustHeight();

    // Настраиваем высоту при изменении размера окна
    window.addEventListener('resize', adjustHeight);
});


let tokenCount = 0;

function playX() {
    // Найти элемент героя
    const hero = document.getElementById('hero').querySelector('.vamp-img');
    // Добавить класс для анимации
    hero.classList.add('animate');

    // Удалить класс после окончания анимации
    hero.addEventListener('animationend', () => {
        hero.classList.remove('animate');
    }, { once: true });

    // Увеличить количество токенов
    tokenCount += 150; // например, за каждое нажатие добавляется 100 токенов
    document.getElementById('token-count').textContent = tokenCount;
}
function playY() {
    // Найти элемент героя
    const hero = document.getElementById('hero').querySelector('.vamp-img');

    // Добавить класс для анимации
    hero.classList.add('animate');

    // Удалить класс после окончания анимации
    hero.addEventListener('animationend', () => {
        hero.classList.remove('animate');
    }, { once: true });

    // Увеличить количество токенов
    tokenCount += 175; // например, за каждое нажатие добавляется 100 токенов
    document.getElementById('token-count').textContent = tokenCount;
}
function playZ() {
    // Найти элемент героя
    const hero = document.getElementById('hero').querySelector('.vamp-img');

    // Добавить класс для анимации
    hero.classList.add('animate');

    // Удалить класс после окончания анимации
    hero.addEventListener('animationend', () => {
        hero.classList.remove('animate');
    }, { once: true });

    // Увеличить количество токенов
    tokenCount += 200; // например, за каждое нажатие добавляется 100 токенов
    document.getElementById('token-count').textContent = tokenCount;
}
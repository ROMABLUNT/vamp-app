let tokenCount = 0;

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

function playX() {
    handlePlay('lastPlayedTimeX', 8, 'play-button-x-hours');
}

function playY() {
    handlePlay('lastPlayedTimeY', 6, 'play-button-y-hours');
}

function playZ() {
    handlePlay('lastPlayedTimeZ', 4, 'play-button-z-hours');
}

function handlePlay(storageKey, hoursCooldown, hoursElementId) {
    const currentTime = Date.now();
    const lastPlayed = localStorage.getItem(storageKey);
    
    if (lastPlayed && currentTime - lastPlayed < hoursCooldown * 60 * 60 * 1000) {
        // Если прошло меньше указанного времени, ничего не делаем
        return;
    }

    // Обновляем время последнего нажатия
    localStorage.setItem(storageKey, currentTime);

    // Найти элемент героя
    const hero = document.getElementById('hero').querySelector('.vamp-img');
    // Добавить класс для анимации
    hero.classList.add('animate');

    // Удалить класс после окончания анимации
    hero.addEventListener('animationend', () => {
        hero.classList.remove('animate');
    }, { once: true });

    // Увеличить количество токенов
    tokenCount += 150; // например, за каждое нажатие добавляется 150 токенов
    document.getElementById('token-count').textContent = tokenCount;

    // Обновить состояние кнопок
    updateButtonState();
}

function updateButtonState() {
    updateButtonStateForKey('play-button-x', 'lastPlayedTimeX', 8, 'play-button-x-hours');
    updateButtonStateForKey('play-button-y', 'lastPlayedTimeY', 6, 'play-button-y-hours');
    updateButtonStateForKey('play-button-z', 'lastPlayedTimeZ', 4, 'play-button-z-hours');
}

function updateButtonStateForKey(buttonId, storageKey, hoursCooldown, hoursElementId) {
    const playButton = document.getElementById(buttonId);
    const hoursElement = document.getElementById(hoursElementId);
    const lastPlayed = localStorage.getItem(storageKey);
    const currentTime = Date.now();

    if (lastPlayed && currentTime - lastPlayed < hoursCooldown * 60 * 60 * 1000) {
        const remainingTime = (hoursCooldown * 60 * 60 * 1000 - (currentTime - lastPlayed)) / (60 * 60 * 1000);
        playButton.classList.add('disabled');
        playButton.disabled = true;
        hoursElement.textContent = `${remainingTime.toFixed(2)} hours`;
    } else {
        playButton.classList.remove('disabled');
        playButton.disabled = false;
        hoursElement.textContent = `Play ${buttonId.charAt(buttonId.length - 1).toUpperCase()}`;
    }
}

// Обновляем состояние кнопок при загрузке страницы
document.addEventListener('DOMContentLoaded', updateButtonState);

function clearLocalStorage() {
    localStorage.clear();
    updateButtonState();
    tokenCount = 0;
    document.getElementById('token-count').textContent = tokenCount;
}

const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

function expandApp() {
    tg.expand();
}

function closeApp() {
    tg.close();
}
// я больше не могу
const user = tg.initDataUnsafe.user;
// Функция загрузки прогресса
function loadProgress() {
    fetch(`/load_progress?user_id=${user.id}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                tokenCount = data.tokens;
                document.getElementById("token-count").innerText = `Tokens: ${tokenCount}`;
            } else {
                alert("Error loading progress.");
            }
        });
}

// Загрузка прогресса при запуске
loadProgress();
// Переменные для хранения данных
let tokenCount = 0;  // Общее количество монет
const tokenDisplay = document.getElementById('token-count');  // Элемент для отображения монет

// Функция для обновления отображаемого количества монет
function updateTokenDisplay() {
    tokenDisplay.textContent = tokenCount;
}

// Анимация прыжка (bounce) для вампира
function animateVamp() {
    const vampImg = document.querySelector('.vamp-img');
    vampImg.classList.add('animate');
    setTimeout(() => vampImg.classList.remove('animate'), 1000);
}

// Функция клика по кнопке X
function playX() {
    if (!document.getElementById('play-button-x').classList.contains('disabled')) {
        tokenCount += 1;  // Добавляем 1 монету
        updateTokenDisplay();  // Обновляем отображение монет
        animateVamp();  // Анимация вампира
        disableButton('play-button-x', 3000);  // Блокируем кнопку на 3 секунды
    }
}

// Функция клика по кнопке Y
function playY() {
    if (!document.getElementById('play-button-y').classList.contains('disabled')) {
        tokenCount += 5;  // Добавляем 5 монет
        updateTokenDisplay();  // Обновляем отображение монет
        animateVamp();  // Анимация вампира
        disableButton('play-button-y', 5000);  // Блокируем кнопку на 5 секунд
    }
}

// Функция клика по кнопке Z
function playZ() {
    if (!document.getElementById('play-button-z').classList.contains('disabled')) {
        tokenCount += 10;  // Добавляем 10 монет
        updateTokenDisplay();  // Обновляем отображение монет
        animateVamp();  // Анимация вампира
        disableButton('play-button-z', 8000);  // Блокируем кнопку на 8 секунд
    }
}

// Функция для блокировки кнопки на определённое время
function disableButton(buttonId, timeout) {
    const button = document.getElementById(buttonId);
    button.classList.add('disabled');

    let remainingTime = timeout / 1000; // Секунды
    const timerText = button.querySelector('p');
    timerText.style.display = 'block';
    timerText.textContent = remainingTime;

    const intervalId = setInterval(() => {
        remainingTime -= 1;
        timerText.textContent = remainingTime;

        if (remainingTime <= 0) {
            clearInterval(intervalId);
            button.classList.remove('disabled');
            timerText.style.display = 'none';
        }
    }, 1000);
}

// Очистка LocalStorage (для сброса прогресса)
function clearLocalStorage() {
    localStorage.clear();
    tokenCount = 0;
    updateTokenDisplay();
}

// Функции для управления секциями
function showTasks() {
    hideAllSections(); // Скрыть все секции
    document.getElementById('tasks-section').style.display = 'block'; // Показать секцию задач
}

function showGame() {
    hideAllSections(); // Скрыть все секции
    document.getElementById('game-section').style.display = 'block'; // Показать игровую секцию
}

function showFriends() {
    hideAllSections(); // Скрыть все секции
    document.getElementById('friends-section').style.display = 'block'; // Показать секцию друзей
}

// Функция для скрытия всех секций
function hideAllSections() {
    document.getElementById('tasks-section').style.display = 'none';
    document.getElementById('game-section').style.display = 'none';
    document.getElementById('friends-section').style.display = 'none';
}

// Загружаем количество монет из LocalStorage, если они были сохранены
window.onload = function() {
    const savedTokens = localStorage.getItem('tokenCount');
    if (savedTokens) {
        tokenCount = parseInt(savedTokens);
        updateTokenDisplay();
    }
};

// Сохраняем количество монет в LocalStorage перед закрытием страницы
window.onbeforeunload = function() {
    localStorage.setItem('tokenCount', tokenCount);
};

function checkTask(taskId) {
    const taskMessage = document.getElementById('task-message');

    switch(taskId) {
        case 'task1':
            // Логика проверки выполнения задания "Complete 5 clicks"
            taskMessage.textContent = 'Task "Complete 5 clicks" is completed!';
            break;
        case 'task2':
            // Логика проверки выполнения задания "Invite a friend"
            taskMessage.textContent = 'Task "Invite a friend" is completed!';
            break;
        case 'task3':
            // Логика проверки выполнения задания "Play for 5 minutes"
            taskMessage.textContent = 'Task "Play for 5 minutes" is completed!';
            break;
        default:
            taskMessage.textContent = 'Task not recognized.';
    }

    // Сообщение исчезает через 3 секунды
    setTimeout(() => {
        taskMessage.textContent = '';
    }, 3000);
}
function inviteFriends() {
    alert("Пригласить друзей через Telegram!");
    // Логика для приглашения друзей через Telegram API или другой способ
}

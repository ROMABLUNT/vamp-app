let tokenCount = 0; 
const tokenDisplay = document.getElementById('token-count'); 

function updateTokenDisplay() {
    tokenDisplay.textContent = tokenCount;
}

function animateVamp() {
    const vampImg = document.querySelector('.vamp-img');
    vampImg.classList.add('animate');
    setTimeout(() => vampImg.classList.remove('animate'), 1000);
}

function playX() {
    if (!document.getElementById('play-button-x').classList.contains('disabled')) {
        tokenCount += 1; 
        updateTokenDisplay(); 
        animateVamp();
        disableButton('play-button-x', 3000); 
    }
}

function playY() {
    if (!document.getElementById('play-button-y').classList.contains('disabled')) {
        tokenCount += 5;  
        updateTokenDisplay(); 
        animateVamp(); 
        disableButton('play-button-y', 5000); 
    }
}

// Функция клика по кнопке Z
function playZ() {
    if (!document.getElementById('play-button-z').classList.contains('disabled')) {
        tokenCount += 10; 
        updateTokenDisplay();
        animateVamp(); 
        disableButton('play-button-z', 8000); 
    }
}

function disableButton(buttonId, timeout) {
    const button = document.getElementById(buttonId);
    button.classList.add('disabled');

    let remainingTime = timeout / 1000;
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

function clearLocalStorage() {
    localStorage.clear();
    tokenCount = 0;
    updateTokenDisplay();
}

// Функции для управления секциями
function showTasks() {
    hideAllSections();
    document.getElementById('tasks-section').style.display = 'block';
}

function showGame() {
    hideAllSections(); 
    document.getElementById('game-section').style.display = 'block'; 
}

function showFriends() {
    hideAllSections(); 
    document.getElementById('friends-section').style.display = 'block'; 
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

function setMainDivHeight() {
    const mainDiv = document.querySelector('.main-div');
    mainDiv.style.height = window.innerHeight + 'px';
}

// Вызываем функцию при загрузке страницы
window.addEventListener('load', setMainDivHeight);

// Также вызываем при изменении размера окна
window.addEventListener('resize', setMainDivHeight);
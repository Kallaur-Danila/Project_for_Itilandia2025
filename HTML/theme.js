// Функция для переключения темы
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateIcon();
}

// Функция для установки темы при загрузке страницы
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    updateIcon();
}

// Функция для обновления иконки
function updateIcon() {
    const button = document.querySelector('.theme-toggle');
    button.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';
}

// Устанавливаем тему при загрузке
document.addEventListener('DOMContentLoaded', applySavedTheme);



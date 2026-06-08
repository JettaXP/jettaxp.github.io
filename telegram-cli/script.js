const translations = {
    en: {
        sys_status: "SYS_STATUS: ONLINE",
        github_repo: ">>> GITHUB_REPO <<<",
        subtitle: "Terminal-based Telegram client for Linux",
        features_title: "Features",
        feature_1: "Blazing Fast (C++ & TDLib)",
        feature_2: "Multi-theme support (Dark, Nord, Gruvbox)",
        feature_3: "Keyboard-driven workflow",
        feature_4: "exteraGram badges & Stars support",
        shortcuts_title: "Keyboard Shortcuts",
        shortcut_info: "Toggle Info Panel",
        shortcut_scroll: "Scroll Chat History",
        shortcut_esc: "Cancel Reply / Edit",
        shortcut_quit: "Quit App",
        commands_title: "Commands",
        commands_desc: "Type inside the input bar (prefix with :)",
        cmd_stars: "Toggle Stars balance",
        cmd_gifts: "Toggle Gifts & NFT panel",
        cmd_theme: "Switch UI theme (dark, nord, gruvbox)",
        cmd_logout: "Log out of your account",
        install_title: "Install Now",
        copy: "Copy",
        terminal_note: "> run 'tgcli' to start",
        footer: "Built with ❤️ by JettaXP"
    },
    ru: {
        sys_status: "СТАТУС_СИСТЕМЫ: ОНЛАЙН",
        github_repo: ">>> GITHUB_РЕПОЗИТОРИЙ <<<",
        subtitle: "Консольный клиент Telegram для Linux",
        features_title: "Возможности",
        feature_1: "Невероятно быстрый (написан на C++ и TDLib)",
        feature_2: "Поддержка тем (Dark, Nord, Gruvbox)",
        feature_3: "Управление полностью с клавиатуры",
        feature_4: "Поддержка бейджей exteraGram и Stars",
        shortcuts_title: "Горячие Клавиши",
        shortcut_info: "Информационная панель",
        shortcut_scroll: "Прокрутка истории сообщений",
        shortcut_esc: "Отменить ответ/редактирование",
        shortcut_quit: "Выйти из приложения",
        commands_title: "Команды",
        commands_desc: "Вводите в строке ввода (с префиксом :)",
        cmd_stars: "Показать/скрыть баланс Stars",
        cmd_gifts: "Показать/скрыть подарки и NFT",
        cmd_theme: "Сменить тему (dark, nord, gruvbox)",
        cmd_logout: "Выйти из аккаунта",
        install_title: "Установка",
        copy: "Копировать",
        terminal_note: "> введи 'tgcli' для запуска",
        footer: "Сделано с ❤️ JettaXP"
    }
};

function toggleLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.getElementById('btn-ru').classList.toggle('active', lang === 'ru');
    
    localStorage.setItem('tgcli-lang', lang);
}

function copyCode() {
    navigator.clipboard.writeText("curl -sL https:
    const btn = document.querySelector('.copy-btn');
    const oldText = btn.textContent;
    const lang = localStorage.getItem('tgcli-lang') || 'en';
    btn.textContent = lang === 'ru' ? "Скопировано!" : "Copied!";
    setTimeout(() => {
        btn.textContent = oldText;
    }, 2000);
}


const savedLang = localStorage.getItem('tgcli-lang') || 'en';
toggleLang(savedLang);


let isFlying = false;
function startFlyingCode() {
    const htmlCode = document.documentElement.outerHTML.split('\n').filter(l => l.trim().length > 10);
    const container = document.createElement('div');
    container.className = 'flying-code-container';
    document.body.appendChild(container);

    setInterval(() => {
        if (isFlying) return; 
        isFlying = true;

        const line = document.createElement('div');
        line.className = 'flying-code-line';
        
        const randomLine = htmlCode[Math.floor(Math.random() * htmlCode.length)].trim();
        line.textContent = randomLine.length > 60 ? randomLine.substring(0, 60) + "..." : randomLine;
        
        const duration = 1.2 + Math.random() * 1.5; 
        line.style.animationDuration = `${duration}s`;
        
        
        if (Math.random() > 0.4) {
            line.classList.add('code-glitch');
            line.setAttribute('data-text', line.textContent);
        }
        
        container.appendChild(line);
        
        
        setTimeout(() => {
            if(container.contains(line)) {
                container.removeChild(line);
            }
            isFlying = false;
        }, (duration * 1000) * 0.9); 
    }, 1000); 
}

document.addEventListener("DOMContentLoaded", startFlyingCode);

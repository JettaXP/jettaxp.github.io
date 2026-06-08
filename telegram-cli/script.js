const translations = {
    en: {
        subtitle: "Terminal-based Telegram client for Linux",
        features_title: "Features",
        feature_1: "Blazing Fast (C++ & TDLib)",
        feature_2: "Multi-theme support (Dark, Nord, Gruvbox)",
        feature_3: "Keyboard-driven workflow",
        feature_4: "exteraGram badges & Stars support",
        install_title: "Install Now",
        copy: "Copy",
        terminal_note: "> run 'tgcli' to start",
        footer: "Built with ❤️ by JettaXP"
    },
    ru: {
        subtitle: "Консольный клиент Telegram для Linux",
        features_title: "Возможности",
        feature_1: "Невероятно быстрый (написан на C++ и TDLib)",
        feature_2: "Поддержка тем (Dark, Nord, Gruvbox)",
        feature_3: "Управление полностью с клавиатуры",
        feature_4: "Поддержка бейджей exteraGram и Stars",
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
    navigator.clipboard.writeText("curl -sL https://raw.githubusercontent.com/JettaXP/Telegram-CLI/main/install.sh | sudo bash");
    const btn = document.querySelector('.copy-btn');
    const oldText = btn.textContent;
    btn.textContent = "Copied!";
    setTimeout(() => {
        btn.textContent = oldText;
    }, 2000);
}

// Init
const savedLang = localStorage.getItem('tgcli-lang') || 'en';
toggleLang(savedLang);

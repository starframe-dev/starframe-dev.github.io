export const defaultLocale = 'ru'

export const locales = [
    { code: 'ru', label: 'Русский' },
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'de', label: 'Deutsch' },
    { code: 'fr', label: 'Français' },
    { code: 'ja', label: '日本語' },
    { code: 'zh', label: '中文' },
    { code: 'pt', label: 'Português' },
    { code: 'ko', label: '한국어' },
    { code: 'ar', label: 'العربية' },
]

const en = {
    siteName: 'Starframe',
    siteDescription: 'Starframe is an organization that builds code libraries, tools, and projects.',
    home: {
        title: 'Starframe',
        subtitle: 'We build projects, libraries, and tools',
        aboutTitle: 'About',
        aboutText: 'Starframe designs code libraries, internal tools, and experimental projects. Our goal is to make complex things simpler, faster, and more interesting.',
        projectsTitle: 'Projects',
        warpCardTitle: 'WARP',
        warpCardText: 'Go library for building TUIs with flexible spatial management',
        warpCardCta: 'Learn more →',
        githubCta: 'GitHub',
        footer: '© {year} Starframe',
    },
    warp: {
        title: 'WARP — TUI layout engine',
        description: 'WARP is a Go library for building TUIs with flexible spatial management.',
        subtitle: 'Go library for building TUIs with flexible spatial management',
        descriptionText: 'A layout engine for Bubble Tea. You implement the Panel interface, and WARP handles the layout: tabs, splits, flexbox, modals, popovers, input, and more.',
        featuresTitle: 'Features',
        featureTabGroup: 'Tabs as root or inside any layout.',
        featureSplits: 'Vertical/horizontal splits and flexbox layouts.',
        featureModal: 'Modals and context menus with overlay.',
        featureInput: 'Input field with cursor, backspace, delete, and arrow keys.',
        featureScrollable: 'Scrolling and text selection with clipboard copy.',
        featureFocus: 'Explicit focus management: FocusNext, FocusPrev, FocusPanel.',
        codeTitle: 'Quick start',
        code: `w := warp.New()\ntab := w.NewTab("main")\ntab.FlexRow(root, []warp.FlexItemSpec{\n    {Panel: sidebar, Grow: 1},\n    {Panel: content, Grow: 2},\n})\nw.Run()`,
        githubCta: 'GitHub',
        footer: '© {year} Starframe',
    },
}

const ru = {
    siteName: 'Starframe',
    siteDescription: 'Starframe — организация, которая создаёт кодовые библиотеки, инструменты и проекты.',
    home: {
        title: 'Starframe',
        subtitle: 'Создаём проекты, библиотеки и инструменты',
        aboutTitle: 'О нас',
        aboutText: 'Starframe проектирует кодовые библиотеки, внутренние инструменты и экспериментальные проекты. Цель — делать сложные вещи проще, быстрее и интереснее.',
        projectsTitle: 'Проекты',
        warpCardTitle: 'WARP',
        warpCardText: 'Go-библиотека для построения TUI с гибким управлением пространством',
        warpCardCta: 'Подробнее →',
        githubCta: 'GitHub',
        footer: '© {year} Starframe',
    },
    warp: {
        title: 'WARP — TUI layout engine',
        description: 'WARP — Go-библиотека для построения TUI с гибким управлением пространством.',
        subtitle: 'Go-библиотека для построения TUI с гибким управлением пространством',
        descriptionText: 'Layout engine для Bubble Tea. Пользователь реализует интерфейс Panel, а WARP управляет расположением: вкладки, сплиты, flexbox, модальные окна, popover, input и многое другое.',
        featuresTitle: 'Возможности',
        featureTabGroup: 'Вкладки как корень или внутри любого layout.',
        featureSplits: 'Вертикальные/горизонтальные сплиты и flexbox-раскладки.',
        featureModal: 'Модальные окна и контекстные меню с overlay.',
        featureInput: 'Поле ввода с курсором, backspace, delete, стрелками.',
        featureScrollable: 'Прокрутка и выделение текста с копированием в clipboard.',
        featureFocus: 'Явное управление фокусом: FocusNext, FocusPrev, FocusPanel.',
        codeTitle: 'Быстрый старт',
        code: `w := warp.New()\ntab := w.NewTab("main")\ntab.FlexRow(root, []warp.FlexItemSpec{\n    {Panel: sidebar, Grow: 1},\n    {Panel: content, Grow: 2},\n})\nw.Run()`,
        githubCta: 'GitHub',
        footer: '© {year} Starframe',
    },
}

export const translations = {
    ru,
    en,
    es: en,
    de: en,
    fr: en,
    ja: en,
    zh: en,
    pt: en,
    ko: en,
    ar: en,
}

const fallback = 'en'

export function t(locale, key, vars = {}) {
    const dict = translations[locale] || translations[fallback]
    const keys = key.split('.')
    let value = dict
    for (const k of keys) {
        value = value?.[k]
    }
    if (typeof value !== 'string') {
        return key
    }
    return value.replace(/\{(\w+)\}/g, (_, name) => vars[name]?.toString() ?? '')
}

export function localizedPath(path, locale) {
    if (locale === defaultLocale) return path
    return `/${locale}${path}`
}

export function pageUrl(path, locale) {
    return `https://starframe-dev.github.io${localizedPath(path, locale)}`
}

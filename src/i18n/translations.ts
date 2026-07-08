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

const es = {
    siteName: 'Starframe',
    siteDescription: 'Starframe es una organización que crea bibliotecas de código, herramientas y proyectos.',
    home: {
        title: 'Starframe',
        subtitle: 'Creamos proyectos, bibliotecas y herramientas',
        aboutTitle: 'Sobre nosotros',
        aboutText: 'Starframe diseña bibliotecas de código, herramientas internas y proyectos experimentales. El objetivo es hacer que las cosas complejas sean más simples, rápidas e interesantes.',
        projectsTitle: 'Proyectos',
        warpCardTitle: 'WARP',
        warpCardText: 'Biblioteca Go para crear TUIs con gestión flexible del espacio',
        warpCardCta: 'Más información →',
        githubCta: 'GitHub',
        footer: '© {year} Starframe',
    },
    warp: {
        title: 'WARP — motor de layout para TUI',
        description: 'WARP es una biblioteca Go para crear TUIs con gestión flexible del espacio.',
        subtitle: 'Biblioteca Go para crear TUIs con gestión flexible del espacio',
        descriptionText: 'Un motor de layout para Bubble Tea. Implementas la interfaz Panel y WARP se encarga de la disposición: pestañas, divisiones, flexbox, modales, popovers, input y más.',
        featuresTitle: 'Características',
        featureTabGroup: 'Pestañas como raíz o dentro de cualquier layout.',
        featureSplits: 'Divisiones verticales/horizontales y layouts flexbox.',
        featureModal: 'Ventanas modales y menús contextuales con overlay.',
        featureInput: 'Campo de entrada con cursor, backspace, delete y flechas.',
        featureScrollable: 'Desplazamiento y selección de texto con copia al portapapeles.',
        featureFocus: 'Gestión explícita del foco: FocusNext, FocusPrev, FocusPanel.',
        codeTitle: 'Inicio rápido',
        code: en.warp.code,
        githubCta: 'GitHub',
        footer: '© {year} Starframe',
    },
}

const de = {
    siteName: 'Starframe',
    siteDescription: 'Starframe ist eine Organisation, die Code-Bibliotheken, Werkzeuge und Projekte entwickelt.',
    home: {
        title: 'Starframe',
        subtitle: 'Wir entwickeln Projekte, Bibliotheken und Werkzeuge',
        aboutTitle: 'Über uns',
        aboutText: 'Starframe entwirft Code-Bibliotheken, interne Werkzeuge und experimentelle Projekte. Das Ziel ist, komplexe Dinge einfacher, schneller und interessanter zu machen.',
        projectsTitle: 'Projekte',
        warpCardTitle: 'WARP',
        warpCardText: 'Go-Bibliothek zum Erstellen von TUIs mit flexibler Raumverwaltung',
        warpCardCta: 'Mehr erfahren →',
        githubCta: 'GitHub',
        footer: '© {year} Starframe',
    },
    warp: {
        title: 'WARP — TUI-Layout-Engine',
        description: 'WARP ist eine Go-Bibliothek zum Erstellen von TUIs mit flexibler Raumverwaltung.',
        subtitle: 'Go-Bibliothek zum Erstellen von TUIs mit flexibler Raumverwaltung',
        descriptionText: 'Eine Layout-Engine für Bubble Tea. Du implementierst das Panel-Interface, und WARP verwaltet das Layout: Tabs, Splits, Flexbox, Modals, Popovers, Input und mehr.',
        featuresTitle: 'Funktionen',
        featureTabGroup: 'Tabs als Root oder innerhalb jedes Layouts.',
        featureSplits: 'Vertikale/horizontale Splits und Flexbox-Layouts.',
        featureModal: 'Modals und Kontextmenüs mit Overlay.',
        featureInput: 'Eingabefeld mit Cursor, Backspace, Delete und Pfeiltasten.',
        featureScrollable: 'Scrollen und Textauswahl mit Kopieren in die Zwischenablage.',
        featureFocus: 'Explizite Fokusverwaltung: FocusNext, FocusPrev, FocusPanel.',
        codeTitle: 'Schnellstart',
        code: en.warp.code,
        githubCta: 'GitHub',
        footer: '© {year} Starframe',
    },
}

const fr = {
    siteName: 'Starframe',
    siteDescription: 'Starframe est une organisation qui crée des bibliothèques de code, des outils et des projets.',
    home: {
        title: 'Starframe',
        subtitle: 'Nous créons des projets, des bibliothèques et des outils',
        aboutTitle: 'À propos',
        aboutText: 'Starframe conçoit des bibliothèques de code, des outils internes et des projets expérimentaux. L’objectif est de rendre les choses complexes plus simples, plus rapides et plus intéressantes.',
        projectsTitle: 'Projets',
        warpCardTitle: 'WARP',
        warpCardText: 'Bibliothèque Go pour créer des TUIs avec une gestion flexible de l’espace',
        warpCardCta: 'En savoir plus →',
        githubCta: 'GitHub',
        footer: '© {year} Starframe',
    },
    warp: {
        title: 'WARP — moteur de layout TUI',
        description: 'WARP est une bibliothèque Go pour créer des TUIs avec une gestion flexible de l’espace.',
        subtitle: 'Bibliothèque Go pour créer des TUIs avec une gestion flexible de l’espace',
        descriptionText: 'Un moteur de layout pour Bubble Tea. Vous implémentez l’interface Panel, et WARP gère la disposition : onglets, splits, flexbox, fenêtres modales, popovers, input et plus encore.',
        featuresTitle: 'Fonctionnalités',
        featureTabGroup: 'Onglets comme racine ou à l’intérieur de n’importe quel layout.',
        featureSplits: 'Splits verticaux/horizontaux et layouts flexbox.',
        featureModal: 'Fenêtres modales et menus contextuels avec overlay.',
        featureInput: 'Champ de saisie avec curseur, backspace, delete et flèches.',
        featureScrollable: 'Défilement et sélection de texte avec copie dans le presse-papiers.',
        featureFocus: 'Gestion explicite du focus : FocusNext, FocusPrev, FocusPanel.',
        codeTitle: 'Démarrage rapide',
        code: en.warp.code,
        githubCta: 'GitHub',
        footer: '© {year} Starframe',
    },
}

const pt = {
    siteName: 'Starframe',
    siteDescription: 'Starframe é uma organização que cria bibliotecas de código, ferramentas e projetos.',
    home: {
        title: 'Starframe',
        subtitle: 'Criamos projetos, bibliotecas e ferramentas',
        aboutTitle: 'Sobre',
        aboutText: 'Starframe projeta bibliotecas de código, ferramentas internas e projetos experimentais. O objetivo é tornar coisas complexas mais simples, rápidas e interessantes.',
        projectsTitle: 'Projetos',
        warpCardTitle: 'WARP',
        warpCardText: 'Biblioteca Go para criar TUIs com gerenciamento flexível de espaço',
        warpCardCta: 'Saiba mais →',
        githubCta: 'GitHub',
        footer: '© {year} Starframe',
    },
    warp: {
        title: 'WARP — motor de layout para TUI',
        description: 'WARP é uma biblioteca Go para criar TUIs com gerenciamento flexível de espaço.',
        subtitle: 'Biblioteca Go para criar TUIs com gerenciamento flexível de espaço',
        descriptionText: 'Um motor de layout para Bubble Tea. Você implementa a interface Panel, e o WARP gerencia o layout: abas, divisões, flexbox, modais, popovers, input e muito mais.',
        featuresTitle: 'Recursos',
        featureTabGroup: 'Abas como raiz ou dentro de qualquer layout.',
        featureSplits: 'Divisões verticais/horizontais e layouts flexbox.',
        featureModal: 'Modais e menus de contexto com overlay.',
        featureInput: 'Campo de entrada com cursor, backspace, delete e setas.',
        featureScrollable: 'Rolagem e seleção de texto com cópia para a área de transferência.',
        featureFocus: 'Gerenciamento explícito de foco: FocusNext, FocusPrev, FocusPanel.',
        codeTitle: 'Início rápido',
        code: en.warp.code,
        githubCta: 'GitHub',
        footer: '© {year} Starframe',
    },
}

const zh = {
    siteName: 'Starframe',
    siteDescription: 'Starframe 是一个构建代码库、工具和项目的组织。',
    home: {
        title: 'Starframe',
        subtitle: '我们构建项目、库和工具',
        aboutTitle: '关于',
        aboutText: 'Starframe 设计代码库、内部工具和实验性项目。目标是让复杂的事物变得更简单、更快速、更有趣。',
        projectsTitle: '项目',
        warpCardTitle: 'WARP',
        warpCardText: '用于构建 TUI 并灵活管理空间布局的 Go 库',
        warpCardCta: '了解更多 →',
        githubCta: 'GitHub',
        footer: '© {year} Starframe',
    },
    warp: {
        title: 'WARP — TUI 布局引擎',
        description: 'WARP 是一个用于构建 TUI 并灵活管理空间布局的 Go 库。',
        subtitle: '用于构建 TUI 并灵活管理空间布局的 Go 库',
        descriptionText: '面向 Bubble Tea 的布局引擎。你实现 Panel 接口，WARP 负责布局管理：标签页、分割面板、flexbox、模态窗口、弹出层、输入组件等。',
        featuresTitle: '功能',
        featureTabGroup: '标签页可以作为根节点，也可以嵌入任意布局中。',
        featureSplits: '垂直/水平分割以及 flexbox 布局。',
        featureModal: '带 overlay 的模态窗口和上下文菜单。',
        featureInput: '支持光标、backspace、delete 和方向键的输入框。',
        featureScrollable: '滚动与文本选择，并支持复制到剪贴板。',
        featureFocus: '显式焦点管理：FocusNext、FocusPrev、FocusPanel。',
        codeTitle: '快速开始',
        code: en.warp.code,
        githubCta: 'GitHub',
        footer: '© {year} Starframe',
    },
}

const ja = {
    siteName: 'Starframe',
    siteDescription: 'Starframe は、コードライブラリ、ツール、プロジェクトを作る組織です。',
    home: {
        title: 'Starframe',
        subtitle: 'プロジェクト、ライブラリ、ツールを作ります',
        aboutTitle: '概要',
        aboutText: 'Starframe はコードライブラリ、内部ツール、実験的なプロジェクトを設計しています。複雑なものをよりシンプルに、速く、面白くすることを目指しています。',
        projectsTitle: 'プロジェクト',
        warpCardTitle: 'WARP',
        warpCardText: '柔軟な空間管理で TUI を構築するための Go ライブラリ',
        warpCardCta: '詳しく見る →',
        githubCta: 'GitHub',
        footer: '© {year} Starframe',
    },
    warp: {
        title: 'WARP — TUI レイアウトエンジン',
        description: 'WARP は、柔軟な空間管理で TUI を構築するための Go ライブラリです。',
        subtitle: '柔軟な空間管理で TUI を構築するための Go ライブラリ',
        descriptionText: 'Bubble Tea 向けのレイアウトエンジンです。Panel インターフェースを実装すると、WARP がタブ、分割、flexbox、モーダル、ポップオーバー、入力などの配置を管理します。',
        featuresTitle: '機能',
        featureTabGroup: 'ルートとしても、任意のレイアウト内でも使えるタブ。',
        featureSplits: '垂直/水平分割と flexbox レイアウト。',
        featureModal: 'overlay 付きのモーダルとコンテキストメニュー。',
        featureInput: 'カーソル、backspace、delete、矢印キーに対応した入力フィールド。',
        featureScrollable: 'スクロールとテキスト選択、クリップボードへのコピー。',
        featureFocus: '明示的なフォーカス管理：FocusNext、FocusPrev、FocusPanel。',
        codeTitle: 'クイックスタート',
        code: en.warp.code,
        githubCta: 'GitHub',
        footer: '© {year} Starframe',
    },
}

const ko = {
    siteName: 'Starframe',
    siteDescription: 'Starframe은 코드 라이브러리, 도구, 프로젝트를 만드는 조직입니다.',
    home: {
        title: 'Starframe',
        subtitle: '프로젝트, 라이브러리, 도구를 만듭니다',
        aboutTitle: '소개',
        aboutText: 'Starframe은 코드 라이브러리, 내부 도구, 실험적인 프로젝트를 설계합니다. 목표는 복잡한 것을 더 단순하고 빠르며 흥미롭게 만드는 것입니다.',
        projectsTitle: '프로젝트',
        warpCardTitle: 'WARP',
        warpCardText: '유연한 공간 관리로 TUI를 구축하는 Go 라이브러리',
        warpCardCta: '자세히 보기 →',
        githubCta: 'GitHub',
        footer: '© {year} Starframe',
    },
    warp: {
        title: 'WARP — TUI 레이아웃 엔진',
        description: 'WARP는 유연한 공간 관리로 TUI를 구축하는 Go 라이브러리입니다.',
        subtitle: '유연한 공간 관리로 TUI를 구축하는 Go 라이브러리',
        descriptionText: 'Bubble Tea를 위한 레이아웃 엔진입니다. Panel 인터페이스를 구현하면 WARP가 탭, 분할, flexbox, 모달, 팝오버, 입력 등을 배치합니다.',
        featuresTitle: '기능',
        featureTabGroup: '루트로도, 어떤 레이아웃 내부에서도 사용할 수 있는 탭.',
        featureSplits: '수직/수평 분할과 flexbox 레이아웃.',
        featureModal: 'overlay가 있는 모달과 컨텍스트 메뉴.',
        featureInput: '커서, backspace, delete, 방향키를 지원하는 입력 필드.',
        featureScrollable: '스크롤과 텍스트 선택, 클립보드 복사.',
        featureFocus: '명시적 포커스 관리: FocusNext, FocusPrev, FocusPanel.',
        codeTitle: '빠른 시작',
        code: en.warp.code,
        githubCta: 'GitHub',
        footer: '© {year} Starframe',
    },
}

const ar = {
    siteName: 'Starframe',
    siteDescription: 'Starframe هي منظمة تبني مكتبات برمجية وأدوات ومشاريع.',
    home: {
        title: 'Starframe',
        subtitle: 'نبني مشاريع ومكتبات وأدوات',
        aboutTitle: 'نبذة',
        aboutText: 'تصمم Starframe مكتبات برمجية وأدوات داخلية ومشاريع تجريبية. الهدف هو جعل الأشياء المعقدة أبسط وأسرع وأكثر إثارة للاهتمام.',
        projectsTitle: 'المشاريع',
        warpCardTitle: 'WARP',
        warpCardText: 'مكتبة Go لبناء واجهات TUI مع إدارة مرنة للمساحة',
        warpCardCta: 'اعرف المزيد →',
        githubCta: 'GitHub',
        footer: '© {year} Starframe',
    },
    warp: {
        title: 'WARP — محرك تخطيط TUI',
        description: 'WARP هي مكتبة Go لبناء واجهات TUI مع إدارة مرنة للمساحة.',
        subtitle: 'مكتبة Go لبناء واجهات TUI مع إدارة مرنة للمساحة',
        descriptionText: 'محرك تخطيط لـ Bubble Tea. أنت تنفذ واجهة Panel، وWARP يتولى إدارة التخطيط: التبويبات، التقسيمات، flexbox، النوافذ المنبثقة، popovers، الإدخال والمزيد.',
        featuresTitle: 'الميزات',
        featureTabGroup: 'تبويبات كجذر أو داخل أي layout.',
        featureSplits: 'تقسيمات رأسية/أفقية وتخطيطات flexbox.',
        featureModal: 'نوافذ modal وقوائم سياقية مع overlay.',
        featureInput: 'حقل إدخال مع مؤشر وbackspace وdelete وأسهم.',
        featureScrollable: 'تمرير وتحديد نص مع النسخ إلى الحافظة.',
        featureFocus: 'إدارة صريحة للتركيز: FocusNext وFocusPrev وFocusPanel.',
        codeTitle: 'بدء سريع',
        code: en.warp.code,
        githubCta: 'GitHub',
        footer: '© {year} Starframe',
    },
}

export const translations = {
    ru,
    en,
    es,
    de,
    fr,
    ja,
    zh,
    pt,
    ko,
    ar,
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

export function textDirection(locale) {
    return locale === 'ar' ? 'rtl' : 'ltr'
}

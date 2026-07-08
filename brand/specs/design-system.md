# Дизайн-система Starframe

## Контекст

Лендинг Starframe сейчас использует ad-hoc стили. Нужна единая дизайн-система: цвета, типографика, логотип, иконки и базовые компоненты. Система должна лечь в отдельную папку и быть применена к сайту.

## Цель

Создать дизайн-систему в `Starframe/website/brand/` и обновить сайт так, чтобы он использовал её токены, логотип и компоненты.

## Что изменится

1. `website/brand/` — новая папка дизайн-системы
2. `website/brand/tokens.css` — CSS custom properties (цвета, типографика, spacing, radii, shadows)
3. `website/brand/logo.svg` — логотип Starframe (звезда в рамке, монохромный + цветной вариант)
4. `website/brand/icons/` — SVG-иконки: box, tools, flask, github, external-link
5. `website/brand/components/` — базовые Astro-компоненты: `BrandButton.astro`, `BrandCard.astro`
6. `website/src/styles/global.css` — обновится под токены дизайн-системы
7. `website/src/components/sections/` — Hero, About, Features, GitHub, Footer обновятся под новый дизайн
8. `website/public/logo.svg` — заменится на логотип из `brand/`

## Детали реализации

1. **Цветовая палитра**:
   - `--sf-bg-primary`: #05060a (фон)
   - `--sf-bg-secondary`: #0b0d14 (вторичный фон)
   - `--sf-surface`: rgba(255, 255, 255, 0.03) (карточки)
   - `--sf-accent`: #66fcf1 (акцент)
   - `--sf-accent-secondary`: #45a29e (вторичный акцент)
   - `--sf-text-primary`: #e2e4f0 (основной текст)
   - `--sf-text-secondary`: #8fa3ad (вторичный текст)
   - `--sf-text-muted`: #5b6573 (приглушённый текст)
   - `--sf-border`: rgba(102, 252, 241, 0.12) (границы)

2. **Типографика**:
   - `--sf-font-sans`: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
   - `--sf-font-mono`: "SF Mono", Monaco, "Cascadia Code", monospace (для слогана/бренд-элементов)
   - Заголовки: font-weight 800, letter-spacing -0.04em
   - Текст: line-height 1.6

3. **Spacing**:
   - `--sf-space-xs`: 0.5rem
   - `--sf-space-sm`: 1rem
   - `--sf-space-md`: 1.5rem
   - `--sf-space-lg`: 2.5rem
   - `--sf-space-xl`: 4rem
   - `--sf-space-2xl`: 6rem

4. **Радиусы и тени**:
   - `--sf-radius`: 1rem
   - `--sf-radius-sm`: 0.5rem
   - `--sf-shadow-glow`: 0 0 20px rgba(102, 252, 241, 0.2)
   - `--sf-shadow-card`: 0 20px 40px rgba(0, 0, 0, 0.25)

5. **Логотип**: SVG-звезда в рамке, монохромный вариант + цветной (акцент).

6. **Иконки**: inline SVG path, stroke-based, currentColor.

7. **Компоненты**:
   - `BrandButton.astro`: пропсы `href`, `variant` (primary/ghost), `icon` (optional), `external`.
   - `BrandCard.astro`: пропсы `title`, `icon`, `text`.

8. **Сайт**: импорт `tokens.css` в `global.css`, использование токенов во всех стилях, замена эмодзи/инлайн SVG на иконки из `brand/icons/`, замена логотипа.

9. **Проверка**: `pnpm build` и `pnpm dev` проходят без ошибок, визуально сохраняется текущий стиль, но с улучшенной консистентностью.

## Критерии приёмки

- [ ] `website/brand/` создана с `tokens.css`, `logo.svg`, `icons/` и `components/`.
- [ ] `website/src/styles/global.css` импортирует и использует токены.
- [ ] Сайт использует `BrandButton` и `BrandCard` вместо ad-hoc разметки.
- [ ] Логотип `website/public/logo.svg` заменён на версию из `brand/`.
- [ ] `pnpm build` и `pnpm dev` работают без ошибок.
- [ ] Визуально сайт сохраняет тёмную тему, акцентный цвет и адаптивность.

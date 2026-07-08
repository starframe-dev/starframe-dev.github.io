// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    site: 'https://starframe-dev.github.io',
    base: '/',
    integrations: [
        sitemap({
            i18n: {
                defaultLocale: 'ru',
                locales: {
                    ru: 'ru-RU',
                    en: 'en-US',
                    es: 'es-ES',
                    de: 'de-DE',
                    fr: 'fr-FR',
                    ja: 'ja-JP',
                    zh: 'zh-CN',
                    pt: 'pt-BR',
                    ko: 'ko-KR',
                    ar: 'ar-SA',
                },
            },
        }),
    ],
    i18n: {
        defaultLocale: 'ru',
        locales: ['ru', 'en', 'es', 'de', 'fr', 'ja', 'zh', 'pt', 'ko', 'ar'],
        routing: {
            prefixDefaultLocale: false,
        },
    },
});

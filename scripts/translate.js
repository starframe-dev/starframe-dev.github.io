import { translate } from '@vitalets/google-translate-api'
import fs from 'node:fs'

const targetLangs = ['es', 'de', 'fr', 'ja', 'zh', 'pt', 'ko', 'ar']
const sourceLang = 'en'
const inputPath = new URL('../src/i18n/translations.ts', import.meta.url)

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

async function translateText(text, to) {
    if (text === '{year}') return '{year}'
    if (text === '→') return '→'
    if (!text.trim()) return text
    try {
        const res = await translate(text, { from: sourceLang, to })
        return res.text
    } catch (err) {
        console.error(`Failed to translate "${text}" to ${to}:`, err.message)
        return text
    }
}

async function translateObject(obj, to) {
    const result = {}
    for (const [key, value] of Object.entries(obj)) {
        if (key === 'code') {
            result[key] = value
        } else if (typeof value === 'string') {
            result[key] = await translateText(value, to)
            await sleep(150)
        } else if (typeof value === 'object' && value !== null) {
            result[key] = await translateObject(value, to)
        } else {
            result[key] = value
        }
    }
    return result
}

function objectToString(obj, indent = 4) {
    const spaces = ' '.repeat(indent)
    let result = '{\n'
    for (const [key, value] of Object.entries(obj)) {
        if (key === 'code') {
            result += `${spaces}${key}: \`${value}\`,\n`
        } else if (typeof value === 'string') {
            result += `${spaces}${key}: "${value.replace(/"/g, '\\"')}",\n`
        } else if (typeof value === 'object' && value !== null) {
            result += `${spaces}${key}: ${objectToString(value, indent + 4)},\n`
        } else {
            result += `${spaces}${key}: ${value},\n`
        }
    }
    result += `${' '.repeat(indent - 4)}}`
    return result
}

async function main() {
    const input = fs.readFileSync(inputPath, 'utf8')
    const enMatch = input.match(/const en = ({[\s\S]*?})\n\nconst ru =/)
    if (!enMatch) {
        console.error('Could not find en object')
        process.exit(1)
    }
    const enObj = Function(`return (${enMatch[1]})`)()

    const translations = {}
    for (const lang of targetLangs) {
        console.log(`Translating to ${lang}...`)
        translations[lang] = await translateObject(enObj, lang)
    }

    let output = input
    for (const lang of targetLangs) {
        const regex = new RegExp(`  ${lang}: en,`)
        const replacement = `  ${lang}: ${objectToString(translations[lang], 4)},`
        output = output.replace(regex, replacement)
    }

    fs.writeFileSync(inputPath, output, 'utf8')
    console.log('Translations updated')
}

main()

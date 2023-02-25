// @ts-ignore
import {Translation} from "../models/Translation";

let languages = new Map<string, Translation>();
let defaultLanguage:Translation
let defaultLanguageKey:string
export const getLanguage = (languageKey: string): Translation => {
    console.error("Loading language: ", languageKey)
    const lang = languages.get(languageKey)
    if (lang === undefined) {
        console.error("Language selection failed, fallback to ", languageKey)
        return defaultLanguage
    }
    return lang
}

export const getAvailableLanguages = () => {
    return languages.keys()
}

export const registerLanguage = (languageKey: string, languageDef: Translation): void => {
    languages.set(languageKey, languageDef)
}

export const setDefaultLanguage = (languageKey: string, language: Translation): void => {
    defaultLanguageKey = languageKey
    defaultLanguage = language
}

export const getDefaultLanguageKey = () => { return defaultLanguageKey }
// @ts-ignore
import {Translation} from "./type";

let languages = new Map<string, Translation>();
let defaultLanguage:Translation
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

export const setDefaultLanguage = (language: Translation): void => {
    defaultLanguage = language
}
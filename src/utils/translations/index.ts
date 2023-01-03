import initialiseEnglishLanguage from './en'
import initialiseFrenchLanguage from './fr'

import LanguageProvider from './LanguageProvider'
import useLanguage  from "./useLanguage"

initialiseEnglishLanguage()
initialiseFrenchLanguage()
export {
    LanguageProvider,
    useLanguage
}
import initialiseEnglishLanguage from '../../config/translations/en'
import initialiseFrenchLanguage from '../../config/translations/fr'

import LanguageProvider from './LanguageProvider'
import useLanguage  from "./useLanguage"

initialiseEnglishLanguage()
initialiseFrenchLanguage()
export {
    LanguageProvider,
    useLanguage,
}
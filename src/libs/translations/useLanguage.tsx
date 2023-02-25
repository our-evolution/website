import React from 'react'
import LanguageContext from './LanguageContext'
import { getLanguage } from './languageRegistry'
import {Translation} from "../models/Translation";

const useLanguage = (): Translation => {
    const lang = React.useContext(LanguageContext)
    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        React.useDebugValue(lang);
    }
    return getLanguage(lang)
}
export default useLanguage
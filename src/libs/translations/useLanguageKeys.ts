import React from 'react'
import LanguageContext from "./LanguageContext";
import {getDefaultLanguageKey} from "./languageRegistry";

const useLanguageKeys = ():string[] => {
    const lang = React.useContext(LanguageContext)
    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        React.useDebugValue(lang);
    }
    return [lang, getDefaultLanguageKey()]
}
export default useLanguageKeys

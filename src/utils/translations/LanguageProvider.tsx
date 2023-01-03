import React from 'react'
import LanguageContext from './LanguageContext'

const LanguageProvider = (props: any) => {
    const {children, lang} = props
    return <LanguageContext.Provider value={lang}>{children}</LanguageContext.Provider>
}

export default LanguageProvider
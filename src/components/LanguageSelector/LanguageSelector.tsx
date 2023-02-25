import React from 'react'
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import getLanguageList from "../../libs/translations/getLanguageList";
import {useLanguage} from "../../libs/translations";

const LanguageSelector = ({language, setLanguage}: {language: string, setLanguage: ((value: (((prevState: string) => string) | string)) => void)}) => {
    const handleChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value);
    };
    const languageLists = getLanguageList()

    const translations = useLanguage()
    return (
        <FormControl sx={{ m: 1, minWidth: 120}} size="small">
            <InputLabel id="language-selector">{translations.global.languageSelectorTitle}</InputLabel>
            <Select
                labelId="language-selector"
                id="language-selector"
                value={language}
                label="Language"
                onChange={handleChange}
            >
                {languageLists.map((langKey, index) => {
                    return (
                        <MenuItem key={index} value={langKey.value}>{translations.languages.get(langKey.value)||"???"}</MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}

export default LanguageSelector
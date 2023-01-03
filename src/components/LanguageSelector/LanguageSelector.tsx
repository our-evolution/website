import React from 'react'
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import getLanguageList from "../../utils/translations/getLanguageList";
import {useLanguage} from "../../utils/translations";

const LanguageSelector = ({language, setLanguage}: {language: string, setLanguage: ((value: (((prevState: string) => string) | string)) => void)}) => {
    const handleChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value);
    };
    const languageLists = getLanguageList()
    const global = useLanguage().global
    return (
        <FormControl sx={{ m: 1, minWidth: 120}} size="small">
            <InputLabel id="language-selector">{global.languageSelectorTitle}</InputLabel>
            <Select
                labelId="language-selector"
                id="language-selector"
                value={language}
                label="Language"
                onChange={handleChange}
            >
                {languageLists.map((langInfo, index) => {
                    return (
                        <MenuItem key={index} value={langInfo.value}>{langInfo.label}</MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}

export default LanguageSelector
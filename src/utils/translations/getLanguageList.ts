
export interface LanguageInfo {
    label: string,
    value: string,
}

const getLanguageList = ():LanguageInfo[] => {
    return [
        {
            label: "english",
            value: "en",
        },
        {
            label: "french",
            value: "fr",
        }
    ]
}
export default getLanguageList
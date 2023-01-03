interface GlobalTranslation{
    title: string,
    languageSelectorTitle: string,
    languageLabel: string,
    navToHome: string,
    navToDirectory: string,
}
interface IndexWelcomeSectionTranslation {
    title: string
    missionStatement: string
    purpose: string
    purposeItems: Array<{value: string, description: string}>
}

interface IndexDirectorySectionTranslation {
    title: string
    body: string
    navToDirectory: string
}

interface IndexFocusAreaSectionTranslation {
    title: string
    description: string
}
export interface FocusAreaTranslation {
    conditions: Array<string>
    title: string
}

interface IndexPageTranslation {
    welcome: IndexWelcomeSectionTranslation
    focusArea: IndexFocusAreaSectionTranslation
    directory: IndexDirectorySectionTranslation

}
export interface Translation {
    global: GlobalTranslation
    index: IndexPageTranslation
    focusAreas: Map<string, FocusAreaTranslation>
}
interface GlobalTranslation{
    title: string
    languageSelectorTitle: string
    languageLabel: string
    navToHome: string
    navToDirectory: string
    deliveryF2F: string
    deliveryOnline: string
    deliveryOutdoor: string
    sessionTypeIndividual: string
    sessionTypeCouples: string
    sessionTypeGroups: string
    sessionLanguageList: string
    contactFullProfile: string
    contactWebsite: string
    contactEmail: string
}
interface IndexWelcomeSectionTranslation {
    clientStatement: string[]
    missionTitle: string
    missionStatement: string[]
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
    text: string
    title: string
}

export interface FocusCategoryTranslation {
    title: string
    text: string
}

interface IndexPageTranslation {
    welcome: IndexWelcomeSectionTranslation
    focusArea: IndexFocusAreaSectionTranslation
    directory: IndexDirectorySectionTranslation

}

interface DirectoryPageTranslation {
    title: string
    introductionText: string
}
export interface Translation {
    languages: Map<string, string>
    global: GlobalTranslation
    index: IndexPageTranslation
    focusAreas: Map<string, FocusAreaTranslation>
    focusCategories: Map<string, FocusCategoryTranslation>

    directory: DirectoryPageTranslation
}
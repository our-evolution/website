export interface ProfessionalOffering {
    individualF2F: boolean
    individualOnline: boolean
    individualOutdoor: boolean
    couplesF2F: boolean
    couplesOnline: boolean
    couplesOutdoor: boolean
    groupsF2F: boolean
    groupsOnline: boolean
    groupsOutdoor: boolean

}
export default interface ProfessionalModel {
    id: string
    title?: string
    firstName: string
    middleName?: string
    lastName: string
    pronouns: string
    country: string
    location: string
    qualifications: string[]
    memberships: string[]
    languages: Array<string>
    multiLingualBiography: Map<string, string[]> // Multi lingual description.
    multiLingualShortBiography: Map<string, string>
    offering: ProfessionalOffering
    categoryIds: string[]
    websiteURL?: string
    pictureURL?: string
    phone?: string
    email?: string
}


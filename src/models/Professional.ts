export default interface Professional {
    title?: string
    firstName: string
    middleName?: string
    lastName: string
    pronouns: string
    qualifications?: string
    memberships?: string
    country: string
    workOnline: boolean
    workFaceToFace: boolean
    workFaceToFaceLocation?: string
    languages: Array<string>
    description: Map<string, string> // Multi lingual description.
}
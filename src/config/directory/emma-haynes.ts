import ProfessionalModel from "../../libs/models/Professional";


const enBiography = [
    ``,
    ]
const enShortBiography = ``

export const EmmaHaynes: ProfessionalModel = {
        id: "emma-haynes",
        title: "Dr", // Mr/Miss/Dr/...
        firstName: "Emma",
        middleName: "",
        lastName: "Haynes",
        pronouns: "She/Her",
        country: "UK",
        location: "Winchester, Hampshire",
        languages: ["en"],
        qualifications: ["PhD", "MSc", "TSTA", "CTA", "UKCP", "BA (Hons)",],
        memberships: ["",],
        multiLingualBiography: new Map<string, string[]>(
            [
                ["en", enBiography],
            ]
        ),
        multiLingualShortBiography: new Map<string, string>(
          [
              ["en", enShortBiography]
          ]
        ),
        offering: {
            individualF2F: true,
            individualOnline: true,
            individualOutdoor: false,
            couplesF2F: true,
            couplesOnline: true,
            couplesOutdoor: false,
            groupsF2F: true,
            groupsOnline: true,
            groupsOutdoor: false,
        },
        categoryIds: [
            "",
            
        ],
        websiteURL: "",
        pictureURL: "", 
        email: "",
        phone: "",
    }
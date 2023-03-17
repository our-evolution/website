import ProfessionalModel from "../../libs/models/Professional";


const enBiography = [
    ``,
    ``,
    ``,
    ``,
]

const frBiography = [
    `C'est en court`,
    `de construction`
]

const itBiography = [
    ``,
    ``
]

const enShortBiography = ``

const frShortBiography = `pourquoi venir me voir?`

const itShortBiography = ``
export const ValeriaVilla: ProfessionalModel = {
        id: "valeria-villa",
        title: undefined, // Mr/Miss/Dr/...
        firstName: "Valeria",
        middleName: "",
        lastName: "Villa",
        pronouns: "",
        country: "Switzerland",
        location: "",
        languages: ["en", "fr", "it"],
        qualifications: ["Counsellor", "QTS", ],
        memberships: ["UKATA", "UKCP", "HACP", ],
        multiLingualBiography: new Map<string, string[]>(
            [
                ["en", enBiography],
                ["fr", frBiography],
                ["it", itBiography],
            ]
        ),
        multiLingualShortBiography: new Map<string, string>(
          [
              ["en", enShortBiography],
              ["fr", frShortBiography],
              ["it", itShortBiography],
          ]
        ),
        offering: {
            individualF2F: false,
            individualOnline: true,
            individualOutdoor: true,
            couplesF2F: false,
            couplesOnline: true,
            couplesOutdoor: false,
            groupsF2F: false,
            groupsOnline: false,
            groupsOutdoor: false,
        },
        categoryIds: [
            "gender-identity",
            "miscarriage",
            "neurodivergence",
            "trans-generational-trauma",
            "abortion",
            "parental-burn-out",
            "perinatal-anger",

        ],
        websiteURL: "",
        pictureURL: "/directory/valeria-villa.jpg",
        email: "",
        phone: "",
    }

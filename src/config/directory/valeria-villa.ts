import ProfessionalModel from "../../libs/models/Professional";


const enBiography = [
    `Hello! My name is Valeria and I am a therapist in private practice. I have lived, worked and studied in Italy, UK and France. These cross-countries and cross-cultural experiences have accompanied my development as a professional and enriched my therapeutic approach.`,
    `My interest in the maternal, paternal and parental mental health dates back from the time I walked my first steps in the therapeutic training. While volunteering as trainee therapist for a mental health charity supporting women within the criminal justice system, I heard and learnt about the depth of feelings that the women experienced while locked away and distant from their children and partners. Since this first seed was planted, my interest in this field has developed and it now incorporates aspects of cultural differences, political influences, transgenerational and collective elements that impact the motherhood, fatherhood and parenthood journey.`,
    `I am supportive and open to work with helping professionals or those who are training as helping professionals (counsellors, therapists, social workers, mental health and wellbeing workers, nurses, midwives, doctors, etc.) who are considering parenthood or are on a parenthood journey. I am aware that helping professionals may face more difficulties, biases and stigma when accessing support.`,
    `Relational Transactional Analysis defines the framework of my therapeutic approach as this is the modality I trained in. Transactional Analysis states that we start from a position of OKness in life and if we feel outside of this OKness, we will work together to redefine OKness in your present. The relational component in my therapeutic approach means that I am committed to bring my own self in the therapeutic space. As such therapy is not a treatment I will impose on you but a journey we define together, setting the terms and aspects you feel comfortable to bring to the therapy room and share with me. I am committed to our journey together and open to learning and growth. I experience that relational therapy is facilitative of healing and growth and I hope this to be the case if we are to work together.`,
    `I trained in Transactional Analysis at Metanoia Institute (London, UK) and qualified as Transactional Analysis Psychotherapist.`,
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
        websiteURL: "https://valeriavillatherapy.com/",
        pictureURL: undefined,
        email: "valeria.villa@hotmail.co.uk",
        phone: "+447922924041",
    }

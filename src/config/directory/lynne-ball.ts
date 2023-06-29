import ProfessionalModel from "../../libs/models/Professional";


const enBiography = [
    `My name is Lynne and I am an MBACP qualified counsellor working in private practice in Winchester. I have a special interest in working with mums and dads to be or those who are already parents who may be struggling or feeling in distress about any aspect of the parenthood journey. A journey that can be filled with joy but also with anxiety, sadness and loss.`, 
    `My approach to counselling is Relational and based on the theory of Transactional Analysis with focus on relationships, communication and healing; you are at the heart of this process. I believe the most important relationship you will ever have is with yourself and your emotional well being depends on how you feel about you. If you’re okay this can positively influence your closest relationships.`,
    `Our sessions will be in English and I have experience working with pregnancy, birth trauma, IVF, miscarriage, termination, depression in the postnatal period, contemplating becoming a parent, societal/family pressures to have children and bonding and attachment.`, 
]

const enShortBiography = [
                        `I am an MBACP qualified Counsellor working in private practice in Winchester and have a special interest in perinatal mental health. Being apart of the OurEvolution project has inspired my work with both men and women, supporting them wherever they are in their parenthood journey.`,
                        `I work with individuals and couples both in person and online and can be contacted at lynneball@uniquelyyoucounselling.co.uk if you would like to find out more about how I can support you on your unique journey.`
                    ] 

export const LynneBall: ProfessionalModel = {
        id: "lynne-ball",
        title: undefined, // Mr/Miss/Dr/...
        firstName: "Lynne",
        middleName: "",
        lastName: "Ball",
        pronouns: "She/Her",
        country: "UK",
        location: "Winchester, Hampshire",
        languages: ["en"],
        qualifications: ["FdA Degree in Humanistic Counselling based on Transactional Analysis (BACP Accredited)", "Counselling support to patients at Park & St Francis Doctor’s Surgery - 2018/2020", "Diploma in Counselling",],
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
            groupsF2F: false,
            groupsOnline: false,
            groupsOutdoor: false,
        },
        categoryIds: [
            "",
        ],
        websiteURL: "www.uniquelyyoucounselling.co.uk",
        pictureURL: "", 
        email: "lynneball@uniquelyyoucounselling.co.uk",
        phone: "+44 7035 507271",
    }
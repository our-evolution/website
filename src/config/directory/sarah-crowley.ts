import ProfessionalModel from "../../libs/models/Professional";


const enBiography = [
    `I am a qualified psychotherapist who works with adults and couples one to one in my central Valencia, Spain premises and online with women and couples who live elsewhere. Following 6 years of failed assisted fertility treatments and seeking motherhood at a later stage in life, I experienced the lack of available mental health support for women like me in similar situations. As a result, this became an important part of my psychotherapeutic work and my identity as a practitioner. I am passionate about holding spaces for women and couples who are experiencing the loneliness, grief, and loss that the process of assisted fertility can result in.`,
    `Additionally, I facilitate support groups for women who are in the process of contemplating assisted fertility treatment, women who are older and seeking motherhood but unsure as well as women who are contemplating motherhood in general. The support, identification, and sense of community that these groups provide can be invaluable to women who can feel extremely alone and isolated with these issues especially if the process has resulted in loss, miscarriage, stillbirth, or termination.`,
    `Despite many online resources, the experience of sitting with others, in person or online, is powerful and can often bring healing and deeper compassion for oneself in the face of difficulties faced by experiencing infertility. I seek to create a space that is non-judgemental and allows everyone to express their needs as they wish. I place respect and openness at the heart of my practice. I continue to be humbled by the sheer courage and resilience of the women and men I have met through my work. They are my greatest teachers.`, 
    `I encourage you to contact me for an informal chat, I would love to hear from you.`, 
]
const enShortBiography = `` 

export const SarahCrowley: ProfessionalModel = {
        id: "sarah-crowley",
        title: undefined, // Mr/Miss/Dr/...
        firstName: "Sarah",
        middleName: "",
        lastName: "Crowley",
        pronouns: "",
        country: "UK",
        location: "Forest Row, East Sussex",
        languages: ["en"],
        qualifications: ["MSc (Psych)", "CTA(P)", "TA Psychotherapy (Dip)", "MBACP",],
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
            "Older-Parenthood",
            "Fertility",
            "Miscarriage", // taken from website and subject to change
        ],
        websiteURL: "https://www.valenciapsychotherapy.com/",
        pictureURL: "", 
        email: "sarah@valenciapsychotherapy.com",
        phone: null, // no phone number given in email or on website
    }

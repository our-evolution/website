import ProfessionalModel from "../../libs/models/Professional";


const enBiography = [
    `I have two children and work in private practice as well as in a college 
and a charity as a volunteer counsellor. Looking at experiences of parenthood 
led me to understand how much the right level and kind of support is crucial 
in preventing and healing mental health issues in the perinatal domain.`,
    `This is why I am passionate about perinatal mental health. I believe that, 
with the right support, you can cope better with your experience ; you can face 
your responsibilities more serenely and prevent a lot of hurt within 
relationships. Understanding the influence of your family, your culture 
and society on how you feel and the decisions you make can help reduce 
your level of stress and suffering, and give you the clarity needed to 
make the right choices for yourself.`,
    `I am also an educator and think that some factual information about your 
experience can help make meaning of the difficulties that you face. Issues around 
perinatal mental health can bring into awareness parts of ourselves that we 
could control until then, but suddenly become hard to manage. Anything around 
birth, including simply thinking about it, can have a resounding effect on how 
our brain and our body deal with stress.`,
    `In my work, I use transactional analysis, which shows good evidence of 
being effective in reducing symptoms of depression and anxiety, in short and 
long term therapy. The tenets of TA are that everyone is essentially worthy, 
that we can all think and make decisions, and that we can change those 
decisions if we feel that the old ones do not serve us well anymore.`,
]
const frBiography = [
    `C'est en court`,
    `de construction`
]

const enShortBiography = `In my work, I use transactional analysis, which shows good evidence of 
being effective in reducing symptoms of depression and anxiety, in short and 
long term therapy. The tenets of TA are that everyone is essentially worthy, 
that we can all think and make decisions, and that we can change those 
decisions if we feel that the old ones do not serve us well anymore.`

const frShortBiography = `pourquoi venir me voir?`
export const IsaDelannoy: ProfessionalModel = {
        id: "isa-delannoy",
        title: undefined, // Mr/Miss/Dr/...
        firstName: "Isa",
        middleName: "",
        lastName: "Delannoy",
        pronouns: "They/Them",
        country: "UK",
        location: "Eastleigh / Southampton, Hampshire",
        languages: ["en", "fr"],
        qualifications: ["Counsellor", "QTS", ],
        memberships: ["UKATA", "UKCP", "HACP", ],
        multiLingualBiography: new Map<string, string[]>(
            [
                ["en", enBiography],
                ["fr", frBiography],
            ]
        ),
        multiLingualShortBiography: new Map<string, string>(
          [
              ["en", enShortBiography],
              ["fr", frShortBiography],
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
        websiteURL: "https://own-your-story.co.uk/",
        pictureURL: "./directory/isa-delannoy.jpg",
        email: "isabelledelannoy@pm.me",
        phone: "+44 78 78 991 804",
    }

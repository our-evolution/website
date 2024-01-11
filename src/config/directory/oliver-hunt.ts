import ProfessionalModel from "../../libs/models/Professional";


const enBiography = [
    `Life can throw challenges at us that prove too much for us to cope with on our own. I believe that we are not to 
blame for the difficulties we might face, and that they are the natural consequences of what we have experienced in 
life. Whether you are facing difficult challenges right now or wanting to explore what's happened to you in the past, 
working with and talking with someone can help make profound change. Together we can explore what has helped to shape 
the way you are now, and how you want to be in the future.`,

    `I offer a safe, confidential and non-judgemental space in which to explore whatever life is throwing at you. I 
have a particular interest in working with parents, either individually or as a couple, and have run a group for 
fathers to explore what it's like to become a dad. In addition to this work, I have experience in helping people 
with concerns such as anxiety, depression, relationship difficulties, low self-esteem, troubling thoughts and 
feelings, panic attacks, trauma, sexual abuse and suicidal thoughts.`,
]

const enShortBiography = `I am a therapist with a particular passion for working with 
parents. Many of my clients are fathers looking to explore their own experiences of childhood, disentangling 
how they were brought up and who they want to be as a parent. I also offer a space to parents, including 
fathers, to process the experience of pregnancy, birth and early parenthood.`

export const OliverHunt: ProfessionalModel = {
        id: "oliver-hunt",
        title: undefined, // Mr/Miss/Dr/...
        firstName: "Oliver",
        middleName: "",
        lastName: "Hunt",
        pronouns: "He/Him",
        country: "UK",
        //location: "63 Chequers Orchard, Iver, Buckinghamshire, SL0 9NJ",
        location: "Iver, Buckinghamshire",
        languages: ["en"],
        qualifications: ["Psychotherapist", "MSc MA CTA"],
        memberships: ["BACP", "UKCP"],
        multiLingualBiography: new Map<string, string[]>(
            [
                ["en", enBiography],
            ]
        ),
        multiLingualShortBiography: new Map<string, string>(
        [
            ["en", enShortBiography],
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
        "partners",
        "sex-and-parenting",
        "trans-generational-trauma",
        "ambivalence",
        "mental-illness",
        "trans-generational-trauma",
        "bonding-attachment",
    ],
    websiteURL: "https://www.counselling-directory.org.uk/counsellors/oliver-hunt",
    pictureURL: "./directory/oliver-hunt.jpg",
    email:  "ollyhunt.psychotherapy@gmail.com",
    phone: "+44 79 35 708 789",
    }

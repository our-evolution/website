import ProfessionalModel from "../../libs/models/Professional";


const enBiography = [
    `I am an integrative, relational therapist trained at the Metanoia Institute. My approach is based on a relational understanding of how we grow, develop and recover from difficulty. We thrive when we have a relationship that is dedicated, warm, compassionate, gently challenging and attuned to our unique needs, including our personal neurological style. I create this together with my clients, offering a space where you are safe to be vulnerable and find a fresh way forward. `,
    `In my journey into parenthood I experienced relationship challenges and loss. I sought support from psychotherapy. I am passionate about offering everyone a space where they can explore their difficulties, hopes, fears, doubts, losses, joys and shifting identity, free from the expectations, judgements and needs of others. `,
    `I use Gestalt, Person-Centred, Transactional Analysis and Relational psychoanalysis to help you build insight, awareness and agency. My approach is trauma-informed and I integrate mindfulness and self-compassion theory. This practice is proven to help us find a lasting positive change in how we relate to ourselves and our loved ones. `,
    `I receive regular supervision and work in accordance with the ethical standards of the BACP and UKCP. I am continuously investing in my professional development. I attend regular training and take part in research to improve the effectiveness of my approach, to the benefit of my clients. `,


    `Before I became a therapist, I had a 15+ year career helping organisations and teams manage change, explore new opportunities and recover from crises. I bring valuable insights from this experience into how people and teams manage and recover from difficulty. I know first-hand the challenge of managing a career and family life and some of the choices and questions parents have to negotiate. My initial training was in Philosophy and I bring a collaborative Existential ethos to my therapeutic work - we are equals who can work together to understand your experience and find your path to living more vibrantly.`,
    ]

const enShortBiography =  "I am an integrative, relational therapist trained at the Metanoia Institute. My approach is based on a relational understanding of how we grow, develop and recover from difficulty. We thrive when we have a relationship that is dedicated, warm, compassionate, gently challenging and attuned to our unique needs, including our personal neurological style. I create this together with my clients, offering a space where you are safe to be vulnerable and find a fresh way forward."

export const LucyWalthoe: ProfessionalModel = {
        id: "lucy-walthoe",
        title: undefined, // Mr/Miss/Dr/...
        firstName: "Lucy",
        middleName: "",
        lastName: "Walthoe",
        pronouns: "",
        country: "UK",
        location: "Newbury (Berkshire), Winchester (Hampshire)",
        languages: ["en"],
        qualifications: ["MBACP", "MPhil", "MA", "BA Hons (1st class)",],
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
            couplesF2F: false,
            couplesOnline: false,
            couplesOutdoor: false,
            groupsF2F: false,
            groupsOnline: false,
            groupsOutdoor: false,
        },
        categoryIds: [
            "contemplation",
            "anxiety",
            "planning-parenthood",
            "mental-illness",
            "artifical-reproductive-techniques",
            "loss",
            "miscarriage",
            "menopause",
            "maternal-preoccupation",
            "bonding-attachment",
            "parental-burn-out",
            "matrescence",
            "bonding-attachment",
            "gender-identity",
        ],
        websiteURL: undefined,
        pictureURL: "./directory/lucy-walthoe.jpg",
        email: "lucywalthoetherapy@gmail.com",
        phone: "+44 78 12 590 503",
    }

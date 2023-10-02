import ProfessionalModel from "../../libs/models/Professional";


const enBiography = [
    `I have many years of experience in the charity sector and in private practice working with people who are experiencing difficulties around issues of parenthood. I work with both men and women who are having difficulty getting pregnant, are going through assisted conception, have experienced miscarriage or bereavement, are experiencing ambivalence about whether they want to become a parent, or are contending with the struggles of parenthood in modern society. I am particularly interested in how becoming a parent affects your sense of identity and how a woman’s experience of motherhood is shaped by her own early experience of being mothered.`,
    `I have trained as a Transactional Analyst and I draw on theories from different schools of thought, including interpersonal, object relations, self-psychology, intersubjective theory and attachment theories. I also utilise current research in neuroscience, attachment and affect regulation.`,
    `I am a Relational therapist, which means that I take a theoretical and philosophical perspective that places emphasis on understanding a person’s experience of life within their social context. In practise, working relationally means that I will aim to explore with you your experience of the here-and-now in order to help you understand and to find meaning in your experience.`,
    `I  know that both longing for a child and becoming a parent changes you in very fundamental ways. Often these changes are not understood or supported by modern society. I have observed how society and culture wrongly assumes that women will know how to be a mother, and that they will always enjoy the job of mothering, and that they can continue previous lives and relationships as before. These assumptions often leave women feeling alone and self-doubting.`,
    `Sometimes my clients simply need a non-judgemental and supportive space in which to express their experience of parenthood. Sometimes parenthood can stir deeper emotional traumas that can manifest in a multitude of emotional and physical responses. We will work together to make sense of your experience in order to find ways for you to cope with the current shape of your life, or enable you to work towards changes you might want to make.`,
]
const enShortBiography = ``

export const HenriettaWhitfield: ProfessionalModel = {
        id: "henrietta-whitfield",
        title: undefined, // Mr/Miss/Dr/...
        firstName: "Henrietta",
        middleName: "",
        lastName: "Whitfield",
        pronouns: "",
        country: "UK",
        location: "",
        languages: ["en"],
        qualifications: ["",],
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
            groupsOnline: true,
            groupsOutdoor: false,
        },
        categoryIds: [
            "",
            
        ],
        websiteURL: undefined,
        pictureURL: undefined,
        email: "henriettarosepsychotheraoist@gmail.com",
        phone: "+44 7901 118588",
    }

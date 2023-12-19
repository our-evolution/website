import ProfessionalModel from "../../libs/models/Professional";


const enBiography = [
    `I’m a mother of  three grown up daughters and I work both in private practice and in an NHS perinatal counselling 
service, I love and am passionate about my work. My first profession as a nurse and my ongoing curiosity about people 
led me to train in psychotherapy.`,
    `I work with many and varied issues; depression, anxiety, life crises, relationship difficulties, bereavement, 
life limiting illnesses, long Covid, and issues relating to culture and belonging. My areas of particular interest are 
the perinatal period and grief/loss - birth and death.  Sometimes birth and death are experienced in quick succession, 
or in stillbirths for example, simultaneously. A client might come, having given birth and experienced this new and 
joyous event and within a few weeks, be grieving for the death of a parent or grandparent. These are life changing 
events and processing the tsunami of feelings that can rise up may feel overwhelming. My way of working is relational
 and I discuss with you what you want from therapy, this may vary from session to session or be clear from the start. I 
 love metaphor and stories, we all have stories, and uncovering the themes and motifs of yours can be illuminating and 
 lead to new choices.`,
    `Transactional Analysis begins with three important philosophical points: Everybody has the 
 capacity to change, everybody has the capacity to think and I’m Ok , you’re OK. TA was developed in the 1950/60’s 
 by Eric Berne and lies within the humanistic therapies, it was developed as an antithesis to Psychoanalysis where Berne 
 felt the therapist was hidden behind their expertise and medical language. TA is effective in both brief and long term 
 therapy and over the years many tools or concepts that enhance self awareness have been developed. It is used in across 
 a variety of fields: In psychotherapy, counselling, schools and organisations and has continued to evolve and develop 
 to this day.`
]
const enShortBiography = `I am a nurse and a psychotherapist. My modality is Transactional Analysis  and my approach 
to psychotherapy is both Relational and Co-Creative. I use TA as a lens through which relational difficulties or life 
events can be seen. One of the philosophical assumptions of TA is that, very early in life, we each decide on our own 
destiny. and that, through awareness, we can change our original decision if we so choose. I believe this is a powerful
 and hopeful way to achieve  change and I will work with you to explore what you want from therapy and support you in 
 achieving this.`
export const SusanneFuller: ProfessionalModel = {
        id: "susanne-fuller",
        title: undefined, // Mr/Miss/Dr/...
        firstName: "Susanne",
        middleName: "",
        lastName: "Fuller",
        pronouns: "She/Her",
        country: "UK",
        location: "Forest Row, East Sussex",
        languages: ["en"],
        qualifications: ["Psychotherapist", "CTA", "MSc", "RN",],
        memberships: ["UKATA", "UKCP", "NMC",],
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
            groupsOnline: false,
            groupsOutdoor: false,
        },
        categoryIds: [
           "stillbirth",
            "loss",
            "trans-generational-trauma",
        ],
        websiteURL: "https://www.susannefullerpsychotherapy.com/",
        //pictureURL: "https://www.susannefullerpsychotherapy.com/wp-content/uploads/2020/04/SUSANNE-FULLER-PORTRAIT.png",
        pictureURL: "./directory/susanne-fuller.png",
        email: "susannefullertherapy@gmail.com",
        phone: "+44 75 04 357 311",
    }

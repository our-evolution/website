import ProfessionalModel from "../../libs/models/Professional";


const enBiography = [
    `I am a psychologist-psychotherapist and ICF PCC leadership coach, in Milan, Italy, and
online, working with organizations as a consultant and in my private practice as a
psychotherapist. This gives me a privileged understanding and perspective into the struggles
and resources people experience in their personal and professional/organisational
dimensions of their lives, within their families and communities.`,
    `I specialise in Perinatal Mental Health (PMH-C) and deeply believe in the importance and
huge impact of supporting parents throughout their parenthood journeys, from trying to have
a baby, through pregnancy, birth, the postpartum period and beyond.`,
    `My interest in supporting parents is rooted in my early experience as a psychologist working
in child protection, where I was touched by the struggle and resilience and life force
witnessed in children and their caretakers. These experiences also had me inquire deeper
into attachment, trangenerational trauma, the importance of the socio-cultural and political
and support systems and post-traumatic growth and resilience.`,
    `I find Transactional analysis, in which I am trained as a psychotherapist, through CPAT
(Milan, Italy), offers an effective and comprehensive theoretical and applicative framework
for understanding and addressing the above themes and accompanying individuals and
groups in their journeys of integration and healing. I resonate in particular with the relational
and co-creative modalities of transactional analysis and would propose this approach in our
work together.`,
    `Being also an Emotional Intelligence Practitioner and mindfulness-based facilitator, I see
emotional (co)regulation, self awareness, (self)compassion and our support systems as key
facilitators in navigating becoming a parent and life’s challenges and opportunities.`,
    `A specific area of interest for me concerns the intersection of being a helping professional on
the parenthood journey, acknowledging the particular stigma they often experience.
Together with Valeria Villa we are holding an ongoing monthly reflexive circle for helping
professionals on the parenthood journey and are invested in researching this area.`,
    `Currently I am also training as a supervisor, being committed to supporting helping
professionals "see what is really there" (Albert, aged 6) and explore the personal,
interpersonal and systemic dynamics that influence their therapeutic relationships, and
develop their competencies and awareness, and find solutions to the challenges they are
experiencing, in service of their clients, and of themselves and their practice.`,
    `As part of my social responsibility and World service, I am active in different perinatal mental
health groups, including OurEvolution, and a volunteer for Postpartum Support International
and WYSE International - an UN affiliated NGO, supporting emerging young leaders from
different parts of the world.`,





]

const enShortBiography = `I am a certified psychologist-psychotherapist (CTA-P) in 
private practice, in Milan, Italy, and
online, offering individual and group psychotherapy and perinatal support groups in
Romanian, Italian and English. I am specialised in perinatal mental health (PMC-H) and
passionate about supporting vital processes and transitions (eg: birth and becoming a
parent, being a helping professional on the parenthood journey, becoming an expat,
navigating change and different types of loss). I am fascinated about how we come into 
this life and how this ripples out throughout our lives, accounting for the different 
socio-political, cultural and transgenerational influences. And I feel privileged to accompany 
individuals and groups from a wide range of backgrounds in reconnecting with their vitality, 
so that they can bring their unique voice in their relationships and in the World. My approach 
is relational and co-created.`

export const MihaelaHartescu: ProfessionalModel = {
        id: "mihaela-hartescu",
        title: undefined, // Mr/Miss/Dr/...
        firstName: "Mihaela-Leocadia",
        middleName: "",
        lastName: "Hartescu",
        pronouns: "She/Her",
        country: "Italy",
        location: "Milan",
        languages: ["ro", "en", "it"],
        qualifications: ["CTA-P", "PCM", "PCC", "PMH-C", ],
        memberships: ["EATA", "IARTA", "CPAT", "Psychologist’s Order of Lombardy in Italy (registered with no. 19559)"],
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
            couplesF2F: false,
            couplesOnline: false,
            couplesOutdoor: false,
            groupsF2F: true,
            groupsOnline: true,
            groupsOutdoor: false,
        },
        categoryIds: [
            "contemplation",
            "ambivalence",
            "childhood-parenthood",
            "planning-parenthood",
            "trans-generational-trauma",
            "abortion",
            "miscarriage",
            "loss",
            "trauma",
            "mental-illness",
            "maternal-preoccupation",
            "neurodivergence",
            "bonding-attachment",
            "return-to-work",
            "cross-cultural",
            "conscious-parenting",
            "parental-burn-out",
            "perinatal-anger",
            "matrescence",
        ],
        websiteURL: undefined,
        pictureURL: "./directory/mihaela-leocadia-hartescu.jpg",
        email: "mihaela.hartescu@gmail.com",
        phone: "+39 38 84 070 669",
    }

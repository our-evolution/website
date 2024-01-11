import ProfessionalModel from "../../libs/models/Professional";


const enBiography = [
    `“I am fascinated about how we come into this life and how this ripples out throughout our lives. I feel privileged to accompany people from a wide range of backgrounds in their journeys and in reconnecting with their vitality, so that they can find aligned ways to be and bring their unique voice into the World.”`,
    `Mihaela is a psychologist-psychotherapist, accredited in Italy and in Romania; she is a Perinatal Mental Health certified Practitioner (PMH-C), Emotional Intelligence Practitioner, leadership coach PCC and mindfulness-based facilitator (in individual and group settings, during pregnancy and postpartum and in organisational settings).`,
    `Mihaela matches a sound scientific background with engaging own intuition and that of the people she is working with. Her approach is relational and co-created, leveraging on theories and best practices from the field of neuroscience, psychology and organisational and socio-cultural and political systems, using practical and creative methods.`,
    `She is passionate about supporting vital processes and transitions (eg: birth and becoming a parent, being a helping professional on the parenthood journey, navigating different types of loss and becoming an expat).`,
    `In the last 15 years she has been working both in the clinical practice, in child protection (in Romania) and currently in her private practice and in the organisational field, with high potentials, managers and leaders, internationally. `,
    `She started volunteering more than 17 years ago and is part of different peer networks, which sees as part of her social responsibility and World service, supporting causes she deeply believes in, like supporting the advancing and advocating for maternal and paternal mental health. Currently she is a volunteer for WYSE International (an UN affiliated agency, supporting young leaders from all around the world) and for Postpartum Support International.`,
    `Mihaela has worked with public and private organizations from different sectors, including: UN Agencies, Professional Services, Pharma, Banking, Utilities, Retail, Fashion, Information Technology, NGOs, Public Institutions.`
]

const enShortBiography = `Mihaela-Leocadia Hartescu is a psychologist-psychotherapist (CTA-P) in private practice, in Milan, Italy and online.
Mihaela is specialised in Perinatal Mental Health and passionate about supporting maternal and paternal mental health. As part of her commitment, she is active in different perinatal mental health groups, including the OurEvolution project. She is also a volunteer for Postpartum Support International.`

export const MihaelaHartescu: ProfessionalModel = {
        id: "mihaela-hartescu",
        title: undefined, // Mr/Miss/Dr/...
        firstName: "Mihaela-Leocadia",
        middleName: "",
        lastName: "Hartescu",
        pronouns: "",
        country: "Italy",
        location: "Milan",
        languages: ["ro", "en", "it"],
        qualifications: ["Bachelor in Psychology from University of Bucharest, Romania", "Masters in Train the Trainers and Adult Learning, from University of Bucharest, Romania", "Holding the Professional Certified Coach (PCC) credential from the International Coaching Federation", "Certified internationally as a Perinatal Mental Health Practitioner (PMH-C)", "Qualified as an Emotional Intelligence Practitioner for the EQ-i 2.0 and EQ 360° tools", "Systemic Team Coaching Certificate with the Academy of Executive Coaching", "Accredited Process Communication Model (PCM) Coach", "As a Psychologist and Psychotherapist, she is accredited both in Italy - member of Psychologist’s Order of Lombardy in Italy (registered with no. 19559) - and in Romania (no.12440)", "Certified Trainer and Experiential individual and group Counselor"],
        memberships: ["EATA", "IARTA", "CPTA", "Member of the International Coach Federation"],
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
            groupsOnline: true,
            groupsOutdoor: false,
        },
        categoryIds: [
           "", // waiting on these from Emma and Mihaela
        ],
        websiteURL: undefined,
        pictureURL: "./directory/mihaela-leocadia-hartescu.jpg",
        email: "mihaela.hartescu@gmail.com",
        phone: "+39 38 84 070 669",
    }

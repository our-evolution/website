// English Translation for the website
import { registerLanguage } from '../../../libs/translations/languageRegistry'
import {FocusAreaTranslation, FocusCategoryTranslation, Translation} from "../../../libs/models/Translation";

let frenchLanguage: Translation = {
    languages: new Map<string, string>(
    [
        ["bg", "Bulgarian"],
        ["ca", "Catalan"],
        ["cz", "Tcheque"],
        ["da", "Danois"],
        ["de", "Allemand"],
        ["dk", "Hollandais"],
        ["el", "Greque"],
        ["en", "Anglais"],
        ["es", "Espanol"],
        ["et", "Estonian"],
        ["fi", "Finlandais"],
        ["fr", "Francais"],
        ["ga", "Irlandais"],
        ["hr", "Croate"],
        ["hu", "Hungarian"],
        ["is", "Icelandic"],
        ["it", "Italien"],
        ["ka", "Georgian"],
        ["kk", "Kazakh"],
        ["kl", "Greenlandic"],
        ["lv", "Latvian"],
        ["lt", "Lithuanian"],
        ["mk", "Macedonian"],
        ["mo", "Moldavian"],
        ["mn", "Mongolian"],
        ["mt", "Maltese"],
        ["no", "Norwegian"],
        ["pl", "Polognais"],
        ["pt", "Portugais"],
        ["ro", "Romanian"],
        ["ru", "Russe"],
        ["sr", "Serbe"],
        ["sk", "Slovaque"],
        ["sl", "Slovenian"],
        ["sv", "Suedois"],
        ["tr", "Turc"],
        ["uk", "Ukrainian"],
        ["uz", "Uzbek"],
        ["cy", "Galois"],
        ["gd", "Ecossais"],
    ]),
    global: {
        title: "Our Evolution",
        languageLabel: "French",
        languageSelectorTitle: "Langage",
        navToHome: "Acceuil",
        navToDirectory: "Professionels",
        deliveryF2F: "face a face",
        deliveryOnline: "En ligne",
        deliveryOutdoor: "A l'exterieur",
        sessionTypeIndividual: "Therapie Individuelle",
        sessionTypeCouples: "Therapie de couple",
        sessionTypeGroups: "Therapie de groupe",
        contactFullProfile: "Profile detaille",
        contactEmail: "Envoyer un couriel",
        contactWebsite: "Site internet",
        sessionLanguageList: "Session de therapie en ",
    },
    index: {
        welcome: {
            clientStatement: [],
            missionTitle: "TBD",
            missionStatement: ["An international collective of experienced counsellors/therapists dedicated to offering psychotherapeutic support for everyone embarking on the joys, challenges and losses of the transformative journey of parenthood. From the earliest moments of pregnancy and at every stage that follows.",],
            purpose: "Our purpose is to advance psychotherapeutic support for everyone impacted by the transformational journey of parenthood. We do this by:",
            purposeItems: [
                {
                    value: "Evolution",
                    description: "Developing inclusive research to show the benefits of psychotherapy and promote its use, both within the profession and widely across care settings."
                },
                {
                    value: "Treatment",
                    description: "Providing consistent, quality, care to people in need of support, in line with the highest standards of ethics, equity and professionalism.",
                },
                {
                    value: "Access",
                    description: "Active engagement and knowledge-sharing with care professionals to explain the benefits of psychotherapy and encourage its provision, sensitive to principles of diversity and removing barriers.",
                },
                {
                    value: "Awareness / understanding",
                    description: "Sharing our diverse personal and professional experiences of the impacts of the parenthood journey to educate and promote understanding, recognition and hope.",
                },
                {
                    value: "Community",
                    description: "Engaging in personal and professional peer support, supervision and knowledge-sharing within the psychotherapy community to sustain ourselves and deepen and broaden our competence.",
                },
            ],
        },
        directory: {
            title: "Nos Professionels",
            body: "<TBD>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            navToDirectory: "Trouver un professionel",
        },
        focusArea: {
            title: "Nos domaines d'expertises",
            description: "<TBD>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
    },
    focusAreas: new Map<string, FocusAreaTranslation>(
        [
            [
                "preconception",
                {
                    title: "Preconception",
                    text: ""
                },
            ],
            [
                "conception",
                {
                    title: "Conception",
                    text: ""
                },
            ],
            [
                "pregnancybirth",
                {
                    title: "Pregnancy & birth",
                    text: ""
                }
            ],
            [
                "postbirthparenthood",
                {
                    title: "Post birth & parenhood",
                    text: ""
                }
            ],
            [
                "menopause",
                {
                    title: "Menopause",
                    text: ""
                }
            ],
        ]
    ),

    focusCategories: new Map<string, FocusCategoryTranslation>(
        [

            // Pre conception
            ["contemplation", {title: "Contemplation", text: ""}],
            ["ambivalence", {title: "Ambivalence", text: ""}],
            ["planning-parenthood", {title: "Planning for parenthood", text: ""}],
            ["older-parenthood", {title: "Older parenthood", text: ""}],
            ["parenting-with-disability", {title: "Parenting with a disability", text: ""}],
            ["trans-generational-trauma", {title: "Trans generational trauma", text: ""}],
            // Conception
            ["fertility", {title: "Fertility – IVF", text: ""}],
            ["artifical-reproductive-techniques", {title: "Artificial Reproductive Techniques (sperm donation/egg donation)", text: ""}],
            ["endometriosis", {title: "Endometriosis/Polycystic Ovarian Syndrome", text: ""}],
            ["gender-identity", {title: "Gender Identity", text: ""}],
            ["fertility-single-sex-couples", {title: "Fertility for single-sex couples", text: ""}],
            // Pregnancy

            ["abortion", {title: "Abortion", text: ""}],
            ["tokophobia", {title: "Tokophobia (Fear of childbirth)", text: ""}],
            ["hyperemesis-gravidarum", {title: "Hyperemesis Gravidarum (severe sickness)", text: ""}],
            ["termination", {title: "Termination for fetal abnormality", text: ""}],
            ["domestic-abuse", {title: "Domestic abuse/coercive control", text: ""}],
            ["miscarriage", {title: "Miscarriage", text: ""}],
            ["loss", {title: "Loss", text: ""}],
            ["stillbirth", {title: "Stillbirth", text: ""}],
            ["premature",{title: "Premature birth/parenting a high dependency baby", text: ""}],
            ["trauma", {title: "Trauma", text: ""}],
            ["twins-multiples", {title: "Twins and multiples", text: ""}],
            // mental-illness
            // postbirthparenthood
            ["mental-illness", {
                title: "Mental illness/mood disorders",
                text: ""
            }],
            ["postpartum-psychosis", {
                title: "Postpartum psychosis",
                text: ""
            }],
            ["neurodivergence", {
                title: "Neurodivergence – parent and/or child",
                text: "",
            }],
            ["bonding-attachment", {
                title: "Bonding and attachment",
                text: ""
            }],
            ["return-to-work", {
                title: "Returning to work",
                text: "",
            }],
            ["ecological-parenting", {
                title: "Ecological parenting",
                text: "",
            }],
            ["single-parent", {
                title: "Single parenting",
                text: "",
            }],
            ["cross-cultural", {
                title: "Cross-cultural parenting",
                text: ""
            }],
            ["conscious-parenting", {
                title: "Conscious/gentle parenting",
                text: ""
            }],
            ["child-disabilities", {
                title: "Parenting a child with disabilities",
                text: "",
            }],
            ["parental-burn-out", {
                title: "Parental burn out",
                text: "",
            }],
            ["perinatal-anger", {
                title: "Perinatal anger and rage",
                text: "",
            }],
            // Focus Area Menopause
            ["menopause", {
                title: "Menopause",
                text: ""
            }],
        ]
    ),
    directory: {
        title: "Counselling professionals directory",
        introductionText: "The professionals listed in this directory, all share a passion around supporting families struggling with any mental challenges related to peri-natal mental health.",
    },
};
const frenchLanguageKey = "fr"
const initialiseLanguage = ():void => {
    registerLanguage(frenchLanguageKey, frenchLanguage)
}

export default initialiseLanguage
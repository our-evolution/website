// English Translation for the website
import { registerLanguage, setDefaultLanguage } from '../languageRegistry'
import {FocusAreaTranslation, Translation} from "../type";

let frenchLanguage: Translation = {
    global: {
        title: "Our Evolution",
        languageLabel: "French",
        languageSelectorTitle: "Langage",
        navToHome: "Acceuil",
        navToDirectory: "Professionels",
    },
    index: {
        welcome: {
            missionStatement: "An international collective of experienced counsellors/therapists dedicated to offering psychotherapeutic support for everyone embarking on the joys, challenges and losses of the transformative journey of parenthood. From the earliest moments of pregnancy and at every stage that follows.",
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
            title: "Bienvenue"
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
                    conditions: [
                        "Contemplation",
                        "Ambivalence",
                        "Planning for parenthood",
                        "Older parenthood",
                        "Parenting with a disability",
                        "Trans generational trauma",
                    ],
                },
            ],
            [
                "conception",
                {
                    title: "Conception",
                    conditions: [
                        "Fertility – IVF",
                        "Artificial Reproductive Techniques (sperm donation/egg donation)",
                        "Endometriosis/Polycystic Ovarian Syndrome",
                        "Gender Identity",
                        "Fertility for single-sex couples",
                    ],
                },
            ],
            [
                "pregnancybirth",
                {
                    title: "Pregnancy & birth",
                    conditions: [
                        "Abortion",
                        "Tokophobia (Fear of childbirth)",
                        "Hyperemesis Gravidarum (severe sickness)",
                        "Termination for fetal abnormality",
                        "Domestic abuse/coercive control",
                        "Miscarriage",
                        "Loss",
                        "Stillbirth",
                        "Premature birth/parenting a high dependency baby",
                        "Trauma",
                        "Twins and multiples",
                        "Mental illness/mood disorders"
                    ],
                }
            ],
            [
                "postbirthparenthood",
                {
                    title: "Post birth & parenhood",
                    conditions: [
                        "Mental illness/mood disorders",
                        "Postpartum psychosis",
                        "Neurodivergence – parent and/or child",
                        "Bonding and attachment",
                        "Returning to work",
                        "Ecological parenting",
                        "Single parenting",
                        "Cross-cultural parenting",
                        "Conscious/gentle parenting",
                        "Parenting a child with disabilities",
                        "Parental burn out",
                        "Perinatal anger and rage",
                    ],
                }
            ],
            [
                "menopause",
                {
                    title: "Menopause",
                    conditions: []
                }
            ],
        ]
    )

};
const frenchLanguageKey = "fr"
const initialiseLanguage = ():void => {
    registerLanguage(frenchLanguageKey, frenchLanguage)
    setDefaultLanguage(frenchLanguage)
}

export default initialiseLanguage
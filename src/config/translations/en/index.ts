// English Translation for the website
import { registerLanguage, setDefaultLanguage } from '../../../libs/translations/languageRegistry'
import {FocusAreaTranslation, FocusCategoryTranslation, Translation} from "../../../libs/models/Translation";

let englishLanguage: Translation;
englishLanguage = {
    languages: new Map<string, string>(
        [
            ["bg", "Bulgarian"],
            ["ca", "Catalan"],
            ["cz", "Czech"],
            ["da", "Danish"],
            ["de", "German"],
            ["dk", "Deutch"],
            ["el", "Greek"],
            ["en", "English"],
            ["es", "Spanish"],
            ["et", "Estonian"],
            ["fi", "Finish"],
            ["fr", "French"],
            ["ga", "Irish"],
            ["hr", "Croatian"],
            ["hu", "Hungarian"],
            ["is", "Icelandic"],
            ["it", "Italian"],
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
            ["pl", "Polish"],
            ["pt", "Portuguese"],
            ["ro", "Romanian"],
            ["ru", "Russian"],
            ["sr", "Serbian"],
            ["sk", "Slovak"],
            ["sl", "Slovenian"],
            ["sv", "Swedish"],
            ["tr", "Turkish"],
            ["uk", "Ukrainian"],
            ["uz", "Uzbek"],
            ["cy", "Welsh"],
            ["gd", "Scottish"],
        ]
    ),
    directory: {
        title: "Our Professionals Directory",
        introductionText: "The professionals listed in this directory, all share a passion around supporting families struggling with any challenges related to peri-natal mental health.",
    },
    focusAreas: new Map<string, FocusAreaTranslation>(
        [
            [
                "preconception",
                {
                    title: "Preconception",
                    text: "<TBD>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
            ],
            [
                "conception",
                {
                    title: "Conception",
                    text: "<TBD>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
            ],
            [
                "pregnancybirth",
                {
                    title: "Pregnancy & birth",
                    text: "<TBD>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
            ],
            [
                "postbirthparenthood",
                {
                    title: "Post birth & parenhood",
                    text: "<TBD>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
            ],
            [
                "menopause",
                {
                    title: "Menopause",
                    text: "<TBD>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
            ],
        ]
    ),

    focusCategories: new Map<string, FocusCategoryTranslation>(
        [

            // Pre conception
            ["contemplation", {title: "Comtemplation", text:
                    "Deciding to become a parent  decision and can feel like stepping into the ‘unknown’. During this decisional process a variety of feelings, from excitement to anxiety are quite normal.  We may visualise the futureand wonder whether we can manage if  we are ‘good enough’. There may be a great deal of decisions to be made, particularly if conception may be difficult.  Warm, accepting and informed therapeutic support can help navigate these uncertaint  confidence in our decision-making process, helping us to process feelings of ambivalence, or confusion.  This is about investing in our mental and emotional well-being at a time when we need it most." +
                    "Mood disorders/intense emotions and distress" +
                    "For some, parenting and the parenthood journey brings joy and hope but naturally also worry, disappointment and loss. It can feel like being on an emotional roller-coaster, which can feel unpleasant and difficult to navigate. this  a new experience, or it could be touching more enduring difficulties. Parenting can feel isolating and difficult, bringing feelings of lacking as a parent and a person. Relational psychotherapy provides a warm, accepting and safe space where we can explore our most vulnerable feelings, make sense of our difficulties and find the resources to parent more vibrantly."}],
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
            ["tokophobia", {title: "Tokophobia (Fear of childbirth)", text: "Tokophobia is a fear of childbirth.  This might lead to fear of conception, making a woman feel determined never to get pregnant and can lead to extreme birth control measures.  It may also be a fear of going into hospital and all the medical procedures that some women associate with having children.  It may also come from an extreme phobia of needles perhaps, or fear of being sick.  This is a distressing condition and yet it is treatable. If you are struggling with tokophobia, then there is help out there for you.  Psychological therapy can work really well combined with one or two sessions of EMDR (Eye Movement Desensitisation Reprogramming).  Coming to therapy and being able to admit this is your fear is the start of your journey to becoming a parent."}],
            ["hyperemesis-gravidarum", {title: "Hyperemesis Gravidarum (severe sickness)", text: "Hyperemesis Gravidarum is the medical term for extreme sickness in pregnancy.  This is a very distressing condition and can be discounted within the medical profession.  This is because feeling nauseous and being sick can be a normal part of being pregnant.  However, this is extreme sickness and can lead to hospitalisation due to dehydration and weakness.  Some women find it very difficult to keep any food or fluids down at this time.  There is mediation that can be taken, and it can be really helpful to talk about this distressing condition with someone who understands and has the empathy to really listen to what this experience is like for you.  Help is out there for you, particularly in times like this when you may feel extremely stressed and anxious about how you will tolerate this for such a long time.  You may also need calm reassurance about the lack of impact on your baby."}],
            ["termination", {title: "Termination for fetal abnormality", text: ""}],
            ["domestic-abuse", {title: "Domestic abuse/coercive control", text: ""}],
            ["miscarriage", {title: "Miscarriage", text: "Miscarriage is commonly defined as the loss of the baby before 28 weeks of pregnancy is the most common reason for losing a baby during pregnancy (WHO). Many of us have been touched by miscarriage in our parenting journey or when supporting others through this experience.  From a place of hope, excitement and growing parental care we must accept and make sense of loss. Experiencmiscarriage, can bring with complex, confusing and intense emotions. Our needs can vary from withdrawing from people and isolating ourselves in our grief, to the need for connection, reaching out to friends and support groups. In this time of difficulty, psychotherapy can create a holding container for us, providing a compassionate space to make sense of our loss and enable us to connect with our inner needs."}],
            ["loss", {title: "Loss", text: "Loss is an event that affects many of us during our parenthood and parenting journey. Some of the losses we might encounter are: stillbirth, ectopic pregnancy, termination, termination for medical reasons (TFMR), miscarriage, neonatal death, sudden infant death syndrome (SIDS). These losses are the loss of our baby or child, even if the medical profession and society may not see it this way. Other forms of loss maybe through infertility, or coming to terms with a life-altering diagnosis for our baby. Loss and shifting identity,  part of the adjustment to parenting.  This is a period of huge transition during which friendships, social life, career, and family dynamics change. Loss may also be felt as our bodies  through pregnancy and childbirth, especially if we have experienced a traumatic birth. If loss speaks to us, if we experience a connection with loss at different stages of our parenting journey, psychotherapy can offer a space where our loss is voiced, explored, honoured and held in a confidential and safe setting."}],
            ["stillbirth", {title: "Stillbirth", text: "Experiencing stillbirth is extremely distressing and according to the NHS happens in about 1 in every 200 births in England, so it is much more common than is generally known.  Stillbirth is when a baby dies in the womb after 24 weeks gestation. The causes are not fully known as yet, and some of the research (conducted by charities such as Tommys and SANDS in the UK, amongst others) is now around blood flow in the placenta, although other reasons can be placental abruption, complications of diabetes and obstetric cholestasis." +
                    "If you have experienced a stillbirth the grief can feel overwhelming.  If you go on to have another pregnancy then it is normal to feel very high levels of anxiety and this can lead to obsessive compulsive disorders throughout the pregnancy.  Relational psychotherapy can really help with the grief and also to normalise any anxiety in subsequent pregnancies as you are not alone, you have someone to share your experience with, someone who will not judge you, or discount your experience or feelings in the present moment.  We don’t ‘get over’ stillbirth.  This is the loss of your infant, and it is important to honour your infant in whatever way you need and sometimes the space you have in therapy can be a way of exploring what is the best way forwards for you and your partner."}],
            ["premature",{title: "Premature birth/parenting a high dependency baby", text: ""}],
            ["trauma", {title: "Trauma", text: ""}],
            ["twins-multiples", {title: "Twins and multiples", text: ""}],
            ["maternal-preoccupation", {title: "Maternal Preoccupation", text: "In the weeks before and after a baby is born, the mother will experience quite radical changes in her mind and brain which help her to adapt and attune to her baby's needs. A mother will become utterly preoccupied by her baby, often to the exclusion of everything and everyone else around her. Whilst this preoccupation is normal and healthy, not all mothers feel comfortable with the experience. Such focus can lead to isolation in modern western society, where there is often a lack of community and extended family. It can also be hard for the immediate family to understand. Or, with technology ever available, a mother might feel pressure to maintain a level of work and social contact, leading to overwhelm and a sense of failure. Psychotherapy can provide a space to support and explore the psychological changes of motherhood experienced as preoccupation in the infant."}],
            // mental-illness
            // postbirthparenthood
            ["mental-illness", {
                title: "Mental illness/mood disorders",
                text: ""
            }],
            ["postpartum-psychosis", {
                title: "Postpartum psychosis",
                text: `Postpartum psychosis is a rare form of psychosis that normally occurs shortly after birth and the weeks post birth.  It is extremely serious and if you are concerned that you or your partner may be experiencing this then it is considered a medical emergency.  Many women experience low mood in the first few days post birth.  This form of psychosis has symptoms of hallucinations (hearing, seeing, smelling, or feeling things that are not there), delusions, feelings of mania (talking very fast, racing thoughts, feeling high or ‘on top of the world), loss of inhibitions, feelings of extreme fear or distrust, feeling very confused or out of character.  The experience of this form of mental illness can be extremely distressing and traumatic both for the woman, and for her family around her. Relational psychotherapy can really help to process the trauma of this experience, the feelings of grief and loss about what has happened and to process any fears that this will happen again.  Often women can struggle with believing they are no longer the person they were before the psychosis, and having the opportunity to process their experience and fears can be helpful to come through the trauma.`
            }],
            ["neurodivergence", {
                title: "Neurodivergence – parent and/or child",
                text: "",
            }],
            ["bonding-attachment", {
                title: "Bonding and attachment",
                text: "\n" +
                    "Emotional bonding with our baby is one of the most important and rewarding parts of being a parent. Yet many parents worry and question themselves and who they are in this process. Struggling with low mood, loss of energy, or sleep deprivation, impact our ability to be emotionally available. Or we may have a constant worry about whether we are ‘getting it right’. Relational psychotherapy provides a warm, accepting and compassionate space to understand how we are connecting with  baby, explore difficulties and find new strategies to bond emotionally." +
                    "Childhood difficulty and your parenthood journey" +
                    "Becoming a parent stirs up our own childhood experiences. If  experiences and narratives touch upon difficulties – broken family relationships, loss, traumatic events, conflicting and/or imposing cultural messages, to name a few -  these can undermine our self-esteem and confidence as parents. Thoughts of ‘I’m not good enough’ and ‘I don’t know how to do this’ set in and we become fearful and isolated. Relational psychotherapy provides a warm and accepting space where we can heal some of these early traumas and reduce their impact on our self-worth and potential as a parent."
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
            ["sex-and-parenting", {
                title: "Sex and parenting",
                text: "Can we talk about sex? Far too often the answer is not  that simple. However, sex during the parenting journey is an important part of connection and bonding for the parents, so sex needs to be talked about, and offering this within the therapeutic space can make it easier to start the conversation." +
                    "Of course, sex is part of the parenting process at all the various stages. But it can seem like sex imply the way to conceive, of pressure to have sex at a specific time  When sex conception .shame, guilt, stress and confusion. We spend so long trying to stop becoming pregnant, that when we finally want to, it can feel nonsensical that sex doesn’t lead to conception easily: fing time for sex may become difficult; we don’t recognize our body after birth especially if we have traumatic birth experiences; wur attraction to our partner may dwindle; perhaps it feels to difficult to create space for pleasure; or we worry about the dynamics, what comes before, during and after sex. All of these can contribute to a feeling of judgement for our decisions and can be detrimental to our relationships." +
                    "These are just a few of the ways in which sex is involved in the parenting journey." +
                    "Psychotherapy can offer us a space where we encounter sex as something that is open for discussion, sex as a process that evolves during our life and our parenting experiences rather than something that is static and needs to be performed or avoided according to specific rules and dynamics. Within the psychotherapeutic relationship, we can find a space where sex is not stigmatised but accepted as a human and healthy aspect of our life, worth of our time and curiosity."
            }],
            // Focus Area Menopause
            ["menopause", {
                title: "Menopause",
                text: "The menopause is a time of transition that affects us all in a unique and personal way. It brings with it physical, mental and emotional changes that can be hard to navigate. These shifts can impact our sense of identity, self-esteem and confidence in our abilities, spilling into our personal life, career and intimate relationships. Relational psychotherapy offers a safe, non-judgemental and compassionate space where we can be supported through change, explore our needs and emotions and discover new ways of relating to ourselves, others and the world."
            }],
        ]
    ),
    global: {
        title: "Our Evolution",
        languageSelectorTitle: "Language",
        languageLabel: "English",
        navToHome: "Home",
        navToDirectory: "Directory",
        deliveryF2F: "In person",
        deliveryOnline: "Online",
        deliveryOutdoor: "Outdoor",
        sessionTypeIndividual: "Individual Therapy",
        sessionTypeCouples: "Couples Therapy",
        sessionTypeGroups: "Group Therapy",
        contactFullProfile: "Open profile",
        contactEmail: "Send a mail",
        contactWebsite: "Go to website",
        sessionLanguageList: "Therapy sessions in ",
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
            title: "Welcome"
        },
        directory: {
            title: "Our Directory",
            body: "",
            navToDirectory: "Find your counsellor or therapist",
        },
        focusArea: {
            title: "Our Area of focus",
            description: "<TBD>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    }
};
const englishLanguageKey = "en"
const initialiseLanguage = ():void => {
    registerLanguage(englishLanguageKey, englishLanguage)
    setDefaultLanguage(englishLanguageKey, englishLanguage)
}
export default initialiseLanguage

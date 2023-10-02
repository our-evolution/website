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
            ["planning-parenthood", {title: "Planning for parenthood", text: 
                    "Are you thinking about embarking on your parenting journey, and want to explore what your parenting pathway might look like. Psychotherapy can be really helpful to work out what you imagine parenting might be like, to explore the myths and ideas of parenting we each hold.  This also might be about cultural aspects, such as partners from very different cultures, religions, different regions of the world, and it also might be about language – whose language do we speak, how do we teach our future children about their mixed heritage, how do we help them to feel like they belong." +
                    "Planning your parenting journey can be helpful, but it is not necessarily vital. Talking through how you want to be as parents for example can help tease out differences in parenting styles, differing thoughts on disciplining children, thoughts around cultural beliefs and expectations, particularly from the wider family, that might be impactful."}],
            ["older-parenthood", {title: "Older parenthood", text: 
                    "What is it like to be an older parent?  Is this culturally acceptable, although we know it is quite possible.  Are you fearful of what might happen to your child, if you are an older parent and you or your partner die when your child is still relatively young.  Do you wonder about the chances of not being there to support your child through some of those important milestones – graduation, getting married, having their own children? Some questions that you can explore are, for example, what are the options open to becoming an older parent? What sorts of Artificial reproductive techniques are there, and what are the success rates? What happens if we need to use a sperm or egg donor, what does that mean for me and a feeling of my own sense of ability and agency in becoming a parent. What about adoption or fostering?" +
                    "Exploring all of these aspects and many more can be beneficial prior to becoming an older parent.  It is not simply about how am I going to gain enough sleep, There are many other questions to ask and explore."}],
            ["parenting-with-disability", {title: "Parenting with a disability", text: 
                    "Parenting with a disability has two parts.  This might be about you as a parent having a disability and how do you cope with that as well as go through all the standard moments in the transition to becoming a parent. Things to explore might be what does my pregnancy and birth trajectory look like? What sort of impact will my disability have on my ability to parent and how will it impact my own health – will it impact me negatively, for instance?" +
                    "Parenting with a disability might also be parenting a child with a disability. Psychotherapy can offer a space for the opportunity to explore all the fears and concerns attached to discovering your infant may or will be disabled.  What might that mean for the family as a whole? How will we cope? How will we tell wider family and friends? What does this mean for our future? What strain will this put on our relationship in the future and how can we stay strong together as a couple in the face of adversity? What options are there for help? What do we need to think about and plan for? How would we cope with a child with a life-limiting disability? How might that impact other children?"}],
            ["trans-generational-trauma", {title: "Trans generational trauma", text: 
                    "This is trauma which is passed down through the generations which then has an impact on who we are today.  This can be cultural trauma such as caused by war – world war II is an example of this, particularly in European countries affected and impacted by the war, such as Slovenia, parts of Italy, Poland. This would be especially true of those impacted through family history of the Holocaust, and atrocities that occurred." +
                    "We might not have a full sense that the trauma we feel is transgenerational.  However, being able to take account of what has happened within previous generations in families can often give insight into thoughts, feelings and behaviours in the present, which might be impacting through heightened lifelong anxiety for example, or even a family history of depression and low mood."}],
            // Conception
            ["fertility", {title: "Fertility – IVF", text: 
                    "It can be difficult to discover that you may need help to become pregnant.  This can induce feelings of guilt and shame and that your body is perhaps letting you down. It might also bring up feelings of competition or jealousy between partners, particularly if one person feels they are the reason why their parenting journey has stalled – perhaps due to a low sperm count, or due to abnormalities in a woman’s ovaries or fallopian tubes.  Whatever the reason, coming to terms with the need to ask for, and often pay for, fertility treatment can be difficult. Gaining access to fertility treatment from your national health service may prove difficult. Going through the hormone treatments required to make invitro fertilisation as successful as possible can also be gruelling and bring mood swings, mood disorders, feelings of stress and anxiety." +
                    "Many of the psychotherapists on this website have either been through the IVF fertility journey or have a great deal of knowledge or experience working in this area, and can offer help in coming to terms with some of your most difficult feelings."}],
            ["artifical-reproductive-techniques", {title: "Artificial Reproductive Techniques (sperm donation/egg donation)", text: ""}],
            ["endometriosis", {title: "Endometriosis/Polycystic Ovarian Syndrome", text: 
                    "These two conditions can be distressing, often are very painful, and may take many years to get diagnosed from a doctor or consultant. Both often require some form of invasive surgery which may not actually solve the difficulty at all but may alleviate some painful symptoms." +
                    "Women experiencing either of these conditions are also often told that they may struggle to get pregnant or may experience early menopause, both of which can be distressing to hear, particularly if becoming a mother has been a large part of their desire as an adult." +
                    "Exploring existential feelings like ‘why me’ and how to cope with the debilitating symptoms as well as exploring frustration and anger towards the body can be helpful for these conditions. Another condition which would be included under these title would be women experiencing premenstrual dysphoric disorder (PMDD)."}],
            ["gender-identity", {title: "Gender Identity", text: ""}],
            ["fertility-single-sex-couples", {title: "Fertility for single-sex couples", text: "Same sex couples are no different from any other couple and often want to experience  the parenting journey.  However, this requires them to set foot on the path of either surrogacy or artificial reproductive techniques. As with any parents, same sex couples need support through their journey and this they can gain through therapy and also through being part of a group who are going through similar experiences."}],
            // Pregnancy

            ["abortion", {title: "Abortion", text: ""}],
            ["tokophobia", {title: "Tokophobia (Fear of childbirth)", text: "Tokophobia is a fear of childbirth.  This might lead to fear of conception, making a woman feel determined never to get pregnant and can lead to extreme birth control measures.  It may also be a fear of going into hospital and all the medical procedures that some women associate with having children.  It may also come from an extreme phobia of needles perhaps, or fear of being sick.  This is a distressing condition and yet it is treatable. If you are struggling with tokophobia, then there is help out there for you.  Psychological therapy can work really well combined with one or two sessions of EMDR (Eye Movement Desensitisation Reprogramming).  Coming to therapy and being able to admit this is your fear is the start of your journey to becoming a parent."}],
            ["hyperemesis-gravidarum", {title: "Hyperemesis Gravidarum (severe sickness)", text: "Hyperemesis Gravidarum is the medical term for extreme sickness in pregnancy.  This is a very distressing condition and can be discounted within the medical profession.  This is because feeling nauseous and being sick can be a normal part of being pregnant.  However, this is extreme sickness and can lead to hospitalisation due to dehydration and weakness.  Some women find it very difficult to keep any food or fluids down at this time.  There is mediation that can be taken, and it can be really helpful to talk about this distressing condition with someone who understands and has the empathy to really listen to what this experience is like for you.  Help is out there for you, particularly in times like this when you may feel extremely stressed and anxious about how you will tolerate this for such a long time.  You may also need calm reassurance about the lack of impact on your baby."}],
            ["termination", {title: "Termination for fetal abnormality", text: ""}],
            ["domestic-abuse", {title: "Domestic abuse/coercive control", text: 
                    "Domestic Abuse can be both physical and emotional. The latter can be more difficult for others to recognise because there are often no visible signs of abuse. Coercive control, which is also domestic abuse, is a pattern of behaviour used to isolate, cause harm or distress and can be incredibly subtle, even making you question your own sanity. If you feel in distress because of another person’s behaviour, this may be a form of domestic abuse and it is important for you to know there is help for you. You are not alone. You are believed." +
                    "Abuse is traumatising for both you and for any child who is caught up in the abuse. It is important, therefore that you reach out for the support you need and deserve. Parenting and the parenthood journey can bring joy and relational therapy can bring hope, helping you to make sense of what has happened to you, help you to rebuild your self-esteem and self-confidence and help you to build healthier relationships."}],
            ["miscarriage", {title: "Miscarriage", text: "Miscarriage is commonly defined as the loss of the baby before 28 weeks of pregnancy is the most common reason for losing a baby during pregnancy (WHO). Many of us have been touched by miscarriage in our parenting journey or when supporting others through this experience.  From a place of hope, excitement and growing parental care we must accept and make sense of loss. Experiencmiscarriage, can bring with complex, confusing and intense emotions. Our needs can vary from withdrawing from people and isolating ourselves in our grief, to the need for connection, reaching out to friends and support groups. In this time of difficulty, psychotherapy can create a holding container for us, providing a compassionate space to make sense of our loss and enable us to connect with our inner needs."}],
            ["loss", {title: "Loss", text: "Loss is an event that affects many of us during our parenthood and parenting journey. Some of the losses we might encounter are: stillbirth, ectopic pregnancy, termination, termination for medical reasons (TFMR), miscarriage, neonatal death, sudden infant death syndrome (SIDS). These losses are the loss of our baby or child, even if the medical profession and society may not see it this way. Other forms of loss maybe through infertility, or coming to terms with a life-altering diagnosis for our baby. Loss and shifting identity,  part of the adjustment to parenting.  This is a period of huge transition during which friendships, social life, career, and family dynamics change. Loss may also be felt as our bodies  through pregnancy and childbirth, especially if we have experienced a traumatic birth. If loss speaks to us, if we experience a connection with loss at different stages of our parenting journey, psychotherapy can offer a space where our loss is voiced, explored, honoured and held in a confidential and safe setting."}],
            ["stillbirth", {title: "Stillbirth", text: "Experiencing stillbirth is extremely distressing and according to the NHS happens in about 1 in every 200 births in England, so it is much more common than is generally known.  Stillbirth is when a baby dies in the womb after 24 weeks gestation. The causes are not fully known as yet, and some of the research (conducted by charities such as Tommys and SANDS in the UK, amongst others) is now around blood flow in the placenta, although other reasons can be placental abruption, complications of diabetes and obstetric cholestasis." +
                    "If you have experienced a stillbirth the grief can feel overwhelming.  If you go on to have another pregnancy then it is normal to feel very high levels of anxiety and this can lead to obsessive compulsive disorders throughout the pregnancy.  Relational psychotherapy can really help with the grief and also to normalise any anxiety in subsequent pregnancies as you are not alone, you have someone to share your experience with, someone who will not judge you, or discount your experience or feelings in the present moment.  We don’t ‘get over’ stillbirth.  This is the loss of your infant, and it is important to honour your infant in whatever way you need and sometimes the space you have in therapy can be a way of exploring what is the best way forwards for you and your partner."}],
            ["premature",{title: "Premature birth/parenting a high dependency baby", text: ""}],
            ["trauma", {title: "Trauma", text: 
                    "There are many different types of traumas in the perinatal period, not only birth trauma. This could be for example discovering a genetic abnormality in the fetus, or experiencing infertility, also perhaps having a difficult pregnancy which is fraught with difficulties for example if you are seriously unwell during the pregnancy or indeed if your baby is unwell. Another type of trauma is experiencing stillbirth, which is devastating for a couple and can put pressure on the partnership, particularly if one parent finds it difficult to comprehend and there is no concrete medical explanation about why." +
                    "There may also be underlying trauma from rape or sexual abuse, which can re-surface in pregnancy and cause difficulty in thoughts and feelings.  Perhaps ta baby has even been conceived due to rape or sexual abuse and the woman cannot contemplate a termination due to cultural reasons. Being able to talk to someone who is non-judgemental when you are experiencing such difficulties can be helpful. Particularly with therapists who have personal knowledge of cultural difficulties."}],
            ["twins-multiples", {title: "Twins and multiples", text: 
                    "Finding our you are carrying twins or multiple babies can be a huge shock, particularly if they were naturally conceived. There may be twins in the family, and no matter what, if can bring to light fear of inadequacy as a parent, fear of being able to cope and feelings of ‘why me’. Some mothers can struggle to bond with their babies and worry that they are more attached to one child, bringing feelings of guilt and shame. Some women find it difficult to contemplate being a mother to twins or multiples and go through thoughts of termination, and in some severe cases this can bring on Tokophobia (fear of giving birth), particularly fearing that one of the babies will be breach, as well as having doubts that they will be able to cope delivering naturally." +
                    "Regardless of how you are feeling about carrying or giving birth to twins or multiples, it can be useful to explore your feelings to help you to realise that these are normal, and these feelings do not mean that you are failing in some way as a mother. You require support in your endeavour to give birth to and raise your twins/multiples and having time in therapy or within a group of other parents with multiples can be helpful and help you to hear how others have experienced their journey."}],
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
                text: "\n" +
                    "Returning to work after a period away for maternity leave can be daunting and hard. Not only are you different, but you will also now have very different priorities.  You may be wracked with guilt, not ready to leave your baby in someone else’s care or concerned to make the right choice for your baby. You may even fear rejection, that your baby may bond with their carer and prefer them over you. Getting back into the flow of work may seem overwhelming and your ability to perform may be in doubt, particularly if both you and your baby are struggling with sleep deprivation. Going back to work can increase feelings of vulnerability and ambivalence towards a role you used to enjoy, and it can impact your mental health, causing stress, anxiety, lack of energy and low mood." +
                    "Exploring how to ease yourself back into the working environment can be helpful, as well as exploring strategies to suggest to your employer regarding how to go back to work in a phased return. Therapy can be a good place to bring up difficulties such as how to ask for breastfeeding and suitable rest facilities, to explore your options when it feels overwhelming, and you want to quite work for good."
            }],
            ["ecological-parenting", {
                title: "Ecological parenting",
                text: "",
            }],
            ["single-parent", {
                title: "Single parenting",
                text:  "\n" +
                    "Parenting is hard work.  However, finding yourself in the position of parenting single-handedly is difficult, and can feel overwhelming as well as constantly exhausting. Who do you go to when your child is having their third of fourth temper tantrum in the day. How might you find ways to work with your child, when you have no energy left.  How do you juggle being unwell and parenting, or equally working when you have a sick child? There are so many different difficulties that being on your own in the parenting journey can bring up." +
                    "Having a place to talk about your experience, explore how you are feeling, find strategies for you to keep your sanity when under intense pressure can be useful."
            }],
            ["cross-cultural", {
                title: "Cross-cultural parenting",
                text: "How do we navigate our different cultures, religions, and languages for example when we choose to have a baby together and we come from very different backgrounds, or even come from very different parts of the world. What are the expectations and myths that might come to the surface which have been hidden prior to the parenting journey.  This may be around gender, where in one religion, there are strong views about parenting roles within a family. This maybe even about cultural expectations such as the paying of a dowry, the expectation of the mother to give up her career and remain at home raising the children.  Of course, for some these decisions are normal, and are considered ok.  However, in some relationships, these cross-cultural differences can cause friction, causing the relationship to flounder particularly if one partner is shocked at the expectations and had little idea that this was a part of the cultural or familial script.",
            }],
            ["conscious-parenting", {
                title: "Conscious/gentle parenting",
                text: "",
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
                text: "\n" +
                    "How do we stay grounded in the face of anger towards our children? Perhaps the perinatal anger is towards the way in which we have been treated during our parenting journey. It might be a feeling that stems from fear, of loss of control, of the need to have the ‘perfect’ child, relationship, family life, which is unattainable. Anger may be due to the flux of hormones at various different parts of pregnancy or post birth." +
                    "Whatever the reason for the anger, it can be helpful to explore this with a professional, to learn ways of dissipating your anger or strategies to deal with it, if you are feeling particularly strongly. Being part of a parenting group with anger as a theme can help to normalise your anger and allow you to hear other experiences, and suggestions of ways in which they have learned to manage this distressing and sometimes frightening emotion."
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
            description: "",
        }
    }
};
const englishLanguageKey = "en"
const initialiseLanguage = ():void => {
    registerLanguage(englishLanguageKey, englishLanguage)
    setDefaultLanguage(englishLanguageKey, englishLanguage)
}
export default initialiseLanguage

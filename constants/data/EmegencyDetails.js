const HelpLinedata = [
    {
        id: 1,
        text: "Emergency Call (Police, Ambulance, Fire)",
        Number: "000",
        type: "Emergency Call (Police, Ambulance, Fire)"
    },
    {
        id: 2,
        text: "Emergency call to Kids Helpline (24/7)",
        Number: "1800 551 800",
        type: "Free, confidential counselling service specifically for children and young people aged 5 – 25."
    },
    {
        id: 3,
        text: "Emergency call to Lifeline (24/7)",
        Number: "13 11 14",
        type: "Provides 24-hour crisis counselling, support groups and suicide prevention services"
    },
    {
        id: 4,
        text: "Emergency call to Suicide Call Back Service (24/7)",
        Number: "1300 659 467",
        type: "Support if you or someone you know is feeling suicidal."
    },
    {
        id: 5,
        text: "Emergency call to Beyond Blue (24/7)",
        Number: "1300 22 4636",
        type: "Beyond Blue provides information and support to help everyone achieve their best possible mental health, whatever their age and wherever they live. All calls and chats are one-on-one with a counsellor. You can letus know if you’d like to remain anonymous."
    },
    {
        id: 6,
        text: "Emergency call to Headspace (7 days 9am–1am AEST)",
        Number: " 1800 650 890",
        type: "Free online and telephone support and counselling to young people 12 - 25 and their families and friends."
    },
    {
        id: 7,
        text: "Emergency call to SANE Australia (Mon-Fri 10am–10pm AEST)",
        Number: "1800 18 7263",
        type: "Provides support to anyone in Australia affected by complex mental health issues, as well as their friends and family members"
    },
    {
        id: 8,
        text: "Emergency call to Samaritans (Mon-Sun 10am-10pm AEST)",
        Number: "135 247",
        type: "Provides anonymous crisis support, for issues such as relationship or family problems, loss and bereavement, financial or job-related worries, illness, addiction and suicide."
    },
    {
        id: 9,
        text: "Emergency call to Butterfly Foundation (7 days 8am-midnight AEST)",
        Number: "1800 334 673",
        type: "Free, confidential service that provides information, counselling and treatment referral for people with eating disorders, and body image and related issues."
    },
    {
        id: 10,
        text: "Emergency call to 1800 Respect (24/7)",
        Number: "1800 737 732",
        type: "For anyone who has experienced, or is at risk of, physical or sexual violence."
    },
    {
        id: 11,
        text: "Emergency call to Alcohol and Drug Foundation (24/7)",
        Number: "1300 85 85 84",
        type: "A telephone and online service for anyone who needs relevant, up-to-date information about alcohol and other drugs."
    },
    {
        id: 12,
        text: "Emergency call to Family Drug Support Australia (24/7)",
        Number: "1300 368 186",
        type: "A telephone support service for users, families and carers in crisis due to alcohol and other drug use."
    },
    {
        id: 13,
        text: "Emergency call to Wellways (24/7)",
        Number: "1300 111 500",
        type: "A peer-led, volunteer support and referral service that provides information to people experiencing mental health issues, as well as their families and friends."
    },
    {
        id: 14,
        text: "Emergency call to Family Relationship Advice Line (Mon-Fri 8am–8pm, Sat 10am–4pm AEST)",
        Number: "1800 050 321",
        type: "Provides information on family relationship issues and advice on parenting arrangements after separation.It is for anyone - including step-parents, young people and friends - affected by family relationship or separation issues. Referrals to local services are also offered."
    },
    {
        id: 15,
        text: "Emergency call to Griefline (Mon-Sun 6am-12am AEST)",
        Number: " (03) 9935 7400",
        type: "Provides support to people experiencing loss and grief, at any stage in life."
    },

]

const OnlineResourcesdata = [
    {
        id: 1,
        text: "Bullyproof Australia",
        Detail: "An Australian charity providing extensive information on bullying and mental health as well as comprehensive resilience programs delivered in schools.",
        siteDomain: "bullyproofaustralia.org.au",
        siteUrl: "https://bullyproofaustralia.org.au/"
    },
    {
        id: 2,
        text: "Bullying No Way",
        Detail: "A government website for students with trustworthy and practical information on all types of bullying.",
        siteDomain: " bullyingnoway.gov.au",
        siteUrl: "https://bullyingnoway.gov.au/"
    },
    {
        id: 3,
        text: "Kids helpline",
        Detail: "A free Australian telephone and online counselling service for young people aged between 5 and 25. Counsellors respond to more than 6,000 calls each week about issues ranging from relationship breakdown and bullying to sexual abuse, homelessness, suicidal thoughts, depression and drug and alcohol usage.",
        siteDomain: "kidshelpline.com.au",
        siteUrl: "https://kidshelpline.com.au/"
    },
    {
        id: 4,
        text: "Beyond Blue",
        Detail: "An Australian mental health and wellbeing support organisation. They provide support programs to address issues related to depression, suicide, anxiety disorders and other related mental illnesses.",
        siteDomain: "beyondblue.org.au",
        siteUrl: "https://www.beyondblue.org.au/"
    },
    {
        id: 5,
        text: "Lifeline",
        Detail: "Lifeline provides free, 24-hour telephone crisis support service in Australia. Volunteer crisis supporters provide suicide prevention services, mental health support and emotional assistance, not only via telephone but face-to-face and online.",
        siteDomain: "lifeline.org.au",
        siteUrl: "https://www.lifeline.org.au/"
    },
    {
        id: 6,
        text: "Suicide Call Back Service",
        Detail: "Suicide Call Back Service is a national 24/7 telehealth provider that offers free professional phone and online counselling for people living in Australia. You do not require a medical referral to initiate contact. This means you can access free professional counselling anywhere, at a time that is convenient to you.",
        siteDomain: "suicidecallbackservice.org.au",
        siteUrl: "suicidecallbackservice.org.au"
    },
    {
        id: 7,
        text: "Counselling Online",
        Detail: "ReachOut.com is an internet service for young people that provides information, support and resources about mental health issues and enable them to develop resilience, increase coping skills, and facilitate help-seeking behaviour.",
        siteDomain: "au.reachout.com",
        siteUrl: "https://au.reachout.com/"
    },
    {
        id: 8,
        text: "Headspace",
        Detail: "Headspace delivers support to young people aged from 12 to 25 years to reduce the impact of depression, anxiety, stress, alcohol and drug use, and to improve relationship issues associated with sexuality, sexual health, families, and bullying.",
        siteDomain: "headspace.org.au",
        siteUrl: "https://headspace.org.au/"
    },
    {
        id: 9,
        text: "Head to health",
        Detail: "Head to Health can help you find digital mental health services from some of Australia’s most trusted mental health organisations. Provided by the Australian Department of Health, Head to Health brings together apps, online programs, online forums, and phone services, as well as a range of digital information resources.",
        siteDomain: "headtohealth.gov.au",
        siteUrl: "https://www.headtohealth.gov.au/"
    },
    {
        id: 10,
        text: "ESafety",
        Detail: "Helps to promote safer, more positive online experiences, including valuable information on cyberbullying.",
        siteDomain: "esafety.gov.au",
        siteUrl: "https://www.esafety.gov.au/"
    },
    {
        id: 11,
        text: "Butterfly Foundation",
        Detail: "Butterfly Foundation is a national charity for Australians impacted by eating disorders and body image issues, and for the families, friends and communities who support them.",
        siteDomain: "butterfly.org.au",
        siteUrl: "https://butterfly.org.au/"
    },
    {
        id: 12,
        text: "Relationships Australia",
        Detail: "Relationships Australia is a provider of relationship support services for individuals, families and communities. We aim to support all people in Australia to achieve positive and respectful relationships. We are a community-based, not-for-profit Australian organisation with no religious affiliations.",
        siteDomain: "relationships.org.au",
        siteUrl: "https://www.relationships.org.au/"
    },
    {
        id: 13,
        text: "Australian Human Rights Commission",
        Detail: "Provides an education section on human rights for students, as well as information on cyberbullying.",
        siteDomain: "humanrights.gov.au",
        siteUrl: "https://humanrights.gov.au/"
    },

]

export { HelpLinedata, OnlineResourcesdata };
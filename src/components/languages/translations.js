import { languagesEnum } from "./context";

// Translations for the website
export const translations = {
  [languagesEnum.ENGLISH]: {
    nav: {
      home: "Home",
      about: "About Us",
      joinUs: "Join Us",
      contactUs: "Contact Us",
      aboutItems: {
        whoWeAre: "Who We Are",
        ourTeam: "Our Team",
        ourBeliefs: "Our Beliefs",
      },
    },

    home: {
      heroTitle: "Welcome",
      aboutServicesTitle: "About Our Services",
      aboutServicesBody:
        "John Park actually has some really nice sermons when you take into consideration that he is a fish that eats blankets when carrots get too expires to use for hunting purposes.",
    },

    whoWeAre: {
      whoCumberland:
        "Korean Cumberland Presbyterian Church is a faith community founded on a heartfelt vision for authentic worship and a living church. Our journey began on March 1, 2009, as a Korean mission of First Cumberland Presbyterian Church located at 4216 S. Charleston Ave. With God’s guidance, we became an independent congregation on October 4, 2015, holding our organization service under the leadership of the Missouri Presbytery, and have continued to grow in faith and ministry ever since.",
      whatCumberland:
        "We are proudly affiliated with the Cumberland Presbyterian Church and its Eastern Korean Presbytery, a denomination with deep historical roots dating back to February 4, 1810, in Dickson, Tennessee. Founded by Rev. Finis Ewing, Rev. Samuel King, and Rev. Samuel McAdow, the Cumberland Presbyterian Church emerged from a passion for revival, discipleship, and accessible theological education. Today, the denomination’s headquarters and seminary are located in Memphis, Tennessee.",
      whyCumberland:
        "The name “Cumberland” reflects the region along the border of Tennessee and Kentucky where the denomination first took shape—much like the Ozark region—symbolizing our heritage of faith, renewal, and mission.",
      giveCumberland:
        "In preparation for our independence, the congregation prayerfully affirmed the name “Korean Cumberland Presbyterian Church” at a special congregational meeting on September 21, 2014. Since then, we have continued to live out our calling as a Christ-centered community, committed to worship, fellowship, service, and the sharing of God’s grace.",
    },

    ourTeam: {
      title: "Our Team",
      subtitle: "Meet the leaders and staff who serve our church community.",
      members: [
        { role: "Senior Pastor", name: "Rev. Sanghoon Park" },
        { role: "Active Elder", name: "Elder Kyunghwan Park" },
        { role: "Elder", name: "Elder Bin Quan" },
        { role: "Education Pastor", name: "Rev. Scott Collins" },
        { role: "Education Director", name: "Skyler Smith" },
        { role: "Staff", name: "Jenifer Kim" },
        { role: "Staff", name: "Mijung Kim" },
      ],
    },

    ourBeliefs: {
      title: "Our Beliefs",
      statements: {
        "The Bible": "We believe the Holy Bible is the inspired Word of God, the only infallible rule for faith and practice.",
        "The Trinity": "We believe there is one God, eternally existent in three persons: Father, Son, and Holy Spirit.",
        "Jesus Christ": "We believe Jesus Christ is the Son of God. We affirm his virgin birth, sinless life, miracles, sacrificial death, bodily resurrection, ascension to the right hand of the Father, and his personal return in power and glory.",
        "Salvation": "We believe everyone has sinned, lost communion with God, and is under condemnation. Salvation is the free gift of God to everyone who believes in the Lord Jesus Christ, who paid for our sins on the cross. Those who believe are eternally secure in Him.",
        "The Church": "We believe the church is the body of Christ and consists of everyone who has become children of God by faith. Jesus Christ is the head of the Church. Individual congregations are to be governed by elders, who serve as under shepherds.",
        "The Sacraments": "We believe there are two sacraments ordained by Christ: Baptism and the Lord's Supper.",
        "Marriage and The Family": "We believe marriage is a sacred institution ordained for the benefit of the human race. It is to be between one man and one woman, and should not be dissolved for any cause not justified by the teaching of the Word of God.",
        "The Lord's Day": "We believe the first day of the week is the Lord’s Day, the Christian Sabbath, which is to be kept holy unto the Lord. It is a day of rest and worship of the triune God, and commemorates the resurrection of Christ.",
        "Things to Come": "We believe at the Last Day, Jesus Christ will come to judge the living and the dead. There will be a resurrection of the just and the unjust. The righteous will enter into eternal blessedness and the wicked into eternal condemnation."
      }
    },
    joinUs: {
      onlineTitle: 'Join Us Online',
      inPersonTitle: 'Join Us In Person',
      onlineSubtitle: 'Live streams begin at 12:00PM CST on Sundays.',
      inPersonSubtitle: 'Our Sunday service starts at 12:00 PM, followed by a shared lunch and time to connect!',
      facebook: 'Facebook',
      youtube: 'Youtube'
    },
    contactPage: {
      title: 'Contact Us',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
    },
  },

  [languagesEnum.KOREAN]: {
    nav: {
      home: "홈",
      about: "교회 소개",
      joinUs: "참여하기",
      contactUs: "연락하기",
      aboutItems: {
        whoWeAre: "교회 소개",
        ourTeam: "팀 소개",
        ourBeliefs: "우리의 신념",
      },
    },

    home: {
      heroTitle: "환영합니다",
      aboutServicesTitle: "서비스 소개",
      aboutServicesBody:
        "존 파크는 실제로 당신이 종교적 이미지를 떠올릴 때 고려해보면 매우 멋진 설교를 합니다. 그는 당신이 사냥을 위해 사용할 수 없게 된 당근을 먹는 물고기라는 점을 고려해보면 말이죠.",
    },

    whoWeAre: {
      whoCumberland:
        "컴벌랜드 한인장로교회는 참다운 예배와 교회를 꿈꾸며, 2009년 3월1일, 4216 S. Charleston Ave.에 위치한 First Cumberland Presbyterian Church의 한인선교부로 개척을 시작하였고, 2015년 10월4일, 당시 본교회가 소속되어 있던 미주리노회의 주관으로, 미국교회로부터 독립, 설립예배를 드림으로 오늘에 이르고 있습니다.",
      whatCumberland:
        "저희 교회는 “컴벌랜드장로교단”과 동교단의 “동부한인노회”에 소속되어 있습니다. 컴벌랜드 장로교단은 Finis Ewing 목사, Samuel King 목사, Samuel McAdow 목사에 의해 1810년 2월4일, Dickson TN에서부터 시작되어 큰 성장이 있었으나, 1906년 PCUSA 교단과의 통합으로 인해, 많은 교회와 기관이 빠져나감으로 인해, 현재는 군소교단으로 남아있으며, 교단 본부와 신학대학원은 현재, Memphis TN에 위치해 있습니다.",
      whyCumberland:
        "“컴벌랜드”라는 명칭은 테네시주와 켄터키주의 경계선에 위치한 지역의 이름(Ozark과 유사)으로, 본교단의 초기 형성이 그 지역을 중심으로 이루어졌기 때문에 붙여졌습니다.",
      giveCumberland:
        "교회의 이름은, 2014년 9월21일, 교회의 독립을 앞두고 임시공동의회를 통해, “컴벌랜드 한인장로교회”로 결정, 지금까지 사용하고 있습니다.",
    },

    ourTeam: {
      title: "우리 팀",
      subtitle: "본 교회를 섬기는 교역자 및 직분자들을 소개합니다.",
      members: [
        { role: "담임목사", name: "박상훈 목사" },
        { role: "시무장로", name: "박경환 장로" },
        { role: "장로", name: "권빈 장로" },
        { role: "교육목사", name: "스캇 콜린스 목사" },
        { role: "교육간사", name: "스카일러 스미스" },
        { role: "스태프", name: "제니퍼 김" },
        { role: "스태프", name: "김미정" },
      ],
    },

    ourBeliefs: {
      title: "우리의 신념",
      statements: {
        "성경": "우리는 성경이 하나님의 영감으로 기록된 말씀이며, 믿음과 행위에 대한 유일하고 오류 없는 규범이라고 믿습니다.",
        "삼위일체": "우리는 한 분 하나님이 영원히 세 위격, 즉 성부, 성자, 성령으로 존재하신다고 믿습니다.",
        "예수 그리스도": "우리는 예수 그리스도가 하나님의 아들이심을 믿습니다. 우리는 그의 동정녀 탄생, 죄 없는 삶, 기적, 희생적인 죽음, 육체적 부활, 성부 우편으로의 승천, 그리고 권능과 영광 가운데 다시 오심을 믿습니다.",
        "구원": "우리는 모든 사람이 죄를 지어 하나님과의 교제를 잃고 정죄 아래 있다고 믿습니다. 구원은 주 예수 그리스도를 믿는 모든 사람에게 주시는 하나님의 값없는 선물이며, 예수님은 십자가에서 우리의 죄를 대속하셨습니다. 믿는 자들은 그 안에서 영원히 안전합니다.",
        "교회": "우리는 교회가 그리스도의 몸이며, 믿음으로 하나님의 자녀가 된 모든 사람들로 구성된다고 믿습니다. 예수 그리스도는 교회의 머리이십니다. 개별 교회는 목자로서 섬기는 장로들에 의해 다스려져야 합니다.",
        "성례": "우리는 그리스도께서 제정하신 두 가지 성례, 즉 세례와 성찬이 있다고 믿습니다.",
        "결혼과 가정": "우리는 결혼이 인류의 유익을 위해 제정된 신성한 제도라고 믿습니다. 결혼은 한 남자와 한 여자 사이에서 이루어져야 하며, 하나님의 말씀의 가르침에 의해 정당화되지 않는 어떤 이유로도 해소되어서는 안 됩니다.",
        "주일": "우리는 한 주의 첫째 날이 주님의 날, 즉 기독교 안식일이며, 주님께 거룩하게 지켜야 할 날이라고 믿습니다. 주일은 삼위일체 하나님을 예배하고 그리스도의 부활을 기념하는 안식과 예배의 날입니다.",
        "종말": "우리는 마지막 날에 예수 그리스도께서 산 자와 죽은 자를 심판하러 오실 것이라고 믿습니다. 의인과 악인의 부활이 있을 것입니다. 의인은 영원한 복락에 들어가고 악인은 영원한 정죄를 받을 것입니다."
      }
    },
    joinUs: {
      onlineTitle: '온라인으로 참여하세요',
      inPersonTitle: '직접 참여하세요',
      onlineSubtitle: '라이브 스트리밍은 매주 일요일 오후 12시(중부 표준시)에 시작됩니다.',
      inPersonSubtitle: '저희 주일 예배는 오후 12시에 시작하며, 예배 후에는 함께 점심 식사를 나누고 교제하는 시간을 갖습니다!',
      facebook: '페이스북',
      youtube: '유튜브'
    },
    contactPage: {
      title: '문의하기',
      address: '직접 참여하세요',
      phone: '핸드폰',
      email: '이메일',
    },
  },
};

// Get language stored in localstorage
export const getLanguage = () => {
  return (typeof window !== 'undefined' && window.localStorage.getItem('lang')) ?? languagesEnum.ENGLISH;
}

// Set language in localstorage
export const setLanguage = (newLang) => {
  try {
    window.localStorage.setItem('lang', newLang);
  } finally {
    window.location.reload();
  }
}

// Retrieves the language and finds the translation for the specified path.
export const translate = (path) => {
  const lang = getLanguage();

  const _resolve = (obj) => {
    return path.split('.').reduce((acc, key) => acc?.[key], obj);
  }

  const textValue =
    _resolve(translations[lang]) ??
    _resolve(translations.en) ??
    'Text Missing'

  return textValue;
}

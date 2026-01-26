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
        ourBeliefs: "Our Vision",
      },
    },

    home: {
      heroTitle: "Something about the Church",
      heroSubtitle:
        "I still dont know what to fill this space with if we even need it at all?",
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

    ourBeliefs: {},
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
        ourBeliefs: "교회 믿음",
      },
    },

    home: {
      heroTitle: "교회에 관한 이야기",
      heroSubtitle:
        "아직 이 공간에 어떤 내용을 담아야 할지, 혹은 이 공간이 실제로 필요한지에 대해서도 명확하지 않습니다.",
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

    ourBeliefs: {},
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

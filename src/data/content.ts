import { MenuItem, PurposeItem, BeliefItem, GalleryItem, OrganizationGroup } from '../types';

export const YUSHAN_HERO_IMAGE = '/yushan_sunset.jpg';

export const SITE_INFO = {
  title: '台灣玉山創見會',
  subtitle: '',
  domain: 'yushantaiwan.weebly.com',
  originalUrl: 'https://yushantaiwan.weebly.com/26412263712344726088332872044924565.html',
  facebookUrl: 'https://www.facebook.com/TwYushan/',
  email: 'yushan.pp.tw@gmail.com',
  youtubeUrl: 'https://www.youtube.com/channel/UCIO-Fi_-ApIBHqKoePTsUwQ',
  founder: '周朝陽 創會長',
  foundingYear: '2015年',
  slogan: '認同台灣 ‧ 環保生態 ‧ 文創商機 ‧ 文化推廣',
  description: '以玉山高瞻遠矚與環保生態精神，凝聚公民力量，推動台灣本土文化、綠色永續與文創商機之藍海發展。',
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'home',
    title: '首頁',
    urlPath: '/',
    iconName: 'Home',
  },
  {
    id: 'about',
    title: '本會簡介',
    urlPath: '/26412263713177720171.html',
    iconName: 'BookOpen',
  },
  {
    id: 'missions',
    title: '本會展望',
    urlPath: '/26412263712021921209332872363726395.html',
    iconName: 'Compass',
  },
  {
    id: 'beliefs',
    title: '創會宗旨',
    urlPath: '/26412263712344726088332872044924565.html',
    iconName: 'HeartHandshake',
  },
  {
    id: 'flag',
    title: '本會會旗',
    urlPath: '/26412263712637126071.html',
    iconName: 'Flag',
  },
  {
    id: 'organization',
    title: '本會組織',
    urlPath: '/26412263713206832340.html',
    iconName: 'Users',
  },
];

// Helper to map Weebly URL path to PageId
export function getPageIdFromPath(path: string): MenuItem['id'] {
  const cleanPath = path.trim().toLowerCase();
  if (!cleanPath || cleanPath === '/' || cleanPath.endsWith('/index.html')) {
    return 'home';
  }
  const item = MENU_ITEMS.find(
    (m) =>
      cleanPath.includes(m.urlPath.toLowerCase()) ||
      cleanPath.includes(m.id)
  );
  return item ? item.id : 'home';
}

export const PURPOSES: PurposeItem[] = [
  {
    number: 1,
    title: '認同台灣',
    description: '深植本土情感，以台灣精神為立會基石，尊重多元文化並落實土地關懷。',
    icon: 'Landmark',
    tags: ['本土優先', '公民力量', '土地認同'],
  },
  {
    number: 2,
    title: '環保生態',
    description: '守護綠色地球與山林資源，推廣永續生態工法與環境保護生活理念。',
    icon: 'Trees',
    tags: ['永續發展', '綠色地球', '生態保護'],
  },
  {
    number: 3,
    title: '文創商機',
    description: '拓展藍海文創產業，結合產業創新與在地資源，為台灣創造全新經濟契機。',
    icon: 'Sparkles',
    tags: ['藍海產業', '文化創新', '經濟合作'],
  },
  {
    number: 4,
    title: '文化藝術推廣與維護',
    description: '傳承並珍視台灣傳統與當代藝術，舉辦多元文化講座、演出與展示活動。',
    icon: 'Palette',
    tags: ['藝術推廣', '資產維護', '人文薈萃'],
  },
];

export const BELIEFS: BeliefItem[] = [
  {
    numeral: '一',
    title: '台灣是本會的認同',
    subtitle: '本土優先 ‧ 根植土地',
    detail: '以台灣土地與人民的福祉為最大依歸，共同塑造充滿凝聚力的土地情感。',
    icon: 'MapPin',
  },
  {
    numeral: '二',
    title: '環保是你我的使命',
    subtitle: '綠色永續 ‧ 生態防護',
    detail: '留給下一代淨潔無瑕的綠色大地，人人皆為環保與山林守護隊員。',
    icon: 'Leaf',
  },
  {
    numeral: '三',
    title: '創富是大家的願景',
    subtitle: '共享經濟 ‧ 藍海創新',
    detail: '突破產業紅海競爭，透過創新智慧與文化科技攜手打造全民共享榮景。',
    icon: 'TrendingUp',
  },
  {
    numeral: '四',
    title: '誠信是我們的圭臬',
    subtitle: '真誠正直 ‧ 言行合一',
    detail: '以真實誠懇態度相待，建立深厚信賴關係，做人做事皆問心無愧。',
    icon: 'ShieldCheck',
  },
  {
    numeral: '五',
    title: '互助是彼此的真情',
    subtitle: '同心協力 ‧ 溫暖同行',
    detail: '發揮團隊情誼與社會服務精神，彼此扶持、互助分享，共創美好溫馨社會。',
    icon: 'Handshake',
  },
  {
    numeral: '六',
    title: '感恩是共同的善念',
    subtitle: '懷恩報本 ‧ 善念傳承',
    detail: '心懷感念、珍惜萬物，將善意與關懷散播至台灣各角落。',
    icon: 'Heart',
  },
];

export const TASKS = [
  {
    id: 1,
    title: '認同台灣',
    summary: '深耕在地文化，凝聚人民共識與土地情感',
    detail: '積極推廣台灣在地歷史、文化與社會關懷，串聯各界力量深植土地權益與公民意識。',
  },
  {
    id: 2,
    title: '環保生態',
    summary: '踐行綠色永續，守護台灣好山好水',
    detail: '結合山林委員會與在地社團，舉辦淨山、生態導覽及減碳講座，落實綠色生活。',
  },
  {
    id: 3,
    title: '文創商機',
    summary: '開拓藍海市場，提升台灣文化附加價值',
    detail: '輔導本土微型企業與文創團隊，打造跨領域產業合作與資源共享平台。',
  },
  {
    id: 4,
    title: '文化藝術推廣與維護',
    summary: '藝術深耕社區，保存與創新並重',
    detail: '定期舉辦茶道展演、羽球歌唱文娛賽事及傳統藝術推廣，豐富民眾心靈生活。',
  },
];

export const OUTLOOK_TEXT =
  '玉山是我們的光榮，以玉山精神開創台灣的前程及世界的和平。凝聚公民力量，超越黨派對立，以高瞻遠矚的國際視野，昂首邁向新時代。';

export const ABOUT_STORY = {
  title: '創會緣起與歷史脈絡',
  foundingYear: '2015年',
  founderName: '周朝陽 創會長',
  mainParagraphs: [
    '台灣玉山創見會於 2015 年由創會長周朝陽先生發起成立。取名「玉山創見會」，緣起於玉山為東亞第一高峰，亦是台灣人心目中的聖山與驕傲，代表著高瞻遠矚與環保生態的崇高意義，更彰顯台灣生生不息的生命力量。因此，我們創立了「台灣玉山創見會」公民團體，秉持三大核心原則：認同台灣；環保生態；共創商機。',
  ],
  corePillars: [
    { title: '認同台灣 ‧ 本土優先', desc: '扎根土地，團結公民力量，關懷世代福祉。' },
    { title: '保護生態 ‧ 綠色地球', desc: '珍惜自然資源，倡導減碳保護聖山精神。' },
    { title: '共創商機 ‧ 互助合作', desc: '開發文創藍海，輔導經濟產業共同創富。' },
  ],
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: '台灣玉山創見會成立大會盛況',
    imageUrl: 'https://yushantaiwan.weebly.com/uploads/1/2/6/1/126184605/4007ddad-70a9-487d-8c17-567d096097cb-l0-001_orig.jpg',
    description: '創會長周朝陽與各界嘉賓齊聚一堂，見證台灣玉山創見會成立重要時刻。',
    category: '協會活動',
  },
  {
    id: 'g2',
    title: '分會成立與會員交流紀念',
    imageUrl: 'https://yushantaiwan.weebly.com/uploads/1/2/6/1/126184605/published/timeline-20181120-115206.jpg?1563565425',
    description: '會員熱烈互動，展現真情互助與同心協力的協會凝聚力。',
    category: '會務交流',
  },
  {
    id: 'g3',
    title: '山林巡禮與生態保育研討',
    imageUrl: 'https://yushantaiwan.weebly.com/uploads/1/2/6/1/126184605/s-637ff2ad38aa07e533c5775e1637a973-18100314_orig.jpg',
    description: '親近聖山、體會玉山精神，倡導生態環保教育。',
    category: '環保生態',
  },
  {
    id: 'g4',
    title: '文化藝術推廣與研習茶會',
    imageUrl: 'https://yushantaiwan.weebly.com/uploads/1/2/6/1/126184605/timeline-20190227-212556_orig.jpg',
    description: '茶道委員會舉辦歲月靜好品茗交流，傳承文化藝術之美。',
    category: '文化推廣',
  },
  {
    id: 'g5',
    title: '創富委員會產業對接交流',
    imageUrl: 'https://yushantaiwan.weebly.com/uploads/1/2/6/1/126184605/timeline-20190224-104602_orig.jpg',
    description: '研討藍海文創商機，輔導企業跨界合作與共同發展。',
    category: '商機交流',
  },
  {
    id: 'g6',
    title: '青年會與休閒委員會活動記錄',
    imageUrl: 'https://yushantaiwan.weebly.com/uploads/1/2/6/1/126184605/timeline-20180821-004023_orig.jpg',
    description: '青年新血注入，帶領世代交替與活絡創新思維。',
    category: '青年活動',
  },
];

export const ORGANIZATION_DATA: OrganizationGroup[] = [
  {
    region: '一、總會',
    description: '掌理全台會務統籌、決策與跨界業務對接',
    committees: [
      { id: 'c1', name: '茶道委員會', icon: 'Coffee', description: '推廣台灣特色茶文化、生活茶藝與美學交流' },
      { id: 'c2', name: '羽球委員會', icon: 'Activity', description: '提倡全民健康體育、舉辦會友羽球聯誼賽' },
      { id: 'c3', name: '高爾夫委員會', icon: 'Target', description: '高爾夫球聯誼交流，倡導戶外運動與紳士精神' },
      { id: 'c4', name: '歌唱委員會', icon: 'Music', description: '音樂歡唱、藝術采風與合唱團表演培訓' },
      { id: 'c5', name: '山林委員會', icon: 'Mountain', description: '登高巡禮、淨山保育活動與山林知識推廣' },
      { id: 'c6', name: '休閒委員會', icon: 'Smile', description: '規劃會友樂活輕旅行、生態體驗與聯誼活動' },
      { id: 'c7', name: '太鼓隊', icon: 'Drum', description: '太鼓打擊樂團訓練，展現磅礡氣勢與團隊默契' },
      { id: 'c8', name: '青年會', icon: 'Sparkle', description: '培育新一代青年領袖，推動創新文創與社會參與' },
      { id: 'c9', name: '創富委員會', icon: 'Briefcase', description: '產業資源對接、企業輔導與藍海經濟文創商機開發' },
    ],
  },
  {
    region: '二、桃園分會',
    description: '深耕大桃園地區公民服務與文創生態推廣',
  },
  {
    region: '三、高雄分會',
    description: '串聯大高雄南部會友，辦理地區座談與文化活動',
  },
];

export const FLAG_INFO = {
  imageUrl: 'https://yushantaiwan.weebly.com/uploads/1/2/6/1/126184605/published/2108921898.png?1563585734',
  title: '台灣玉山創見會 官方會旗',
  meaning: [
    {
      title: '金黃旗面與紅字標題',
      detail: '金黃底色象徵大地豐盛、光明創富與崇高理想；底部紅字「台灣玉山創見會」展現赤誠熱血與堅定認同。',
    },
    {
      title: '藍天圓徽與玉山聖山',
      detail: '藍色圓徽代表天高海闊與包容精神，中央綠色三峰象徵聖山玉山高聳挺拔、生態永續與高瞻遠矚。',
    },
    {
      title: '旭日初升與金色金舟',
      detail: '山頂初升旭日照耀希望光明；下方金色月舟（微笑金舟）承載同舟共濟、互助合作與歡喜感恩之情。',
    },
  ],
};

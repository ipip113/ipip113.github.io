export const UNIVERSE_INFO = {
  background: [
    "명나라 중기 즈음. 황명(皇命)이 천하를 호령한다 하나, 강호의 무림인들에게 그 법은 닿지 않았다.",
    "칼이 곧 법이요, 주먹이 곧 진리인 무인들만의 독자적 사회가 중원의 이면에 깊이 뿌리내리고 있었다.",
    "구파일방의 낡은 위선과 마교의 핏빛 패도, 그리고 오대세가의 오만함이 맞부딪히며 무림은 매일같이 피구름이 걷히지 않았다.",
    "특히 피바람의 중심이 된 현 강호는 과거 어느 때보다도 치열하고 잔혹한 난세. 수많은 문파가 뜨고 지는 가운데, 어둠 속에 잠든 군상들이 천하의 주종을 묻고자 움직이기 시작한다."
  ],
  currency: "금자 1냥 = 은자 10냥 = 동전 1000문. (객잔 하룻밤 약 50문)",
  luoyang: "중원의 심장. 온갖 문파와 상단이 몰려드는 곳. '태백루(객잔)' 존재.",
  wulinAlliance: "하남성 정주. 정파 연합 본부. 현재 권력 다툼으로 썩어감.",
  levels: [
    "삼류",
    "이류",
    "일류",
    "절정",
    "초절정",
    "화경",
    "현경"
  ],
  subLevels: ["초입", "완숙", "극의"]
};

export const FACTIONS = [
  {
    name: "구파 (九派)",
    description: "무림맹의 주축을 이루는 천하 정종의 아홉 문파.",
    members: [
      { name: "소림사", desc: "[하남성 숭산] 불교. 무림의 태두(泰斗). 72종의 무예(칠십이절기)를 지니며 '역근경'이 비전. 장법과 곤술에 능함." },
      { name: "무당파", desc: "[호북성 무당산] 도교. 태극의 이치로 부드러움으로 강함을 제압. 태극혜검과 태극권이 주력." },
      { name: "화산파", desc: "[섬서성 화산] 도교. 쾌와 환을 중시. 화려하게 피어나는 '매화검법'과 이십사수매화검이 유명." },
      { name: "종남파", desc: "[섬서성 종남산] 도교. 화산파와 인접해 있어 예로부터 검술(천하삼십육검)로 라이벌 관계를 형성." },
      { name: "아미파", desc: "[사천성 아미산] 불교. 비구니(여승)와 속가 여제자 위주의 문파. 아미검법과 장법 등 매서운 무공 구사." },
      { name: "곤륜파", desc: "[청해성 곤륜산] 도교. 중원 외곽에 위치해 신비주의적 성향이 강함. '운룡대팔식' 등 경공/검술이 뛰어남." },
      { name: "점창파", desc: "[운남성 점창산] 도교. 험준한 산세에 기원하여 변환무쌍하고 찌르기에 특화된 '사일검법' 등의 쾌검." },
      { name: "해남파", desc: "[광동성 해남 섬] 도교. 중원 최남단 검파. 거친 바다의 파도와 폭풍을 형상화한 '남해삼십육검' 구사." },
      { name: "청성파", desc: "[사천성 청성산] 도교. 청음검법과 무영신검을 다루며, 같은 지역의 사천당가와 알력 다툼이 심함." }
    ]
  },
  {
    name: "일방 (一幇)",
    description: "천하의 거지들이 모인 거대한 정보 및 무력 집단.",
    members: [
      { name: "개방", desc: "[중원 전역] 타구봉법과 항룡십팔장이 비전. 제일가는 정보망을 갖춤." }
    ]
  },
  {
    name: "오대세가 (五大世家)",
    description: "가문의 핏줄로 무공을 이어가는 강력한 5대 혈족.",
    members: [
      { name: "남궁세가", desc: "[안휘성 합비] 오대세가의 수장 격. 천하제일검가로 불리며, 웅장하고 패도적인 '제왕검형(帝王劍形)'과 창천검기를 다룸." },
      { name: "사천당가", desc: "[사천성 성도] 독과 암기의 명가. 철저한 폐쇄주의. \"당가의 은원은 백 년을 간다\"는 철칙을 가짐. 만독불침의 경지를 추구." },
      { name: "하북팽가", desc: "[하북성 보정] 도의 명가. 무겁고 파괴적인 '오호단문도'를 구사하며, 기골이 장대하고 호탕한 인물들이 많음." },
      { name: "제갈세가", desc: "[호북성 융중] 지략(두뇌)의 명가. 기관진법, 기문둔갑에 능통하며 무림맹의 책사 및 중재자 역할을 도맡음." },
      { name: "모용세가", desc: "[강남 소주] 연자오에 위치. 강남의 막대한 부를 바탕으로 천하의 무공을 수집." }
    ]
  },
  {
    name: "세외무림 (世外武林)",
    description: "중원의 상식을 벗어난 척박한 환경에서 발전한 변방 세력.",
    members: [
      { name: "북해빙궁", desc: "[북해/요동 이북] 극한의 추위 속 지배자들. 빙백신공 구사." },
      { name: "남만야수궁", desc: "[운남 남부 밀림] 맹수와 독충이 우글거리는 밀림. 야수적 외공과 주술." }
    ]
  },
  {
    name: "사파: 흑도 (邪派)",
    description: "이익과 힘을 최우선으로 삼는 음지의 무인들.",
    members: [
      { name: "녹림", desc: "산적과 도적들의 연합체. 전국 명산에 일흔두 개의 수채(녹림칠십이채)가 있음." },
      { name: "장강수로채", desc: "물길을 장악한 수적 집단." },
      { name: "하오문", desc: "음지의 인간들이 모인 집단. 개방과 쌍벽을 이루는 정보 단체." },
      { name: "살막", desc: "돈을 받고 목숨을 거두는 전문 암살자 집단." }
    ]
  },
  {
    name: "마교: 천마신교 (魔敎)",
    description: "신강 십만대산에 위치. 오직 힘과 천마만을 숭상함. 철저한 약육강식.",
    members: [
       { name: "특징", desc: "백 년 전 중원을 침공, 은거 중이나 최근 태동의 기미가 보임." },
       { name: "구조", desc: "천마 > 소천마 > 좌(우)호법 > 장로 > 단주 > 대주 > 교도" }
    ]
  },
  {
    name: "황실 (皇室)",
    description: "황권 지상주의. 무림과 불가침 조약을 맺고 있음.",
    members: [
      { name: "세력", desc: "동창(내시들의 첩보 기관)과 금의위(황제 직속 무력) 존재." }
    ]
  }
];

export interface CharacterItem {
  id: string;
  name: string;
  group: string;
  faction: string;
  appearance: string;
  role: string;
  gender: string;
  level: string;
  personality: string;
  speech: string;
  trait: string;
}

export const CHARACTERS: CharacterItem[] = [
  // 구파일방
  { id: "연소휘", name: "연소휘", group: "구파일방", faction: "소림사", appearance: "흑발+금안", role: "속가1대제자", gender: "女", level: "절정•완", personality: "겉으론엄숙함, 실제론다혈질, 세속의유혹에약함", speech: '평소엔 "아미타불"을 읊는 정중한 합쇼체, 분노하면 거친 본성이 튀어나옴', trait: "" },
  { id: "진소운", name: "진소운", group: "구파일방", faction: "무당파", appearance: "흑발+흑안", role: "1대제자", gender: "女", level: "절정•완", personality: "까칠함, 신경질적, 약한 츤데레", speech: "가시돋친 말투", trait: "태극혜검의 후계자." },
  { id: "백청연", name: "백청연", group: "구파일방", faction: "화산파", appearance: "흑발+핑크색눈", role: "대사저(1대제자)", gender: "女", level: "절정•완", personality: "원칙주의, 금욕적, 외유내강", speech: "흐트러짐 없는 단정하고 기품있는 평어", trait: "화산파 백 년 이래 최고의 기재." },
  { id: "설아린", name: "설아린", group: "구파일방", faction: "종남파", appearance: "흑발+흰색눈", role: "1대제자", gender: "女", level: "절정•완", personality: "냉정함, 자부심, 지기싫어함", speech: "간결하고 날카로운 평어", trait: "화산파의 백청연과 라이벌 관계." },
  { id: "주연화", name: "주연화", group: "구파일방", faction: "아미파", appearance: "흑발+자안", role: "3대제자", gender: "女", level: "일류•극", personality: "여우, 교활한, 순수한척", speech: "낭랑하고 명량한 말투, 계산적", trait: "아미파의 신동이라 불리는 천재." },
  { id: "계설아", name: "계설아", group: "구파일방", faction: "곤륜파", appearance: "은발+청안", role: "2대제자", gender: "女", level: "절정•초", personality: "신비로움, 과묵함, 고고함", speech: "안개처럼 몽환적이고 낮은 목소리", trait: "운룡대팔식의 일인자." },
  { id: "은비주", name: "은비주", group: "구파일방", faction: "점창파", appearance: "흑발+호박색눈", role: "1대제자", gender: "女", level: "절정•초", personality: "호전적, 쾌활함, 메스가키", speech: "놀리는듯한 공격적인 말투", trait: "-" },
  { id: "해비설", name: "해비설", group: "구파일방", faction: "해남파", appearance: "흑발+청안", role: "2대제자", gender: "女", level: "일류•완", personality: "자유분방, 순수한, 명량한", speech: "파도처럼 시원시원한 말투", trait: "남해삼십육검의 계승자." },
  { id: "하미주", name: "하미주", group: "구파일방", faction: "청성파", appearance: "흑발+녹안", role: "2대제자", gender: "女", level: "일류•완", personality: "영리함, 장난기, 교활함", speech: "상대를 살살 약올리는 듯한 말투", trait: "무영신검을 사용. 사천당가와 견원지간." },
  { id: "홍소월", name: "홍소월", group: "구파일방", faction: "개방", appearance: "갈색머리+갈색눈", role: "2대제자", gender: "女", level: "절정•초", personality: "나태함, 능구렁이, 시니컬함", speech: "하품섞인 늘어지는 말투, 가끔 정곡을 찌르는 날카로운 어투", trait: "게으름뱅이로 보이나 사실 개방 제일의 정보통이자 숨겨진 천재." },
  
  // 오대세가
  { id: "남궁연", name: "남궁연", group: "오대세가", faction: "남궁세가", appearance: "흑발+청안", role: "소가주", gender: "女", level: "절정•극", personality: "오만함, 패도적, 자신감", speech: "당당하고 위압적인 평어", trait: "제왕검형의 후계자. 실패를 모르는 온실 속의 여패왕으로 가문의 명예를 맹신함." },
  { id: "당소소", name: "당소소", group: "오대세가", faction: "사천당가", appearance: "갈색머리+녹안", role: "가주의막내딸", gender: "女", level: "일류•극", personality: "잔인함, 요염함, 집착, 유혹적", speech: "나긋나긋하며 속을 살살 긁는말", trait: "맹독을 다루며 아름다운 외모 뒤에 뱀 같은 독기를 품음. 암기보다 독술 파." },
  { id: "팽여란", name: "팽여란", group: "오대세가", faction: "하북팽가", appearance: "갈색머리+적안", role: "가주의장녀", gender: "女", level: "절정•완", personality: "호탕함, 의리, 단순함", speech: "껄껄웃으며 천지를 울리는 큰목소리", trait: "-" },
  { id: "제갈희", name: "제갈희", group: "오대세가", faction: "제갈세가", appearance: "흑발+자안", role: "무림맹군사의딸", gender: "女", level: "일류•초", personality: "계산적, 냉혈함, 완벽주의", speech: "차분하고 예의바르나 감정이 없는 존댓말", trait: "-" },
  { id: "모용비", name: "모용비", group: "오대세가", faction: "모용세가", appearance: "은발+흰색눈", role: "소가주", gender: "女", level: "절정•완", personality: "허영심, 완벽주의, 도도함", speech: "고상하고 우아한 규수 말투", trait: "-" },
  
  // 무림맹
  { id: "주혜령", name: "주혜령", group: "무림맹", faction: "무림맹", appearance: "흑발+청안", role: "무림맹주", gender: "女", level: "화경•극", personality: "오만함, 권모술수, 유희를 즐김", speech: "기품 넘치지만 상대를 꿰뚫어 보는 듯한 고압적인 규수 말투", trait: "-" },
  
  // 세외무림
  { id: "설연화", name: "설연화", group: "세외무림", faction: "북해빙궁", appearance: "백발+청안", role: "소궁주", gender: "女", level: "절정•초", personality: "극도의차가움, 폐쇄적, 은근한외로움", speech: "감정이 실리지 않은 냉랭한 단답형", trait: "빙백신공의 한기 때문에 타인과의 접촉을 꺼림." },
  { id: "표야란", name: "표야란", group: "세외무림", faction: "남만야수궁", appearance: "구릿빛피부+갈색머리+금안", role: "소궁주", gender: "女", level: "절정•초", personality: "야성적, 직설적, 포악함", speech: "짐승처럼 으르렁거리는 반말", trait: "-" },
  
  // 사파
  { id: "맹호란", name: "맹호란", group: "사파", faction: "녹림", appearance: "흑발+녹안", role: "총채주", gender: "女", level: "초절정•완", personality: "잔혹, 호쾌함, 불신", speech: "거칠고 욕설이 섞인 사자후", trait: "-" },
  { id: "수령", name: "수령", group: "사파", faction: "장강수로채", appearance: "흑발+청안", role: "부채주", gender: "女", level: "초절정•초", personality: "능글맞음, 기회주의, 탐욕", speech: "유혹적이고 여유로운 콧소리 하오체", trait: "-" },
  { id: "설미향", name: "설미향", group: "사파", faction: "하오문", appearance: "흑발+적안", role: "문주", gender: "女", level: "초절정•초", personality: "정체불명, 속을알수없음, 치밀함", speech: "애교 넘치지만 가시가 돋친 말투", trait: "무림의 모든 음지 소문을 통제" },
  { id: "무영", name: "무영", group: "사파", faction: "살막", appearance: "흑발+금안", role: "천살(최고살수)", gender: "女", level: "초절정•극", personality: "무감정, 기계적, 허무주의", speech: "필요한 말 만하는 극도의 단답형", trait: "-" },
  
  // 마교
  { id: "천희령", name: "천희령", group: "마교", faction: "천마신교", appearance: "흑안+적안", role: "교주(천마)", gender: "女", level: "현경•초", personality: "압도적, 오만함, 패도", speech: "세상을 발아래 둔듯한 여군주의 평어", trait: "전쟁 이후 백 년 만에 강림한 절대적인 여제." },
  { id: "설유화", name: "설유화", group: "마교", faction: "천마신교", appearance: "은사로 짠 백포, 안대, 은발", role: "좌호법", gender: "女", level: "초절정•극", personality: "이성적, 결벽증, 비틀린 충성심", speech: "나긋나긋하고 예의 바른 극존칭", trait: "'신교의 머리'. 맹인처럼 보이나 기감으로 세상을 봄." },
  { id: "적하륜", name: "적하륜", group: "마교", faction: "천마신교", appearance: "흑발+금안", role: "우호법", gender: "女", level: "화경•초", personality: "쾌락주의, 교활함, 위선혐오", speech: "관능적이고 나른한말투", trait: "'신교의 칼'. 적이 절망하며 신념을 꺾는 모습을 최고의 유희로 여김." },
  { id: "천소하", name: "천소하", group: "마교", faction: "천마신교", appearance: "흑발+자안", role: "소천마(후계자)", gender: "女", level: "초절정•완", personality: "변덕스러움, 애정결핍, 광기", speech: "어린아이 같은 말투, 본색 드러내면 소름 돋는 무감정", trait: "내면에는 스승의 기대에 미치지 못할까 봐 두려워하는 강박이 숨겨져 있음." },
  { id: "목련비", name: "목련비", group: "마교", faction: "천마신교", appearance: "자색발+자안", role: "대호법", gender: "女", level: "화경•완", personality: "요염함, 가학적, 치밀함", speech: "남성을 홀리는 듯한 나긋나긋하고 몽환적인 톤", trait: "피를 매개로 하는 마공의 대가." },
  
  // 황실
  { id: "위홍련", name: "위홍련", group: "황실", faction: "황실", appearance: "백발+적안", role: "금의위 지휘사", gender: "女", level: "초절정", personality: "철혈, 원칙주의, 은근한 융통성", speech: "군더더기 없이 딱딱하고 위압적인 관료의 존댓말", trait: "-" }
];

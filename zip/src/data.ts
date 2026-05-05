export const universeInfo = {
  background: "명나라 중기 즈음. 황실의 힘이 미치지 않는 무인들만의 독자적 사회.",
  currency: "금자 1냥 = 은자 10냥 = 동전 1000문. (객잔 하룻밤 약 50문).",
  luoyang: "낙양(洛陽) - 중원의 심장. 온갖 문파와 상단이 몰려드는 곳. '태백루(객잔)'의 존재.",
  alliance: "무림맹(武林盟) - 하남성 정주. 정파 연합 본부. 현재 권력 다툼으로 썩어감."
};

export const factions = [
  {
    name: "구파일방",
    desc: "무림맹의 주축을 이루는 10대 세력.",
    sub: [
      { name: "소림사", location: "하남성 숭산", desc: "불교. 무림의 태두(泰斗). 72종의 무예(칠십이절기)를 지니며 '역근경'이 비전. 장법과 곤술에 능함." },
      { name: "무당파", location: "호북성 무당산", desc: "도교. 태극의 이치로 부드러움으로 강함을 제압. 태극혜검과 태극권이 주력." },
      { name: "화산파", location: "섬서성 화산", desc: "도교. 쾌와 환을 중시. 화려하게 피어나는 '매화검법'과 이십사수매화검이 유명." },
      { name: "종남파", location: "섬서성 종남산", desc: "도교. 화산파와 인접해 있어 예로부터 검술(천하삼십육검)로 라이벌 관계를 형성." },
      { name: "아미파", location: "사천성 아미산", desc: "불교. 비구니(여승)와 속가 여제자 위주의 문파. 아미검법과 장법 등 부드러우면서도 매서운 무공 구사." },
      { name: "곤륜파", location: "청해성 곤륜산", desc: "도교. 중원 외곽에 위치해 신비주의적 성향이 강함. '운룡대팔식' 등 경공과 검술이 뛰어남." },
      { name: "점창파", location: "운남성 점창산", desc: "도교. 험준한 산세에 기원하여 변환무쌍하고 찌르기에 특화된 '사일검법' 등의 쾌검을 구사." },
      { name: "해남파", location: "광동성 해남 섬", desc: "도교. 중원 최남단에 위치한 검파. 거친 바다의 파도와 폭풍을 형상화한 '남해삼십육검' 등 빠르고 매서운 쾌검을 구사함." },
      { name: "청성파", location: "사천성 청성산", desc: "도교. 청음검법과 무영신검을 다루며, 같은 지역의 사천당가와 알력 다툼이 심함." },
      { name: "개방", location: "중원 전역 / 총타 이동", desc: "천하의 거지들이 모인 집단. 타구봉법(打狗棒法)과 항룡십팔장(降龍十八掌)이 비전이며 제일가는 정보망을 갖춤." }
    ]
  },
  {
    name: "오대세가",
    desc: "가문의 핏줄로 무공을 이어가는 강력한 5대 혈족.",
    sub: [
      { name: "남궁세가", location: "안휘성 합비", desc: "오대세가의 수장 격. 천하제일검가로 불리며, 웅장하고 패도적인 '제왕검형(帝王劍形)'과 창천검기를 다룸." },
      { name: "사천당가", location: "사천성 성도", desc: "독과 암기의 명가. 철저한 폐쇄주의. '당가의 은원은 백 년을 간다'는 철칙을 가짐. 만독불침의 경지를 추구." },
      { name: "하북팽가", location: "하북성 보정", desc: "도의 명가. 무겁고 파괴적인 '오호단문도'를 구사하며, 기골이 장대하고 호탕한 인물들이 많음." },
      { name: "제갈세가", location: "호북성 융중", desc: "지략(두뇌)의 명가. 기관진법, 기문둔갑에 능통하며 무림맹의 책사 및 중재자 역할을 도맡음." },
      { name: "모용세가", location: "강남 소주", desc: "연자오에 위치. 강남의 막대한 부를 바탕으로 천하의 무공을 수집. 화려한 환검과 모용지법을 씀." }
    ]
  },
  {
    name: "세외무림",
    desc: "중원의 상식을 벗어난 척박한 환경에서 독자적이고 파괴적인 무공을 발전시킨 변방 세력들.",
    sub: [
      { name: "북해빙궁", location: "북해/요동 이북", desc: "극한의 추위 속 지배자들. 천하의 모든 것을 얼려버리는 순음의 기운, 빙백신공을 구사함. 성품이 차갑고 오만하나 맺은 은원은 목숨 걸고 지킴." },
      { name: "남만야수궁", location: "운남 남부 밀림", desc: "맹수와 독충이 우글거리는 밀림의 부족 연합체. 거대한 짐승과 교감하여 부리며, 육체를 짐승처럼 단련한 야수적 외공과 주술을 다룸." }
    ]
  },
  {
    name: "사파 : 흑도",
    desc: "이익과 힘을 최우선으로 삼음. 실전성과 살상력을 중시하여 속성으로 무공을 익히지만, 주화입마의 위험이 큼.",
    sub: [
      { name: "녹림", location: "전국 명산", desc: "산적과 도적들의 연합체. 전국 명산에 일흔두 개의 수채(녹림칠십이채)가 있음." },
      { name: "장강수로채", location: "장강", desc: "물길을 장악한 수적 집단. 장강을 통과하는 모든 물류에 통행세를 걷음." },
      { name: "하오문", location: "음지", desc: "삼류 무인, 기녀, 도둑, 도박꾼 등 음지의 인간들이 모인 집단. 개방과 쌍벽을 이루는 정보 단체." },
      { name: "살막", location: "불명", desc: "돈을 받고 목숨을 거두는 전문 암살자 집단." }
    ]
  },
  {
    name: "마교 (천마신교)",
    desc: "위치: 신강 십만대산. 오직 '힘'과 '천마(天魔)'만을 숭상함. 철저한 약육강식. 마공을 통해 압도적인 무력을 자랑함. 백 년 전 중원을 침공, 전쟁 이후 은거 중이나, 최근 태동의 기미가 보임. 구조: 천마 > 소천마 >좌(우)호법> 장로 > 마병.",
    sub: []
  },
  {
    name: "황실 (皇室)",
    desc: "황권지상주의. 기본적으로 무림과 '정수는 우물물을 범하지 않는다(井水不犯河水)'는 불가침 조약을 맺음. 특징: 동창(내시들의 첩보 기관)과 금의위(황제 직속 무력)등 세력 존재.",
    sub: []
  }
];

export const characters = [
  { name: "연소휘", factionGroup: "구파일방", faction: "소림사", appearance: "흑발+금안", rank: "속가1대제자", gender: "女", realm: "절정", personality: "겉으론엄숙함+실제론다혈질+세속의유혹에약함", speech: "평소엔 '아미타불'을 읊는 정중한 합쇼체, 분노하면 거친 본성이 튀어나옴", trait: "소림의 백보신권과 금강불괴를 익힘" },
  { name: "진소운", factionGroup: "구파일방", faction: "무당파", appearance: "흑발+흑안", rank: "2대제자", gender: "女", realm: "절정", personality: "유유자적+차분함+정중함", speech: "부드럽고 여유로운 하오체", trait: "태극혜검의 후계자." },
  { name: "백청연", factionGroup: "구파일방", faction: "화산파", appearance: "흑발+핑크색눈", rank: "대사저(1대제자)", gender: "女", realm: "절정", personality: "원칙주의+금욕적+외유내강", speech: "흐트러짐 없는 단정하고 기품 있는 평어", trait: "화산파 백 년 이래 최고의 기재." },
  { name: "설아린", factionGroup: "구파일방", faction: "종남파", appearance: "흑발+흰색눈", rank: "1대제자", gender: "女", realm: "절정", personality: "냉정함+자부심+지기싫어함", speech: "간결하고 날카로운 평어", trait: "화산파의 백청연과 라이벌 관계." },
  { name: "주연화", factionGroup: "구파일방", faction: "아미파", appearance: "흑발+자안", rank: "3대제자", gender: "女", realm: "일류", personality: "상냥함+결단력+순수함", speech: "낭랑하고 맑은 목소리의 존댓말", trait: "아미파의 신동이라 불리는 천재." },
  { name: "계설아", factionGroup: "구파일방", faction: "곤륜파", appearance: "은발+청안", rank: "2대제자", gender: "女", realm: "절정", personality: "신비로움+과묵함+고고함", speech: "안개처럼 몽환적이고 낮은 목소리", trait: "구름 위를 걷는 듯한 운룡대팔식의 일인자." },
  { name: "은비주", factionGroup: "구파일방", faction: "점창파", appearance: "흑발+호박색눈", rank: "1대제자", gender: "女", realm: "절정", personality: "호전적+성급함+쾌활함", speech: "빠르고 공격적인 말투", trait: "점창파 특유의 초속(超速) 쾌검을 구사." },
  { name: "해비설", factionGroup: "구파일방", faction: "해남파", appearance: "흑발+청안", rank: "2대제자", gender: "女", realm: "일류", personality: "자유분방+거침없음+야성적", speech: "파도처럼 시원시원한 말투", trait: "남해의 거친 파도를 보며 익힌 남해삼십육검의 계승자." },
  { name: "하미주", factionGroup: "구파일방", faction: "청성파", appearance: "흑발+녹안", rank: "3대제자", gender: "女", realm: "일류", personality: "영리함+장난기+교활함", speech: "상대를 살살 약올리는 듯한 말투", trait: "무영신검을 사용. 사천당가와 견원지간." },
  { name: "홍소월", factionGroup: "구파일방", faction: "개방", appearance: "갈색머리+갈색눈", rank: "2대제자", gender: "女", realm: "절정", personality: "나태함+능구렁이+시니컬함", speech: "하품섞인 늘어지는 말투, 가끔 정곡을 찌르는 날카로운 어투", trait: "게으름뱅이로 보이나 사실 개방 제일의 정보통이자 숨겨진 천재. 취보(醉步)와 타구봉법을 섞어 씀." },

  { name: "남궁연", factionGroup: "오대세가", faction: "남궁세가", appearance: "흑발+청안", rank: "소가주", gender: "女", realm: "절정", personality: "오만함+패도적+자신감", speech: "당당하고 위압적인 평어", trait: "제왕검형의 후계자. 실패를 모르는 온실 속의 여패왕으로 가문의 명예를 맹신함." },
  { name: "당소소", factionGroup: "오대세가", faction: "사천당가", appearance: "갈색머리+녹안", rank: "가주의막내딸", gender: "女", realm: "일류", personality: "잔인함+요염함+집착", speech: "나긋나긋하며 속을 살살 긁는 존댓말", trait: "맹독을 다루며 아름다운 외모 뒤에 뱀 같은 독기를 품음. 암기보다 독술 파." },
  { name: "팽여란", factionGroup: "오대세가", faction: "하북팽가", appearance: "갈색머리+적안", rank: "가주의장녀", gender: "女", realm: "절정", personality: "호탕함+의리+단순함", speech: "껄껄 웃으며 천지를 울리는 큰 목소리", trait: "-" },
  { name: "제갈희", factionGroup: "오대세가", faction: "제갈세가", appearance: "흑발+자안", rank: "무림맹군사의딸", gender: "女", realm: "절정", personality: "계산적+냉혈함+완벽주의", speech: "차분하고 예의바르나 감정이 없는 존댓말", trait: "무공보다 진법과 독술, 지략으로 무림을 장기말처럼 다룸." },
  { name: "모용비", factionGroup: "오대세가", faction: "모용세가", appearance: "은발+흰색눈", rank: "소가주", gender: "女", realm: "절정", personality: "허영심+완벽주의+도도함", speech: "고상하고 우아한 규수 말투", trait: "강남의 부를 이용해 천하의 무공을 수집, 자신만의 환검으로 승화시킴." },

  { name: "주혜령", factionGroup: "무림맹", faction: "무림맹", appearance: "흑발+청안", rank: "무림맹주", gender: "女", realm: "초절정", personality: "오만함+권모술수+유희를 즐김", speech: "기품 넘치지만 상대를 꿰뚫어 보는 듯한 고압적인 규수 말투", trait: "남궁세가 출신" },

  { name: "설연화", factionGroup: "세외무림", faction: "북해빙궁", appearance: "백발+청안", rank: "소궁주", gender: "女", realm: "절정", personality: "극도의차가움+폐쇄적+은근한외로움", speech: "감정이 실리지 않은 냉랭한 단답형", trait: "몸에 흐르는 빙백신공의 한기 때문에 타인과의 접촉을 꺼림." },
  { name: "표야란", factionGroup: "세외무림", faction: "남만야수궁", appearance: "구릿빛피부+갈색머리+금안", rank: "소궁주", gender: "女", realm: "절정", personality: "야성적+직설적+포악함", speech: "짐승처럼 으르렁거리는 반말", trait: "-" },

  { name: "맹호란", factionGroup: "사파", faction: "녹림", appearance: "애꾸눈+흑발+녹안", rank: "총채주", gender: "女", realm: "초절정", personality: "잔혹+호쾌함+불신", speech: "거칠고 욕설이 섞인 사자후", trait: "-" },
  { name: "수령", factionGroup: "사파", faction: "장강수로채", appearance: "흑발+청안", rank: "부채주", gender: "女", realm: "절정", personality: "능글맞음+기회주의+탐욕", speech: "유혹적이고 여유로운 콧소리 하오체", trait: "-" },
  { name: "설미향", factionGroup: "사파", faction: "하오문", appearance: "흑발+적안", rank: "문주", gender: "女", realm: "초절정", personality: "정체불명+속을알수없음+치밀함", speech: "애교 넘치지만 가시가 돋친 말투", trait: "무림의 모든 음지 소문을 통제" },
  { name: "무영", factionGroup: "사파", faction: "살막", appearance: "흑발+금안", rank: "천살(최고살수)", gender: "女", realm: "초절정", personality: "무감정+기계적+허무주의", speech: "필요한 말만 하는 극도의 단답형", trait: "-" },

  { name: "천희령", factionGroup: "마교", faction: "천마신교", appearance: "흑안+적안", rank: "교주(천마)", gender: "女", realm: "화경", personality: "압도적+오만함+패도", speech: "세상을 발 아래 둔 듯한 여군주의 평어", trait: "전쟁 이후 백 년 만에 강림한 절대적인 여제(女帝). 존재만으로 강호를 오한에 떨게 함." },
  { name: "설유화", factionGroup: "마교", faction: "천마신교", appearance: "은사백포+흰안대+은발+감은눈", rank: "좌호법(左護法)", gender: "女", realm: "초절정", personality: "이성적+결벽증+비틀린 충성심", speech: "나긋나긋하고 예의 바른 극존칭", trait: "'신교의 머리'. 맹인처럼 보이나 기감으로 세상을 봄" },
  { name: "적하륜", factionGroup: "마교", faction: "천마신교", appearance: "흑발+금안", rank: "우호법(右護法)", gender: "女", realm: "초절정", personality: "쾌락주의+교활함+위선혐오", speech: "상대를 장난감처럼 가지고 노는 관능적이고 나른한 말투", trait: "'신교의 칼'. 적이 절망하며 스스로의 신념을 꺾는 모습을 감상하는 것을 최고의 유희로 여김." },
  { name: "천소하", factionGroup: "마교", faction: "천마신교", appearance: "흑발+자안", rank: "소천마(후계자)", gender: "女", realm: "초절정", personality: "변덕스러움+애정결핍+광기+이중적", speech: "조롱섞인 어린아이 같은 말투, 본색을 드러내면 소름 돋는 무감정", trait: "내면에는 스승의 기대에 미치지 못할까 봐 두려워하는 지독한 강박과 불안이 숨겨져 있음" },
  { name: "목련비", factionGroup: "마교", faction: "천마신교", appearance: "자색발+자안", rank: "혈장로", gender: "女", realm: "초절정", personality: "요염함+가학적+치밀함", speech: "남성을 홀리는 듯한 나긋나긋하고 몽환적인 톤", trait: "피를 매개로 하는 마공의 대가. 적의 피를 꽃처럼 피워내는 잔혹한 취미를 가짐." },

  { name: "위홍련", factionGroup: "황실", faction: "황실", appearance: "백발+적안", rank: "금의위 지휘사", gender: "女", realm: "초절정", personality: "철혈+원칙주의+은근한 융통성", speech: "군더더기 없이 딱딱하고 위압적인 관료의 존댓말", trait: "-" }
];

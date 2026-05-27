const BUILTIN_RECIPES = [

  // ── 피부케어 ──────────────────────────────────────────
  {
    id: 'r-001', name: '버물리', category: '피부',
    description: '라벤더·티트리·페퍼민트 피부 진정 롤온.\n트러블, 자극, 상처 부위에 수시로 도포합니다.\n소형 롤온으로 만들어 휴대하면 편리합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '라벤더', drops: 10 }, { name: '티트리', drops: 10 }, { name: '페퍼민트', drops: 5 }],
    notes: ''
  },
  {
    id: 'r-002', name: '시크릿톡톡', category: '피부',
    description: '민감 부위 피부 진정 및 항균 케어.\n여성호르몬 밸런스 케어에 좋습니다.\n속옷 면쪽에 1-2방울 떨어뜨리면\n항균 작용과 은은한 향이 하루종일 유지됩니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '라벤더', drops: 30 }, { name: '티트리', drops: 30 }, { name: '로즈제라늄', drops: 15 }, { name: '프랑킨센스', drops: 10 }],
    notes: ''
  },
  {
    id: 'r-003', name: '야살세럼 (버전1)', category: '피부',
    description: '피부 세포 재생 촉진 안티에이징 세럼.\n잔주름, 탄력 저하, 노화 케어에 사용합니다.\n저녁 스킨케어 마지막 단계에 도포하세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '아로우품', drops: 15 }, { name: '살루벨', drops: 6 }, { name: '프랑킨센스', drops: 2 }, { name: '로즈제라늄', drops: 2 }],
    notes: ''
  },
  {
    id: 'r-004', name: '야살세럼 (버전2)', category: '피부',
    description: '코파이바·밸런스를 추가한 강화 버전 세럼.\n염증성 피부 트러블에 사용합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '아로우품', drops: 15 }, { name: '살루벨', drops: 6 }, { name: '프랑킨센스', drops: 2 }, { name: '로즈제라늄', drops: 2 }, { name: '코파이바', drops: 2 }, { name: '밸런스', drops: 2 }],
    notes: ''
  },
  {
    id: 'r-005', name: '여드름 (호르몬성)', category: '피부',
    description: '호르몬 불균형으로 생기는 여드름 케어.\n로즈제라늄이 호르몬 균형을 잡아줍니다.\n트러블 부위에 직접 도포하세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '티트리', drops: 7 }, { name: '로즈제라늄', drops: 10 }, { name: '라벤더', drops: 3 }],
    notes: ''
  },
  {
    id: 'r-006', name: '셀룰라이트', category: '피부',
    description: '셀룰라이트 완화 바디 마사지오일.\n지몽·메타파워가 지방 분해를 돕습니다.\n목욕 후 마사지하듯 도포하세요.',
    refVolume: 100, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '지몽', drops: 30 }, { name: '메타파워', drops: 30 }, { name: '사이프레스', drops: 15 }, { name: '진저', drops: 15 }, { name: '파촐리', drops: 6 }, { name: '로즈제라늄', drops: 6 }],
    notes: ''
  },
  {
    id: 'r-007', name: '손톱발톱 튼튼', category: '피부',
    description: '손발톱 강화 및 영양 공급 롤온.\n프랑킨센스·미르가 재생, 라벤더·티트리가 항균을 담당합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '프랑킨센스', drops: 6 }, { name: '미르', drops: 6 }, { name: '라벤더', drops: 8 }, { name: '티트리', drops: 8 }],
    notes: ''
  },
  {
    id: 'r-008', name: '큐티클 관리', category: '피부',
    description: '건조하고 갈라진 큐티클 전용 케어.\n오레가노 항균, 시더우드 영양 공급.',
    refVolume: 3, carrier: '피마자오일 채우기',
    ingredients: [{ name: '오레가노', drops: 1 }, { name: '시더우드', drops: 1 }],
    notes: ''
  },
  {
    id: 'r-009', name: '습진(한포진) 강한버전', category: '피부',
    description: '손발 습진·한포진 집중 케어.\n레몬그라스(항염)·오레가노(항균)가 강하게 작용합니다.\n사용 전 반드시 패치테스트를 하세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '프랑킨센스', drops: 10 }, { name: '라벤더', drops: 15 }, { name: '티트리', drops: 15 }, { name: '레몬그라스', drops: 20 }, { name: '오레가노', drops: 5 }, { name: '로즈제라늄', drops: 3 }],
    notes: '패치테스트 필수'
  },
  {
    id: 'r-010', name: '습진(한포진) 예민한피부', category: '피부',
    description: '예민한 피부를 위한 순한 버전 습진 케어.\n강한 성분을 줄이고 진정 효과를 높였습니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '프랑킨센스', drops: 10 }, { name: '라벤더', drops: 10 }, { name: '티트리', drops: 5 }, { name: '레몬그라스', drops: 10 }, { name: '오레가노', drops: 2 }, { name: '로즈제라늄', drops: 3 }],
    notes: ''
  },
  {
    id: 'r-011', name: '바디오일 (면역)', category: '피부',
    description: '온가드·티트리로 면역을 강화하는 바디오일.\n환절기, 감기 시즌에 매일 전신 마사지하세요.',
    refVolume: 100, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '티트리', drops: 10 }, { name: '온가드', drops: 10 }, { name: '오렌지', drops: 10 }],
    notes: ''
  },
  {
    id: 'r-012', name: '바디오일 (성장밸런싱)', category: '피부',
    description: '아이 성장 지원 밸런싱 바디오일.\n심신 안정과 순환을 돕습니다.\n잠자리 전 전신 마사지를 권장합니다.',
    refVolume: 100, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '밸런스', drops: 10 }, { name: '아로마터치', drops: 10 }, { name: '라벤더', drops: 10 }],
    notes: ''
  },
  {
    id: 'r-013', name: '바디오일 (순환)', category: '피부',
    description: '혈액순환 촉진 전신 바디오일.\n손발이 차거나 피로할 때 마사지하세요.',
    refVolume: 100, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '밸런스', drops: 8 }, { name: '라벤더', drops: 8 }, { name: '페퍼민트', drops: 8 }, { name: '아로마터치', drops: 8 }],
    notes: ''
  },
  {
    id: 'r-014', name: '수분에센스', category: '피부',
    description: '알로에베라겔 베이스 피부 수분 에센스.\n건조하고 당기는 피부 장벽 강화에 사용합니다.\n세안 후 토너 다음 단계에 적용하세요.',
    refVolume: 100, carrier: '알로에베라겔 80g + 코코넛오일 16g',
    ingredients: [{ name: '코파이바', drops: 5 }, { name: '프랑킨센스', drops: 3 }, { name: '야로우품', drops: 10 }, { name: '로즈제라늄', drops: 3 }, { name: '하와이안 샌달우드', drops: 2 }],
    notes: '에센셜오일 총 40방울, 3-4가지 선택 가능'
  },
  {
    id: 'r-015', name: '속눈썹 영양제', category: '피부',
    description: '속눈썹 성장 및 영양 케어.\n일랑일랑·로즈마리가 성장을, 시더우드가 영양을 공급합니다.\n마스카라 전 면봉으로 살살 바르세요.',
    refVolume: 10, carrier: '피마자오일 채우기',
    ingredients: [{ name: '일랑일랑', drops: 2 }, { name: '로즈마리', drops: 3 }, { name: '시더우드', drops: 2 }],
    notes: ''
  },
  {
    id: 'r-016', name: '검버섯', category: '피부',
    description: '오레가노·라벤더로 검버섯 완화를 돕는 롤온.\n검버섯 부위에 소량 직접 도포하고\n자외선 차단제를 함께 사용하세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '오레가노', drops: 3 }, { name: '라벤더', drops: 2 }],
    notes: '오레가노 2-4방울 조절 가능'
  },
  {
    id: 'r-017', name: '백설공주세럼', category: '피부',
    description: '피부 톤업 및 미백 세럼.\n칙칙한 피부 톤 개선에 사용합니다.\n빛세럼과 함께 사용하면 더 좋습니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '밸런스', drops: 5 }, { name: '라임', drops: 2 }, { name: '마조람', drops: 2 }],
    notes: '빛세럼 1펌프 추가'
  },
  {
    id: 'r-018', name: '아토피크림 (버전1)', category: '피부',
    description: '야로우품·코파이바 아토피 케어 크림.\n가렵고 예민한 피부에 수시로 도포합니다.',
    refVolume: 50, carrier: '크림 채우기',
    ingredients: [{ name: '야로우품', drops: 5 }, { name: '라벤더', drops: 5 }, { name: '코파이바', drops: 5 }, { name: '헬리크리섬', drops: 1 }],
    notes: '헬리크리섬 1-2방울 조절'
  },
  {
    id: 'r-019', name: '아토피크림 (버전2)', category: '피부',
    description: '야로우품을 높인 강화 버전 아토피 크림.\n심한 아토피, 빠른 진정이 필요할 때 사용합니다.',
    refVolume: 50, carrier: '크림 채우기',
    ingredients: [{ name: '야로우품', drops: 10 }, { name: '라벤더', drops: 3 }, { name: '프랑킨센스', drops: 3 }, { name: '코파이바', drops: 3 }],
    notes: ''
  },
  {
    id: 'r-020', name: '햇빛 화상 진정 크림', category: '피부',
    description: '선번 후 피부를 빠르게 진정시키는 크림.\n알로에베라겔이 수분을, 라벤더·페퍼민트가 냉각을 돕습니다.\n자외선 노출 후 즉시 도포하세요.',
    refVolume: 100, carrier: '알로에베라겔 90g',
    ingredients: [{ name: '라벤더', drops: 20 }, { name: '페퍼민트', drops: 10 }],
    notes: ''
  },
  {
    id: 'r-021', name: '클렌징오일', category: '피부',
    description: '세 가지 캐리어오일 기반 클렌징오일.\n화장과 노폐물을 부드럽게 녹여냅니다.\n마른 피부에 마사지 후 물로 헹구세요.',
    refVolume: 30, carrier: '올리브리퀴드 6ml + 호호바오일 12ml + 살구씨오일 12ml',
    ingredients: [{ name: '라벤더', drops: 4 }, { name: '오렌지', drops: 4 }, { name: '레몬그라스', drops: 2 }],
    notes: ''
  },
  {
    id: 'r-022', name: '헤어 에센스', category: '피부',
    description: '건조하고 갈라진 모발 케어 에센스.\n시더우드로 두피, 페퍼민트로 청량감을 더합니다.\n머리카락 중간~끝에만 소량 바르세요.',
    refVolume: 50, carrier: '코코넛오일 50% + 정제수 50% + 글리세린 20방울',
    ingredients: [{ name: '시더우드', drops: 5 }, { name: '라벤더', drops: 3 }, { name: '오렌지', drops: 4 }, { name: '페퍼민트', drops: 2 }],
    notes: '코코넛오일 비율 줄이면 덜 기름짐'
  },
  {
    id: 'r-023', name: '불안감 완화', category: '피부',
    description: '불안감, 긴장, 두근거림을 진정시키는 롤온.\n라벤더·프랑킨센스가 심신을 안정시킵니다.\n손목·명치에 도포 후 천천히 호흡하세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '라벤더', drops: 8 }, { name: '레몬', drops: 4 }, { name: '일랑일랑', drops: 4 }, { name: '프랑킨센스', drops: 2 }],
    notes: ''
  },
  {
    id: 'r-024', name: '새싹 같은 에너지', category: '피부',
    description: '아침 활력 충전, 오후 슬럼프 탈출 롤온.\n스피어민트·유칼립투스로 상쾌한 에너지를 줍니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '라벤더', drops: 8 }, { name: '스피어민트', drops: 4 }, { name: '유칼립투스', drops: 4 }, { name: '레몬그라스', drops: 2 }, { name: '일랑일랑', drops: 2 }],
    notes: ''
  },
  {
    id: 'r-025', name: '봄의 상쾌함', category: '피부',
    description: '시트러스·일랑일랑 기분 전환 롤온.\n우울하거나 무기력할 때 손목에 도포하세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '베르가못', drops: 6 }, { name: '자몽', drops: 6 }, { name: '라임', drops: 4 }, { name: '일랑일랑', drops: 2 }],
    notes: ''
  },
  {
    id: 'r-026', name: '마음의 균형', category: '피부',
    description: '감정 균형과 심리 안정을 돕는 롤온.\n감정이 오르내릴 때 사용합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '밸런스', drops: 8 }, { name: '로즈제라늄', drops: 4 }, { name: '일랑일랑', drops: 4 }, { name: '라벤더', drops: 2 }, { name: '스피어민트', drops: 2 }],
    notes: ''
  },
  {
    id: 'r-027', name: '티눈 (롤온)', category: '피부',
    description: '오레가노 항균력으로 티눈·사마귀를 케어합니다.\n해당 부위에 하루 2회 집중 도포하세요.\n주변 정상 피부에 닿지 않도록 주의하세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '오레가노', drops: 14 }, { name: '티트리', drops: 6 }, { name: '레몬', drops: 4 }],
    notes: ''
  },
  {
    id: 'r-028', name: '티눈 (원액)', category: '피부',
    description: '취침 전 밴드에 적셔서 붙이는 고농도 케어.\n오레가노+티트리+레몬의 시너지로 빠른 효과를 줍니다.',
    refVolume: 2, carrier: '없음 (원액 사용)',
    ingredients: [{ name: '오레가노', drops: 10 }, { name: '티트리', drops: 10 }, { name: '레몬', drops: 10 }],
    notes: '잠자기 전 밴드에 적셔서 밴딩'
  },
  {
    id: 'r-126', name: '멀티밤', category: '피부',
    description: '비즈왁스+코코넛오일+에센셜오일 만능 밤.\n입술, 큐티클, 건조 부위 어디에나 사용합니다.\n65~70도에서 오일을 넣어야 효능을 보존합니다.',
    refVolume: 0, carrier: '코코넛오일 6g + 스윗아몬드오일 6g + 비즈왁스 10g',
    ingredients: [{ name: '원하는 오일 2-3가지', drops: 12 }],
    notes: '어린이용: 라벤더 3방울+프랑킨센스 2방울'
  },
  {
    id: 'r-127', name: '미스트 (피부)', category: '피부',
    description: '피부 효능에 따라 오일을 선택하는 맞춤 미스트.\n세안 후 토너처럼 활용하세요.',
    refVolume: 100, carrier: '알로에베라수 채우기 (로즈워터 대체 가능)',
    ingredients: [{ name: '원하는 오일 선택', drops: 20 }],
    notes: '보습:코파이바, 안티에이징:프랑킨센스, 진정:라벤더, 탄력:로즈제라늄, 피지조절:일랑일랑, 항균:미르, 트러블:티트리'
  },

  // ── 눈케어 ───────────────────────────────────────────
  {
    id: 'r-030', name: '안구촉촉 (버전1)', category: '눈케어',
    description: '눈 주변 건조함과 피로 케어 롤온.\n프랑킨센스가 재생을, 라벤더가 진정을 돕습니다.\n눈 주위 뼈 위에 조심스럽게 도포하세요.',
    refVolume: 5, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '프랑킨센스', drops: 3 }, { name: '라벤더', drops: 1 }, { name: '페퍼민트', drops: 1 }],
    notes: '눈에 직접 닿지 않도록 주의'
  },
  {
    id: 'r-031', name: '안구촉촉 (버전2)', category: '눈케어',
    description: '클로브 항균력 추가 눈 주변 케어 롤온.\n눈 피로와 충혈이 심할 때 사용합니다.',
    refVolume: 5, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '프랑킨센스', drops: 2 }, { name: '클로브', drops: 1 }, { name: '페퍼민트', drops: 1 }],
    notes: ''
  },
  {
    id: 'r-032', name: '시력증진', category: '눈케어',
    description: '프랑킨센스·로즈마리 등 눈 건강 지원 롤온.\n눈 주변 관자놀이와 눈 뼈 위에 도포하세요.\n장시간 스크린 사용 후 사용하면 좋습니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '프랑킨센스', drops: 8 }, { name: '페퍼민트', drops: 8 }, { name: '로즈마리', drops: 8 }, { name: '클라리세이지', drops: 4 }],
    notes: ''
  },
  {
    id: 'r-033', name: '안압/녹내장', category: '눈케어',
    description: '안압 조절을 돕는 강화 눈 케어 롤온.\n눈 주변 관자놀이와 눈 뼈 라인에 도포합니다.\n정기적인 안과 검진과 함께 병행하세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '프랑킨센스', drops: 10 }, { name: '라벤더', drops: 10 }, { name: '유칼립투스', drops: 2 }, { name: '클로브', drops: 2 }, { name: '미르', drops: 2 }],
    notes: ''
  },

  // ── 통증 ─────────────────────────────────────────────
  {
    id: 'r-040', name: '통증 (롤온)', category: '통증',
    description: '딥블루+아로마터치+코파이바 통증 완화 롤온.\n두통, 근육통, 관절 불편함에 해당 부위에 도포하세요.',
    refVolume: 3, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '딥블루', drops: 5 }, { name: '아로마터치', drops: 3 }, { name: '코파이바', drops: 2 }],
    notes: ''
  },
  {
    id: 'r-041', name: '통증 스프레이', category: '통증',
    description: '근육통·관절 통증 부위에 뿌리는 스프레이.\n딥블루·코파이바가 통증을, 마조람이 이완을 돕습니다.',
    refVolume: 100, carrier: '포스티엠 오리지날 채우기',
    ingredients: [{ name: '딥블루', drops: 15 }, { name: '코파이바', drops: 15 }, { name: '프랑킨센스', drops: 15 }, { name: '아로마터지', drops: 15 }, { name: '마조람', drops: 15 }],
    notes: ''
  },
  {
    id: 'r-042', name: '관절염', category: '통증',
    description: '유칼립투스·페퍼민트 냉각과 코파이바 소염 조합.\n관절 부위에 직접 도포하고 마사지하세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '유칼립투스', drops: 5 }, { name: '페퍼민트', drops: 5 }, { name: '코파이바', drops: 5 }, { name: '레몬그라스', drops: 3 }],
    notes: ''
  },
  {
    id: 'r-043', name: '가슴통증완화', category: '통증',
    description: '유방암 수술 후 관리 특화 롤온.\n프랑킨센스·코파이바가 통증 완화와 재생을 돕습니다.\n해당 부위에 하루 2-3회 도포하세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '프랑킨센스', drops: 2 }, { name: '타임', drops: 2 }, { name: '코파이바', drops: 2 }, { name: '클로브', drops: 1 }, { name: '로즈마리', drops: 1 }, { name: '레몬', drops: 1 }],
    notes: ''
  },
  {
    id: 'r-044', name: '바디오일 (통증)', category: '통증',
    description: '딥블루·아로마터치 전신 통증 완화 바디오일.\n샤워 후 통증 부위 중심으로 마사지하세요.',
    refVolume: 100, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '밸런스', drops: 8 }, { name: '아로마터치', drops: 8 }, { name: '딥블루', drops: 8 }, { name: '라벤더', drops: 8 }],
    notes: ''
  },
  {
    id: 'r-045', name: '전립선', category: '통증',
    description: '전립선 케어 전문 롤온.\n사이프러스가 순환을, 프랑킨센스가 재생을 돕습니다.\n하복부·배꼽 아래를 중심으로 마사지합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '사이프러스', drops: 4 }, { name: '프랑킨센스', drops: 3 }, { name: '마조람', drops: 2 }, { name: '주니퍼베리', drops: 2 }],
    notes: '티트리 1방울 추가 가능'
  },

  // ── 호흡기/면역 ──────────────────────────────────────
  {
    id: 'r-050', name: '비염 (롤온)', category: '호흡기',
    description: '비염·코막힘 증상 완화 롤온.\n이지에어가 호흡기를, 유칼립투스가 청량감을 줍니다.\n콧날 양옆, 관자놀이, 목에 도포하세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '이지에어', drops: 10 }, { name: '프랑킨센스', drops: 4 }, { name: '유칼립투스', drops: 4 }, { name: '다이제스트젠', drops: 4 }],
    notes: ''
  },
  {
    id: 'r-051', name: '비염 인헤일러', category: '호흡기',
    description: '코 가까이 흡입하는 비염 케어 인헤일러.\n코막힘이 심할 때 수시로 흡입하세요.',
    refVolume: 0, carrier: '인헤일러 심지에 적용',
    ingredients: [{ name: '이지에어', drops: 5 }, { name: '유칼립투스', drops: 3 }, { name: '레몬', drops: 2 }],
    notes: '인헤일러 심지에 오일을 떨어뜨려 사용'
  },
  {
    id: 'r-052', name: '마스크톡톡', category: '호흡기',
    description: '마스크 착용 시 호흡기 보호·면역 강화 블렌드.\n마스크 바깥쪽에 뿌려 사용합니다.\n외출 전, 사람 많은 장소 방문 전 사용하세요.',
    refVolume: 5, carrier: '코코넛오일 1:1 비율로 채우기',
    ingredients: [{ name: '레몬유칼립투스', drops: 7 }, { name: '유칼립투스', drops: 7 }, { name: '프랑킨센스', drops: 17 }, { name: '온가드', drops: 17 }, { name: '이지에어', drops: 17 }, { name: '어댑티브', drops: 17 }, { name: '오렌지', drops: 27 }],
    notes: ''
  },
  {
    id: 'r-053', name: '목 스프레이', category: '호흡기',
    description: '편도염·목 통증 시 직접 뿌리는 스프레이.\n오레가노·클로브의 강력한 항균력이 작용합니다.\n목이 불편할 때 하루 여러 번 사용하세요.',
    refVolume: 10, carrier: '이오메가+ 채우기',
    ingredients: [{ name: '오레가노', drops: 5 }, { name: '프랑킨센스', drops: 10 }, { name: '미르', drops: 2 }, { name: '클로브', drops: 3 }, { name: '온가드', drops: 5 }],
    notes: ''
  },
  {
    id: 'r-054', name: '코세척 스프레이', category: '호흡기',
    description: '식염수 기반 코세척 스프레이.\n비염, 코막힘, 황사 후 코 세척에 사용합니다.',
    refVolume: 10, carrier: '식염수 채우기',
    ingredients: [{ name: '이지에어', drops: 2 }, { name: '유칼립투스', drops: 1 }],
    notes: ''
  },
  {
    id: 'r-055', name: '항균 스프레이', category: '호흡기',
    description: '공간·물건 항균 소독 스프레이.\n도어 손잡이, 화장실, 주방 등에 뿌립니다.',
    refVolume: 100, carrier: '정제수 50% + 발향베이스 50%',
    ingredients: [{ name: '온가드', drops: 20 }, { name: '티트리', drops: 10 }, { name: '레몬', drops: 10 }],
    notes: ''
  },
  {
    id: 'r-056', name: '철벽 스프레이 (바이러스)', category: '호흡기',
    description: '오레가노·타임·클로브 강력 항바이러스 조합.\n바이러스 유행 시즌에 공간에 뿌려 사용합니다.',
    refVolume: 100, carrier: '정제수 50% + 발향베이스 50%',
    ingredients: [{ name: '오레가노', drops: 10 }, { name: '타임', drops: 10 }, { name: '클로브', drops: 10 }, { name: '레몬', drops: 10 }],
    notes: '온가드 대체 가능'
  },
  {
    id: 'r-057', name: '편도선염', category: '호흡기',
    description: '티트리·프랑킨센스 편도 염증 진정 롤온.\n귀주변, 목부위, 턱 아래에 수시로 도포합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '티트리', drops: 10 }, { name: '바질', drops: 2 }, { name: '프랑킨센스', drops: 5 }, { name: '라벤더', drops: 3 }],
    notes: ''
  },

  // ── 수면 ─────────────────────────────────────────────
  {
    id: 'r-060', name: '숙면 스프레이 (일반)', category: '수면',
    description: '세레니티·이지에어 수면 유도 침구 스프레이.\n취침 30분 전 베개·침구에 뿌려두세요.\n아이들에게도 사용 가능합니다.',
    refVolume: 100, carrier: '정제수 50% + 발향베이스 50%',
    ingredients: [{ name: '세레니티', drops: 14 }, { name: '이지에어', drops: 14 }, { name: '티트리', drops: 6 }, { name: '레몬', drops: 6 }],
    notes: ''
  },
  {
    id: 'r-061', name: '숙면 스프레이 (목직한 향)', category: '수면',
    description: '라벤더·로만캐모마일의 묵직한 향 수면 스프레이.\n깊고 진한 향을 선호하는 분에게 추천합니다.',
    refVolume: 100, carrier: '정제수 50% + 발향베이스 50%',
    ingredients: [{ name: '라벤더', drops: 16 }, { name: '오렌지', drops: 10 }, { name: '시더우드', drops: 8 }, { name: '로만캐모마일', drops: 6 }],
    notes: ''
  },
  {
    id: 'r-062', name: '침구용 스프레이', category: '수면',
    description: '수면·호흡기·방충 다기능 침구 스프레이.\n취침 전 이불과 베개에 뿌리세요.',
    refVolume: 100, carrier: '정제수 50% + 발향베이스 50%',
    ingredients: [{ name: '라벤더', drops: 18 }, { name: '유칼립투스', drops: 7 }, { name: '페퍼민트', drops: 7 }, { name: '오렌지', drops: 7 }],
    notes: ''
  },

  // ── 스트레스 ─────────────────────────────────────────
  {
    id: 'r-070', name: '스트레스케어 스프레이', category: '스트레스',
    description: '밸런스·베르가못 스트레스 완화 공간 스프레이.\n업무 공간, 침실에 뿌려 심리 안정감을 조성합니다.',
    refVolume: 100, carrier: '정제수 50% + 발향베이스 50%',
    ingredients: [{ name: '밸런스', drops: 10 }, { name: '베르가못', drops: 10 }, { name: '어댑티브', drops: 10 }, { name: '시트러스블리스', drops: 10 }],
    notes: '오렌지 대체 가능'
  },
  {
    id: 'r-071', name: '활력 스프레이', category: '스트레스',
    description: '시트러스블리스·페퍼민트 활력 충전 스프레이.\n아침이나 오후 슬럼프 시간에 뿌리세요.',
    refVolume: 100, carrier: '정제수 50% + 발향베이스 50%',
    ingredients: [{ name: '시트러스블리스', drops: 14 }, { name: '자몽', drops: 14 }, { name: '페퍼민트', drops: 6 }, { name: '시더우드', drops: 6 }],
    notes: ''
  },

  // ── 집중력 ──────────────────────────────────────────
  {
    id: 'r-080', name: '집중력 공부방 스프레이', category: '집중력',
    description: '집중력·기억력 향상 공간 스프레이.\n공부방, 사무실에 뿌려 맑은 머리를 유지하세요.\n시험 준비, 중요한 업무 전 사용을 권장합니다.',
    refVolume: 100, carrier: '정제수 50% + 발향베이스 50%',
    ingredients: [{ name: '밸런스', drops: 14 }, { name: '레몬', drops: 14 }, { name: '페퍼민트', drops: 6 }, { name: '로즈마리', drops: 6 }],
    notes: ''
  },

  // ── 향수 ─────────────────────────────────────────────
  {
    id: 'r-090', name: '감정향수', category: '향수',
    description: '좋아하는 오일 3가지로 만드는 나만의 향수.\n기분에 따라 오일을 바꿔 나만의 향을 찾아보세요.\n손목, 귀 뒤, 목덜미에 살짝 도포합니다.',
    refVolume: 5, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '원하는 오일 3가지', drops: 3 }],
    notes: ''
  },
  {
    id: 'r-091', name: '행복향수', category: '향수',
    description: '바닐라 달콤함과 자몽·베르가못 상큼함의 향수.\n기분을 밝게 만들고 싶은 날 사용하세요.\n손목과 귀 뒤에 도포합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '바닐라', drops: 2 }, { name: '자몽', drops: 5 }, { name: '베르가못', drops: 5 }],
    notes: '바닐라 1~3방울 조절'
  },
  {
    id: 'r-092', name: '남자향수', category: '향수',
    description: '블랙스프루스 우디함과 베르가못 상쾌함의 향수.\n깊고 차분한 향을 원하는 분에게 추천합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '블랙스프루스', drops: 5 }, { name: '베르가못', drops: 2 }, { name: '프랑킨센스', drops: 2 }],
    notes: '시베리안퍼, 사이프러스 대체 가능'
  },
  {
    id: 'r-093', name: '감정향수 퍼퓸', category: '향수',
    description: '발향베이스로 만드는 스프레이 타입 향수.\n일반 향수처럼 옷이나 피부에 뿌려 사용합니다.',
    refVolume: 10, carrier: '정제수 50% + 발향베이스 50%',
    ingredients: [{ name: '원하는 오일 3가지', drops: 5 }],
    notes: ''
  },

  // ── 건강케어 ─────────────────────────────────────────
  {
    id: 'r-100', name: '두피 스프레이 (탈모완화)', category: '건강케어',
    description: '로즈마리·시더우드 탈모 완화 두피 스프레이.\n두피에 직접 뿌리고 마사지해 흡수시킵니다.\n매일 사용하면 두피 순환에 도움이 됩니다.',
    refVolume: 100, carrier: '정제수 채우기 (알로에베라수 대체 가능)',
    ingredients: [{ name: '로즈마리', drops: 12 }, { name: '시더우드', drops: 6 }, { name: '페퍼민트', drops: 6 }, { name: '오렌지', drops: 6 }, { name: '라벤더', drops: 6 }, { name: '티트리', drops: 6 }],
    notes: ''
  },
  {
    id: 'r-107', name: '천연데오드란트', category: '건강케어',
    description: '파촐리·사이프레스·로즈제라늄 천연 데오드란트.\n파촐리가 냄새를, 사이프레스가 땀을 조절합니다.\n겨드랑이에 뿌리세요.',
    refVolume: 100, carrier: '정제수 60% + 발향베이스 40%',
    ingredients: [{ name: '파촐리', drops: 20 }, { name: '사이프레스', drops: 20 }, { name: '로즈제라늄', drops: 20 }, { name: '유칼립투스', drops: 10 }, { name: '티트리', drops: 10 }, { name: '레몬', drops: 10 }],
    notes: ''
  },
  {
    id: 'r-115', name: '여성 청결제', category: '건강케어',
    description: '오렌지 오일로 상쾌함을 더한 천연 여성 청결제.\n순한 성분으로 매일 사용할 수 있습니다.',
    refVolume: 30, carrier: '정제수 50% + 온가드 핸드위시 50%',
    ingredients: [{ name: '오렌지', drops: 4 }],
    notes: '오렌지 3-5방울 조절'
  },
  {
    id: 'r-120', name: '위염·역류성식도염', category: '건강케어',
    description: '다이제스트젠·클로브 소화기 케어 롤온.\n명치, 복부, 척추 부위에 도포 후 마사지하세요.\n식후 30분에 사용하면 효과적입니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '다이제스트젠', drops: 10 }, { name: '클로브', drops: 6 }, { name: '프랑킨센스', drops: 4 }],
    notes: ''
  },
  {
    id: 'r-121', name: '감기꿀차', category: '건강케어',
    description: '진저·온가드·레몬·오레가노 면역 강화 꿀차.\n감기 초기, 목 아플 때 1~3스푼 섭취합니다.',
    refVolume: 100, carrier: '꿀 채우기',
    ingredients: [{ name: '진저', drops: 7 }, { name: '온가드', drops: 7 }, { name: '레몬', drops: 10 }, { name: '오레가노', drops: 4 }, { name: '타임', drops: 3 }],
    notes: '꿀차 물 120ml에 2~3스푼. 클로브 3방울 대체 가능'
  },
  {
    id: 'r-122', name: '감기 골장처방 (오바타클)', category: '건강케어',
    description: '오레가노·타임·클로브 강력 면역 배지캡슐 처방.\n감기 초기나 면역 저하 시 사용합니다.\n하루 2번, 3일 복용 후 7일 휴지기 필수.',
    refVolume: 0, carrier: '배지캡슐',
    ingredients: [{ name: '오레가노', drops: 5 }, { name: '타임', drops: 5 }, { name: '클로브', drops: 5 }, { name: '바질 (선택)', drops: 1 }],
    notes: '하루 2번, 3일간 복용 / 7일간 휴지기 필수'
  },
  {
    id: 'r-123', name: '구강오일', category: '건강케어',
    description: '클로브·미르 항균력으로 구강을 케어하는 오일.\n치약에 한 방울 첨가하거나 염증 부위에 도포합니다.',
    refVolume: 2, carrier: '없음 (원액)',
    ingredients: [{ name: '클로브', drops: 8 }, { name: '온가드', drops: 8 }, { name: '레몬', drops: 5 }, { name: '오레가노', drops: 2 }, { name: '타임', drops: 2 }, { name: '미르', drops: 5 }],
    notes: '치약위에 한방울, 염증에 콕 바르기, 생수에 1방울'
  },
  {
    id: 'r-124', name: '가글액', category: '건강케어',
    description: '클로브·스피어민트 천연 구강 가글액.\n구강을 청결하게 유지합니다.',
    refVolume: 50, carrier: '생수 채우기',
    ingredients: [{ name: '클로브', drops: 1 }, { name: '스피어민트(페퍼민트)', drops: 1 }, { name: '오렌지(레몬)', drops: 1 }],
    notes: ''
  },
  {
    id: 'r-125', name: '허브솔트', category: '건강케어',
    description: '허브 오일을 소금에 담은 요리용 허브솔트.\n고기 요리, 샐러드, 빵에 활용하세요.',
    refVolume: 100, carrier: '솔트 채우기',
    ingredients: [{ name: '오레가노', drops: 1 }, { name: '타임', drops: 1 }, { name: '블랙페퍼', drops: 1 }, { name: '로즈마리', drops: 1 }, { name: '바질', drops: 1 }],
    notes: ''
  },

  // ── 생활용품 ─────────────────────────────────────────
  {
    id: 'r-101', name: '모기 퇴치제 (강력)', category: '생활용품',
    description: '레몬유칼립투스·레몬그라스 강력 방충 스프레이.\n옷 위에 뿌리는 강력 버전입니다.\n캠핑, 야외 활동 시 사용하세요.',
    refVolume: 100, carrier: '정제수 50% + 발향베이스 50%',
    ingredients: [{ name: '레몬유칼립투스', drops: 20 }, { name: '레몬그라스', drops: 20 }, { name: '페퍼민트', drops: 10 }, { name: '라벤더', drops: 8 }, { name: '유칼립투스', drops: 10 }, { name: '시나몬바크', drops: 5 }],
    notes: '멜리사 대체 가능'
  },
  {
    id: 'r-102', name: '벌레 퇴치제 (버전1)', category: '생활용품',
    description: '테라쉴드 기반 순한 벌레 퇴치 스프레이.\n일상 야외 활동 시 피부와 옷에 뿌립니다.',
    refVolume: 100, carrier: '정제수 50% + 발향베이스 50%',
    ingredients: [{ name: '테라쉴드', drops: 20 }, { name: '레몬유칼립투스', drops: 10 }, { name: '레몬그라스', drops: 10 }],
    notes: ''
  },
  {
    id: 'r-103', name: '벌레 퇴치제 (버전2)', category: '생활용품',
    description: '로즈제라늄을 추가한 향 좋은 벌레 퇴치 스프레이.\n아이와 함께하는 야외 활동에 적합합니다.',
    refVolume: 100, carrier: '정제수 50% + 발향베이스 50%',
    ingredients: [{ name: '테라쉴드', drops: 18 }, { name: '레몬유칼립투스', drops: 8 }, { name: '레몬그라스', drops: 8 }, { name: '로즈제라늄', drops: 6 }],
    notes: ''
  },
  {
    id: 'r-104', name: '숲속향 스프레이', category: '생활용품',
    description: '히노키·사이프레스 피톤치드 실내 삼림욕 스프레이.\n거실, 사무실에 뿌려 맑은 공기를 만들어줍니다.',
    refVolume: 100, carrier: '정제수 50% + 발향베이스 50%',
    ingredients: [{ name: '히노키', drops: 10 }, { name: '사이프레스', drops: 10 }, { name: '포레스트베싱', drops: 10 }, { name: '레몬', drops: 10 }],
    notes: '클리어리파이/시베리안퍼, 오렌지 대체 가능'
  },
  {
    id: 'r-105', name: '섬유탈취제 (라벤더)', category: '생활용품',
    description: '라벤더·퓨리파이 천연 섬유 탈취 스프레이.\n소파, 카펫, 옷에 뿌려 탈취 효과를 누리세요.',
    refVolume: 100, carrier: '정제수 50% + 발향베이스 50%',
    ingredients: [{ name: '라벤더', drops: 15 }, { name: '퓨리파이', drops: 15 }, { name: '레몬그라스', drops: 10 }],
    notes: ''
  },
  {
    id: 'r-106', name: '섬유탈취제 (상쾌)', category: '생활용품',
    description: '유칼립투스·레몬 향 섬유 탈취 스프레이.\n운동복, 이불 냄새 제거에 사용합니다.',
    refVolume: 100, carrier: '정제수 50% + 발향베이스 50%',
    ingredients: [{ name: '유칼립투스', drops: 10 }, { name: '티트리', drops: 10 }, { name: '레몬', drops: 20 }],
    notes: ''
  },
  {
    id: 'r-108', name: '공기정화 스프레이', category: '생활용품',
    description: '클리어리파이·히노키 공기 정화 스프레이.\n환절기, 외출 후 집 안 공기 정화에 사용하세요.',
    refVolume: 100, carrier: '정제수 50% + 발향베이스 50%',
    ingredients: [{ name: '클리어리파이', drops: 10 }, { name: '히노키', drops: 10 }, { name: '사이프레스', drops: 10 }, { name: '레몬', drops: 10 }],
    notes: '레몬 대신 오렌지 가능'
  },
  {
    id: 'r-109', name: '청소용 스프레이', category: '생활용품',
    description: '온가드·레몬 항균 청소 스프레이.\n주방, 화장실, 도마 등에 활용합니다.',
    refVolume: 100, carrier: '발향베이스 75ml',
    ingredients: [{ name: '온가드', drops: 15 }, { name: '레몬', drops: 15 }, { name: '티트리', drops: 12 }],
    notes: '온가드 다목적 세정제 15ml 추가'
  },
  {
    id: 'r-110', name: '곰팡이 제거', category: '생활용품',
    description: '클로브·티트리·타임 강력 항균 곰팡이 제거제.\n욕실 타일 줄눈 등에 뿌리고 닦아내세요.',
    refVolume: 100, carrier: '화이트식초 채우기',
    ingredients: [{ name: '클로브', drops: 15 }, { name: '티트리', drops: 15 }, { name: '타임', drops: 15 }],
    notes: ''
  },
  {
    id: 'r-111', name: '섬유유연제 (버전1)', category: '생활용품',
    description: '구연산 기반 천연 섬유유연제.\n레몬·오렌지·페퍼민트 향으로 세탁물을 상쾌하게 합니다.',
    refVolume: 1000, carrier: '정제수 채우기',
    ingredients: [{ name: '레몬', drops: 10 }, { name: '오렌지', drops: 10 }, { name: '페퍼민트', drops: 10 }],
    notes: '구연산 100g + 올리브리퀴드 소량 먼저 섞기'
  },
  {
    id: 'r-112', name: '섬유유연제 (버전2)', category: '생활용품',
    description: '온가드 항균 기반 천연 섬유유연제.\n라벤더·자몽 향으로 세탁물을 상쾌하게 합니다.',
    refVolume: 1000, carrier: '정제수 채우기',
    ingredients: [{ name: '온가드', drops: 30 }, { name: '라벤더', drops: 30 }, { name: '자몽', drops: 30 }],
    notes: '구연산 10g + 올리브리퀴드 30g 먼저 섞기'
  },
  {
    id: 'r-113', name: '섬유유연제 (버전3)', category: '생활용품',
    description: '백식초 기반 냄새 제거·유연 효과 천연 유연제.\n일주일 숙성 후 사용하면 더 효과적입니다.',
    refVolume: 1000, carrier: '백식초 1L',
    ingredients: [{ name: '온가드', drops: 30 }, { name: '라벤더', drops: 30 }, { name: '자몽(또는 오렌지/라임)', drops: 30 }],
    notes: '한번에 10-20g 사용. 일주일 숙성 후 사용'
  },
  {
    id: 'r-114', name: '손소독제', category: '생활용품',
    description: '알로에베라겔 기반 촉촉한 천연 손소독제.\n온가드·티트리의 항균력으로 강력하게 살균합니다.',
    refVolume: 100, carrier: '무수에탄올 40g + 알로에베라겔 60g + 히아루론산 1g',
    ingredients: [{ name: '온가드', drops: 12 }, { name: '티트리', drops: 12 }],
    notes: ''
  },
  {
    id: 'r-116', name: '설거지비누', category: '생활용품',
    description: '온가드 항균·오렌지 세정력의 천연 설거지 비누.\n화학 성분 없이 깨끗하게 세척합니다.',
    refVolume: 100, carrier: '비누베이스 100g + EM원액 10ml',
    ingredients: [{ name: '온가드', drops: 2 }, { name: '오렌지', drops: 1 }],
    notes: '레몬, 자몽 추가 가능. 65-70도에서 에센셜오일 넣기'
  },

  // ── Rollerball Wellness DIY 추가 레시피 ───────────────
  {
    id: 'r-200', name: '무좀 롤온', category: '건강케어',
    description: '오레가노·티트리·레몬그라스 강력 항균 무좀 케어.\n무좀 부위와 그 주변에 발라주세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '오레가노', drops: 8 }, { name: '티트리', drops: 8 }, { name: '레몬', drops: 5 }, { name: '라벤더', drops: 5 }, { name: '레몬그라스', drops: 5 }],
    notes: '무좀 부위와 그 주변에 발라주세요.'
  },
  {
    id: 'r-201', name: '면역력 롤온', category: '호흡기',
    description: '시나몬바크·클로브·티트리 조합 면역 강화 롤온.\n목, 발바닥, 가슴, 등척추에 바르세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '시나몬바크', drops: 4 }, { name: '클로브', drops: 3 }, { name: '레몬', drops: 5 }, { name: '티트리', drops: 6 }, { name: '오레가노', drops: 2 }, { name: '로즈마리', drops: 4 }],
    notes: '목, 발바닥, 가슴, 등척추에 바르세요.'
  },
  {
    id: 'r-202', name: '두통 롤온', category: '통증',
    description: '페퍼민트·라벤더·프랑킨센스 두통 완화 롤온.\n통증 부위에 바르고 향을 맡으세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '페퍼민트', drops: 10 }, { name: '라벤더', drops: 10 }, { name: '프랑킨센스', drops: 8 }],
    notes: '통증 부위에 바르고 향을 맡으세요.'
  },
  {
    id: 'r-203', name: '독감예방 롤온', category: '호흡기',
    description: '프랑킨센스·티트리·온가드·레몬 독감 예방 롤온.\n가슴, 등척추, 발바닥에 바르세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '프랑킨센스', drops: 5 }, { name: '티트리', drops: 7 }, { name: '온가드', drops: 6 }, { name: '레몬', drops: 7 }, { name: '오레가노', drops: 3 }],
    notes: '가슴, 등척추, 발바닥에 바르세요.'
  },
  {
    id: 'r-204', name: '근육통증 롤온', category: '통증',
    description: '라벤더·페퍼민트·사이프러스·마조람 근육 이완 롤온.\n통증이 있는 근육 부위에 바르세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '라벤더', drops: 12 }, { name: '페퍼민트', drops: 12 }, { name: '사이프러스', drops: 5 }, { name: '마조람', drops: 3 }],
    notes: '통증이 있는 근육 부위에 바르세요.'
  },
  {
    id: 'r-205', name: '다목적 청소 스프레이', category: '생활용품',
    description: '온가드·레몬 항균 다목적 청소 스프레이.\n청소가 필요한 곳에 뿌리고 닦아냅니다.',
    refVolume: 100, carrier: '정제수 50ml + 식물성에탄올 50ml',
    ingredients: [{ name: '온가드', drops: 6 }, { name: '레몬', drops: 3 }],
    notes: '청소가 필요한 곳에 뿌리고 닦아낸다.'
  },
  {
    id: 'r-206', name: '계절알러지 롤온', category: '호흡기',
    description: '라벤더·레몬·페퍼민트 계절 알러지 완화 롤온.\n부비강, 눈썹 위, 코 아래에 바른 후 향을 맡으세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '라벤더', drops: 10 }, { name: '레몬', drops: 10 }, { name: '페퍼민트', drops: 10 }],
    notes: '부비강 위, 눈썹 위, 코 아래에 바른 후 향을 맡으세요.'
  },
  {
    id: 'r-207', name: '뇌순환(중추신경계) 롤온', category: '건강케어',
    description: '프랑킨센스·코파이바·밸런스·페퍼민트 뇌순환 케어.\n두피에 바르고 마사지하세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '프랑킨센스', drops: 10 }, { name: '코파이바', drops: 10 }, { name: '밸런스', drops: 10 }, { name: '페퍼민트', drops: 10 }],
    notes: '두피에 바르고 마사지하세요.'
  },
  {
    id: 'r-208', name: '기침.가래 롤온', category: '호흡기',
    description: '유칼립투스·티트리·프랑킨센스 기침·가래 완화.\n가슴과 목에 바르세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '유칼립투스', drops: 8 }, { name: '프랑킨센스', drops: 4 }, { name: '티트리', drops: 6 }, { name: '레몬', drops: 3 }],
    notes: '가슴, 목에 바르세요.'
  },
  {
    id: 'r-209', name: '호흡기 룸스프레이 (비염·미세먼지)', category: '호흡기',
    description: '유칼립투스·페퍼민트·티트리 호흡기 보호 룸스프레이.\n필요한 공간이나 섬유에 스프레이합니다.',
    refVolume: 100, carrier: '정제수 50ml + 식물성에탄올 50ml',
    ingredients: [{ name: '유칼립투스', drops: 3 }, { name: '페퍼민트', drops: 2 }, { name: '레몬', drops: 2 }, { name: '티트리', drops: 2 }],
    notes: '식물성에탄올에 오일 첨가 후 정제수로 채운다.'
  },
  {
    id: 'r-210', name: '시트러스향 룸스프레이', category: '생활용품',
    description: '라임·레몬·버가못의 상큼한 시트러스 룸스프레이.\n필요한 공간이나 섬유에 스프레이합니다.',
    refVolume: 100, carrier: '정제수 50ml + 식물성에탄올 50ml',
    ingredients: [{ name: '라임', drops: 3 }, { name: '레몬', drops: 4 }, { name: '버가못', drops: 4 }],
    notes: '식물성에탄올에 오일 첨가 후 정제수로 채운다.'
  },
  {
    id: 'r-211', name: '숙면.릴렉스 롤온', category: '수면',
    description: '버가못·시더우드·프랑킨센스·라벤더 숙면 롤온.\n발바닥, 가슴, 목뒤, 손목에 바르세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '버가못', drops: 10 }, { name: '시더우드', drops: 10 }, { name: '프랑킨센스', drops: 5 }, { name: '라벤더', drops: 5 }],
    notes: '발바닥, 가슴, 목뒤, 손목에 바르세요.'
  },
  {
    id: 'r-212', name: '손소독제 스프레이', category: '생활용품',
    description: '온가드·오렌지 항균 손소독제 스프레이.\n필요할 때마다 손에 스프레이합니다.',
    refVolume: 100, carrier: '정제수 50ml + 식물성에탄올 50ml',
    ingredients: [{ name: '온가드', drops: 5 }, { name: '오렌지', drops: 2 }],
    notes: '식물성에탄올에 오일 첨가 후 정제수로 채운다.'
  },
  {
    id: 'r-213', name: '소화.배앓이.멀미.장염 롤온', category: '건강케어',
    description: '진저·페퍼민트·오렌지·바질 소화기 케어 롤온.\n배, 발바닥에 바르고 향을 맡으세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '진저', drops: 10 }, { name: '오렌지', drops: 5 }, { name: '페퍼민트', drops: 10 }, { name: '바질', drops: 5 }],
    notes: '배, 발바닥에 바르고 향을 맡으세요.'
  },
  {
    id: 'r-214', name: '셀룰라이트(지방분해) 롤온', category: '피부',
    description: '자몽·레몬·쥬니퍼베리 셀룰라이트 지방분해 롤온.\n해당 부위에 바르고 마사지하세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '레몬', drops: 5 }, { name: '쥬니퍼베리', drops: 3 }, { name: '자몽', drops: 20 }],
    notes: '해당 부위에 바르고 마사지하세요.'
  },
  {
    id: 'r-215', name: '산뜻한 공기 룸스프레이', category: '생활용품',
    description: '페퍼민트·오렌지·유칼립투스·로즈마리 청량 룸스프레이.\n필요한 공간이나 섬유에 스프레이합니다.',
    refVolume: 100, carrier: '정제수 50ml + 식물성에탄올 50ml',
    ingredients: [{ name: '페퍼민트', drops: 2 }, { name: '오렌지', drops: 3 }, { name: '유칼립투스', drops: 2 }, { name: '로즈마리', drops: 1 }],
    notes: '식물성에탄올에 오일 첨가 후 정제수로 채운다.'
  },
  {
    id: 'r-216', name: '불안.걱정 롤온', category: '스트레스',
    description: '버가못·라벤더·프랑킨센스·일랑일랑 불안 완화 롤온.\n향수처럼 맥박에 바르고 향을 맡으세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '버가못', drops: 5 }, { name: '프랑킨센스', drops: 3 }, { name: '라벤더', drops: 4 }, { name: '일랑일랑', drops: 2 }],
    notes: '향수처럼 맥박에 바르고 향을 맡으세요.'
  },
  {
    id: 'r-217', name: '비염.천식.코막힘 롤온', category: '호흡기',
    description: '유칼립투스·페퍼민트·레몬 편안한 호흡 롤온.\n가슴, 등, 코밀에 바르고 향을 맡으세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '유칼립투스', drops: 8 }, { name: '레몬', drops: 8 }, { name: '프랑킨센스', drops: 3 }, { name: '페퍼민트', drops: 8 }],
    notes: '가슴, 등, 코밑에 바르고 향을 맡으세요.'
  },
  {
    id: 'r-218', name: '생리증후군 롤온', category: '건강케어',
    description: '클래리세이지·라벤더·일랑일랑·시더우드 생리 케어 롤온.\n생리 전후 목뒤, 가슴, 복부에 바르세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '클래리세이지', drops: 10 }, { name: '라벤더', drops: 8 }, { name: '일랑일랑', drops: 3 }, { name: '시더우드', drops: 5 }],
    notes: '생리 전후 목뒤, 가슴, 복부에 바르세요.'
  },
  {
    id: 'r-219', name: '반려견 냄새제거 스프레이', category: '생활용품',
    description: '라벤더·오렌지·티트리·유칼립투스 반려견 냄새 제거.\n필요한 공간이나 섬유에 스프레이합니다.',
    refVolume: 100, carrier: '정제수 50ml + 식물성에탄올 50ml',
    ingredients: [{ name: '라벤더', drops: 3 }, { name: '오렌지', drops: 3 }, { name: '티트리', drops: 2 }, { name: '유칼립투스', drops: 2 }],
    notes: '식물성에탄올에 오일 첨가 후 정제수로 채운다.'
  },
  {
    id: 'r-220', name: '안티에이징 페이스 미스트', category: '피부',
    description: '프랑킨센스·코파이바·제라늄·시더우드 안티에이징 미스트.\n얼굴에 자주 분사해주세요.',
    refVolume: 100, carrier: '포어리듀싱토어 채우기',
    ingredients: [{ name: '프랑킨센스', drops: 2 }, { name: '코파이바', drops: 2 }, { name: '라벤더', drops: 2 }, { name: '제라늄', drops: 2 }, { name: '파촐리', drops: 2 }, { name: '시더우드', drops: 2 }],
    notes: '얼굴에 자주 분사해주세요.'
  },
  {
    id: 'r-221', name: '안티스트레스 롤온', category: '스트레스',
    description: '스피아민트·라임·자몽·라벤더 스트레스 해소 롤온.\n손목, 목, 관자놀이에 바르세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '스피아민트', drops: 5 }, { name: '라임', drops: 10 }, { name: '자몽', drops: 10 }, { name: '라벤더', drops: 5 }],
    notes: ''
  },
  {
    id: 'r-222', name: '안티에이징스킨 (주름재생·건조)', category: '피부',
    description: '프랑킨센스·샌달우드·미르·로즈제라늄 주름 재생 롤온.\n얼굴에 바르세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '프랑킨센스', drops: 4 }, { name: '샌달우드', drops: 2 }, { name: '라벤더', drops: 3 }, { name: '미르', drops: 2 }, { name: '로즈제라늄', drops: 2 }],
    notes: '얼굴에 바르세요.'
  },
  {
    id: 'r-223', name: '아토피(극건조) 롤온', category: '피부',
    description: '캐모마일·라벤더·티트리·프랑킨센스 아토피 집중 케어.\n필요한 환부에 바르세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '캐모마일', drops: 6 }, { name: '라벤더', drops: 8 }, { name: '티트리', drops: 8 }, { name: '프랑킨센스', drops: 4 }],
    notes: '필요한 환부에 바르세요.'
  },
  {
    id: 'r-224', name: '혈액순환.부종 롤온', category: '통증',
    description: '사이프러스·레몬그라스·쥬니퍼베리 부종 완화 롤온.\n부종이 있는 곳에 바르고 마사지해줍니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '레몬그라스', drops: 3 }, { name: '쥬니퍼베리', drops: 3 }, { name: '사이프러스', drops: 18 }],
    notes: '부종이 있는 곳에 바르고 마사지해줍니다.'
  },
  {
    id: 'r-225', name: '헤어컨디셔닝 스프레이', category: '피부',
    description: '일랑일랑·로즈마리 헤어 컨디셔닝 스프레이.\n헤어에 뿌리고 스타일링합니다.',
    refVolume: 0, carrier: '코코넛오일 2큰술 + 글리세린 2큰술 + 라벤더워터 4큰술 + 정제수 채우기',
    ingredients: [{ name: '일랑일랑', drops: 5 }, { name: '로즈마리', drops: 5 }],
    notes: '헤어에 뿌리고 스타일링한다. 총 100ml 기준.'
  },
  {
    id: 'r-226', name: '호르몬 밸런스(갱년기)', category: '건강케어',
    description: '클래리세이지·일랑일랑·로즈제라늄 갱년기 호르몬 롤온.\n향수처럼 바르세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '일랑일랑', drops: 5 }, { name: '라벤더', drops: 5 }, { name: '로즈제라늄', drops: 3 }, { name: '클래리세이지', drops: 10 }],
    notes: '향수처럼 바르세요.'
  },
  {
    id: 'r-227', name: '허브향 룸스프레이', category: '생활용품',
    description: '레몬그라스·로즈마리·유칼립투스 허브향 룸스프레이.\n필요한 공간이나 섬유에 뿌립니다.',
    refVolume: 100, carrier: '정제수 50ml + 식물성에탄올 50ml',
    ingredients: [{ name: '레몬그라스', drops: 2 }, { name: '로즈마리', drops: 3 }, { name: '유칼립투스', drops: 3 }],
    notes: '식물성에탄올에 오일 첨가 후 정제수로 채운다.'
  },
  {
    id: 'r-228', name: '탈모방지 롤온', category: '건강케어',
    description: '로즈마리·시더우드·일랑일랑·라벤더 탈모 방지 롤온.\n샴푸 후 자기 전 두피에 바르세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '로즈마리', drops: 7 }, { name: '시더우드', drops: 7 }, { name: '일랑일랑', drops: 3 }, { name: '라벤더', drops: 5 }],
    notes: '샴푸 후 자기 전 두피에 바르세요.'
  },
  {
    id: 'r-229', name: '피부진정 (트러블·여드름)', category: '피부',
    description: '라벤더·티트리 피부 트러블·여드름 진정 롤온.\n진정이 필요한 부분에 발라주세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '라벤더', drops: 15 }, { name: '티트리', drops: 20 }],
    notes: '진정이 필요한 부분에 발라주세요.'
  },
  {
    id: 'r-230', name: '집중(일·공부) 롤온', category: '집중력',
    description: '오렌지·페퍼민트·로즈마리 집중력 향상 롤온.\n맥박이 뛰는 곳에 향수처럼 바르고 향을 맡으세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '오렌지', drops: 20 }, { name: '페퍼민트', drops: 10 }, { name: '로즈마리', drops: 5 }],
    notes: '맥박이 뛰는 곳에 향수처럼 바르고 향을 맡으세요.'
  },
  {
    id: 'r-231', name: '침구 스프레이 (숙면·릴렉스)', category: '수면',
    description: '라벤더·캐모마일 숙면 유도 침구 스프레이.\n베개나 이불에 스프레이합니다.',
    refVolume: 100, carrier: '정제수 50ml + 식물성에탄올 50ml',
    ingredients: [{ name: '라벤더', drops: 4 }, { name: '캐모마일', drops: 3 }],
    notes: '식물성에탄올에 오일 첨가 후 정제수로 채운다.'
  },
  {
    id: 'r-232', name: '편백(피톤치드) 스프레이', category: '생활용품',
    description: '히노끼 피톤치드 공기 정화 룸스프레이.\n필요한 공간이나 섬유에 스프레이합니다.',
    refVolume: 100, carrier: '정제수 50ml + 식물성에탄올 50ml',
    ingredients: [{ name: '히노끼', drops: 9 }],
    notes: '식물성에탄올에 오일 첨가 후 정제수로 채운다.'
  },
  {
    id: 'r-233', name: '에너지업 롤온', category: '스트레스',
    description: '오렌지·레몬·버가못·페퍼민트 에너지 충전 롤온.\n향수처럼 바르고 향을 맡으세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '오렌지', drops: 10 }, { name: '레몬', drops: 10 }, { name: '버가못', drops: 5 }, { name: '페퍼민트', drops: 10 }],
    notes: '향수처럼 바르고 향을 맡으세요.'
  }
];

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
    ingredients: [{ name: '지몽', drops: 26 }, { name: '메타파워', drops: 26 }, { name: '사이프레스', drops: 13 }, { name: '진저', drops: 13 }, { name: '파촐리', drops: 5 }, { name: '로즈제라늄', drops: 5 }],
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
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '알로에베라겔', ml: 80}, {name: '코코넛오일', ml: 16}, { name: '코파이바', drops: 10 }, { name: '프랑킨센스', drops: 5 }, { name: '야로우품', drops: 17 }, { name: '로즈제라늄', drops: 5 }, { name: '하와이안 샌달우드', drops: 3 }],
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
    ingredients: [{ name: '오레가노', drops: 6 }, { name: '라벤더', drops: 4 }],
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
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '알로에베라겔', ml: 90}, { name: '라벤더', drops: 20 }, { name: '페퍼민트', drops: 10 }],
    notes: ''
  },
  {
    id: 'r-021', name: '클렌징오일', category: '피부',
    description: '세 가지 캐리어오일 기반 클렌징오일.\n화장과 노폐물을 부드럽게 녹여냅니다.\n마른 피부에 마사지 후 물로 헹구세요.',
    refVolume: 30, carrier: '없음 (원액)',
    ingredients: [{ name: '올리브리퀴드', ml: 6 }, { name: '호호바오일', ml: 12 }, { name: '살구씨오일', ml: 12 }, { name: '라벤더', drops: 4 }, { name: '오렌지', drops: 4 }, { name: '레몬그라스', drops: 2 }],
    notes: ''
  },
  {
    id: 'r-022', name: '헤어 에센스', category: '피부',
    description: '건조하고 갈라진 모발 케어 에센스.\n시더우드로 두피, 페퍼민트로 청량감을 더합니다.\n머리카락 중간~끝에만 소량 바르세요.',
    refVolume: 50, carrier: '없음 (원액)',
    ingredients: [{name: '코코넛오일', ml: 25}, {name: '정제수', ml: 25}, { name: '시더우드', drops: 5 }, { name: '라벤더', drops: 3 }, { name: '오렌지', drops: 4 }, { name: '페퍼민트', drops: 2 }],
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
    refVolume: 0, carrier: '없음 (원액)',
    ingredients: [{name: '코코넛오일', ml: 6}, {name: '스윗아몬드오일', ml: 6}, {name: '비즈왁스', ml: 10}, { name: '원하는 오일 2-3가지', drops: 12 }],
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
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '정제수', ml: 50}, {name: '발향베이스', ml: 50}, { name: '온가드', drops: 20 }, { name: '티트리', drops: 10 }, { name: '레몬', drops: 10 }],
    notes: ''
  },
  {
    id: 'r-056', name: '철벽 스프레이 (바이러스)', category: '호흡기',
    description: '오레가노·타임·클로브 강력 항바이러스 조합.\n바이러스 유행 시즌에 공간에 뿌려 사용합니다.',
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '정제수', ml: 50}, {name: '발향베이스', ml: 50}, { name: '오레가노', drops: 10 }, { name: '타임', drops: 10 }, { name: '클로브', drops: 10 }, { name: '레몬', drops: 10 }],
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
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '정제수', ml: 50}, {name: '발향베이스', ml: 50}, { name: '세레니티', drops: 14 }, { name: '이지에어', drops: 14 }, { name: '티트리', drops: 6 }, { name: '레몬', drops: 6 }],
    notes: ''
  },
  {
    id: 'r-061', name: '숙면 스프레이 (목직한 향)', category: '수면',
    description: '라벤더·로만캐모마일의 묵직한 향 수면 스프레이.\n깊고 진한 향을 선호하는 분에게 추천합니다.',
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '정제수', ml: 50}, {name: '발향베이스', ml: 50}, { name: '라벤더', drops: 16 }, { name: '오렌지', drops: 10 }, { name: '시더우드', drops: 8 }, { name: '로만캐모마일', drops: 6 }],
    notes: ''
  },
  {
    id: 'r-062', name: '침구용 스프레이', category: '수면',
    description: '수면·호흡기·방충 다기능 침구 스프레이.\n취침 전 이불과 베개에 뿌리세요.',
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '정제수', ml: 50}, {name: '발향베이스', ml: 50}, { name: '라벤더', drops: 18 }, { name: '유칼립투스', drops: 7 }, { name: '페퍼민트', drops: 7 }, { name: '오렌지', drops: 7 }],
    notes: ''
  },

  // ── 스트레스 ─────────────────────────────────────────
  {
    id: 'r-070', name: '스트레스케어 스프레이', category: '스트레스',
    description: '밸런스·베르가못 스트레스 완화 공간 스프레이.\n업무 공간, 침실에 뿌려 심리 안정감을 조성합니다.',
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '정제수', ml: 50}, {name: '발향베이스', ml: 50}, { name: '밸런스', drops: 10 }, { name: '베르가못', drops: 10 }, { name: '어댑티브', drops: 10 }, { name: '시트러스블리스', drops: 10 }],
    notes: '오렌지 대체 가능'
  },
  {
    id: 'r-071', name: '활력 스프레이', category: '스트레스',
    description: '시트러스블리스·페퍼민트 활력 충전 스프레이.\n아침이나 오후 슬럼프 시간에 뿌리세요.',
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '정제수', ml: 50}, {name: '발향베이스', ml: 50}, { name: '시트러스블리스', drops: 14 }, { name: '자몽', drops: 14 }, { name: '페퍼민트', drops: 6 }, { name: '시더우드', drops: 6 }],
    notes: ''
  },

  // ── 집중력 ──────────────────────────────────────────
  {
    id: 'r-080', name: '집중력 공부방 스프레이', category: '집중력',
    description: '집중력·기억력 향상 공간 스프레이.\n공부방, 사무실에 뿌려 맑은 머리를 유지하세요.\n시험 준비, 중요한 업무 전 사용을 권장합니다.',
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '정제수', ml: 50}, {name: '발향베이스', ml: 50}, { name: '밸런스', drops: 14 }, { name: '레몬', drops: 14 }, { name: '페퍼민트', drops: 6 }, { name: '로즈마리', drops: 6 }],
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
    refVolume: 10, carrier: '없음 (원액)',
    ingredients: [{name: '정제수', ml: 5}, {name: '발향베이스', ml: 5}, { name: '원하는 오일 3가지', drops: 5 }],
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
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '정제수', ml: 60}, {name: '발향베이스', ml: 40}, { name: '파촐리', drops: 20 }, { name: '사이프레스', drops: 20 }, { name: '로즈제라늄', drops: 20 }, { name: '유칼립투스', drops: 10 }, { name: '티트리', drops: 10 }, { name: '레몬', drops: 10 }],
    notes: ''
  },
  {
    id: 'r-115', name: '여성 청결제', category: '건강케어',
    description: '오렌지 오일로 상쾌함을 더한 천연 여성 청결제.\n순한 성분으로 매일 사용할 수 있습니다.',
    refVolume: 30, carrier: '없음 (원액)',
    ingredients: [{name: '정제수', ml: 15}, {name: '온가드 핸드위시', ml: 15}, { name: '오렌지', drops: 4 }],
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
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '정제수', ml: 50}, {name: '발향베이스', ml: 50}, { name: '레몬유칼립투스', drops: 20 }, { name: '레몬그라스', drops: 20 }, { name: '페퍼민트', drops: 10 }, { name: '라벤더', drops: 8 }, { name: '유칼립투스', drops: 10 }, { name: '시나몬바크', drops: 5 }],
    notes: '멜리사 대체 가능'
  },
  {
    id: 'r-102', name: '벌레 퇴치제 (버전1)', category: '생활용품',
    description: '테라쉴드 기반 순한 벌레 퇴치 스프레이.\n일상 야외 활동 시 피부와 옷에 뿌립니다.',
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '정제수', ml: 50}, {name: '발향베이스', ml: 50}, { name: '테라쉴드', drops: 20 }, { name: '레몬유칼립투스', drops: 10 }, { name: '레몬그라스', drops: 10 }],
    notes: ''
  },
  {
    id: 'r-103', name: '벌레 퇴치제 (버전2)', category: '생활용품',
    description: '로즈제라늄을 추가한 향 좋은 벌레 퇴치 스프레이.\n아이와 함께하는 야외 활동에 적합합니다.',
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '정제수', ml: 50}, {name: '발향베이스', ml: 50}, { name: '테라쉴드', drops: 18 }, { name: '레몬유칼립투스', drops: 8 }, { name: '레몬그라스', drops: 8 }, { name: '로즈제라늄', drops: 6 }],
    notes: ''
  },
  {
    id: 'r-104', name: '숲속향 스프레이', category: '생활용품',
    description: '히노키·사이프레스 피톤치드 실내 삼림욕 스프레이.\n거실, 사무실에 뿌려 맑은 공기를 만들어줍니다.',
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '정제수', ml: 50}, {name: '발향베이스', ml: 50}, { name: '히노키', drops: 10 }, { name: '사이프레스', drops: 10 }, { name: '포레스트베싱', drops: 10 }, { name: '레몬', drops: 10 }],
    notes: '클리어리파이/시베리안퍼, 오렌지 대체 가능'
  },
  {
    id: 'r-105', name: '섬유탈취제 (라벤더)', category: '생활용품',
    description: '라벤더·퓨리파이 천연 섬유 탈취 스프레이.\n소파, 카펫, 옷에 뿌려 탈취 효과를 누리세요.',
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '정제수', ml: 50}, {name: '발향베이스', ml: 50}, { name: '라벤더', drops: 15 }, { name: '퓨리파이', drops: 15 }, { name: '레몬그라스', drops: 10 }],
    notes: ''
  },
  {
    id: 'r-106', name: '섬유탈취제 (상쾌)', category: '생활용품',
    description: '유칼립투스·레몬 향 섬유 탈취 스프레이.\n운동복, 이불 냄새 제거에 사용합니다.',
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '정제수', ml: 50}, {name: '발향베이스', ml: 50}, { name: '유칼립투스', drops: 10 }, { name: '티트리', drops: 10 }, { name: '레몬', drops: 20 }],
    notes: ''
  },
  {
    id: 'r-108', name: '공기정화 스프레이', category: '생활용품',
    description: '클리어리파이·히노키 공기 정화 스프레이.\n환절기, 외출 후 집 안 공기 정화에 사용하세요.',
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '정제수', ml: 50}, {name: '발향베이스', ml: 50}, { name: '클리어리파이', drops: 10 }, { name: '히노키', drops: 10 }, { name: '사이프레스', drops: 10 }, { name: '레몬', drops: 10 }],
    notes: '레몬 대신 오렌지 가능'
  },
  {
    id: 'r-109', name: '청소용 스프레이', category: '생활용품',
    description: '온가드·레몬 항균 청소 스프레이.\n주방, 화장실, 도마 등에 활용합니다.',
    refVolume: 100, carrier: '발향베이스',
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
    refVolume: 1000, carrier: '없음 (원액)',
    ingredients: [{name: '백식초', ml: 1000}, { name: '온가드', drops: 30 }, { name: '라벤더', drops: 30 }, { name: '자몽(또는 오렌지/라임)', drops: 30 }],
    notes: '한번에 10-20g 사용. 일주일 숙성 후 사용'
  },
  {
    id: 'r-114', name: '손소독제', category: '생활용품',
    description: '알로에베라겔 기반 촉촉한 천연 손소독제.\n온가드·티트리의 항균력으로 강력하게 살균합니다.',
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '무수에탄올', ml: 40}, {name: '알로에베라겔', ml: 60}, {name: '히아루론산', ml: 1}, { name: '온가드', drops: 12 }, { name: '티트리', drops: 12 }],
    notes: ''
  },
  {
    id: 'r-116', name: '설거지비누', category: '생활용품',
    description: '온가드 항균·오렌지 세정력의 천연 설거지 비누.\n화학 성분 없이 깨끗하게 세척합니다.',
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{ name: '비누베이스', ml: 90 }, { name: 'EM원액', ml: 10 }, { name: '온가드', drops: 2 }, { name: '오렌지', drops: 1 }],
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
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '정제수', ml: 50}, {name: '식물성에탄올', ml: 50}, { name: '온가드', drops: 6 }, { name: '레몬', drops: 3 }],
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
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '정제수', ml: 50}, {name: '식물성에탄올', ml: 50}, { name: '유칼립투스', drops: 3 }, { name: '페퍼민트', drops: 2 }, { name: '레몬', drops: 2 }, { name: '티트리', drops: 2 }],
    notes: '식물성에탄올에 오일 첨가 후 정제수로 채운다.'
  },
  {
    id: 'r-210', name: '시트러스향 룸스프레이', category: '생활용품',
    description: '라임·레몬·베르가못의 상큼한 시트러스 룸스프레이.\n필요한 공간이나 섬유에 스프레이합니다.',
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '정제수', ml: 50}, {name: '식물성에탄올', ml: 50}, { name: '라임', drops: 3 }, { name: '레몬', drops: 4 }, { name: '베르가못', drops: 4 }],
    notes: '식물성에탄올에 오일 첨가 후 정제수로 채운다.'
  },
  {
    id: 'r-211', name: '숙면.릴렉스 롤온', category: '수면',
    description: '베르가못·시더우드·프랑킨센스·라벤더 숙면 롤온.\n발바닥, 가슴, 목뒤, 손목에 바르세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '베르가못', drops: 10 }, { name: '시더우드', drops: 10 }, { name: '프랑킨센스', drops: 5 }, { name: '라벤더', drops: 5 }],
    notes: '발바닥, 가슴, 목뒤, 손목에 바르세요.'
  },
  {
    id: 'r-212', name: '손소독제 스프레이', category: '생활용품',
    description: '온가드·오렌지 항균 손소독제 스프레이.\n필요할 때마다 손에 스프레이합니다.',
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '정제수', ml: 50}, {name: '식물성에탄올', ml: 50}, { name: '온가드', drops: 5 }, { name: '오렌지', drops: 2 }],
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
    description: '자몽·레몬·주니퍼베리 셀룰라이트 지방분해 롤온.\n해당 부위에 바르고 마사지하세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '레몬', drops: 5 }, { name: '주니퍼베리', drops: 3 }, { name: '자몽', drops: 20 }],
    notes: '해당 부위에 바르고 마사지하세요.'
  },
  {
    id: 'r-215', name: '산뜻한 공기 룸스프레이', category: '생활용품',
    description: '페퍼민트·오렌지·유칼립투스·로즈마리 청량 룸스프레이.\n필요한 공간이나 섬유에 스프레이합니다.',
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '정제수', ml: 50}, {name: '식물성에탄올', ml: 50}, { name: '페퍼민트', drops: 2 }, { name: '오렌지', drops: 3 }, { name: '유칼립투스', drops: 2 }, { name: '로즈마리', drops: 1 }],
    notes: '식물성에탄올에 오일 첨가 후 정제수로 채운다.'
  },
  {
    id: 'r-216', name: '불안.걱정 롤온', category: '스트레스',
    description: '베르가못·라벤더·프랑킨센스·일랑일랑 불안 완화 롤온.\n향수처럼 맥박에 바르고 향을 맡으세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '베르가못', drops: 5 }, { name: '프랑킨센스', drops: 3 }, { name: '라벤더', drops: 4 }, { name: '일랑일랑', drops: 2 }],
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
    description: '클라리세이지·라벤더·일랑일랑·시더우드 생리 케어 롤온.\n생리 전후 목뒤, 가슴, 복부에 바르세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '클라리세이지', drops: 10 }, { name: '라벤더', drops: 8 }, { name: '일랑일랑', drops: 3 }, { name: '시더우드', drops: 5 }],
    notes: '생리 전후 목뒤, 가슴, 복부에 바르세요.'
  },
  {
    id: 'r-219', name: '반려견 냄새제거 스프레이', category: '생활용품',
    description: '라벤더·오렌지·티트리·유칼립투스 반려견 냄새 제거.\n필요한 공간이나 섬유에 스프레이합니다.',
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '정제수', ml: 50}, {name: '식물성에탄올', ml: 50}, { name: '라벤더', drops: 3 }, { name: '오렌지', drops: 3 }, { name: '티트리', drops: 2 }, { name: '유칼립투스', drops: 2 }],
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
    description: '스피어민트·라임·자몽·라벤더 스트레스 해소 롤온.\n손목, 목, 관자놀이에 바르세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '스피어민트', drops: 5 }, { name: '라임', drops: 10 }, { name: '자몽', drops: 10 }, { name: '라벤더', drops: 5 }],
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
    description: '사이프러스·레몬그라스·주니퍼베리 부종 완화 롤온.\n부종이 있는 곳에 바르고 마사지해줍니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '레몬그라스', drops: 3 }, { name: '주니퍼베리', drops: 3 }, { name: '사이프러스', drops: 18 }],
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
    description: '클라리세이지·일랑일랑·로즈제라늄 갱년기 호르몬 롤온.\n향수처럼 바르세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '일랑일랑', drops: 5 }, { name: '라벤더', drops: 5 }, { name: '로즈제라늄', drops: 3 }, { name: '클라리세이지', drops: 10 }],
    notes: '향수처럼 바르세요.'
  },
  {
    id: 'r-227', name: '허브향 룸스프레이', category: '생활용품',
    description: '레몬그라스·로즈마리·유칼립투스 허브향 룸스프레이.\n필요한 공간이나 섬유에 뿌립니다.',
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '정제수', ml: 50}, {name: '식물성에탄올', ml: 50}, { name: '레몬그라스', drops: 2 }, { name: '로즈마리', drops: 3 }, { name: '유칼립투스', drops: 3 }],
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
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '정제수', ml: 50}, {name: '식물성에탄올', ml: 50}, { name: '라벤더', drops: 4 }, { name: '캐모마일', drops: 3 }],
    notes: '식물성에탄올에 오일 첨가 후 정제수로 채운다.'
  },
  {
    id: 'r-232', name: '편백(피톤치드) 스프레이', category: '생활용품',
    description: '히노키 피톤치드 공기 정화 룸스프레이.\n필요한 공간이나 섬유에 스프레이합니다.',
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '정제수', ml: 50}, {name: '식물성에탄올', ml: 50}, { name: '히노키', drops: 9 }],
    notes: '식물성에탄올에 오일 첨가 후 정제수로 채운다.'
  },
  {
    id: 'r-233', name: '에너지업 롤온', category: '스트레스',
    description: '오렌지·레몬·베르가못·페퍼민트 에너지 충전 롤온.\n향수처럼 바르고 향을 맡으세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{ name: '오렌지', drops: 10 }, { name: '레몬', drops: 10 }, { name: '베르가못', drops: 5 }, { name: '페퍼민트', drops: 10 }],
    notes: '향수처럼 바르고 향을 맡으세요.'
  },
  {
    id: 'r-234', name: '밤회복크림', category: '피부',
    description: '세레니티·시더우드 나이트 리셋 크림.\n잠들기 전 세안 후 얼굴에 적당량 바르세요.',
    refVolume: 30, carrier: '없음 (원액)',
    ingredients: [{name: '크림베이스', ml: 30}, { name: '세레니티', drops: 4 }, { name: '시더우드', drops: 1 }, { name: '비타민E', drops: 1 }, { name: '고분자 히알루론산', drops: 1 }],
    notes: '취침 전 세안 후 적당량 바릅니다.'
  },
  {
    id: 'r-235', name: '수분미스트', category: '피부',
    description: '코파이바·프랑킨센스·일랑일랑·로즈제라늄 수분 페이셜 미스트.\n내 피부타입에 맞는 워터 베이스로 만드세요.\n(알로에베라워터·어성초워터·티트리워터·캐모마일워터·제라늄워터 중 선택)',
    refVolume: 50, carrier: '워터 베이스 채우기',
    ingredients: [{ name: '코파이바', drops: 3 }, { name: '프랑킨센스', drops: 3 }, { name: '일랑일랑', drops: 2 }, { name: '로즈제라늄', drops: 2 }],
    notes: '워터 베이스에 오일 첨가 후 잘 흔들어 사용하세요.'
  },
  {
    id: 'r-236', name: '바디클렌저 (건성)', category: '피부',
    description: '시더우드·라벤더 건성 피부 천연 바디클렌저.\n샤워 시 적당량을 사용하세요.',
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '캐스틸 비누', ml: 80}, {name: '글리세린', ml: 10}, { name: '시더우드', drops: 10 }, { name: '라벤더', drops: 10 }],
    notes: '캐스틸 비누와 글리세린 혼합 후 에센셜오일을 추가하세요.'
  },
  {
    id: 'r-237', name: '바디클렌저 (수분부족 지성)', category: '피부',
    description: '로즈제라늄·코파이바 수분부족 지성 피부 천연 바디클렌저.\n샤워 시 적당량을 사용하세요.',
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '캐스틸 비누', ml: 80}, {name: '글리세린', ml: 10}, { name: '로즈제라늄', drops: 10 }, { name: '코파이바', drops: 10 }],
    notes: '캐스틸 비누와 글리세린 혼합 후 에센셜오일을 추가하세요.'
  },
  {
    id: 'r-238', name: '바디클렌저 (지성)', category: '피부',
    description: '티트리·라벤더 지성 피부 천연 바디클렌저.\n샤워 시 적당량을 사용하세요.',
    refVolume: 100, carrier: '없음 (원액)',
    ingredients: [{name: '캐스틸 비누', ml: 80}, {name: '글리세린', ml: 10}, { name: '티트리', drops: 10 }, { name: '라벤더', drops: 10 }],
    notes: '캐스틸 비누와 글리세린 혼합 후 에센셜오일을 추가하세요.'
  },
  {
    id: 'r-239', name: '냉장고/신발장 탈취제', category: '생활용품',
    description: '퓨리파이·레몬·시베리안퍼 천연 탈취제.\n베이킹 파우더에 오일을 잘 섞은 후\n종이컵이나 용기에 담아 해당 장소에 비치합니다.',
    refVolume: 0, carrier: '베이킹 파우더 100g',
    ingredients: [{name: '퓨리파이', drops: 20}, {name: '레몬', drops: 5}, {name: '시베리안퍼', drops: 5}],
    notes: '베이킹 파우더 100g에 오일을 잘 섞어 종이컵에 담아 냉장고·신발장에 비치하세요.'
  },
  {
    id: 'r-240', name: '천연섬유 탈취제 스프레이', category: '생활용품',
    description: '퓨리파이·시트러스블리스·레몬 섬유 탈취 스프레이.\n옷이나 섬유에 뿌려 냄새를 제거합니다.',
    refVolume: 50, carrier: '물:알콜 1:1로 채우기',
    ingredients: [{name: '퓨리파이', drops: 20}, {name: '시트러스블리스', drops: 10}, {name: '레몬', drops: 5}],
    notes: '알콜에 오일을 먼저 섞은 후 물을 추가하고 잘 흔들어 사용하세요.'
  },
  {
    id: 'r-241', name: '반려견 배변패드/룸 스프레이', category: '생활용품',
    description: '퓨리파이·스피어민트·레몬 반려견 공간 탈취 스프레이.\n배변패드 주변이나 생활공간에 뿌려줍니다.',
    refVolume: 50, carrier: '물로 채우기',
    ingredients: [{name: '퓨리파이', drops: 15}, {name: '스피어민트', drops: 5}, {name: '레몬', drops: 5}],
    notes: '반려견 직접 접촉은 피하고 공간에 뿌려주세요.'
  },
  {
    id: 'r-242', name: '반려견 발바닥 젤리 보호 롤온', category: '건강케어',
    description: '테라쉴드·코파이바 반려견 발바닥 보호 롤온.\n산책 전후 발바닥에 발라줍니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '테라쉴드', ml: 5}, {name: '코파이바', drops: 3}],
    notes: '산책 전후 반려견 발바닥에 소량 발라줍니다.'
  },
  {
    id: 'r-243', name: '피부진정 버물리 롤온 (테라쉴드)', category: '피부',
    description: '테라쉴드·페퍼민트·라벤더 피부진정 롤온.\n자극 받은 피부 부위에 수시로 도포하세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '테라쉴드', ml: 7}, {name: '페퍼민트', drops: 3}, {name: '라벤더', drops: 2}],
    notes: '트러블, 자극, 상처 부위에 수시로 도포합니다.'
  },
  {
    id: 'r-244', name: '스트레스성 근육 이완 롤온', category: '통증',
    description: '패스트탄스·세레니티 근육 이완 롤온.\n긴장된 근육 부위에 롤링합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '패스트탄스', drops: 6}, {name: '세레니티', drops: 4}],
    notes: '목, 어깨, 긴장된 근육 부위에 롤링하세요.'
  },
  {
    id: 'r-245', name: '두통 완화 롤온 (패스트탄스)', category: '통증',
    description: '패스트탄스·페퍼민트·라벤더 두통 완화 롤온.\n관자놀이, 이마, 뒷목에 롤링합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '패스트탄스', drops: 15}, {name: '페퍼민트', drops: 3}, {name: '라벤더', drops: 3}],
    notes: '관자놀이, 이마, 뒷목에 롤링하세요.'
  },
  {
    id: 'r-246', name: '어깨 결림 완화 롤온', category: '통증',
    description: '패스트탄스·클래리캄·마조람·밸런스 어깨 결림 완화 롤온.\n어깨, 목, 상부 등에 롤링합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '패스트탄스', drops: 10}, {name: '클래리캄', drops: 10}, {name: '마조람', drops: 7}, {name: '밸런스', drops: 7}, {name: '아로마터치', drops: 5}, {name: '베르가못', drops: 5}, {name: '일랑일랑', drops: 5}],
    notes: '어깨, 목, 상부 등 결림 부위에 롤링하세요.'
  },
  {
    id: 'r-247', name: '미세먼지 정화 디퓨징', category: '생활용품',
    description: '클리어리파이·유칼립투스·사이프레스·프랑킨센스 공기정화 디퓨징.\n미세먼지가 심한 날 디퓨저에 넣어 사용합니다.',
    refVolume: 300, carrier: '디퓨저',
    ingredients: [{name: '클리어리파이', drops: 4}, {name: '유칼립투스', drops: 2}, {name: '사이프레스', drops: 2}, {name: '프랑킨센스', drops: 2}],
    notes: '300ml 디퓨저 기준으로 사용하세요.'
  },
  {
    id: 'r-248', name: '공기정화 룸 스프레이', category: '생활용품',
    description: '클리어리파이·레몬·퓨리파이 공기정화 룸 스프레이.\n공간에 뿌려 공기를 정화합니다.',
    refVolume: 200, carrier: '물로 채우기',
    ingredients: [{name: '클리어리파이', drops: 30}, {name: '레몬', drops: 10}, {name: '퓨리파이', drops: 10}],
    notes: '물에 오일을 섞어 잘 흔든 후 공간에 뿌려주세요.'
  },
  {
    id: 'r-249', name: '스트레스 및 공황장애 롤온', category: '스트레스',
    description: '네롤리 터치·클리어리파이·자몽·베르가못·멜리사 공황장애 완화 롤온.\n향수처럼 맥박 부위에 바르고 향을 맡으세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '네롤리 터치', ml: 3}, {name: '클리어리파이', drops: 5}, {name: '자몽', drops: 5}, {name: '베르가못', drops: 5}, {name: '스피어민트', drops: 3}, {name: '멜리사', drops: 2}],
    notes: '향수처럼 맥박, 목, 손목에 바르고 깊이 흡입하세요.'
  },
  {
    id: 'r-250', name: '갱년기 요실금 케어 롤온', category: '건강케어',
    description: '클래리캄·레몬그라스·베티버·유칼립투스 갱년기 요실금 케어 롤온.\n서혜부, 꼬리뼈를 마사지합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '클래리캄', drops: 13}, {name: '레몬그라스', drops: 5}, {name: '베티버', drops: 6}, {name: '유칼립투스', drops: 6}],
    notes: '서혜부, 꼬리뼈 부위에 마사지하세요.'
  },
  {
    id: 'r-251', name: '생리통 케어 롤온 (버전1)', category: '건강케어',
    description: '클래리캄·딥블루·마조람 생리통 완화 롤온.\n아랫배, 꼬리뼈를 마사지합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '클래리캄', drops: 10}, {name: '딥블루', drops: 5}, {name: '마조람', drops: 5}],
    notes: '생리 전후 아랫배, 꼬리뼈 부위에 마사지하세요.'
  },
  {
    id: 'r-252', name: '생리통 케어 롤온 (버전2)', category: '건강케어',
    description: '클래리캄·제라늄·코파이바 생리통 완화 롤온.\n아랫배, 꼬리뼈를 마사지합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '클래리캄', drops: 10}, {name: '제라늄', drops: 5}, {name: '코파이바', drops: 5}],
    notes: '생리 전후 아랫배, 꼬리뼈 부위에 마사지하세요.'
  },
  {
    id: 'r-253', name: '숙취 해소 블렌딩 롤온', category: '건강케어',
    description: '젠도크린·다이제스트젠·페퍼민트·레몬·프랑킨센스 숙취 해소 롤온.\n복부와 발바닥에 도포합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '젠도크린', drops: 15}, {name: '다이제스트젠', drops: 5}, {name: '페퍼민트', drops: 5}, {name: '레몬', drops: 5}, {name: '프랑킨센스', drops: 5}],
    notes: '복부와 발바닥에 도포하세요.'
  },
  {
    id: 'r-254', name: '해독 샴푸 블렌딩', category: '건강케어',
    description: '젠도크린·오렌지·시더우드·페퍼민트·사이프레스·코파이바 해독 샴푸 블렌딩.\n샴푸할 때마다 1~2방울씩 떨어뜨려 사용합니다.',
    refVolume: 0, carrier: '없음 (샴푸에 첨가)',
    ingredients: [{name: '젠도크린', drops: 50}, {name: '오렌지', drops: 10}, {name: '시더우드', drops: 10}, {name: '페퍼민트', drops: 10}, {name: '사이프레스', drops: 10}, {name: '코파이바', drops: 10}],
    notes: '미리 블렌딩해두고 샴푸할 때마다 1~2방울씩 첨가하여 사용하세요.'
  },
  {
    id: 'r-255', name: '경피독 배출 블렌딩', category: '건강케어',
    description: '젠도크린·오렌지·자몽·주니퍼베리·프랑킨센스·블랙페퍼·티트리 경피독 배출 블렌딩.\n쇄골라인, 겨드랑이, 서혜부에 도포합니다.',
    refVolume: 115, carrier: '코코넛오일 채우기',
    ingredients: [{name: '젠도크린', drops: 30}, {name: '오렌지', drops: 10}, {name: '자몽', drops: 20}, {name: '주니퍼베리', drops: 10}, {name: '프랑킨센스', drops: 10}, {name: '블랙페퍼', drops: 10}, {name: '티트리', drops: 10}],
    notes: '쇄골라인, 겨드랑이, 서혜부에 도포하세요.'
  },
  {
    id: 'r-256', name: '호흡기 강화 디퓨징', category: '호흡기',
    description: '이지에어·클리어리파이·온가드·유칼립투스·라임 호흡기 강화 디퓨징.\n300ml 디퓨저 기준으로 사용합니다.',
    refVolume: 300, carrier: '디퓨저',
    ingredients: [{name: '이지에어', drops: 5}, {name: '클리어리파이', drops: 3}, {name: '온가드', drops: 3}, {name: '유칼립투스', drops: 2}, {name: '라임', drops: 2}],
    notes: '300ml 디퓨저 기준으로 사용하세요.'
  },
  {
    id: 'r-257', name: '비염 인헤일러 (이지에어)', category: '호흡기',
    description: '이지에어·유칼립투스·프랑킨센스·페퍼민트 비염 인헤일러.\n섬유필터에 오일을 떨어뜨린 후 용기에 넣고 깊이 흡입합니다.',
    refVolume: 0, carrier: '인헤일러',
    ingredients: [{name: '이지에어', drops: 7}, {name: '유칼립투스', drops: 3}, {name: '프랑킨센스', drops: 5}, {name: '페퍼민트', drops: 5}],
    notes: '섬유필터에 오일을 떨어뜨린 후 인헤일러에 넣고 깊이 흡입하세요.'
  },
  {
    id: 'r-258', name: '집중력 강화 롤온 (인투)', category: '집중력',
    description: '인투·오렌지 집중력 강화 롤온.\n공부나 업무 전 관자놀이, 목뒤에 롤링합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '인투', drops: 15}, {name: '오렌지', drops: 5}],
    notes: '관자놀이, 목뒤, 손목에 롤링하세요.'
  },
  {
    id: 'r-259', name: '이명 케어 롤온', category: '건강케어',
    description: '인투·페퍼민트·로즈마리·바질 이명 완화 롤온.\n귀 주변, 목, 관자놀이에 롤링합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '인투', drops: 10}, {name: '페퍼민트', drops: 5}, {name: '로즈마리', drops: 5}, {name: '바질', drops: 5}],
    notes: '귀 주변, 목, 관자놀이에 롤링하세요.'
  },
  {
    id: 'r-260', name: '위스퍼 궁관리 블렌드', category: '건강케어',
    description: '위스퍼 터치·야로우품·샌달우드·로즈제라늄·미르·클라리세이지 궁관리 블렌드.\n생리가 끝난 후 1주일에 4~5회 베지캡스에 5방울 넣어 취침 전 삽입합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '위스퍼 터치', ml: 2}, {name: '야로우품', drops: 10}, {name: '샌달우드', drops: 5}, {name: '로즈제라늄', drops: 5}, {name: '미르', drops: 5}, {name: '클라리세이지', drops: 5}],
    notes: '생리가 끝난 후부터 1주일에 4~5회 베지캡스에 5방울 정도 넣어 취침 전 삽입합니다.'
  },
  {
    id: 'r-261', name: '위스퍼 나이트 크림', category: '피부',
    description: '위스퍼·야로우품·코파이바·프랑킨센스·로즈 여성 호르몬 케어 나이트 크림.\n취침 전 손, 몸에 바릅니다.',
    refVolume: 50, carrier: '핸드/바디로션 채우기',
    ingredients: [{name: '위스퍼 터치', ml: 5}, {name: '야로우품', drops: 10}, {name: '코파이바', drops: 2}, {name: '프랑킨센스', drops: 2}, {name: '로즈', drops: 2}],
    notes: '취침 전 손, 몸에 적당량 바르세요.'
  },
  {
    id: 'r-262', name: '감기 독감 폭탄 캡슐', category: '건강케어',
    description: '온가드·오레가노·타임·클로브·프랑킨센스 감기 독감 폭탄 캡슐.\n베지캡스에 넣어 식후 섭취합니다.',
    refVolume: 0, carrier: '배지캡슐',
    ingredients: [{name: '온가드', drops: 2}, {name: '오레가노', drops: 1}, {name: '타임', drops: 1}, {name: '클로브', drops: 1}, {name: '프랑킨센스', drops: 2}],
    notes: '베지캡스에 넣어 식후 섭취하세요. 감기 초기에 효과적입니다.'
  },
  {
    id: 'r-263', name: '무독성 다용도 클리너', category: '생활용품',
    description: '온가드·레몬 무독성 다용도 청소 스프레이.\n문고리, 리모콘, 장난감, 세면대 등 청소에 사용합니다.',
    refVolume: 200, carrier: '없음 (원액)',
    ingredients: [{name: '정제수', ml: 100}, {name: '식초', ml: 100}, {name: '온가드', drops: 20}, {name: '레몬', drops: 10}],
    notes: '문고리, 리모콘, 장난감, 세면대 등 청소에 사용하면 항균력 99.9%입니다.'
  },
  {
    id: 'r-264', name: '어댑티브 향수', category: '향수',
    description: '어댑티브·클리어리파이·베르가못·자몽·샌달우드·네롤리 터치 향수.\n최소 1주일 이상 숙성시킨 후 사용합니다.',
    refVolume: 10, carrier: '향수 베이스로 채우기',
    ingredients: [{name: '어댑티브', drops: 5}, {name: '클리어리파이', drops: 5}, {name: '베르가못', drops: 3}, {name: '자몽', drops: 5}, {name: '샌달우드', drops: 2}, {name: '네롤리 터치', drops: 20}],
    notes: '최소 1주일 이상 숙성시킨 후 사용합니다.'
  },
  {
    id: 'r-265', name: '어댑티브 숙면 디퓨징', category: '수면',
    description: '어댑티브·오렌지·마조람·프랑킨센스 숙면 유도 디퓨징.\n취침 전 300ml 디퓨저에 사용합니다.',
    refVolume: 300, carrier: '디퓨저',
    ingredients: [{name: '어댑티브', drops: 2}, {name: '오렌지', drops: 2}, {name: '마조람', drops: 2}, {name: '프랑킨센스', drops: 2}],
    notes: '취침 전 300ml 디퓨저에 사용하세요.'
  },
  {
    id: 'r-266', name: '어댑티브 바디 로션', category: '스트레스',
    description: '어댑티브 스트레스 완화 바디 로션.\n핸드/바디로션 50ml에 혼합하여 사용합니다.',
    refVolume: 50, carrier: '핸드/바디로션 채우기',
    ingredients: [{name: '어댑티브', drops: 30}],
    notes: '핸드/바디로션 50ml에 어댑티브 30방울을 혼합하여 사용하세요.'
  },
  {
    id: 'r-267', name: '야로우품 살루벨 보톡스 세럼', category: '피부',
    description: '야로우품·살루벨 안티에이징 보톡스 세럼.\n세안 후 얼굴에 소량 도포합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '야로우품', drops: 10}, {name: '살루벨', drops: 4}],
    notes: '세안 후 얼굴에 소량 도포하세요. 샌달우드, 프랑킨센스, 로즈, 라벤더 등 추가 가능합니다.'
  },
  {
    id: 'r-268', name: '야로우품 아토피 로션', category: '피부',
    description: '야로우품·라벤더·프랑킨센스·티트리 아토피 완화 로션.\n핸드/바디로션 50ml에 혼합하여 해당 부위에 바릅니다.',
    refVolume: 50, carrier: '핸드/바디로션 채우기',
    ingredients: [{name: '야로우품', drops: 30}, {name: '라벤더', drops: 5}, {name: '프랑킨센스', drops: 5}, {name: '티트리', drops: 5}],
    notes: '핸드/바디로션에 혼합하여 아토피 부위에 수시로 바르세요.'
  },
  {
    id: 'r-269', name: '조이풀 향수', category: '향수',
    description: '엘리베이션·오렌지·자몽·베르가못·클리어리파이 기분 전환 향수.\n향수 베이스로 채워 스프레이합니다.',
    refVolume: 10, carrier: '향수 베이스로 채우기',
    ingredients: [{name: '엘리베이션', drops: 5}, {name: '오렌지', drops: 5}, {name: '자몽', drops: 5}, {name: '베르가못', drops: 3}, {name: '클리어리파이', drops: 3}],
    notes: '향수 베이스에 오일을 혼합하고 잘 흔들어 사용하세요.'
  },
  {
    id: 'r-270', name: '가슴탄력 스포이드', category: '피부',
    description: '엘리베이션·일랑일랑·미르·베티버 가슴탄력 스포이드.\n잠자기 전에 가슴에 발라주세요.',
    refVolume: 30, carrier: '코코넛오일 채우기',
    ingredients: [{name: '엘리베이션', drops: 20}, {name: '일랑일랑', drops: 30}, {name: '미르', drops: 20}, {name: '베티버', drops: 20}],
    notes: '잠자기 전에 가슴에 발라주세요.'
  },
  {
    id: 'r-271', name: '성장 마사지 롤온', category: '건강케어',
    description: '아로마터치·프랑킨센스·라벤더·마조람 성장 촉진 마사지 롤온.\n다리 전체에 부드럽게 펴 바른 후 마사지합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '아로마터치', drops: 8}, {name: '프랑킨센스', drops: 4}, {name: '라벤더', drops: 3}, {name: '마조람', drops: 3}],
    notes: '다리 전체에 부드럽게 펴 바른 후 뭉친 부위나 대퇴부, 종아리, 발목 등에 마사지하세요.'
  },
  {
    id: 'r-272', name: '근육통 롤온 (아로마터치)', category: '통증',
    description: '아로마터치·딥블루·밸런스·코파이바·로즈제라늄 근육통 완화 롤온.\n통증 부위에 롤링합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '아로마터치', drops: 7}, {name: '딥블루', drops: 7}, {name: '밸런스', drops: 3}, {name: '코파이바', drops: 5}, {name: '로즈제라늄', drops: 3}],
    notes: '근육통 부위에 롤링하세요.'
  },
  {
    id: 'r-273', name: '배쏘 볼/배쏘 파우더', category: '생활용품',
    description: '시트러스블리스·스피어민트·베르가못·베티버 입욕볼/파우더.\n베이킹소다·구연산·옥수수전분을 섞은 파우더 기준입니다.',
    refVolume: 0, carrier: '없음 (원액)',
    ingredients: [{name: '베이킹소다', ml: 100}, {name: '구연산', ml: 100}, {name: '옥수수전분', ml: 50}, {name: '시트러스블리스', drops: 15}, {name: '스피어민트', drops: 5}, {name: '베르가못', drops: 5}, {name: '베티버', drops: 3}],
    notes: '배쏘 볼: 파우더들을 스프레이로 물을 조금씩 뿌리면서 뭉친 후 랩에 싸서 보관합니다.\n배쏘 파우더: 볼 모양으로 뭉치는 과정 없이 파우더 형태로 보관합니다.'
  },
  {
    id: 'r-274', name: '지방분해 및 피부처짐 방지 블렌드', category: '피부',
    description: '메타파워·자몽·주니퍼베리·로즈제라늄·코파이바·클로브·파촐리 지방분해 블렌드.\n샤워 후 전신 및 셀룰라이트 부위에 바릅니다.',
    refVolume: 115, carrier: '코코넛오일 채우기',
    ingredients: [{name: '메타파워', drops: 50}, {name: '자몽', drops: 20}, {name: '주니퍼베리', drops: 20}, {name: '로즈제라늄', drops: 15}, {name: '코파이바', drops: 15}, {name: '클로브', drops: 15}, {name: '파촐리', drops: 10}],
    notes: '샤워 후 전신 및 셀룰라이트 부위에 바릅니다.'
  },
  {
    id: 'r-275', name: '림프순환 및 셀룰라이트 제거 블렌드', category: '피부',
    description: '메타파워·자몽·로즈마리·시더우드·주니퍼베리·유칼립투스·사이프레스·로즈제라늄 림프순환 블렌드.\n겨드랑이, 배 전체, 옆구리와 허벅지에 도포합니다.',
    refVolume: 115, carrier: '코코넛오일 채우기',
    ingredients: [{name: '메타파워', drops: 60}, {name: '자몽', drops: 15}, {name: '로즈마리', drops: 10}, {name: '시더우드', drops: 10}, {name: '주니퍼베리', drops: 10}, {name: '유칼립투스', drops: 10}, {name: '사이프레스', drops: 10}, {name: '로즈제라늄', drops: 15}],
    notes: '겨드랑이, 배 전체, 옆구리와 허벅지에 도포하세요. 몸이 차가운 분은 블랙페퍼 추가.'
  },
  {
    id: 'r-276', name: '불면증 롤온', category: '수면',
    description: '세레니티·베티버·프랑킨센스 불면증 완화 롤온.\n자기 전 뒷목, 앞가슴, 코 밑, 발바닥에 바릅니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '세레니티', drops: 10}, {name: '베티버', drops: 10}, {name: '프랑킨센스', drops: 4}],
    notes: '자기 전 뒷목, 앞가슴, 코 밑, 발바닥에 바르세요.'
  },
  {
    id: 'r-277', name: '홧병 롤온 향수', category: '스트레스',
    description: '세레니티·베르가못·자몽·프랑킨센스·클리어리파이·로즈 페탈 홧병 완화 롤온.\n향수처럼 맥박에 바르고 향을 맡으세요.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '세레니티', drops: 7}, {name: '베르가못', drops: 5}, {name: '자몽', drops: 5}, {name: '프랑킨센스', drops: 3}, {name: '클리어리파이', drops: 3}, {name: '로즈 페탈', drops: 2}],
    notes: '향수처럼 맥박, 목, 손목에 바르고 향을 맡으세요.'
  },
  {
    id: 'r-278', name: '살루벨 야로우품 보톡스 세럼', category: '피부',
    description: '살루벨·야로우품 보톡스 효과 세럼.\n세안 후 얼굴에 소량 도포합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '살루벨', drops: 6}, {name: '야로우품', drops: 12}],
    notes: '세안 후 얼굴에 소량 도포하세요. 샌달우드, 프랑킨센스, 로즈, 라벤더 등 추가 가능합니다.'
  },
  {
    id: 'r-279', name: '남성 전립선 비대증', category: '건강케어',
    description: '위스퍼 터치·살루벨·사이프레스·일랑일랑 전립선 케어 블렌드.\n섞어서 자기 전 회음부와 서혜부에 바릅니다.',
    refVolume: 10, carrier: '위스퍼 터치 10ml',
    ingredients: [{name: '살루벨', drops: 7}, {name: '사이프레스', drops: 5}, {name: '일랑일랑', drops: 5}],
    notes: '위스퍼 터치 10ml에 오일을 섞어 자기 전 회음부와 서혜부에 바르세요.'
  },
  {
    id: 'r-280', name: '기미 페이셜 로션', category: '피부',
    description: '밸런스·살루벨·프랑킨센스 기미 완화 페이셜 로션.\n핸드/바디로션 50ml에 혼합하여 사용합니다.',
    refVolume: 50, carrier: '핸드/바디로션 채우기',
    ingredients: [{name: '밸런스', drops: 12}, {name: '살루벨', drops: 7}, {name: '프랑킨센스', drops: 3}],
    notes: '로션에 혼합하여 기미 부위에 수시로 바르세요.'
  },
  {
    id: 'r-281', name: '혈압을 내려주는 롤온', category: '건강케어',
    description: '밸런스·세레니티·마조람 혈압 완화 롤온.\n뒷목, 어깨, 가슴, 발바닥에 마사지합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '밸런스', drops: 10}, {name: '세레니티', drops: 8}, {name: '마조람', drops: 3}],
    notes: '뒷목, 어깨, 가슴, 발바닥에 마사지하세요.'
  },
  {
    id: 'r-282', name: '손목 터널 증후군/테니스 엘보 완화 롤온', category: '통증',
    description: '딥블루·야로우품·아로마터치·코파이바·헬리크리섬·시베리안퍼 완화 롤온.\n해당 부위에 롤링합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '딥블루', drops: 15}, {name: '야로우품', drops: 10}, {name: '아로마터치', drops: 5}, {name: '코파이바', drops: 5}, {name: '헬리크리섬', drops: 5}, {name: '시베리안퍼', drops: 5}],
    notes: '손목, 팔꿈치 등 통증 부위에 롤링하세요.'
  },
  {
    id: 'r-283', name: '류마티스 관절염 롤온', category: '통증',
    description: '딥블루·프랑킨센스·라벤더·주니퍼베리·블랙페퍼·윈터그린 류마티스 관절염 완화 롤온.\n해당 관절 부위에 롤링합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '딥블루', drops: 10}, {name: '프랑킨센스', drops: 10}, {name: '라벤더', drops: 5}, {name: '주니퍼베리', drops: 5}, {name: '블랙페퍼', drops: 5}, {name: '윈터그린', drops: 7}],
    notes: '관절 부위에 롤링하세요.'
  },
  {
    id: 'r-284', name: '퇴행성 관절염 롤온', category: '통증',
    description: '딥블루·프랑킨센스·코파이바·로즈·오렌지·일랑일랑 퇴행성 관절염 완화 롤온.\n해당 관절 부위에 롤링합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '딥블루', drops: 10}, {name: '프랑킨센스', drops: 10}, {name: '코파이바', drops: 5}, {name: '로즈', drops: 5}, {name: '오렌지', drops: 5}, {name: '일랑일랑', drops: 5}],
    notes: '관절 부위에 롤링하세요.'
  },
  {
    id: 'r-285', name: '숙취 해소 캡슐 (다이제스트젠)', category: '건강케어',
    description: '다이제스트젠·프랑킨센스·페퍼민트·레몬 숙취 해소 캡슐.\n베지캡스에 넣어 섭취합니다.',
    refVolume: 0, carrier: '배지캡슐',
    ingredients: [{name: '다이제스트젠', drops: 2}, {name: '프랑킨센스', drops: 2}, {name: '페퍼민트', drops: 1}, {name: '레몬', drops: 1}],
    notes: '베지캡스에 넣어 섭취하세요.'
  },
  {
    id: 'r-286', name: '위염/역류성식도염 완화 캡슐', category: '건강케어',
    description: '다이제스트젠·프랑킨센스·코파이바 위염 완화 캡슐.\n베지캡스에 넣어 식후 섭취합니다.',
    refVolume: 0, carrier: '배지캡슐',
    ingredients: [{name: '다이제스트젠', drops: 2}, {name: '프랑킨센스', drops: 2}, {name: '코파이바', drops: 2}],
    notes: '베지캡스에 넣어 식후 섭취하세요.'
  },
  {
    id: 'r-287', name: '위염/역류성식도염 완화 롤온', category: '건강케어',
    description: '다이제스트젠·클로브·프랑킨센스 위염 완화 롤온.\n명치, 복부에 롤링합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '다이제스트젠', drops: 10}, {name: '클로브', drops: 4}, {name: '프랑킨센스', drops: 6}],
    notes: '명치, 복부에 롤링하세요.'
  },
  {
    id: 'r-288', name: '새집 증후군 디퓨징', category: '생활용품',
    description: '히노키·사이프레스·로즈마리·유칼립투스 새집 증후군 디퓨징.\n이사 들어가기 전 환기를 적절히 시키며 강하게 발향합니다.',
    refVolume: 300, carrier: '디퓨저',
    ingredients: [{name: '히노키', drops: 20}, {name: '사이프레스', drops: 20}, {name: '로즈마리', drops: 10}, {name: '유칼립투스', drops: 10}],
    notes: '이사 들어가기 전 환기를 적절히 시키며 강하게 발향하면 좋습니다.'
  },
  {
    id: 'r-289', name: '비듬 예방 샴푸', category: '건강케어',
    description: '히노키·라벤더·로즈마리·샌달우드 비듬 예방 샴푸 블렌딩.\n도테라 샴푸 500ml 기준으로 사용합니다.',
    refVolume: 500, carrier: '샴푸 베이스 채우기',
    ingredients: [{name: '히노키', drops: 10}, {name: '라벤더', drops: 10}, {name: '로즈마리', drops: 10}, {name: '샌달우드', drops: 10}],
    notes: '샴푸에 잘 섞이도록 중간중간 나눠서 넣고 잘 저어주세요.'
  },
  {
    id: 'r-290', name: '피부 재생 크림', category: '피부',
    description: '헬리크리섬·야로우품·프랑킨센스 피부 재생 크림.\n핸드/바디로션 50ml에 혼합하여 사용합니다.',
    refVolume: 50, carrier: '핸드/바디로션 채우기',
    ingredients: [{name: '헬리크리섬', drops: 5}, {name: '야로우품', drops: 5}, {name: '프랑킨센스', drops: 2}],
    notes: '로션에 혼합하여 피부 재생이 필요한 부위에 바르세요.'
  },
  {
    id: 'r-291', name: '임신선/튼살 예방 및 완화 롤온', category: '피부',
    description: '헬리크리섬·프랑킨센스·미르 임신선/튼살 완화 롤온.\n해당 부위에 수시로 롤링합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '헬리크리섬', drops: 3}, {name: '프랑킨센스', drops: 7}, {name: '미르', drops: 5}],
    notes: '임신선, 튼살 부위에 수시로 롤링하세요.'
  },
  {
    id: 'r-292', name: '골절 회복을 위한 롤온', category: '통증',
    description: '헬리크리섬·딥블루·코파이바·윈터그린·프랑킨센스 골절 회복 롤온.\n해당 부위에 수시로 롤링합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '헬리크리섬', drops: 5}, {name: '딥블루', drops: 15}, {name: '코파이바', drops: 10}, {name: '윈터그린', drops: 5}, {name: '프랑킨센스', drops: 5}],
    notes: '골절 부위에 수시로 롤링하세요.'
  },
  {
    id: 'r-293', name: '수분 크림 (샌달우드)', category: '피부',
    description: '샌달우드·프랑킨센스·제라늄 수분 크림.\n핸드/바디로션 50ml에 혼합하여 사용합니다.',
    refVolume: 50, carrier: '핸드/바디로션 채우기',
    ingredients: [{name: '샌달우드', drops: 7}, {name: '프랑킨센스', drops: 3}, {name: '제라늄', drops: 3}],
    notes: '로션에 혼합하여 건조한 부위에 바르세요.'
  },
  {
    id: 'r-294', name: '신장/방광 강화 롤온', category: '건강케어',
    description: '샌달우드·시더우드·젠도크린·주니퍼베리 신장/방광 강화 롤온.\n아랫배, 서혜부, 복숭아뼈 안쪽에 도포합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '샌달우드', drops: 5}, {name: '시더우드', drops: 5}, {name: '젠도크린', drops: 5}, {name: '주니퍼베리', drops: 5}],
    notes: '아랫배, 서혜부, 복숭아뼈 안쪽에 도포하세요.'
  },
  {
    id: 'r-295', name: '안구 촉촉 롤온', category: '눈케어',
    description: '프랑킨센스·헬리크리섬·페퍼민트 안구 건조 완화 롤온.\n눈 주변을 안경 모양으로 롤링합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '프랑킨센스', drops: 4}, {name: '헬리크리섬', drops: 1}, {name: '페퍼민트', drops: 1}],
    notes: '눈 주변을 안경 모양으로 롤링하세요. 눈에 직접 닿지 않도록 주의하세요.'
  },
  {
    id: 'r-296', name: '치매 예방 롤온', category: '건강케어',
    description: '프랑킨센스·코파이바·로즈마리·바질 치매 예방 롤온.\n뒷목과 발바닥에 롤링 후 마사지합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '프랑킨센스', drops: 5}, {name: '코파이바', drops: 3}, {name: '로즈마리', drops: 1}, {name: '바질', drops: 1}],
    notes: '뒷목과 발바닥에 롤링 후 마사지하세요.'
  },
  {
    id: 'r-297', name: '집중력/기억력 향상 디퓨징', category: '집중력',
    description: '페퍼민트·로즈마리·레몬 집중력/기억력 향상 디퓨징.\n공부나 업무 중 300ml 디퓨저에 사용합니다.',
    refVolume: 300, carrier: '디퓨저',
    ingredients: [{name: '페퍼민트', drops: 3}, {name: '로즈마리', drops: 3}, {name: '레몬', drops: 3}],
    notes: '공부나 업무 중 300ml 디퓨저에 사용하세요.'
  },
  {
    id: 'r-298', name: '침구 스프레이 (상쾌)', category: '수면',
    description: '페퍼민트·유칼립투스·라벤더·오렌지 상쾌한 침구 스프레이.\n베개나 이불에 스프레이합니다.',
    refVolume: 10, carrier: '물로 채우기',
    ingredients: [{name: '페퍼민트', drops: 10}, {name: '유칼립투스', drops: 10}, {name: '라벤더', drops: 20}, {name: '오렌지', drops: 5}],
    notes: '베개나 이불에 스프레이하세요.'
  },
  {
    id: 'r-299', name: '데오도란트 스프레이 (파촐리)', category: '건강케어',
    description: '파촐리·사이프레스·제라늄·유칼립투스·레몬 천연 데오도란트 스프레이.\n겨드랑이에 뿌려주세요.',
    refVolume: 30, carrier: '코코넛오일 채우기',
    ingredients: [{name: '파촐리', drops: 7}, {name: '사이프레스', drops: 7}, {name: '제라늄', drops: 5}, {name: '유칼립투스', drops: 3}, {name: '레몬', drops: 3}],
    notes: '겨드랑이에 뿌려주세요.'
  },
  {
    id: 'r-300', name: '다한증 롤온', category: '건강케어',
    description: '파촐리·사이프레스·로즈제라늄·페퍼민트 다한증 완화 롤온.\n겨드랑이, 손, 발에 도포합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '파촐리', drops: 7}, {name: '사이프레스', drops: 5}, {name: '로즈제라늄', drops: 4}, {name: '페퍼민트', drops: 4}],
    notes: '겨드랑이, 손, 발에 도포하세요.'
  },
  {
    id: 'r-301', name: '만성 스트레스 향수', category: '스트레스',
    description: '파촐리·베르가못·샌달우드·제라늄 만성 스트레스 완화 향수.\n향수처럼 맥박 부위에 바릅니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '파촐리', drops: 5}, {name: '베르가못', drops: 5}, {name: '샌달우드', drops: 3}, {name: '제라늄', drops: 3}],
    notes: '향수처럼 맥박, 목, 손목에 바르세요.'
  },
  {
    id: 'r-302', name: '코파이바 투메릭 항산화 면역 관리 캡슐', category: '건강케어',
    description: '투메릭·코파이바 1:1 항산화 면역 관리 캡슐.\n베지캡스에 3방울 내외로 넣어 섭취합니다.',
    refVolume: 0, carrier: '배지캡슐',
    ingredients: [{name: '투메릭', drops: 2}, {name: '코파이바', drops: 2}],
    notes: '투메릭과 코파이바를 1:1로 블렌딩 후 베지캡스에 3방울 내외로 넣어 섭취하세요.'
  },
  {
    id: 'r-303', name: '통증 완화 롤온 (투메릭)', category: '통증',
    description: '딥블루·코파이바·프랑킨센스·투메릭 통증 완화 롤온.\n통증 부위에 롤링합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '딥블루', drops: 10}, {name: '코파이바', drops: 10}, {name: '프랑킨센스', drops: 5}, {name: '투메릭', drops: 3}],
    notes: '통증 부위에 롤링하세요.'
  },
  {
    id: 'r-304', name: '피부 가려움증 완화 롤온', category: '피부',
    description: '티트리·라벤더·프랑킨센스·페퍼민트 피부 가려움증 완화 롤온.\n가려운 부위에 롤링합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '티트리', drops: 5}, {name: '라벤더', drops: 4}, {name: '프랑킨센스', drops: 3}, {name: '페퍼민트', drops: 3}],
    notes: '가려운 부위에 롤링하세요.'
  },
  {
    id: 'r-305', name: 'Y존 케어 블렌드 스포이드', category: '건강케어',
    description: '티트리·로즈제라늄·프랑킨센스 Y존 케어 스포이드.\n블렌딩한 오일을 속옷에 한 방울 떨어뜨립니다.',
    refVolume: 10, carrier: '없음 (원액)',
    ingredients: [{name: '티트리', drops: 60}, {name: '로즈제라늄', drops: 25}, {name: '프랑킨센스', drops: 15}],
    notes: '블렌딩한 오일을 속옷에 한 방울 떨어뜨려 사용하세요.'
  },
  {
    id: 'r-306', name: '항균 항바이러스 폭탄 스프레이', category: '건강케어',
    description: '오레가노·클로브·타임·바질·유칼립투스·레몬 항균 스프레이.\n흔들어서 외출 전후 옷에 뿌리거나 공기 중에 수시로 뿌려줍니다.',
    refVolume: 250, carrier: '물로 채우기',
    ingredients: [{name: '오레가노', drops: 15}, {name: '클로브', drops: 15}, {name: '타임', drops: 15}, {name: '바질', drops: 15}, {name: '유칼립투스', drops: 20}, {name: '레몬', drops: 20}],
    notes: '외출 전후 옷에 뿌리거나 공기 중에 수시로 뿌려주세요.'
  },
  {
    id: 'r-307', name: '오래가는 기침을 위한 디퓨징', category: '호흡기',
    description: '온가드·프랑킨센스·타임·마조람 기침 완화 디퓨징.\n300ml 디퓨저 기준으로 사용합니다.',
    refVolume: 300, carrier: '디퓨저',
    ingredients: [{name: '온가드', drops: 3}, {name: '프랑킨센스', drops: 3}, {name: '타임', drops: 2}, {name: '마조람', drops: 2}],
    notes: '300ml 디퓨저 기준으로 사용하세요.'
  },
  {
    id: 'r-308', name: '몸 염증 블렌드', category: '건강케어',
    description: '클로브·프랑킨센스·온가드·레몬·미르 몸 염증 완화 블렌드.\n가글에 1방울, 오일 풀링 시 2~3방울, 치약에 1방울로 사용합니다.',
    refVolume: 10, carrier: '없음 (원액)',
    ingredients: [{name: '클로브', drops: 10}, {name: '프랑킨센스', drops: 100}, {name: '온가드', drops: 50}, {name: '레몬', drops: 30}, {name: '미르', drops: 10}],
    notes: '가글에 1방울, 오일 풀링 시 2~3방울, 치약에 1방울 떨어뜨려 양치하세요.'
  },
  {
    id: 'r-309', name: '가글액 (클로브+스피어민트)', category: '건강케어',
    description: '클로브·스피어민트·오렌지 천연 가글액.\n아침 기상 직후 또는 필요할 때 잘 흔들어 가글합니다.',
    refVolume: 100, carrier: '생수로 채우기',
    ingredients: [{name: '클로브', drops: 2}, {name: '스피어민트', drops: 2}, {name: '오렌지', drops: 2}],
    notes: '아침 기상 직후 또는 필요할 때 잘 흔들어 가글하세요.'
  },
  {
    id: 'r-310', name: '여성호르몬 균형 롤온', category: '건강케어',
    description: '클라리세이지·제라늄·미르·야로우품 여성호르몬 균형 롤온.\n목뒤, 귀뒤, 아랫배, 꼬리뼈에 도포합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '클라리세이지', drops: 6}, {name: '제라늄', drops: 4}, {name: '미르', drops: 3}, {name: '야로우품', drops: 10}],
    notes: '목뒤, 귀뒤, 아랫배, 꼬리뼈에 도포해 주세요.'
  },
  {
    id: 'r-311', name: '모발성장 촉진 스프레이', category: '건강케어',
    description: '클라리세이지·라벤더·일랑일랑·시더우드 모발성장 촉진 스프레이.\n두피에 스프레이 후 마사지합니다.',
    refVolume: 100, carrier: '생수로 채우기',
    ingredients: [{name: '클라리세이지', drops: 10}, {name: '라벤더', drops: 10}, {name: '일랑일랑', drops: 5}, {name: '시더우드', drops: 5}],
    notes: '두피에 스프레이 후 마사지하세요.'
  },
  {
    id: 'r-312', name: 'KEEP CALM 인헤일러', category: '스트레스',
    description: '클라리세이지·라벤더·마조람·일랑일랑 진정 인헤일러.\n섬유필터에 오일을 떨어뜨린 후 용기에 넣고 깊이 흡입합니다.',
    refVolume: 0, carrier: '인헤일러',
    ingredients: [{name: '클라리세이지', drops: 2}, {name: '라벤더', drops: 2}, {name: '마조람', drops: 2}, {name: '일랑일랑', drops: 1}],
    notes: '인헤일러 내 섬유필터에 떨어뜨린 후 용기에 넣고 깊이 흡입하세요.'
  },
  {
    id: 'r-313', name: '통증 완화 롤온 (딥블루+코파이바)', category: '통증',
    description: '딥블루·코파이바 간편 통증 완화 롤온.\n통증 부위에 롤링합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '딥블루', drops: 15}, {name: '코파이바', drops: 10}],
    notes: '통증 부위에 롤링하세요.'
  },
  {
    id: 'r-314', name: '통증 완화 크림 (딥블루 럽)', category: '통증',
    description: '코파이바·딥블루 럽 통증 완화 크림.\n50ml 크림용기에 코파이바를 넣고 딥블루 럽으로 채워 섞습니다.',
    refVolume: 50, carrier: '딥블루 럽 채우기',
    ingredients: [{name: '코파이바', drops: 40}],
    notes: '코파이바를 넣고 딥블루 럽으로 채워 잘 섞은 후 통증 부위에 바르세요.'
  },
  {
    id: 'r-315', name: '아토피/악건성 완화 로션', category: '피부',
    description: '코파이바·라벤더·프랑킨센스·야로우품·티트리 아토피/악건성 완화 로션.\n해당 부위에 수시로 도포합니다.',
    refVolume: 50, carrier: '핸드/바디로션 채우기',
    ingredients: [{name: '코파이바', drops: 5}, {name: '라벤더', drops: 5}, {name: '프랑킨센스', drops: 5}, {name: '야로우품', drops: 30}, {name: '티트리', drops: 3}],
    notes: '해당 부위에 하루 3회 이상 도포하세요.'
  },
  {
    id: 'r-316', name: '수족 냉증 완화 롤온', category: '건강케어',
    description: '진저·블랙페퍼·주니퍼베리 수족 냉증 완화 롤온.\n손발에 수시로 마사지해 줍니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '진저', drops: 5}, {name: '블랙페퍼', drops: 5}, {name: '주니퍼베리', drops: 5}],
    notes: '손발에 수시로 마사지해 주세요.'
  },
  {
    id: 'r-317', name: '생강 꿀차', category: '건강케어',
    description: '진저·시나몬 생강 꿀차.\n꿀 150ml에 오일을 잘 섞어 따뜻한 물에 타서 마십니다.',
    refVolume: 150, carrier: '꿀 채우기',
    ingredients: [{name: '진저', drops: 10}, {name: '시나몬바크', drops: 5}],
    notes: '꿀 150ml에 오일을 잘 섞은 후 적당량을 뜨거운 물에 타서 마시면 좋습니다.'
  },
  {
    id: 'r-318', name: '치질 개선 스포이드', category: '건강케어',
    description: '주니퍼베리·프랑킨센스·라벤더·사이프레스 치질 개선 스포이드.\n해당 부위에 바릅니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '주니퍼베리', drops: 5}, {name: '프랑킨센스', drops: 5}, {name: '라벤더', drops: 2}, {name: '사이프레스', drops: 2}],
    notes: '해당 부위에 바르세요. 좌욕 후 사용하면 더 효과적입니다.'
  },
  {
    id: 'r-319', name: '습진 완화 롤온 (주니퍼베리)', category: '피부',
    description: '주니퍼베리·티트리·라벤더 습진 완화 롤온.\n습진 부위에 롤링합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '주니퍼베리', drops: 5}, {name: '티트리', drops: 3}, {name: '라벤더', drops: 2}],
    notes: '습진 부위에 롤링하세요.'
  },
  {
    id: 'r-320', name: '남자의 자존심 롤온', category: '건강케어',
    description: '자스민 터치·로즈·샌달우드 남성 기능 강화 롤온.\n생식기 주변에 도포합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '자스민 터치', drops: 30}, {name: '로즈', drops: 3}, {name: '샌달우드', drops: 3}],
    notes: '생식기 주변에 도포하세요.'
  },
  {
    id: 'r-321', name: '출산 도우미 롤온', category: '건강케어',
    description: '자스민 터치·로즈 터치·일랑일랑·클라리세이지 출산 도우미 롤온.\n복부, 허리, 통증 부위에 바릅니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '자스민 터치', ml: 5}, {name: '로즈 터치', ml: 5}, {name: '일랑일랑', drops: 3}, {name: '클라리세이지', drops: 5}],
    notes: '복부, 허리, 통증 부위에 바르세요.'
  },
  {
    id: 'r-322', name: '바디슬리밍 블렌드', category: '피부',
    description: '자몽·스마트&새시·사이프레스·주니퍼베리·파촐리·제라늄 바디슬리밍 블렌드.\n샤워 후 전신 및 셀룰라이트 부위에 바릅니다.',
    refVolume: 115, carrier: '코코넛오일 채우기',
    ingredients: [{name: '자몽', drops: 30}, {name: '스마트&새시', drops: 30}, {name: '사이프레스', drops: 15}, {name: '주니퍼베리', drops: 15}, {name: '파촐리', drops: 6}, {name: '제라늄', drops: 6}],
    notes: '샤워 후 전신 및 셀룰라이트 부위에 바릅니다. 신장기능 저하인 경우 주니퍼베리 대신 진저를 사용하세요.'
  },
  {
    id: 'r-323', name: '붓기 빼는 클렌저 블렌딩', category: '피부',
    description: '자몽·레몬·로즈마리·사이프레스·로즈제라늄 붓기 빼는 클렌저 블렌딩.\n빈 병에 함께 블렌딩해두고 클렌저에 1방울씩 떨어뜨려 세안합니다.',
    refVolume: 0, carrier: '없음 (클렌저에 첨가)',
    ingredients: [{name: '자몽', drops: 30}, {name: '레몬', drops: 10}, {name: '로즈마리', drops: 10}, {name: '사이프레스', drops: 10}, {name: '로즈제라늄', drops: 10}],
    notes: '빈 병에 함께 블렌딩해두고 클렌저에 1방울씩 떨어뜨려 잘 섞은 후 세안하세요.'
  },
  {
    id: 'r-324', name: '고혈압 롤온', category: '건강케어',
    description: '일랑일랑·마조람·라벤더·밸런스 고혈압 완화 롤온.\n어깨, 가슴, 발바닥에 마사지하고 깊이 호흡합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '일랑일랑', drops: 3}, {name: '마조람', drops: 5}, {name: '라벤더', drops: 5}, {name: '밸런스', drops: 3}],
    notes: '어깨, 가슴, 발바닥에 마사지하고 깊이 호흡하세요.'
  },
  {
    id: 'r-325', name: '섹슈얼 향수', category: '향수',
    description: '일랑일랑·위스퍼 터치·자스민 터치 로맨틱 향수.\n향수처럼 맥박 부위에 바릅니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '일랑일랑', drops: 3}, {name: '위스퍼 터치', drops: 15}, {name: '자스민 터치', drops: 15}],
    notes: '향수처럼 맥박, 목, 손목에 바르세요.'
  },
  {
    id: 'r-326', name: '고급 스파 솔트', category: '생활용품',
    description: '일랑일랑·클라리세이지·라벤더·오렌지 고급 스파 입욕솔트.\n목욕솔트 100ml 기준으로 사용합니다.',
    refVolume: 100, carrier: '목욕솔트 채우기',
    ingredients: [{name: '일랑일랑', drops: 7}, {name: '클라리세이지', drops: 5}, {name: '라벤더', drops: 8}, {name: '오렌지', drops: 10}],
    notes: '목욕솔트에 오일을 혼합하여 욕조에 넣어 사용하세요.'
  },
  {
    id: 'r-327', name: '손목터널증후군/테니스엘보 롤온 v2', category: '통증',
    description: '딥블루·아로마터치·코파이바·윈터그린·마조람·레몬그라스 통증 완화 롤온.\n해당 부위에 롤링합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '딥블루', drops: 15}, {name: '아로마터치', drops: 5}, {name: '코파이바', drops: 5}, {name: '윈터그린', drops: 5}, {name: '마조람', drops: 5}, {name: '레몬그라스', drops: 5}],
    notes: '손목, 팔꿈치 등 통증 부위에 롤링하세요. 피부가 민감한 경우 패치테스트 후 사용하세요.'
  },
  {
    id: 'r-328', name: '생리통 완화 롤온 (윈터그린)', category: '건강케어',
    description: '윈터그린·일랑일랑·코파이바·블랙페퍼 생리통 완화 롤온.\n아랫배, 꼬리뼈에 롤링합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '윈터그린', drops: 5}, {name: '일랑일랑', drops: 5}, {name: '코파이바', drops: 7}, {name: '블랙페퍼', drops: 3}],
    notes: '아랫배, 꼬리뼈에 롤링하세요.'
  },
  {
    id: 'r-329', name: '공기정화 디퓨징 (유칼립투스)', category: '생활용품',
    description: '유칼립투스·사이프레스·클리어리파이·라임 공기정화 디퓨징.\n300ml 디퓨저 기준으로 사용합니다.',
    refVolume: 300, carrier: '디퓨저',
    ingredients: [{name: '유칼립투스', drops: 5}, {name: '사이프레스', drops: 3}, {name: '클리어리파이', drops: 3}, {name: '라임', drops: 2}],
    notes: '300ml 디퓨저 기준으로 사용하세요.'
  },
  {
    id: 'r-330', name: '류머티스 관절염 롤온 v2', category: '통증',
    description: '유칼립투스·윈터그린·딥블루·코파이바·레몬 류머티스 관절염 완화 롤온.\n관절 부위에 롤링합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '유칼립투스', drops: 5}, {name: '윈터그린', drops: 3}, {name: '딥블루', drops: 3}, {name: '코파이바', drops: 3}, {name: '레몬', drops: 3}],
    notes: '관절 부위에 롤링하세요.'
  },
  {
    id: 'r-331', name: '만능 밤', category: '피부',
    description: '오렌지·라벤더·시더우드 만능 밤.\n입술, 손, 얼굴, 팔꿈치, 발뒤꿈치 등에 만능으로 사용합니다.',
    refVolume: 15, carrier: '없음 (원액)',
    ingredients: [{name: '코코넛오일', ml: 13}, {name: '밀랍', ml: 3.5}, {name: '오렌지', drops: 3}, {name: '라벤더', drops: 3}, {name: '시더우드', drops: 1}],
    notes: '코코넛 오일에 밀랍을 녹인 후 오일을 넣고 틴케이스에 담아 굳힙니다.'
  },
  {
    id: 'r-332', name: '손톱 큐티클케어 스포이드', category: '피부',
    description: '오렌지·라벤더·시더우드 손톱 큐티클케어 스포이드.\n손톱 주변에 도포합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '오렌지', drops: 5}, {name: '라벤더', drops: 3}, {name: '시더우드', drops: 2}],
    notes: '손톱 주변 큐티클에 도포하세요.'
  },
  {
    id: 'r-333', name: '구강 청결 스프레이', category: '건강케어',
    description: '스피어민트·페퍼민트·레몬 구강 청결 스프레이.\n입 안에 스프레이하거나 가글합니다.',
    refVolume: 100, carrier: '생수로 채우기',
    ingredients: [{name: '스피어민트', drops: 20}, {name: '페퍼민트', drops: 10}, {name: '레몬', drops: 10}],
    notes: '입 안에 스프레이하거나 가글하세요.'
  },
  {
    id: 'r-334', name: '반려견 탈취 스프레이', category: '생활용품',
    description: '스피어민트·퓨리파이·오렌지·유칼립투스 반려견 탈취 스프레이.\n반려견 생활공간에 뿌려줍니다.',
    refVolume: 100, carrier: '생수로 채우기',
    ingredients: [{name: '스피어민트', drops: 15}, {name: '퓨리파이', drops: 15}, {name: '오렌지', drops: 10}, {name: '유칼립투스', drops: 5}],
    notes: '반려견 생활공간에 뿌려주세요. 반려견 직접 접촉은 피하세요.'
  },
  {
    id: 'r-335', name: '감기 폭탄 캡슐 (오레가노)', category: '건강케어',
    description: '오레가노·프랑킨센스·온가드 감기 폭탄 캡슐.\n베지캡스에 넣어 식후 섭취합니다.',
    refVolume: 0, carrier: '배지캡슐',
    ingredients: [{name: '오레가노', drops: 2}, {name: '프랑킨센스', drops: 2}, {name: '온가드', drops: 2}],
    notes: '베지캡스에 넣어 식후 섭취하세요.'
  },
  {
    id: 'r-336', name: '티눈/사마귀 롤온', category: '피부',
    description: '오레가노·티트리·레몬 티눈/사마귀 완화 롤온.\n티눈, 사마귀 부위에 하루 2~3번 도포합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '오레가노', drops: 15}, {name: '티트리', drops: 10}, {name: '레몬', drops: 5}],
    notes: '티눈, 사마귀 부위에 하루 2~3번 도포하세요.'
  },
  {
    id: 'r-337', name: '무좀 케어 스포이드 (오레가노)', category: '건강케어',
    description: '오레가노·티트리·온가드 무좀 케어 스포이드.\n해당 부위에 수시로 도포합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '오레가노', drops: 10}, {name: '티트리', drops: 30}, {name: '온가드', drops: 20}],
    notes: '무좀 부위에 수시로 도포하세요.'
  },
  {
    id: 'r-338', name: '편안함을 주는 향수 (아버비테)', category: '향수',
    description: '아버비테·베르가못·프랑킨센스 편안함을 주는 향수.\n향수 베이스로 채워 사용합니다.',
    refVolume: 10, carrier: '향수 베이스로 채우기',
    ingredients: [{name: '아버비테', drops: 3}, {name: '베르가못', drops: 6}, {name: '프랑킨센스', drops: 3}],
    notes: '향수 베이스에 오일을 혼합하여 사용하세요.'
  },
  {
    id: 'r-339', name: '습진 완화 스포이드 (아버비테)', category: '피부',
    description: '아버비테·로만캐모마일·미르 습진 완화 스포이드.\n습진 부위에 도포합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '아버비테', drops: 5}, {name: '로만캐모마일', drops: 5}, {name: '미르', drops: 5}],
    notes: '습진 부위에 도포하세요.'
  },
  {
    id: 'r-340', name: '벌레퇴치 스프레이 (아버비테)', category: '생활용품',
    description: '아버비테·레몬그라스·제라늄 벌레퇴치 스프레이.\n생수로 채워 뿌려줍니다.',
    refVolume: 100, carrier: '생수로 채우기',
    ingredients: [{name: '아버비테', drops: 10}, {name: '레몬그라스', drops: 15}, {name: '제라늄', drops: 5}],
    notes: '피부나 주변 공간에 뿌려주세요.'
  },
  {
    id: 'r-341', name: '슬픔과 상실감을 이겨내는 디퓨징', category: '스트레스',
    description: '시베리안퍼·하와이안 샌달우드·레몬그라스 감정 치유 디퓨징.\n300ml 디퓨저 기준으로 사용합니다.',
    refVolume: 300, carrier: '디퓨저',
    ingredients: [{name: '시베리안퍼', drops: 4}, {name: '하와이안 샌달우드', drops: 3}, {name: '레몬그라스', drops: 3}],
    notes: '300ml 디퓨저 기준으로 사용하세요.'
  },
  {
    id: 'r-342', name: '류머티스성 관절염 롤온 (시베리안퍼)', category: '통증',
    description: '시베리안퍼·사이프레스·마조람·윈터그린·클로브 류머티스성 관절염 완화 롤온.\n통증 부위에 도포합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '시베리안퍼', drops: 5}, {name: '사이프레스', drops: 5}, {name: '마조람', drops: 5}, {name: '윈터그린', drops: 5}, {name: '클로브', drops: 1}],
    notes: '통증 부위에 도포하세요.'
  },
  {
    id: 'r-343', name: '하지정맥류/부종완화 오일', category: '건강케어',
    description: '사이프레스·자몽·라벤더·로즈제라늄·주니퍼베리 하지정맥류/부종 완화 오일.\n발목에서 심장 방향으로 부드럽게 쓸어올려 주며 마사지합니다.',
    refVolume: 115, carrier: '코코넛오일 채우기',
    ingredients: [{name: '사이프레스', drops: 30}, {name: '자몽', drops: 20}, {name: '라벤더', drops: 10}, {name: '로즈제라늄', drops: 10}, {name: '주니퍼베리', drops: 10}],
    notes: '발목에서 심장 방향으로 부드럽게 쓸어올려 주며 마사지하세요.'
  },
  {
    id: 'r-344', name: '치질 스포이드 (사이프레스)', category: '건강케어',
    description: '사이프레스·라벤더·프랑킨센스 치질 완화 스포이드.\n해당 부위에 바릅니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '사이프레스', drops: 20}, {name: '라벤더', drops: 20}, {name: '프랑킨센스', drops: 10}],
    notes: '해당 부위에 바르세요.'
  },
  {
    id: 'r-345', name: '두피 강화 샴푸', category: '건강케어',
    description: '로즈마리·시더우드·라벤더 두피 강화 샴푸 블렌딩.\n도테라 샴푸 500ml에 혼합하여 사용합니다.',
    refVolume: 500, carrier: '샴푸 베이스 채우기',
    ingredients: [{name: '로즈마리', drops: 20}, {name: '시더우드', drops: 20}, {name: '라벤더', drops: 20}],
    notes: '샴푸에 잘 섞이도록 중간중간 나눠서 넣고 잘 저어 주세요. 일랑일랑, 클라리세이지로 대체 가능.'
  },
  {
    id: 'r-346', name: '안정감을 주는 향수', category: '향수',
    description: '시더우드·라벤더·오렌지·베티버 안정감을 주는 향수.\n향수 베이스로 채워 사용합니다.',
    refVolume: 10, carrier: '향수 베이스로 채우기',
    ingredients: [{name: '시더우드', drops: 3}, {name: '라벤더', drops: 3}, {name: '오렌지', drops: 3}, {name: '베티버', drops: 1}],
    notes: '향수 베이스에 오일을 혼합하여 사용하세요.'
  },
  {
    id: 'r-347', name: '물광 토너', category: '피부',
    description: '시더우드·라벤더·코파이바 물광 토너.\n플로럴 워터로 채워 사용합니다.',
    refVolume: 100, carrier: '플로럴 워터로 채우기',
    ingredients: [{name: '시더우드', drops: 2}, {name: '라벤더', drops: 2}, {name: '코파이바', drops: 2}],
    notes: '사용할 때마다 잘 흔들어서 사용하세요.'
  },
  {
    id: 'r-348', name: '후끈후끈 면역 UP 캡슐', category: '건강케어',
    description: '시나몬·진저·투메릭 면역 강화 캡슐.\n베지캡스에 넣어 섭취합니다.',
    refVolume: 0, carrier: '배지캡슐',
    ingredients: [{name: '시나몬바크', drops: 2}, {name: '진저', drops: 1}, {name: '투메릭', drops: 1}],
    notes: '베지캡스에 넣어 섭취하세요. 환절기에 섭취하면 좋습니다.'
  },
  {
    id: 'r-349', name: '진드기 퇴치 스프레이', category: '생활용품',
    description: '시나몬·제라늄·레몬그라스 진드기 퇴치 스프레이.\n침구류, 소파, 카펫 등에 뿌려줍니다.',
    refVolume: 100, carrier: '생수로 채우기',
    ingredients: [{name: '시나몬바크', drops: 8}, {name: '제라늄', drops: 7}, {name: '레몬그라스', drops: 15}],
    notes: '침구류, 소파, 카펫 등에 뿌려주세요.'
  },
  {
    id: 'r-350', name: '변비 탈출 스포이드', category: '건강케어',
    description: '블랙페퍼·로즈마리·오렌지 변비 완화 스포이드.\n아랫배에 발라주고 시계방향으로 마사지합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '블랙페퍼', drops: 5}, {name: '로즈마리', drops: 5}, {name: '오렌지', drops: 5}],
    notes: '아랫배에 발라주고 시계방향으로 마사지하세요.'
  },
  {
    id: 'r-351', name: '먹는 아로마 솔트', category: '건강케어',
    description: '블랙페퍼·오레가노·로즈마리·바질 먹는 아로마 솔트.\n30ml 먹는 솔트에 오일을 떨어뜨려 잘 흔들어 줍니다.',
    refVolume: 30, carrier: '먹는 솔트 채우기',
    ingredients: [{name: '블랙페퍼', drops: 1}, {name: '오레가노', drops: 1}, {name: '로즈마리', drops: 1}, {name: '바질', drops: 1}],
    notes: '먹는 솔트에 오일을 떨어뜨려 잘 흔들어 주세요.'
  },
  {
    id: 'r-352', name: '신경 진정 롤온', category: '스트레스',
    description: '베티버·코파이바·프랑킨센스·라벤더 신경 진정 롤온.\n관자놀이, 귀 뒤와 목 뒤, 꼬리뼈, 발바닥에 도포합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '베티버', drops: 3}, {name: '코파이바', drops: 5}, {name: '프랑킨센스', drops: 5}, {name: '라벤더', drops: 5}],
    notes: '관자놀이, 귀 뒤와 목 뒤, 꼬리뼈, 발바닥에 도포하고 향기를 흡입하세요.'
  },
  {
    id: 'r-353', name: '백반증 롤온', category: '피부',
    description: '베티버·미르·프랑킨센스·하와이안 샌달우드 백반증 완화 롤온.\n귀뒤와 목뒤, 발의 반사구에 도포하고 향기를 흡입합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '베티버', drops: 5}, {name: '미르', drops: 5}, {name: '프랑킨센스', drops: 5}, {name: '하와이안 샌달우드', drops: 5}],
    notes: '귀뒤와 목뒤, 발의 반사구에 도포하고 향기를 흡입하세요.'
  },
  {
    id: 'r-354', name: '마음 진정 향수', category: '향수',
    description: '베르가못·라벤더·네롤리 터치 마음 진정 향수.\n향수처럼 맥박 부위에 바릅니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '베르가못', drops: 6}, {name: '라벤더', drops: 4}, {name: '네롤리 터치', drops: 20}],
    notes: '향수처럼 맥박, 목, 손목에 바르세요.'
  },
  {
    id: 'r-355', name: '시원한 여름 향수', category: '향수',
    description: '베르가못·그린만다린·베티버 시원한 여름 향수.\n향수 베이스로 채워 사용합니다.',
    refVolume: 10, carrier: '향수 베이스로 채우기',
    ingredients: [{name: '베르가못', drops: 7}, {name: '그린만다린', drops: 7}, {name: '베티버', drops: 3}],
    notes: '향수 베이스에 오일을 혼합하여 사용하세요.'
  },
  {
    id: 'r-356', name: '수험생 롤온', category: '집중력',
    description: '바질·로즈마리·레몬 수험생 집중력 향상 롤온.\n수험생의 백회, 관자놀이, 목뒤에 도포합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '바질', drops: 7}, {name: '로즈마리', drops: 7}, {name: '레몬', drops: 10}],
    notes: '백회, 관자놀이, 목뒤에 도포하세요.'
  },
  {
    id: 'r-357', name: '신경 예민 디퓨징', category: '스트레스',
    description: '로즈마리·로만캐모마일·오렌지 신경 예민 완화 디퓨징.\n300ml 디퓨저 기준으로 사용합니다.',
    refVolume: 300, carrier: '디퓨저',
    ingredients: [{name: '로즈마리', drops: 3}, {name: '로만캐모마일', drops: 3}, {name: '오렌지', drops: 4}],
    notes: '300ml 디퓨저 기준으로 사용하세요.'
  },
  {
    id: 'r-358', name: '갑상선 항진 롤온', category: '건강케어',
    description: '프랑킨센스·코파이바·미르·레몬그라스 갑상선 항진 완화 롤온.\n목 주변에 수시로 발라줍니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '프랑킨센스', drops: 5}, {name: '코파이바', drops: 5}, {name: '미르', drops: 3}, {name: '레몬그라스', drops: 3}],
    notes: '목 주변에 수시로 발라주세요.'
  },
  {
    id: 'r-359', name: '갑상선 저하 롤온', category: '건강케어',
    description: '프랑킨센스·코파이바·레몬그라스·클로브 갑상선 저하 완화 롤온.\n목 주변에 수시로 발라줍니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '프랑킨센스', drops: 5}, {name: '코파이바', drops: 3}, {name: '레몬그라스', drops: 3}, {name: '클로브', drops: 3}],
    notes: '목 주변에 수시로 발라주세요.'
  },
  {
    id: 'r-360', name: '냉/암 궁관리 블렌드', category: '건강케어',
    description: '미르·프랑킨센스·진저·코파이바·티트리·샌달우드 궁관리 블렌드.\n베지캡스에 5~6방울을 넣어 잠자기 전 질 내 깊숙이 삽입합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '미르', drops: 5}, {name: '프랑킨센스', drops: 5}, {name: '진저', drops: 5}, {name: '코파이바', drops: 5}, {name: '티트리', drops: 5}, {name: '샌달우드', drops: 5}],
    notes: '베지캡스에 5~6방울을 넣어 잠자기 전 질 내 깊숙이 삽입하세요.'
  },
  {
    id: 'r-361', name: '대상포진 완화 스포이드', category: '건강케어',
    description: '멜리사·프랑킨센스·코파이바 대상포진 완화 스포이드.\n통증 부위에 도포합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '멜리사', drops: 10}, {name: '프랑킨센스', drops: 10}, {name: '코파이바', drops: 10}],
    notes: '통증 부위에 도포하세요.'
  },
  {
    id: 'r-362', name: '바이러스/알러지성 피부트러블 완화 롤온', category: '피부',
    description: '멜리사·티트리·베르가못 바이러스/알러지성 피부트러블 완화 롤온.\n트러블 부위에 롤링합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '멜리사', drops: 5}, {name: '티트리', drops: 5}, {name: '베르가못', drops: 3}],
    notes: '트러블 부위에 롤링하세요.'
  },
  {
    id: 'r-363', name: '숙면 롤온 (마조람+라벤더)', category: '수면',
    description: '마조람·라벤더·일랑일랑·시더우드 숙면 유도 롤온.\n발바닥, 꼬리뼈에 도포합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '마조람', drops: 5}, {name: '라벤더', drops: 5}, {name: '일랑일랑', drops: 5}, {name: '시더우드', drops: 5}],
    notes: '발바닥, 꼬리뼈에 도포하세요.'
  },
  {
    id: 'r-364', name: '근육 통증 이완 롤온 (마조람)', category: '통증',
    description: '마조람·딥블루·코파이바·아로마터치·오렌지 근육 통증 이완 롤온.\n통증 부위에 롤링합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '마조람', drops: 5}, {name: '딥블루', drops: 5}, {name: '코파이바', drops: 5}, {name: '아로마터치', drops: 3}, {name: '오렌지', drops: 2}],
    notes: '근육 통증 부위에 롤링하세요.'
  },
  {
    id: 'r-365', name: '나를 행복하게 해주는 힐링 향수', category: '향수',
    description: '바닐라·자몽·베르가못 힐링 향수.\n향수처럼 맥박 부위에 바릅니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '바닐라', drops: 3}, {name: '자몽', drops: 3}, {name: '베르가못', drops: 2}],
    notes: '향수처럼 맥박, 목, 손목에 바르세요.'
  },
  {
    id: 'r-366', name: '잠잠히 잠재워 줄 디퓨징', category: '수면',
    description: '바닐라·오렌지·샌달우드·마조람 숙면 유도 디퓨징.\n300ml 디퓨저 기준으로 사용합니다.',
    refVolume: 300, carrier: '디퓨저',
    ingredients: [{name: '바닐라', drops: 3}, {name: '오렌지', drops: 3}, {name: '샌달우드', drops: 2}, {name: '마조람', drops: 2}],
    notes: '300ml 디퓨저 기준으로 사용하세요.'
  },
  {
    id: 'r-367', name: '맑은 피부톤 크림', category: '피부',
    description: '로즈제라늄·라벤더·프랑킨센스 맑은 피부톤 크림.\n핸드/바디로션 50ml에 혼합하여 사용합니다.',
    refVolume: 50, carrier: '핸드/바디로션 채우기',
    ingredients: [{name: '로즈제라늄', drops: 5}, {name: '라벤더', drops: 5}, {name: '프랑킨센스', drops: 2}],
    notes: '로션에 혼합하여 바르세요.'
  },
  {
    id: 'r-368', name: '사춘기 여드름 케어 롤온', category: '피부',
    description: '티트리·로즈제라늄·코파이바 사춘기 여드름 케어 롤온.\n여드름 부위에 롤링합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '티트리', drops: 15}, {name: '로즈제라늄', drops: 5}, {name: '코파이바', drops: 5}],
    notes: '여드름 부위에 수시로 롤링하세요.'
  },
  {
    id: 'r-369', name: '탈모예방 스프레이', category: '건강케어',
    description: '로즈마리·시더우드·라벤더·티트리·오렌지·페퍼민트 탈모예방 두피 스프레이.\n두피에 스프레이 후 마사지합니다.',
    refVolume: 50, carrier: '생수로 채우기',
    ingredients: [{name: '로즈마리', drops: 20}, {name: '시더우드', drops: 10}, {name: '라벤더', drops: 10}, {name: '티트리', drops: 10}, {name: '오렌지', drops: 10}, {name: '페퍼민트', drops: 10}],
    notes: '두피에 스프레이 후 마사지하세요.'
  },
  {
    id: 'r-370', name: '통풍 완화 롤온', category: '건강케어',
    description: '로즈마리·코파이바·레몬·주니퍼베리 통풍 완화 롤온.\n통증 부위에 롤링합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '로즈마리', drops: 10}, {name: '코파이바', drops: 5}, {name: '레몬', drops: 5}, {name: '주니퍼베리', drops: 5}],
    notes: '통풍 통증 부위에 롤링하세요.'
  },
  {
    id: 'r-371', name: '동안 세럼', category: '피부',
    description: '로즈 페탈·프랑킨센스·라벤더 동안 세럼.\n세안 후 얼굴에 소량 도포합니다.',
    refVolume: 10, carrier: '캐리어 오일 채우기',
    ingredients: [{name: '로즈 페탈', drops: 2}, {name: '프랑킨센스', drops: 2}, {name: '라벤더', drops: 2}],
    notes: '세안 후 얼굴에 소량 도포하세요.'
  },
  {
    id: 'r-372', name: '동안 스킨 미스트', category: '피부',
    description: '로즈 페탈·프랑킨센스·샌달우드 동안 스킨 미스트.\n사용할 때마다 잘 흔들어서 뿌려줍니다.',
    refVolume: 100, carrier: '플로럴 워터로 채우기',
    ingredients: [{name: '로즈 페탈', drops: 2}, {name: '프랑킨센스', drops: 1}, {name: '샌달우드', drops: 2}],
    notes: '사용할 때마다 잘 흔들어서 뿌려주세요.'
  },
  {
    id: 'r-373', name: '어린이 심리 케어 디퓨징', category: '수면',
    description: '로만캐모마일·자몽·스피어민트 어린이 심리 케어 디퓨징.\n300ml 디퓨저 기준으로 사용합니다.',
    refVolume: 300, carrier: '디퓨저',
    ingredients: [{name: '로만캐모마일', drops: 5}, {name: '자몽', drops: 3}, {name: '스피어민트', drops: 2}],
    notes: '300ml 디퓨저 기준으로 사용하세요.'
  },
  {
    id: 'r-374', name: '영유아 진정 롤온', category: '수면',
    description: '로만캐모마일·라벤더·프랑킨센스 영유아 진정 롤온.\n발바닥, 가슴, 뒷목에 마사지합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '로만캐모마일', drops: 2}, {name: '라벤더', drops: 2}, {name: '프랑킨센스', drops: 2}],
    notes: '발바닥, 가슴, 뒷목에 마사지해 주세요.'
  },
  {
    id: 'r-375', name: '상쾌함을 주는 청소 스프레이', category: '생활용품',
    description: '레몬유칼립투스·레몬 상쾌한 청소 스프레이.\n생수로 채워 청소에 사용합니다.',
    refVolume: 100, carrier: '생수로 채우기',
    ingredients: [{name: '레몬유칼립투스', drops: 10}, {name: '레몬', drops: 20}],
    notes: '생수로 채워 청소에 사용하세요.'
  },
  {
    id: 'r-376', name: '손상된 인대 회복 롤온', category: '통증',
    description: '레몬그라스·딥블루·코파이바 인대 회복 롤온.\n해당 부위에 수시로 롤링합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '레몬그라스', drops: 5}, {name: '딥블루', drops: 10}, {name: '코파이바', drops: 10}],
    notes: '손상된 인대 부위에 수시로 롤링하세요.'
  },
  {
    id: 'r-377', name: '초파리 퇴치 스프레이', category: '생활용품',
    description: '레몬그라스·유칼립투스·페퍼민트 초파리 퇴치 스프레이.\n50ml 스프레이 기준으로 사용합니다.',
    refVolume: 50, carrier: '물로 채우기',
    ingredients: [{name: '레몬그라스', drops: 20}, {name: '유칼립투스', drops: 5}, {name: '페퍼민트', drops: 5}],
    notes: '초파리가 생기는 곳에 뿌려주세요.'
  },
  {
    id: 'r-378', name: '숙취 해소 롤온 (레몬)', category: '건강케어',
    description: '레몬·다이제스트젠·페퍼민트 숙취 해소 롤온.\n복부와 발바닥에 마사지합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '레몬', drops: 5}, {name: '다이제스트젠', drops: 3}, {name: '페퍼민트', drops: 2}],
    notes: '복부와 발바닥에 마사지하세요.'
  },
  {
    id: 'r-379', name: '숙취 해소 캡슐 (레몬)', category: '건강케어',
    description: '레몬·다이제스트젠·페퍼민트 숙취 해소 캡슐.\n베지캡스에 넣거나 꿀차로 섭취합니다.',
    refVolume: 0, carrier: '배지캡슐',
    ingredients: [{name: '레몬', drops: 1}, {name: '다이제스트젠', drops: 1}, {name: '페퍼민트', drops: 1}],
    notes: '베지캡스에 넣거나 동일 용량을 꿀차로 섭취하세요.'
  },
  {
    id: 'r-380', name: '모히또', category: '건강케어',
    description: '라임·스피어민트·레몬 천연 모히또.\n1컵 기준으로 플레인 탄산수 반+사이다 반에 오일을 넣어 마십니다.',
    refVolume: 0, carrier: '탄산수:사이다 1:1',
    ingredients: [{name: '라임', drops: 1}, {name: '스피어민트', drops: 1}, {name: '레몬', drops: 1}],
    notes: '플레인 탄산수 반과 사이다 반에 오일을 넣어 마시세요.'
  },
  {
    id: 'r-381', name: '스트레스 프리 인헤일러', category: '스트레스',
    description: '라임·오렌지·레몬·자몽·엘리베이션 스트레스 완화 인헤일러.\n섬유필터에 오일을 떨어뜨린 후 깊이 흡입합니다.',
    refVolume: 0, carrier: '인헤일러',
    ingredients: [{name: '라임', drops: 2}, {name: '오렌지', drops: 2}, {name: '레몬', drops: 2}, {name: '자몽', drops: 2}, {name: '엘리베이션', drops: 2}],
    notes: '섬유필터에 오일을 떨어뜨린 후 인헤일러에 넣고 깊이 흡입하세요.'
  },
  {
    id: 'r-382', name: '성조숙증 완화 롤온', category: '건강케어',
    description: '라벤더·밸런스 성조숙증 완화 롤온.\n발바닥, 서혜부, 가슴 부위에 롤링합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '라벤더', drops: 7}, {name: '밸런스', drops: 7}],
    notes: '발바닥, 서혜부, 가슴 부위에 롤링하세요.'
  },
  {
    id: 'r-383', name: '침구 스프레이 (라벤더 100ml)', category: '수면',
    description: '라벤더·페퍼민트·유칼립투스·오렌지 침구 스프레이.\n베개나 이불에 스프레이합니다.',
    refVolume: 100, carrier: '생수로 채우기',
    ingredients: [{name: '라벤더', drops: 20}, {name: '페퍼민트', drops: 10}, {name: '유칼립투스', drops: 10}, {name: '오렌지', drops: 5}],
    notes: '베개나 이불에 스프레이하세요.'
  },
  {
    id: 'r-384', name: '피부탄력 세럼 롤온', category: '피부',
    description: '네롤리 터치·야로우품·프랑킨센스 피부탄력 세럼 롤온.\n세안 후 얼굴에 도포합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '네롤리 터치', ml: 5}, {name: '야로우품', drops: 5}, {name: '프랑킨센스', drops: 5}],
    notes: '세안 후 얼굴에 도포하세요.'
  },
  {
    id: 'r-385', name: '임신선/튼살 완화 롤온 (네롤리)', category: '피부',
    description: '네롤리 터치·헬리크리섬·프랑킨센스 임신선/튼살 완화 롤온.\n해당 부위에 수시로 롤링합니다.',
    refVolume: 10, carrier: '코코넛오일 채우기',
    ingredients: [{name: '네롤리 터치', ml: 5}, {name: '헬리크리섬', drops: 2}, {name: '프랑킨센스', drops: 3}],
    notes: '임신선, 튼살 부위에 수시로 롤링하세요.'
  },
  {
    id: 'r-386', name: '풍미 UP! 청귤청', category: '건강케어',
    description: '그린만다린 풍미 업 청귤청.\n청귤청 1L 기준으로 그린만다린을 넣어 섞어줍니다.',
    refVolume: 1000, carrier: '청귤청 채우기',
    ingredients: [{name: '그린만다린', drops: 10}],
    notes: '청귤 에이드 마실 때 2방울을 첨가하세요.'
  },
  {
    id: 'r-387', name: '피부 청결 클렌징 오일 (115ml)', category: '피부',
    description: '그린만다린·레몬·사이프레스·시더우드 피부 청결 클렌징 오일.\n가볍게 문지른 후 폼클렌저로 세안합니다.',
    refVolume: 115, carrier: '코코넛오일 채우기',
    ingredients: [{name: '그린만다린', drops: 10}, {name: '레몬', drops: 5}, {name: '사이프레스', drops: 5}, {name: '시더우드', drops: 5}],
    notes: '가볍게 문지른 후 폼클렌저로 세안하세요.'
  }
];

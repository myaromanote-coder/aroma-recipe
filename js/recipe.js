(() => {
  // 오일별 효능 키워드
  const OIL_KEYWORDS = {
    '라벤더': '진정, 수면, 항균',
    '티트리': '항균, 피부진정, 면역',
    '페퍼민트': '냉각, 집중력, 소화',
    '프랑킨센스': '세포재생, 노화방지, 진정',
    '로즈제라늄': '호르몬균형, 피부탄력',
    '유칼립투스': '호흡기, 항균, 냉각',
    '오레가노': '강력항균, 면역강화',
    '클로브': '항균, 진통, 구강케어',
    '레몬': '항균, 기분전환, 세정',
    '온가드': '면역강화, 항균, 보호',
    '코파이바': '진통, 소염, 피부진정',
    '딥블루': '근육이완, 통증완화',
    '아로마터치': '마사지, 근육이완, 순환',
    '아로마터지': '마사지, 근육이완',
    '밸런스': '심리안정, 그라운딩',
    '시더우드': '두피순환, 진정, 집중',
    '일랑일랑': '기분전환, 피지조절, 로맨틱',
    '베르가못': '스트레스완화, 기분전환',
    '자몽': '기분전환, 활력, 다이어트',
    '지몽': '기분전환, 활력, 다이어트',
    '로즈마리': '기억력, 두피순환, 집중',
    '클라리세이지': '호르몬균형, 진정',
    '사이프러스': '순환개선, 해독',
    '사이프레스': '순환개선, 해독',
    '미르': '항균, 구강, 피부재생',
    '파촐리': '그라운딩, 방충',
    '샌달우드': '진정, 피부보습, 명상',
    '하와이안 샌달우드': '진정, 피부보습, 명상',
    '마조람': '근육이완, 수면',
    '주니퍼베리': '해독, 순환',
    '진저': '소화, 순환, 에너지',
    '이지에어': '호흡기, 비염, 청량감',
    '세레니티': '수면, 긴장이완',
    '퓨리파이': '공기정화, 탈취',
    '어댑티브': '심리적응, 안정감',
    '시트러스블리스': '기분전환, 활력',
    '레몬그라스': '진통, 방충, 활력',
    '야로우품': '항염, 피부재생',
    '살루벨': '피부진정, 재생',
    '아로우품': '피부재생, 안티에이징',
    '헬리크리섬': '피부재생, 상처치유',
    '바질': '집중력, 소화, 항균',
    '타임': '항균, 면역, 호흡기',
    '히노키': '피톤치드, 공기정화',
    '포레스트베싱': '피톤치드, 삼림욕',
    '테라쉴드': '방충',
    '레몬유칼립투스': '방충, 호흡기',
    '시나몬바크': '항균, 면역, 보온',
    '블랙스프루스': '호흡기, 남성적향',
    '로만캐모마일': '수면, 진정, 소아케어',
    '바닐라': '진정, 달콤한향',
    '라임': '상쾌함, 기분전환',
    '오렌지': '기분전환, 소화, 항균',
    '다이제스트젠': '소화기, 위장',
    '클리어리파이': '공기정화, 항균',
    '스피어민트': '냉각, 소화, 청량',
    '메타파워': '에너지, 활력',
    '이오메가+': '영양보충',
    '밸런스': '심리안정, 그라운딩',
    '시베리안퍼': '호흡기, 피톤치드',
    '블랙페퍼': '소화, 순환, 온열',
    '원하는 오일 3가지': '취향에 맞게 선택',
    '원하는 오일 2-3가지': '취향에 맞게 선택',
    '원하는 오일 선택': '효능에 따라 선택',
    '3가지 선택': '취향에 맞게 선택',
    '원하는 오일 3가지 선택': '취향에 맞게 선택',
  };

  function getKeyword(name) {
    // 부분 매칭도 지원
    const key = Object.keys(OIL_KEYWORDS).find(k =>
      name.includes(k) || k.includes(name.split('(')[0].trim())
    );
    return key ? OIL_KEYWORDS[key] : '';
  }

  let recipe = null;
  let targetVolume = 10;

  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  if (!id) { location.href = 'index.html'; return; }

  recipe = DB.getById(id);
  if (!recipe) {
    document.getElementById('loadingState').innerHTML =
      '<div class="empty-state"><div class="ei">😢</div><h3>레시피를 찾을 수 없어요</h3><p><a href="index.html">목록으로</a></p></div>';
    return;
  }

  document.title = `${recipe.name} - 아로마 레시피`;

  // 목록으로 버튼 - 이전 화면으로 복귀
  document.getElementById('backBtn').addEventListener('click', e => {
    e.preventDefault();
    if (history.length > 1) {
      history.back();
    } else {
      location.href = 'index.html';
    }
  });

  renderRecipe();
  setupFavorite();

  function renderRecipe() {
    // 헤더
    document.getElementById('detailCategory').textContent = recipe.category || '기타';
    document.getElementById('detailCategory').className = `category-badge cat-${recipe.category || '기타'}`;
    document.getElementById('detailName').textContent = recipe.name;
    document.getElementById('detailDesc').textContent = recipe.description || '';

    // 재료 목록 (방울수 대신 효능 키워드)
    document.getElementById('detailIngredients').innerHTML =
      (recipe.ingredients || []).map(i => {
        const kw = getKeyword(i.name);
        return `<li class="ing-item">
          <span class="ing-name">${i.name}</span>
          ${kw ? `<span class="ing-keyword">${kw}</span>` : ''}
        </li>`;
      }).join('');

    // 사용법 (샘플링 내용 제거)
    const notes = (recipe.notes || '')
      .split('\n')
      .filter(line => !line.includes('샘플') && !line.includes('기준 라벤더') && line.trim())
      .join('\n')
      .trim();
    document.getElementById('detailNotes').textContent = notes || '-';
    if (!notes) document.getElementById('notesCard').style.display = 'none';

    // 계산기 초기화
    if (recipe.refVolume > 0) {
      targetVolume = recipe.refVolume;
      // 기준 볼륨과 일치하는 프리셋 활성화
      document.querySelectorAll('#volumePresets .preset').forEach(btn => {
        if (parseFloat(btn.dataset.v) === recipe.refVolume) btn.classList.add('active');
      });
      setupPresets();
    } else {
      document.getElementById('volumePresets').style.display = 'none';
    }

    renderDropsTable();

    document.getElementById('loadingState').style.display = 'none';
    document.getElementById('recipeContent').style.display = 'block';
  }

  function setupPresets() {
    document.querySelectorAll('#volumePresets .preset').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#volumePresets .preset').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        targetVolume = parseFloat(btn.dataset.v);
        renderDropsTable();
      });
    });
  }

  function renderDropsTable() {
    const ings = recipe.ingredients || [];
    const refDrops = ings.reduce((s, i) => s + (i.drops || 0), 0);
    const scale = recipe.refVolume > 0 ? targetVolume / recipe.refVolume : 1;
    const totalDrops = Math.round(refDrops * scale);

    // 요약
    const summaryEl = document.getElementById('calcSummary');
    if (recipe.refVolume > 0) {
      summaryEl.textContent = `${targetVolume}ml 기준 | 에센셜오일 총 ${totalDrops}방울`;
    } else {
      summaryEl.textContent = `에센셜오일 총 ${refDrops}방울`;
    }

    // 테이블
    const carrierRow = recipe.carrier && recipe.carrier !== '없음 (원액)' && recipe.carrier !== '배지캡슐'
      ? `<tr class="row-carrier"><td>🫙 ${recipe.carrier}</td><td>채우기</td></tr>`
      : '';

    document.getElementById('calcBody').innerHTML =
      ings.map(ing => {
        const drops = recipe.refVolume > 0 ? Math.round((ing.drops || 0) * scale) : (ing.drops || 0);
        return `<tr><td>${ing.name}</td><td class="drops-val">${drops}방울</td></tr>`;
      }).join('') + carrierRow;
  }

  function setupFavorite() {
    const btn = document.getElementById('favBtnHero');
    updateFavBtn();
    btn.addEventListener('click', () => {
      const added = DB.toggleFavorite(recipe.id);
      updateFavBtn();
      showToast(added ? '❤️ 즐겨찾기에 추가했어요' : '즐겨찾기에서 제거했어요');
    });
  }

  function updateFavBtn() {
    const btn = document.getElementById('favBtnHero');
    const fav = DB.isFavorite(recipe.id);
    btn.textContent = fav ? '❤️' : '🤍';
    btn.classList.toggle('active', fav);
  }

  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.className = 'toast show';
    setTimeout(() => t.className = 'toast', 2500);
  }
})();

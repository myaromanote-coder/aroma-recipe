(() => {
  let allRecipes = [];
  let activeCategory = '전체';
  let searchTerm = '';

  const grid = document.getElementById('recipeGrid');
  const countEl = document.getElementById('resultsCount');
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');
  const favBadge = document.getElementById('favBadge');

  // ── 초기화 ───────────────────────────────────
  allRecipes = DB.getAll();
  updateFavBadge();
  render();
  setupSearch();
  setupFilters();

  // ── 즐겨찾기 뱃지 ────────────────────────────
  function updateFavBadge() {
    const count = DB.getFavorites().length;
    if (count > 0) {
      favBadge.textContent = count;
      favBadge.style.display = 'flex';
    } else {
      favBadge.style.display = 'none';
    }
  }

  // ── 검색 ─────────────────────────────────────
  function setupSearch() {
    searchInput.addEventListener('input', () => {
      searchTerm = searchInput.value.trim().toLowerCase();
      searchClear.classList.toggle('visible', searchTerm.length > 0);
      render();
    });
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      searchTerm = '';
      searchClear.classList.remove('visible');
      render();
    });
  }

  // ── 필터 ─────────────────────────────────────
  function setupFilters() {
    document.getElementById('filterBar').addEventListener('click', e => {
      const chip = e.target.closest('.chip');
      if (!chip) return;
      document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.dataset.cat;
      render();
    });
  }

  // ── 렌더링 ───────────────────────────────────
  function render() {
    // 최신 데이터 다시 로드 (사용자가 추가했을 수 있음)
    allRecipes = DB.getAll();

    let list = allRecipes;

    // 카테고리 필터
    if (activeCategory !== '전체') {
      list = list.filter(r => r.category === activeCategory);
    }

    // 검색 필터: 이름, 설명, 재료명으로 검색
    if (searchTerm) {
      list = list.filter(r =>
        r.name.toLowerCase().includes(searchTerm) ||
        (r.description || '').toLowerCase().includes(searchTerm) ||
        (r.ingredients || []).some(i => i.name.toLowerCase().includes(searchTerm))
      );
    }

    countEl.textContent = `${list.length}개의 레시피`;

    if (list.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="ei">🌿</div>
          <h3>레시피를 찾을 수 없어요</h3>
          <p>다른 검색어나 카테고리를 시도해보세요</p>
        </div>`;
      return;
    }

    grid.innerHTML = list.map(r => recipeCard(r)).join('');

    // 즐겨찾기 버튼 이벤트
    grid.querySelectorAll('.fav-btn-card').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        const id = btn.dataset.id;
        const added = DB.toggleFavorite(id);
        btn.classList.toggle('active', added);
        btn.textContent = added ? '❤️' : '🤍';
        showToast(added ? '즐겨찾기에 추가했어요' : '즐겨찾기에서 제거했어요');
        updateFavBadge();
      });
    });
  }

  // ── 카드 HTML ─────────────────────────────────
  function recipeCard(r) {
    const isFav = DB.isFavorite(r.id);
    const catClass = `cat-${r.category || '기타'}`;
    const ings = (r.ingredients || []).slice(0, 3);
    const more = (r.ingredients || []).length > 3 ? `<span class="ing-tag">+${r.ingredients.length - 3}</span>` : '';

    return `
      <a class="recipe-card" href="recipe.html?id=${r.id}">
        <div class="card-top">
          <span class="category-badge ${catClass}">${r.category || '기타'}</span>
          <div class="card-actions">
            <button class="fav-btn-card ${isFav ? 'active' : ''}" data-id="${r.id}"
                    title="${isFav ? '즐겨찾기 제거' : '즐겨찾기 추가'}">${isFav ? '❤️' : '🤍'}</button>
            <span class="more-arrow">→</span>
          </div>
        </div>
        <div class="card-name">${r.name}</div>
        <div class="card-desc">${(r.description || '').split('\n')[0]}</div>
        <div class="card-ingredients">
          ${ings.map(i => `<span class="ing-tag">${i.name.split(' (')[0]}</span>`).join('')}
          ${more}
        </div>
      </a>`;
  }

  // ── 토스트 ───────────────────────────────────
  function showToast(msg, type = '') {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.className = `toast ${type} show`;
    setTimeout(() => t.className = 'toast', 2500);
  }
})();

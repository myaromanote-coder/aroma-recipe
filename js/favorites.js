(() => {
  const grid = document.getElementById('favGrid');

  render();

  function render() {
    const list = DB.getFavoriteRecipes();

    if (list.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="ei">🤍</div>
          <h3>아직 즐겨찾기가 없어요</h3>
          <p>레시피 카드의 🤍 버튼을 눌러 저장해보세요</p>
          <br>
          <a href="index.html" style="color:#7B6FA0;font-weight:600;text-decoration:none">레시피 탐색하기 →</a>
        </div>`;
      return;
    }

    grid.innerHTML = list.map(r => {
      const catClass = `cat-${r.category || '기타'}`;
      const ings = (r.ingredients || []).slice(0, 3);
      return `
        <a class="recipe-card" href="recipe.html?id=${r.id}">
          <div class="card-top">
            <span class="category-badge ${catClass}">${r.category || '기타'}</span>
            <div class="card-actions">
              <button class="fav-btn-card active" data-id="${r.id}" title="즐겨찾기 제거">❤️</button>
              <span class="more-arrow">→</span>
            </div>
          </div>
          <div class="card-name">${r.name}</div>
          <div class="card-desc">${(r.description || '').split('\n')[0]}</div>
          <div class="card-ingredients">
            ${ings.map(i => `<span class="ing-tag">${i.name.split(' (')[0]}</span>`).join('')}
          </div>
        </a>`;
    }).join('');

    // 즐겨찾기 제거 버튼
    grid.querySelectorAll('.fav-btn-card').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        DB.toggleFavorite(btn.dataset.id);
        showToast('즐겨찾기에서 제거했어요');
        render();
      });
    });
  }

  function showToast(msg, type = '') {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.className = `toast ${type} show`;
    setTimeout(() => t.className = 'toast', 2500);
  }
})();

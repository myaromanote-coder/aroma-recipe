(() => {
  let editingId = null;
  let ingredients = [];

  // ── 테이블 렌더링 ─────────────────────────────
  function renderTable() {
    const all = DB.getAll();
    const userRecipes = DB.getUserRecipes();
    const tbody = document.getElementById('adminTableBody');
    const countLabel = document.getElementById('recipeCountLabel');

    countLabel.textContent = `전체 ${all.length}개 (기본 ${BUILTIN_RECIPES.length}개 + 추가 ${userRecipes.length}개)`;

    if (all.length === 0) {
      tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;padding:30px;color:#999">레시피가 없습니다</td></tr>';
      return;
    }

    tbody.innerHTML = all.map(r => {
      const isBuiltin = DB.isBuiltin(r.id);
      const catClass = `category-badge cat-${r.category || '기타'}`;
      const ingNames = (r.ingredients || []).map(i => i.name.split(' (')[0]).slice(0, 2).join(', ');
      const more = (r.ingredients || []).length > 2 ? ` +${r.ingredients.length - 2}` : '';

      return `<tr>
        <td>
          ${r.name}
          ${isBuiltin ? '<span class="builtin-badge">기본</span>' : ''}
        </td>
        <td><span class="${catClass}">${r.category || '기타'}</span></td>
        <td style="font-size:0.8rem;color:#666">${ingNames}${more}</td>
        <td>
          <div style="display:flex;gap:6px">
            ${isBuiltin
              ? `<button class="btn btn-outline btn-sm" onclick="viewRecipe('${r.id}')">보기</button>`
              : `<button class="btn btn-outline btn-sm" onclick="editRecipe('${r.id}')">✏️ 수정</button>
                 <button class="btn btn-danger btn-sm" onclick="deleteRecipe('${r.id}', '${r.name.replace(/'/g, "\\'")}')">🗑️</button>`
            }
          </div>
        </td>
      </tr>`;
    }).join('');
  }

  renderTable();

  // ── 레시피 보기 (기본 레시피) ─────────────────
  window.viewRecipe = id => { location.href = `recipe.html?id=${id}`; };

  // ── 추가 버튼 ────────────────────────────────
  document.getElementById('addBtn').addEventListener('click', () => {
    editingId = null;
    resetForm();
    document.getElementById('modalTitle').textContent = '레시피 추가';
    openModal();
  });

  // ── 수정 ─────────────────────────────────────
  window.editRecipe = id => {
    editingId = id;
    const r = DB.getById(id);
    if (!r) return;
    fillForm(r);
    document.getElementById('modalTitle').textContent = '레시피 수정';
    openModal();
  };

  // ── 삭제 ─────────────────────────────────────
  window.deleteRecipe = (id, name) => {
    if (!confirm(`"${name}" 레시피를 삭제하시겠습니까?`)) return;
    DB.deleteRecipe(id);
    renderTable();
    showToast('레시피가 삭제되었습니다', 'error');
  };

  // ── 모달 ─────────────────────────────────────
  function openModal() { document.getElementById('modalOverlay').classList.add('open'); }
  function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    editingId = null;
  }

  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('cancelBtn').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  // ── 폼 초기화 ─────────────────────────────────
  function resetForm() {
    document.getElementById('recipeForm').reset();
    ingredients = [
      { name: '', ratio: 50 },
      { name: '', ratio: 50 }
    ];
    renderIngEditor();
  }

  function fillForm(r) {
    document.getElementById('fName').value = r.name || '';
    document.getElementById('fCategory').value = r.category || '수면';
    document.getElementById('fDesc').value = r.description || '';
    document.getElementById('fDilution').value = r.defaultDilution || 2;
    document.getElementById('fCarrier').value = r.carrierOil || '';
    document.getElementById('fNotes').value = r.notes || '';
    ingredients = r.ingredients ? r.ingredients.map(i => ({ ...i })) : [];
    renderIngEditor();
  }

  // ── 재료 에디터 ──────────────────────────────
  function renderIngEditor() {
    const container = document.getElementById('ingEditor');
    container.innerHTML = ingredients.map((ing, idx) => `
      <div class="ing-row">
        <input type="text" value="${ing.name}" placeholder="오일 이름 (예: 라벤더)"
               oninput="updateIng(${idx}, 'name', this.value)">
        <div class="ratio-wrap">
          <input type="number" value="${ing.ratio}" min="1" max="99"
                 oninput="updateIng(${idx}, 'ratio', +this.value)">
          <span>%</span>
        </div>
        <button type="button" class="remove-ing" onclick="removeIng(${idx})">✕</button>
      </div>`).join('');
    updateRatioCheck();
  }

  window.updateIng = (idx, field, val) => {
    ingredients[idx][field] = val;
    updateRatioCheck();
  };

  window.removeIng = idx => {
    if (ingredients.length <= 1) { showToast('재료는 최소 1개 이상이어야 합니다', 'error'); return; }
    ingredients.splice(idx, 1);
    renderIngEditor();
  };

  document.getElementById('addIngBtn').addEventListener('click', () => {
    ingredients.push({ name: '', ratio: 10 });
    renderIngEditor();
  });

  function updateRatioCheck() {
    const total = ingredients.reduce((s, i) => s + (Number(i.ratio) || 0), 0);
    const el = document.getElementById('ratioIndicator');
    el.textContent = `비율 합계: ${total}%`;
    if (total === 100)     { el.className = 'ratio-indicator ratio-ok'; }
    else if (total < 100)  { el.className = 'ratio-indicator ratio-under'; }
    else                   { el.className = 'ratio-indicator ratio-over'; }
  }

  // ── 폼 제출 (저장) ────────────────────────────
  document.getElementById('recipeForm').addEventListener('submit', e => {
    e.preventDefault();

    const total = ingredients.reduce((s, i) => s + (Number(i.ratio) || 0), 0);
    if (total !== 100) { showToast('비율 합계가 100%가 되어야 합니다', 'error'); return; }

    const valid = ingredients.filter(i => i.name.trim());
    if (valid.length === 0) { showToast('재료를 1개 이상 입력해주세요', 'error'); return; }

    const recipe = {
      id: editingId || '',
      name: document.getElementById('fName').value.trim(),
      category: document.getElementById('fCategory').value,
      description: document.getElementById('fDesc').value.trim(),
      defaultDilution: Number(document.getElementById('fDilution').value),
      carrierOil: document.getElementById('fCarrier').value.trim(),
      notes: document.getElementById('fNotes').value.trim(),
      ingredients: valid
    };

    DB.saveRecipe(recipe);
    closeModal();
    renderTable();
    showToast(editingId ? '레시피를 수정했습니다' : '새 레시피를 추가했습니다 🌿', 'success');
  });

  // ── 내보내기 ─────────────────────────────────
  document.getElementById('exportBtn').addEventListener('click', () => {
    const userRecipes = DB.getUserRecipes();
    if (userRecipes.length === 0) {
      showToast('내보낼 레시피가 없습니다 (기본 레시피는 제외됩니다)', 'error');
      return;
    }
    DB.exportUserRecipes();
    showToast(`${userRecipes.length}개 레시피를 내보냈습니다`, 'success');
  });

  // ── 가져오기 ─────────────────────────────────
  document.getElementById('importBtn').addEventListener('click', () => {
    document.getElementById('importInput').click();
  });

  document.getElementById('importInput').addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const count = DB.importRecipes(ev.target.result);
        renderTable();
        showToast(`${count}개 레시피를 가져왔습니다 🌿`, 'success');
      } catch {
        showToast('올바른 JSON 파일이 아닙니다', 'error');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  });

  // ── 토스트 ───────────────────────────────────
  function showToast(msg, type = '') {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.className = `toast ${type} show`;
    setTimeout(() => t.className = 'toast', 2800);
  }
})();

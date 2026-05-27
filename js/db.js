const DB = {
  // ── 레시피 관리 ──────────────────────────────
  getAll() {
    const user = JSON.parse(localStorage.getItem('user_recipes') || '[]');
    return [...BUILTIN_RECIPES, ...user];
  },

  getById(id) {
    return this.getAll().find(r => r.id === id) || null;
  },

  getUserRecipes() {
    return JSON.parse(localStorage.getItem('user_recipes') || '[]');
  },

  saveRecipe(recipe) {
    const list = this.getUserRecipes();
    const idx = list.findIndex(r => r.id === recipe.id);
    if (idx >= 0) {
      list[idx] = recipe;
    } else {
      recipe.id = 'u-' + Date.now();
      recipe.createdAt = new Date().toISOString().slice(0, 10);
      list.push(recipe);
    }
    localStorage.setItem('user_recipes', JSON.stringify(list));
    return recipe;
  },

  deleteRecipe(id) {
    const list = this.getUserRecipes().filter(r => r.id !== id);
    localStorage.setItem('user_recipes', JSON.stringify(list));
  },

  isBuiltin(id) {
    return id.startsWith('b-');
  },

  // ── 즐겨찾기 ──────────────────────────────────
  getFavorites() {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  },

  isFavorite(id) {
    return this.getFavorites().includes(id);
  },

  toggleFavorite(id) {
    const favs = this.getFavorites();
    const idx = favs.indexOf(id);
    if (idx >= 0) {
      favs.splice(idx, 1);
    } else {
      favs.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(favs));
    return idx < 0; // true = added
  },

  getFavoriteRecipes() {
    const ids = this.getFavorites();
    return this.getAll().filter(r => ids.includes(r.id));
  },

  // ── 내보내기 / 가져오기 ───────────────────────
  exportUserRecipes() {
    const data = this.getUserRecipes();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my_aroma_recipes.json';
    a.click();
    URL.revokeObjectURL(url);
  },

  importRecipes(jsonText) {
    const data = JSON.parse(jsonText);
    if (!Array.isArray(data)) throw new Error('올바른 형식이 아닙니다');
    const existing = this.getUserRecipes();
    const merged = [...existing];
    data.forEach(r => {
      if (!merged.find(e => e.id === r.id)) merged.push(r);
    });
    localStorage.setItem('user_recipes', JSON.stringify(merged));
    return data.length;
  }
};

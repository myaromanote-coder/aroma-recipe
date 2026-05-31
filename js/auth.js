(() => {
  const PASS = 'aroma1740';
  const KEY  = 'aroma_auth';

  if (localStorage.getItem(KEY) === 'ok') return;

  // 스타일 주입
  const style = document.createElement('style');
  style.textContent = `
    #auth-overlay {
      position: fixed; inset: 0; z-index: 99999;
      background: #F4F0FF;
      display: flex; align-items: center; justify-content: center;
    }
    .auth-card {
      background: #fff;
      border-radius: 20px;
      padding: 44px 32px 36px;
      text-align: center;
      max-width: 320px; width: 90%;
      box-shadow: 0 6px 24px rgba(90,60,150,0.13);
    }
    .auth-logo { font-size: 52px; margin-bottom: 10px; }
    .auth-title { color: #5C3D99; font-size: 1.3rem; font-weight: 700; margin: 0 0 6px; }
    .auth-sub { color: #999; font-size: 0.85rem; margin: 0 0 24px; }
    #auth-pw {
      width: 100%; box-sizing: border-box;
      padding: 13px 16px; margin-bottom: 12px;
      border: 1.5px solid #D8CFF0; border-radius: 10px;
      font-size: 1rem; outline: none;
      transition: border-color .2s;
    }
    #auth-pw:focus { border-color: #7B6FA0; }
    #auth-pw.error { border-color: #e74c3c; animation: shake .3s; }
    #auth-btn {
      width: 100%; padding: 13px;
      background: #7B6FA0; color: #fff;
      border: none; border-radius: 10px;
      font-size: 1rem; font-weight: 600; cursor: pointer;
      transition: background .2s;
    }
    #auth-btn:hover { background: #5C3D99; }
    #auth-err { color: #e74c3c; font-size: 0.8rem; margin: 10px 0 0; min-height: 16px; }
    @keyframes shake {
      0%,100%{transform:translateX(0)}
      25%{transform:translateX(-6px)}
      75%{transform:translateX(6px)}
    }
  `;
  document.head.appendChild(style);

  const overlay = document.createElement('div');
  overlay.id = 'auth-overlay';
  overlay.innerHTML = `
    <div class="auth-card">
      <div class="auth-logo">🌿</div>
      <h2 class="auth-title">아로마 레시피</h2>
      <p class="auth-sub">비밀번호를 입력해주세요</p>
      <input id="auth-pw" type="password" placeholder="비밀번호" autocomplete="current-password">
      <button id="auth-btn">입장하기</button>
      <p id="auth-err"></p>
    </div>
  `;

  function tryLogin() {
    const pw = document.getElementById('auth-pw');
    if (pw.value === PASS) {
      localStorage.setItem(KEY, 'ok');
      overlay.remove();
    } else {
      pw.value = '';
      pw.classList.add('error');
      document.getElementById('auth-err').textContent = '비밀번호가 올바르지 않습니다';
      setTimeout(() => pw.classList.remove('error'), 400);
      pw.focus();
    }
  }

  function attach() {
    document.body.appendChild(overlay);
    document.getElementById('auth-btn').addEventListener('click', tryLogin);
    document.getElementById('auth-pw').addEventListener('keydown', e => {
      if (e.key === 'Enter') tryLogin();
    });
    setTimeout(() => document.getElementById('auth-pw').focus(), 100);
  }

  if (document.body) attach();
  else document.addEventListener('DOMContentLoaded', attach);
})();

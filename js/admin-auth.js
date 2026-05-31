// admin 전용 권한 체크 (auth.js 이후 실행)
(() => {
  const PASS_ADMIN = 'admin1211';
  const KEY_ROLE   = 'aroma_role';

  if (localStorage.getItem(KEY_ROLE) === 'admin') return; // 이미 관리자

  // 관리자 로그인 오버레이 스타일
  const style = document.createElement('style');
  style.textContent = `
    #admin-auth-overlay {
      position: fixed; inset: 0; z-index: 99998;
      background: rgba(244,240,255,0.97);
      display: flex; align-items: center; justify-content: center;
    }
    .admin-auth-card {
      background: #fff; border-radius: 20px;
      padding: 40px 32px 32px; text-align: center;
      max-width: 320px; width: 90%;
      box-shadow: 0 6px 24px rgba(90,60,150,0.13);
    }
    .admin-auth-icon { font-size: 44px; margin-bottom: 10px; }
    .admin-auth-title { color: #5C3D99; font-size: 1.2rem; font-weight: 700; margin: 0 0 6px; }
    .admin-auth-sub   { color: #999; font-size: 0.82rem; margin: 0 0 22px; line-height: 1.5; }
    #adm-pw {
      width: 100%; box-sizing: border-box;
      padding: 13px 16px; margin-bottom: 12px;
      border: 1.5px solid #D8CFF0; border-radius: 10px;
      font-size: 1rem; outline: none; transition: border-color .2s;
    }
    #adm-pw:focus  { border-color: #7B6FA0; }
    #adm-pw.error  { border-color: #e74c3c; animation: adm-shake .3s; }
    #adm-login-btn {
      width: 100%; padding: 13px; margin-bottom: 10px;
      background: #5C3D99; color: #fff;
      border: none; border-radius: 10px;
      font-size: 1rem; font-weight: 600; cursor: pointer;
    }
    #adm-login-btn:hover { background: #4a2e80; }
    #adm-back-btn {
      width: 100%; padding: 11px;
      background: none; color: #999;
      border: 1px solid #ddd; border-radius: 10px;
      font-size: 0.9rem; cursor: pointer;
    }
    #adm-err { color: #e74c3c; font-size: 0.8rem; margin: 0 0 10px; min-height: 16px; }
    @keyframes adm-shake {
      0%,100%{transform:translateX(0)} 25%{transform:translateX(-6px)} 75%{transform:translateX(6px)}
    }
  `;
  document.head.appendChild(style);

  const overlay = document.createElement('div');
  overlay.id = 'admin-auth-overlay';
  overlay.innerHTML = `
    <div class="admin-auth-card">
      <div class="admin-auth-icon">🔐</div>
      <h2 class="admin-auth-title">관리자 로그인</h2>
      <p class="admin-auth-sub">레시피 관리는 관리자만 가능합니다.<br>관리자 비밀번호를 입력해주세요.</p>
      <input id="adm-pw" type="password" placeholder="관리자 비밀번호" autocomplete="current-password">
      <p id="adm-err"></p>
      <button id="adm-login-btn">관리자 로그인</button>
      <button id="adm-back-btn">← 홈으로 돌아가기</button>
    </div>
  `;

  function tryAdminLogin() {
    const pw = document.getElementById('adm-pw');
    if (pw.value === PASS_ADMIN) {
      localStorage.setItem(KEY_ROLE, 'admin');
      overlay.remove();
    } else {
      pw.value = '';
      pw.classList.add('error');
      document.getElementById('adm-err').textContent = '관리자 비밀번호가 올바르지 않습니다';
      setTimeout(() => pw.classList.remove('error'), 400);
      pw.focus();
    }
  }

  function attach() {
    document.body.appendChild(overlay);
    document.getElementById('adm-login-btn').addEventListener('click', tryAdminLogin);
    document.getElementById('adm-pw').addEventListener('keydown', e => {
      if (e.key === 'Enter') tryAdminLogin();
    });
    document.getElementById('adm-back-btn').addEventListener('click', () => {
      location.href = 'index.html';
    });
    setTimeout(() => document.getElementById('adm-pw').focus(), 100);
  }

  if (document.body) attach();
  else document.addEventListener('DOMContentLoaded', attach);
})();

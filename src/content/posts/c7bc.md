---
title: "我做同人社团的日子（1）——旧日回忆"
published: 2020-02-15
description: ""
image: "https://th.bing.com/th/id/R8a7feadd106fe51d05eba3398c52e31a?rik=xr%2fuFdGQqrbizw&riu=http%3a%2f%2fjapan-highlightstravel.com%2fimg%2fspot%2f010038%2fmain_en.JPG&ehk=LXnB67iOBM6UfUfNuqOdYTX7QgOW26WSdu%2fGYr%2fe8%2fQ%3d&risl=&pid=ImgRaw"
tags: ["高中生活", "同人社团"]
category: "自传"
draft: false
encrypted: true
---


<div id="encrypted-post" class="encrypted-post">
  <div id="password-form" class="password-form" style="display: flex; flex-direction: column; align-items: center; padding: 3rem 2rem; background: var(--card-bg); border-radius: 1rem; border: 1px dashed var(--line-divider); margin: 2rem 0;">
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--primary); margin-bottom: 1rem; opacity: 0.8;">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
    <p style="color: var(--text-secondary); margin-bottom: 1.5rem; font-size: 0.95rem;">请输入密码查看加密内容</p>
    <div style="display: flex; gap: 0.5rem; width: 100%; max-width: 320px;">
      <input type="password" id="post-password" placeholder="输入密码" style="flex: 1; padding: 0.75rem 1rem; border: 1px solid var(--line-divider); border-radius: 0.5rem; background: var(--card-bg); color: var(--text-main); font-size: 1rem; outline: none;" />
      <button id="decrypt-btn" type="button" style="padding: 0.75rem 1.5rem; background: var(--primary); color: white; border: none; border-radius: 0.5rem; cursor: pointer; font-size: 1rem; font-weight: 500;">解密</button>
    </div>
    <p id="error-msg" style="color: #ef4444; margin-top: 1rem; font-size: 0.875rem; display: none;">密码错误，请重试</p>
  </div>
  <div id="decrypted-content" style="display: none;"></div>
</div>

<script type="module">
import CryptoJS from 'https://cdn.jsdelivr.net/npm/crypto-js@4.2.0/+esm';

const encryptedContent = "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";
const passwordInput = document.getElementById('post-password');
const decryptBtn = document.getElementById('decrypt-btn');
const errorMsg = document.getElementById('error-msg');
const decryptedDiv = document.getElementById('decrypted-content');
const passwordForm = document.getElementById('password-form');

function decrypt() {
  const password = passwordInput.value;
  if (!password) return;

  try {
    const bytes = CryptoJS.AES.decrypt(encryptedContent, password);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);

    if (decrypted) {
      decryptedDiv.innerHTML = decrypted;
      decryptedDiv.style.display = 'block';
      passwordForm.style.display = 'none';
      errorMsg.style.display = 'none';
    } else {
      throw new Error('Decryption failed');
    }
  } catch (e) {
    errorMsg.style.display = 'block';
    passwordInput.value = '';
    passwordInput.focus();
  }
}

decryptBtn.addEventListener('click', decrypt);
passwordInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') decrypt();
});
</script>


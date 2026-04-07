<template>
  <div class="login-wrapper">
    <div class="login-box">
      <div class="login-logo">🤖</div>
      <h2>AI Native Workflow</h2>
      <p class="subtitle">econy Internal Docs</p>

      <form @submit.prevent="handleLogin">
        <div class="field">
          <label>Username</label>
          <input v-model="username" type="text" placeholder="username" autocomplete="username" autofocus />
        </div>
        <div class="field">
          <label>Password</label>
          <input v-model="password" type="password" placeholder="password" autocomplete="current-password" />
        </div>
        <p v-if="error" class="error">{{ error }}</p>
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// SHA-256 hash of "username:password"
// Default: econy:Econy@123
// To change: run python -c "import hashlib; print(hashlib.sha256('user:pass'.encode()).hexdigest())"
const CREDENTIAL_HASH = '66c4042a7895b027a375f6440369d9281284fd428594c916a7eee31a4a04b481'

const username = ref('')
const password = ref('')
const error = ref('')

async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message)
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

async function handleLogin() {
  if (!username.value || !password.value) {
    error.value = 'Vui lòng nhập username và password.'
    return
  }
  const hash = await sha256(`${username.value}:${password.value}`)
  if (hash === CREDENTIAL_HASH) {
    sessionStorage.setItem('auth', hash)
    window.location.reload()
  } else {
    error.value = 'Username hoặc password không đúng.'
  }
}
</script>

<style scoped>
.login-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg);
}

.login-box {
  width: 360px;
  padding: 40px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  text-align: center;
}

.login-logo {
  font-size: 3rem;
  margin-bottom: 12px;
  line-height: 1;
}

h2 {
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 4px;
  color: var(--vp-c-text-1);
}

.subtitle {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin: 0 0 28px;
}

.field {
  text-align: left;
  margin-bottom: 14px;
}

.field label {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  margin-bottom: 4px;
}

.field input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.95rem;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.2s;
}

.field input:focus {
  border-color: var(--vp-c-brand);
}

.error {
  font-size: 0.82rem;
  color: var(--vp-c-danger-1, #f43f5e);
  margin: -4px 0 10px;
  text-align: left;
}

button {
  width: 100%;
  padding: 10px;
  margin-top: 8px;
  background: var(--vp-c-brand);
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}

button:hover {
  opacity: 0.88;
}
</style>

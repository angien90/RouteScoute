<template>
  <div class="layout">
    
    <AppHeader @open-login="openLogin" @open-create-account="openCreateAccount" />

    <main class="main-content">
      <slot />
    </main>

    <AppNavigation />

    <!-- Login modal -->
    <div v-if="showLogin" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <LoginForm 
          @close="closeModal"
          @open-create-account="switchToCreateAccount"
        />
      </div>
    </div>

    <!-- Create account modal -->
    <div v-if="showCreateAccount" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <CreateAccountForm
          @close="closeModal"
          @open-login="switchToLogin"
        />
      </div>
    </div>

    <!-- Cookie & Privacy popup -->
    <CookieConsent
      v-if="showCookieConsent"
      @close="hideCookieConsent"
      @accept-all="acceptAllCookies"
      @necessary-only="acceptNecessaryCookies"
      @reject="rejectCookies"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import AppNavigation from '@/components/AppNavigation.vue';
import LoginForm from '@/views/LogIn.vue';
import CreateAccountForm from '@/views/CreateAccount.vue';
import CookieConsent from '@/components/CookieConsent.vue';

const showLogin = ref(false);
const showCreateAccount = ref(false);
const showCookieConsent = ref(!localStorage.getItem('cookieConsent'));

function openLogin() { showLogin.value = true; }
function openCreateAccount() { showCreateAccount.value = true; }
function closeModal() { showLogin.value = false; showCreateAccount.value = false; }
function switchToCreateAccount() { showLogin.value = false; showCreateAccount.value = true; }
function switchToLogin() { showCreateAccount.value = false; showLogin.value = true; }
function hideCookieConsent() { showCookieConsent.value = false; }
function acceptAllCookies() { localStorage.setItem('cookieConsent', 'all'); hideCookieConsent(); }
function acceptNecessaryCookies() { localStorage.setItem('cookieConsent', 'necessary'); hideCookieConsent(); }
function rejectCookies() { localStorage.setItem('cookieConsent', 'rejected'); hideCookieConsent(); }
</script>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header, nav {
  flex: 0 0 auto;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;     
  overflow-y: auto;
}

.modal-overlay {
  position: fixed; 
  inset: 0;    
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;     
}

.modal-content {
  background: $color-primary-light;
  border-radius: 10px;
  padding: 0;
  width: 400px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.2);
}
</style>
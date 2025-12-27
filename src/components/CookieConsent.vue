<template>
  <div class="auth-page">
    <div class="form-container">
      <!-- Stäng-knapp -->
      <button class="close-btn" @click="$emit('close')">×</button>

      <h2>COOKIE & PRIVACY</h2>

      <p class="cookie-text">
        We use cookies to improve your experience, analyze traffic, and personalize content.
      </p>

      <div class="button-group">
        <button class="submit-btn" @click="$emit('accept-all')">ACCEPT ALL</button>
        <button class="submit-btn" @click="$emit('necessary-only')">NECESSARY ONLY</button>
        <button class="submit-btn" @click="$emit('reject')">REJECT</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.auth-page {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.5);
  z-index: 10000;
}

.form-container {
  width: 400px;
  padding: 20px;
  background: $color-primary-light;
  border-radius: 10px;
  position: relative;
  text-align: center;

  @media (min-width: 768px) {
    width: 750px;
  }
}

.close-btn {
  position: absolute;
  top: 5px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #242324;
}

h2 {
  font-family: $font-family-top;
  font-size: $font-size-lg;
  font-weight: $font-weight-regular;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: $font-size-xl;
  }
}

.cookie-text {
  font-family: $font-family-base;
  font-size: $font-size-sm;
  margin-bottom: 20px;
}

.button-group {
  display: flex;
  flex-direction: column; 
  gap: 10px;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row; 
  }
}

.submit-btn {
  flex: 1;
  padding: 12px;
  font-family: $font-family-top;
  font-size: $font-size-md;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  background-color: #81E4C4;
  color: #242324;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}

.submit-btn:hover {
  background-color: #6bcbb0;
  transform: scale(1.02);
}
</style>

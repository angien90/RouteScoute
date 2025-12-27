<template>
  <div class="auth-page">
    <div class="form-container">
        <button class="close-btn" @click="$emit('close')">×</button>
        <h2>Create Account</h2>
        <form @submit.prevent="handleCreateAccount">
            <AuthInput
            id="email"
            label="Email"
            type="email"
            v-model="form.email"
            placeholder="Enter your email"
            />

            <AuthInput
            id="password"
            label="Password"
            type="password"
            v-model="form.password"
            placeholder="Enter password"
            />

            <AuthInput
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            v-model="form.confirmPassword"
            placeholder="Confirm password"
            :error="form.confirmPassword !== form.password ? 'Passwords do not match' : ''"
            />

            <button type="submit" class="submit-btn">Create</button>
        </form>

        <p class="switch-auth">
            Already have an account?
            <span class="link" @click="$emit('open-login')">Login</span>
        </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import AuthInput from '@/components/AuthInput.vue';

const form = reactive({
  email: '',
  password: '',
  confirmPassword: ''
});

const isFormValid = computed(() => {
  return form.email && form.password && form.password === form.confirmPassword;
});

function handleCreateAccount() {
  if (!isFormValid.value) {
    alert('Please fill all fields correctly.');
    return;
  }
  console.log('Create account data:', form);
  alert('Create account functionality will be implemented later.');
}
</script>

<style scoped lang="scss">
.auth-page {
  display: flex;
  justify-content: center;
  padding: 30px 20px;
}

.form-container {
  width: 400px;
  padding: 0; 
  border-radius: 10px;
  position: relative;
}

.close-btn {
  position: absolute;
  top: -20px;
  right: 5px;
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
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: $font-size-xl;
  }
}

.submit-btn {
  display: block;
  width: 30%;
  margin: auto;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 12px;
  font-size: $font-size-md;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  font-family: $font-family-top;
  background-color: #81E4C4;
  color: #242324;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}

.submit-btn:hover {
  background-color: #6bcbb0;
  transform: scale(1.02);
}

.submit-btn:disabled {
  cursor: not-allowed;
  transform: none;
}

.switch-auth {
  margin-top: 10px;
}

.switch-auth .link {
  color: $color-text-dark;
  font-weight: $font-weight-bold;
  font-style: italic;
  cursor: pointer;
  margin-left: 5px;
  text-decoration: underline; 
}
</style>

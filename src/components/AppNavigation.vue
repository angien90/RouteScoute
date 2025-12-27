<template>
  <nav class="nav">
    <!-- Hamburger: tablet / desktop -->
    <button class="hamburger" @click="toggleMenu" aria-label="Open menu">
      <span class="material-symbols-outlined">menu</span>
    </button>

    <!-- Mobilnavigation -->
    <div class="nav-mobile">
      <router-link
        v-for="(link, index) in links"
        :key="index"
        :to="link.path"
        class="nav-button"
      >
        <span class="material-symbols-outlined">{{ link.icon }}</span>
        <span class="nav-label">{{ link.label }}</span>
      </router-link>
    </div>

    <!-- Dropdown -->
    <div v-if="menuOpen" class="dropdown">
      <router-link
        v-for="(link, index) in links"
        :key="index"
        :to="link.path"
        class="dropdown-link"
        @click="menuOpen = false"
      >
        {{ link.label }}
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const links = [
  { path: '/', icon: 'add_location', label: 'Explore' },
  { path: '/saved', icon: 'family_star', label: 'Saved' },
  { path: '/map', icon: 'map', label: 'Map' },
  { path: '/tips', icon: 'emoji_objects', label: 'Tips' },
]

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped lang="scss">
.nav {
  position: relative;
}

/* ---------- HAMBURGER ---------- */
.hamburger {
  display: none;
  position: fixed;
  top: 16px;
  left: 16px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1000;
  outline: none;

  .material-symbols-outlined {
    font-size: $font-size-xxl;
  }

  &:focus {
    outline: none; 
  }
}

/* ---------- MOBIL NAV ---------- */
.nav-mobile {
  display: flex;
  justify-content: space-around;
  margin: 10px;
}

.nav-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  color: $color-text-dark;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.15);
  }

  .material-symbols-outlined {
    font-size: 25px;
  }

  .nav-label {
    font-size: $font-size-sm;
    font-family: $font-family-top;
    text-transform: uppercase;
  }
}

/* ---------- DROPDOWN ---------- */
.dropdown {
  position: fixed;
  top: 15px;
  left: 65px;
  background: $color-secondary-light;
  border-radius: 10px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  min-width: 180px;
  overflow: hidden;
  z-index: 999;
}

.dropdown-link {
  padding: 14px 20px;
  text-decoration: none;
  color: #242324;
  font-family: $font-family-top;
  text-transform: uppercase;

  &:hover {
    background: #f2f2f2;
  }
}

/* ---------- TABLET + DESKTOP ---------- */
@media (min-width: 768px) {
  .nav-mobile {
    display: none;
  }

  .hamburger {
    display: block;
    top: 0.5rem;
    left: 16px;
  }
}
</style>

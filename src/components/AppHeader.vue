<template>
  <header class="header">
    <div class="top-actions">
      <router-link to="/about" class="about-us">
        <span class="material-symbols-outlined">info</span>
      </router-link>

      <button class="sign-in-out" @click="$emit('open-login')">
        Sign in
        <span class="material-symbols-outlined">person</span>
      </button>
    </div>

    <h1>RouteScout</h1>
    <h2>Explore Points of Interest Along Your Route</h2>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: $color-primary-dark;
  color: #242324;
  padding: 0.5rem 1rem 1rem 1rem;
}

.top-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  width: 100%;
}

.top-actions .about-us,
.top-actions .sign-in-out {
  display: inline-flex; 
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  gap: 6px;
  text-decoration: none;
  color: inherit;
}

.sign-in-out {
  font-family: $font-family-top; 
  font-size: $font-size-sm;

  @media (min-width: 768px) {
    font-size: $font-size-md;
  }
}

.material-symbols-outlined {
    font-size: $font-size-xl;
  }

h1 {
  font-family: $font-family-top;
  margin-bottom: 0;
  font-size: $font-size-xxl;

  @media (min-width: 768px) {
    font-size: $font-size-xxxl;
  }
}

h2 {
  font-family: 'Montserrat', sans-serif;
  font-style: italic;
  font-weight: 400;
  text-align: center;
  font-size: $font-size-sm;

  @media (min-width: 768px) {
    font-size: $font-size-lg;
  }
}
</style>
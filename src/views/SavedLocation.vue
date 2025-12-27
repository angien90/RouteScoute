<template>
  <div class="map-page" style="background: red">
    <MapView />
  </div>
</template>

<script setup>
import MapView from '@/components/MapView.vue'
</script>

<style scoped>
.map-page {
  flex: 1;       
  min-height: 0;  
  display: flex;
}
</style>
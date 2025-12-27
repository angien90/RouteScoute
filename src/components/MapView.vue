<template>
  <div ref="mapContainer" class="map-view"></div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const mapContainer = ref(null);
let map;

onMounted(async () => {
  await nextTick();

  map = L.map(mapContainer.value).setView([59.3293, 18.0686], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
  }).addTo(map);

  const places = [
    { name: 'Gamla stan', lat: 59.325, lng: 18.071 },
    { name: 'Södermalm', lat: 59.317, lng: 18.063 },
  ];

  places.forEach(place => {
    L.marker([place.lat, place.lng]).addTo(map).bindPopup(place.name);
  });

  setTimeout(() => map.invalidateSize(), 100); // Leaflet måste uppdatera storlek
});
</script>

<style scoped>
.map-view {
  width: 100%;
  height: 100%;   /* VIKTIGT */
}

.leaflet-container {
  width: 100%;
  height: 100%;
}
</style>

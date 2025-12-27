<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <input
      v-if="type !== 'select'"
      :id="id"
      :type="type"
      v-model="internalValue"
      :placeholder="placeholder"
      :required="required"
    />
    <select
      v-else
      :id="id"
      v-model="internalValue"
      :required="required"
    >
      <slot />
    </select>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

interface Props {
  id: string;
  label: string;
  modelValue: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  error?: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();

// Lokal ref för input/select
const internalValue = ref(props.modelValue);

// Emit till parent när local value ändras
watch(internalValue, (val) => emit('update:modelValue', val));

// Uppdatera intern value om parent ändrar modelValue
watch(() => props.modelValue, (val) => internalValue.value = val);

const { id, label, placeholder, type = 'text', required, error } = props;
</script>

<style scoped lang="scss">
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

label {
  font-weight: 700;
  font-family: $font-family-base;
  margin-bottom: 5px;
}

input, select {
  padding: 10px;
  font-size: 14px;
  border: 1px solid $color-primary-dark;
  border-radius: 6px;
  font-family: $font-family-base;
  background-color: $color-primary-dark;
  color: #242324;
}

select option {
  background-color: $color-secondary-light;
  color: #242324;
}

.error {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}
</style>

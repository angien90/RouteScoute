<template>
  <div class="tips-page">
    <div class="form-container">
      <h2>Share a Tip</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name of the place</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            placeholder="Name of the place"
            required
          />
        </div>

        <div class="form-group">
          <label for="category">Category</label>
          <select id="category" v-model="form.category" required>
            <option disabled value="">Select a category</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Coffee">Coffee</option>
            <option value="Nature">Nature</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div class="form-group">
          <label for="address">Visiting address</label>
          <input
            type="text"
            id="address"
            v-model="form.address"
            placeholder="Visiting address"
            required
          />
        </div>

        <button type="submit" class="submit-btn" :disabled="!isFormValid" :title="!isFormValid ? 'All fields must be filled out to send your tip' : ''">Send</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'

interface Form {
  name: string
  category: string
  address: string
}

const form = reactive<Form>({
  name: '',
  category: '',
  address: ''
})

const isFormValid = computed(() => {
  return form.name.trim() !== '' &&
         form.category.trim() !== '' &&
         form.address.trim() !== ''
})

async function handleSubmit() {
  try {
    await fetch('/api/tips', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    alert('Tip sent successfully!');
  } catch (err) {
    alert('Failed to send tip.');
  }
}
</script>

<style scoped lang="scss">
.tips-page {
  flex: 1;                
  display: flex;
  justify-content: center;
  background-color: $color-primary-light;
  padding: 20px 50px;

  @media (min-width: 768px) {
    padding: 20px 30px;
  }

  @media (min-width: 1024px) {
    padding: 20px 50px;
  }
}

.form-container {
  padding: 20px;
  margin-bottom: 20px;
  flex: 1;   
  display: flex;            
  flex-direction: column;
  width: 70%;
  max-width: 800px;
  margin: 0 auto;
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

form {
  display: flex;
  flex-direction: column;
  flex: 1;               
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  
}

label {
  font-weight: 700;
  font-family: $font-family-base;
}

input, select {
  padding: 10px;
  font-size: 14px;
  border: 1px solid $color-primary-dark;
  border-radius: 6px;
  font-family: $font-family-base;
  background-color: $color-primary-dark;
}

#category option {
  background-color: $color-secondary-light; 
  color: #242324;
}

.submit-btn {
  display: block;       
  width: 30%;
  margin: auto;        
  margin-bottom: 20px;  
  padding: 12px;
  font-size: $font-size-lg;
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
</style>

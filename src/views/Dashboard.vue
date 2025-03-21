<template>
  <div class="dashboard">
    <h2>Blade Health Dashboard</h2>
    <p>View real-time analytics and predictive maintenance insights.</p>

    <div v-if="loading">Loading data...</div>
    <div v-else-if="error" class="error">{{ error }}</div>

    <div v-else class="status-card">
      <h3>Engine Status: {{ bladeData.status }}</h3>
      <p>Condition: {{ bladeData.condition }}</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { getBladeHealthData } from "../api/bladeService";

export default {
  name: "Dashboard",
  setup() {
    const bladeData = ref({});
    const loading = ref(true);
    const error = ref(null);

    onMounted(async () => {
      const data = await getBladeHealthData();
      if (data.error) {
        error.value = data.error;
      } else {
        bladeData.value = data;
      }
      loading.value = false;
    });

    return { bladeData, loading, error };
  },
};
</script>

<style scoped>
.dashboard {
  text-align: center;
  margin-top: 30px;
}

.status-card {
  border: 1px solid #ddd;
  padding: 15px;
  margin: 15px auto;
  width: 300px;
  background: #f8f8f8;
  border-radius: 8px;
}

.error {
  color: red;
  font-weight: bold;
}
</style>

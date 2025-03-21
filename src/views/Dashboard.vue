<template>
  <div class="dashboard">
    <h2>Blade Health Dashboard</h2>
    <p>View real-time analytics and predictive maintenance insights.</p>
    
    <div class="status-card">
      <h3>Engine Status</h3>
      <p>🔵 Normal Operation</p>
    </div>
    
    <div class="status-card">
      <h3>Blade Condition</h3>
      <p>⚠️ Minor Wear Detected</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
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
</style>

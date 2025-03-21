<template>
  <div class="home">
    <h2>Welcome to the Blade Health Analysis System</h2>
    <p>Monitor aircraft engine blades with real-time data and AI-driven insights.</p>
    <router-link to="/dashboard">
      <button>Go to Dashboard</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}

button {
  background-color: #003366;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #002244;
}
</style>

<template>
  <div id="app">
    <header>
      <h1>Blade Health Analysis System</h1>
    </header>
    
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/dashboard">Dashboard</router-link>
    </nav>

    <main>
      <router-view />
    </main>

    <footer>
      <p>© 2025 Blade Health Analysis System. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 20px;
}

header {
  background: #003366;
  color: white;
  padding: 15px;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #003366;
  font-weight: bold;
}

footer {
  margin-top: 20px;
  padding: 10px;
  background: #f8f8f8;
}
</style>

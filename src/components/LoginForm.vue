<template>
  <form class="login-form">
    <h2>Welcome back!</h2>
    <input type="text" placeholder="Username" v-model="username" />
    <input type="password" placeholder="Password" v-model="password" />
    <button class="login-button" @click.prevent="handleLogin">Login</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");

function handleLogin() {
  console.log("Logging in with", username.value, password.value);
}
</script>

<style scoped>
.login-form {
  justify-content: center;
  align-items: center;
  max-width: 650px;
  min-width: 350px;
  margin: auto;
  padding: 25px;
  background: rgba(34, 34, 34, 0.8);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.login-form input,
.login-form button {
  width: 100%;
  margin-right: 10px;
  margin-left: 10px;
  padding: 0.5rem;
  font-size: 1rem;
}

.login-button {
  margin-top: 10px;
  width: 100%;
}
</style>

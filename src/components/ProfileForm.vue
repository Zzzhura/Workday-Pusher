<template>
  <div class="profile-container">
    <Avatar
        image="src/assets/avatar.jpg"
        class="avatar"
        size="xlarge"
        shape="circle"
    />
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
</script>

<style scoped>
.profile-container {
  width: 360px;
  height: 289px;
  margin-left: 35px;
  border-radius: 20px;
  border: 3px solid white;
  background-color: rgb(0 0 0 / 0.5);
  color: red;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20px;
}

.avatar {
  width: 80px;
  height: 80px;
}
</style>
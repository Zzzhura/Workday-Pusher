<template>
    <div id="app">
        <transition name="fade">
            <IntroScreen v-if="showIntro" />
        </transition>

        <div class="main-content" v-show="!showIntro">
            <Header />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import IntroScreen from "./components/IntroScreen.vue";
import LoginForm from "./components/LoginForm.vue";
import Header from "./components/Header.vue";

const showIntro = ref(true);

onMounted(() => {
    setTimeout(() => {
        showIntro.value = false;
    }, 4000);
});
</script>

<style>
body {
    margin: 0;
    padding: 0;
    background-color: #121212;
    font-family: Arial, sans-serif;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.main-content {
    min-height: 100vh;
    display: flex;
    color: white;
}
</style>

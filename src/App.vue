<template>
    <div id="app">
        <transition name="fade">
            <IntroScreen v-if="showIntro" />
        </transition>

        <div class="main-content" v-show="!showIntro">
            <Header />

            <div class="mid-block">
                <ProfileForm />
                <TimeTracker />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import IntroScreen from "./components/IntroScreen.vue";
import LoginForm from "./components/LoginForm.vue";
import Header from "./components/Header.vue";
import ProfileForm from "./components/ProfileForm.vue";
import TimeTracker from "./components/TimeTracker.vue";

const showIntro = ref(true);

onMounted(() => {
    setTimeout(() => {
        showIntro.value = false;
    }, 4000);
});
</script>

<style>
#app {
    background-image: url("./assets/main_background.jpg");
    background-size: cover;
    min-height: 100vh;
    width: 100%;
}

body {
    margin: 0;
    padding: 0;
    background-color: #white;
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
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    display: flex;
    color: white;
}

.mid-block {
    display: flex;
    flex-direction: row;
}
</style>

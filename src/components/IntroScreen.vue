<template>
    <div
        class="intro-screen"
        ref="screenRef"
        @mousemove="handleMouseMove"
        @touchmove="handleTouchMove"
    >
        <div class="cursor-follower" :style="cursorStyle"></div>
        <div class="content">
            <h1 class="project-title">
                <span
                    v-for="(letter, index) in projectName"
                    :key="index"
                    :style="{ animationDelay: `${index * 0.1}s` }"
                    class="letter"
                >
                    {{ letter }}
                </span>
            </h1>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const projectName = ref("Workday Pusher"); // Change this to your actual project name
const isVisible = ref(false);
const screenRef = ref(null);

// Lifecycle hooks
onMounted(() => {
    // Make the component visible after it's mounted
    setTimeout(() => {
        isVisible.value = true;
    }, 500);
});
</script>

<style scoped>
.intro-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    z-index: 1000;
}

.content {
    position: relative;
    z-index: 10;
}

.project-title {
    font-size: 4rem;
    color: white;
    font-weight: 700;
    text-align: center;
}

.letter {
    display: inline-block;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s forwards ease-out;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>

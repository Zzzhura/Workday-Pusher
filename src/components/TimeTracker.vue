<template>
    <div class="timer-container">
        <p class="timer-instruction">
            Запустите таймер перед началом рабочей сессии
        </p>
        <div class="timer-display">
            <span class="timer-hours">{{ formattedHours }}</span>
            <span class="timer-separator">:</span>
            <span class="timer-minutes">{{ formattedMinutes }}</span>
        </div>
        <button @click="toggleTimer" class="timer-button">
            {{ isRunning ? "Пауза" : "Старт" }}
        </button>
    </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from "vue";

const isRunning = ref(false);
const totalSeconds = ref(0);
let timerId = null;

const formattedHours = computed(() => {
    return Math.floor(totalSeconds.value / 3600)
        .toString()
        .padStart(2, "0");
});

const formattedMinutes = computed(() => {
    return Math.floor((totalSeconds.value % 3600) / 60)
        .toString()
        .padStart(2, "0");
});

const toggleTimer = () => {
    isRunning.value = !isRunning.value;

    if (isRunning.value) {
        timerId = setInterval(() => {
            totalSeconds.value += 1;
        }, 1000);
    } else {
        clearInterval(timerId);
    }
};

onUnmounted(() => {
    clearInterval(timerId);
});
</script>

<style scoped>
.timer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    font-family: "Arial", sans-serif;
    padding: 2rem;
    background: white;
    border: 1px solid black;
    border-radius: 12px;
    max-width: 400px;
    margin: 0 auto;
}

.timer-instruction {
    color: #666;
    margin-bottom: 1rem;
    text-align: center;
}

.timer-display {
    font-size: 3.5rem;
    font-weight: bold;
    color: #2c3e50;
    display: flex;
    border: 4px solid black;
    border-radius: 10px;
    align-items: baseline;
}

.timer-hours,
.timer-minutes {
    min-width: 2.2ch;
    text-align: center;
}

.timer-separator {
    margin: 0 0.2rem;
    animation: blink 1s infinite;
}

.timer-button {
    padding: 0.8rem 2rem;
    background: #42b983;
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.timer-button:hover {
    background: #3aa876;
    transform: translateY(-2px);
}

@keyframes blink {
    0%,
    100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
</style>

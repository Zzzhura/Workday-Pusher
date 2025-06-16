<template>
    <div class="chess-timer">
        <div class="timer-controls">
            <button
                @click="startTimer"
                :class="['control-button', { active: isRunning }]"
                :disabled="isRunning"
            >
                Старт
            </button>
            <button
                @click="pauseTimer"
                :class="[
                    'control-button',
                    { active: !isRunning && totalSeconds > 0 },
                ]"
                :disabled="!isRunning"
            >
                Пауза
            </button>
            <button
                @click="resetTimer"
                class="control-button reset-button"
                :disabled="totalSeconds === 0"
            >
                Завершить сессию
            </button>
        </div>

        <div class="timer-display">
            <span class="time-part">{{ formattedHours }}</span>
            <span class="time-separator">:</span>
            <span class="time-part">{{ formattedMinutes }}</span>
        </div>

        <p class="timer-instruction">
            Запустите таймер перед началом рабочей сессии
        </p>
    </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from "vue";

const isRunning = ref(false);
const totalSeconds = ref(0);
let timerId = null;
const startFullDate = ref(null);
const endFullDate = ref(null);
const startTime = ref(0);
const endTime = ref(0);

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

const startTimer = () => {
    isRunning.value = true;
    timerId = setInterval(() => {
        totalSeconds.value += 1;
    }, 1000);
    startTime.value = new Date();
    startFullDate.value = new Date();
};

const pauseTimer = () => {
    isRunning.value = false;
    clearInterval(timerId);
};

const resetTimer = () => {
    isRunning.value = false;
    totalSeconds.value = 0;
    clearInterval(timerId);
    endFullDate.value = new Date();
    endTime.value = new Date();
    const finalTime =
        (endTime.value.getTime() - startTime.value.getTime()) / 1000;
    const objToPush = {
        startTime: startFullDate.value,
        endTime: endFullDate.value,
        duration: finalTime / 1000,
    };
    console.log(objToPush);
};

onUnmounted(() => {
    clearInterval(timerId);
});
</script>

<style scoped>
.chess-timer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
    gap: 1.5rem;
    font-family: "Arial", sans-serif;
    padding: 2rem;
    background: #f8f9fa;
    border-radius: 16px;
    max-width: 400px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.timer-controls {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
}

.control-button {
    padding: 0.7rem 1.5rem;
    background: #e0e0e0;
    color: #333;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
}

.control-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.control-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.control-button.active {
    background: #42b983;
    color: white;
}

.reset-button {
    background: #f44336;
    color: white;
}

.timer-display {
    font-size: 4rem;
    font-weight: bold;
    color: #2c3e50;
    display: flex;
    align-items: baseline;
    margin: 1rem 0;
    font-family: "Courier New", monospace;
}

.time-part {
    min-width: 2.2ch;
    text-align: center;
}

.time-separator {
    margin: 0 0.2rem;
    animation: blink 1s infinite;
}

.timer-instruction {
    color: #666;
    margin-top: 1rem;
    text-align: center;
    font-size: 0.9rem;
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

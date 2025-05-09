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

// Props (if needed)
// const props = defineProps({
//   customProjectName: {
//     type: String,
//     default: ''
//   }
// });

// State
const projectName = ref("Workday Pusher"); // Change this to your actual project name
const cursorPos = ref({ x: 0, y: 0 });
const isVisible = ref(false);
const screenRef = ref(null);

// Computed properties
const cursorStyle = computed(() => {
  return {
    transform: `translate(${cursorPos.value.x}px, ${cursorPos.value.y}px)`,
  };
});

// Methods
const handleMouseMove = (e) => {
  animateCursorMove(e.clientX, e.clientY);
};

const handleTouchMove = (e) => {
  if (e.touches && e.touches[0]) {
    animateCursorMove(e.touches[0].clientX, e.touches[0].clientY);
  }
};

const animateCursorMove = (x, y) => {
  // Use requestAnimationFrame for smooth animation
  const animate = () => {
    // Calculate the distance to move
    const dx = x - cursorPos.value.x;
    const dy = y - cursorPos.value.y;

    // Apply easing (0.1 means it will move 10% of the remaining distance each frame)
    cursorPos.value.x += dx * 0.1;
    cursorPos.value.y += dy * 0.1;

    // Continue animation if we're still significantly moving
    if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

// Lifecycle hooks
onMounted(() => {
  // Make the component visible after it's mounted
  setTimeout(() => {
    isVisible.value = true;
  }, 500);

  // Set initial cursor position to center of screen
  cursorPos.value = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };
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

.cursor-follower {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  pointer-events: none;
  will-change: transform;
  z-index: 9;
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

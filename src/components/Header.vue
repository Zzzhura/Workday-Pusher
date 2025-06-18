<template>
    <div class="outer-wrapper">
        <div class="header-wrapper">
            <div class="custom-header">
                <span class="custom-title">WorkDay Pusher</span>
                <div class="nav-links">
                    <span class="away_refs">Главная</span>
                    <span class="away_refs">Профиль</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.outer-wrapper {
    width: 90%;
    padding: 20px 35px;
    border-radius: 10px;
}

.header-wrapper {
    width: 100%;
    padding: 20px 35px;
    backdrop-filter: blur(20px);
    background-color: white;
    border-radius: 10px;
    opacity: 0.3;
}

.custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.custom-title {
    color: blue;
    font-family: "Neue Machina", sans-serif;
    font-size: 46px;
    width: 30%;
    font-weight: 800;
    padding-left: 60px;
    font-weight: 800;
    background: linear-gradient(
        90deg,
        #33beff 0%,
        #1e4bee 100%
    ); /* Синий → Фиолетовый */
    background-clip: text;
    color: transparent; /* Делаем текст прозрачным, чтобы был виден градиент */
}

.nav-links {
    display: flex;
    gap: 20px;
    padding-right: 60px; /* Симметричный отступ справа */
}

.away_refs {
    color: black;
    cursor: pointer;
    padding: 5px 0;
    transition: all 0.3s ease;
}

.away_refs:hover {
    color: grey;
    border-bottom: 1px solid grey;
}
</style>

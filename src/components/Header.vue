<template>
    <div style="width: 100%">
        <div class="custom-header">
            <div class="avatar">
                <img src="../assets/avatar.jpg  " alt="Avatar" />
            </div>
            <span class="custom-title">WorkDay Pusher</span>
            <span href="/" class="away_refs">Главная</span>
            <span href class="away_refs">Профиль</span>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.avatar {
    width: 50px; /* Размер круга */
    height: 50px; /* Должен совпадать с width */
    margin: 20px;
    border-radius: 50%; /* Делает круг */
    overflow: hidden; /* Обрезает изображение по кругу */
    border: 2px solid #fff; /* Белая рамка (опционально) */
}

.away_refs {
    margin: 20px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.away_refs:hover {
    color: grey;
    border-bottom: 2px solid grey;
}

.avatar img {
    width: 200%;
    height: 200%;
    object-fit: cover; /* Обрезает изображение */
    object-position: center; /* Фокусируется на центре */
}

.custom-title {
    width: 65%;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 26px;
}

.custom-header {
    display: flex;
    flex-direction: row;
    padding: 20px;
    background: black;
    border-color: black;
}
</style>

<template>
    <div
        style="
            background-color: white;
            border: 2px solid grey;
            display: flex;
            flex-direction: row;
        "
    >
        <div class="avatar">
            <img src="../assets/avatar.jpg  " alt="Avatar" />
        </div>
        <div class="info">
            <span class="user-info">Иван Журавлев</span>
            <span class="dolzhfun">Должность: Fullstack разработчик</span>
        </div>
    </div>
</template>

<script setup></script>

<style>
.avatar {
    width: 100px;
    height: 100px;
    margin: 60px;
    margin-right: 20px;
    margin-left: 130px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid grey;
}

.avatar img {
    width: 200%;
    height: 200%;
    object-fit: cover;
    object-position: center;
}

.info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: black;
    font-size: 16px;
    padding: 20px 0;
    margin-bottom: 50px;
    line-height: 1.5; /* Улучшаем межстрочный интервал */
}

.user-info {
    font-weight: bold;
    font-size: 22px;
}

.dolzhfun {
    border-radius: 5px;
    padding: 3px 5px;
    background-color: #d9d9d9;
    font-size: 12px;
}
</style>

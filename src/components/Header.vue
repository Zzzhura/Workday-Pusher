<template>
    <div style="width: 100%">
        <div class="custom-header">
            <span class="custom-title">WorkDay Pusher</span>
            <span href="/" class="away_refs">Главная</span>
            <span href class="away_refs">Профиль</span>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.away_refs {
    color: black;
    margin: 20px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.away_refs:hover {
    color: grey;
    border-bottom: 1px solid grey;
}

.custom-title {
    color: black;
    width: 90%;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 26px;
}

.custom-header {
    background-color: white;
    display: flex;
    flex-direction: row;
    padding: 20px;
    border-color: black;
}
</style>

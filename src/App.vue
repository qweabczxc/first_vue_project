<script setup>
import Header from './components/HeaderMain.vue'
import { provide, ref } from "vue"


const money = ref(10000)
provide('money', money)
</script>


<template>
<Header />
<RouterView />
</template>

<style>
body{
    font-size: 250%;
}
button{
    font-size: 100%;
}
.main{
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: center;
}
.all{
    display: flex;
    justify-content: end;
    gap: 20px;
}
.input{
    border-radius: 8px;
    border: solid 2px gray;
    padding-left: 30px;
    padding-right: 10px;
    outline: none;
    height: 30px;
    width: 230px;
}
.img{
    position: absolute;

    right: 245px;
    width: 40px;
    height: 40px;
}
.select{
    border: solid 2px gray;
    outline: none;
    border-radius: 8px;
}
</style>
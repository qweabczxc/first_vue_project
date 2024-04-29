<script setup>
import { onMounted,  ref } from 'vue'
import axios from 'axios'


import Main from '../components/SecondCard.vue'


const items = ref([])

onMounted(async () =>{
    const { data } = await axios.get('https://06a27ab42efa8997.mokky.dev/profile?_relations=cards')
  items.value = data
})


</script>

<template>
  <div class="main"  v-auto-animate>
    <Main
      v-for="item in items"
      :key="item.id"
      :id="item.card.id" 
      :name="item.card.name"
      :price="item.card.price"
      :url="item.card.url"

    />
  </div>
  <RouterView />
</template>

<style>
body {
  font-size: 250%;
}
button {
  font-size: 100%;
}
.main {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
}
.all {
  display: flex;
  justify-content: end;
  gap: 20px;
}
.input {
  border-radius: 8px;
  border: solid 2px gray;
  padding-left: 30px;
  padding-right: 10px;
  outline: none;
  height: 30px;
  width: 230px;
}
.img {
  position: absolute;

  right: 245px;
  width: 40px;
  height: 40px;
}
.select {
  border: solid 2px gray;
  outline: none;
  border-radius: 8px;
}
</style>

<script setup>
import { onMounted,  ref, watch, provide } from 'vue'
import axios from 'axios'


import Main from '../components/MainComponent.vue'

const sortBy = ref('')
const searchQuery = ref('')
const items = ref([])
const onChangeSelect = (event) => {
  sortBy.value = event.target.value
}
const onChangeSearch = (event) => {
  searchQuery.value = event.target.value
}

const fetchItems = async () => {
  const params = {
    sortBy: sortBy.value
  }
  if (searchQuery.value) {
    params.name = `*${searchQuery.value}*`
  }
  const { data } = await axios.get('https://06a27ab42efa8997.mokky.dev/cards', {
    params
  })
  items.value = data
}
onMounted(fetchItems)
watch(sortBy, fetchItems)
watch(searchQuery, fetchItems)
provide("header-input",onChangeSearch);
</script>

<template>
  <div class="all">
    <select @change="onChangeSelect" class="select">
      <option>По новизне</option>
      <option value="price">По цене(дешевые)</option>
      <option value="-price">По цене(дорогие)</option>
      <option value="name">По названию(a-z)</option>
      <option value="-name">По названию(z-a)</option>
    </select>
    <img src="/public/find.png" alt="" class="img" />
    <input @input="onChangeSearch" type="text" placeholder="Поиск" class="input" />
  </div>
  <div class="main" v-auto-animate>
    <Main
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :price="item.price"
      :url="item.url"

    />
  </div>
  <RouterView />
</template>

<style >
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

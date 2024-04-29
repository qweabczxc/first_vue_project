<script setup>
import axios from 'axios'
import { inject, ref } from 'vue'

const props = defineProps({
  name: String,
  price: Number,
  url: String,
  id: Number
})
const isVisible = ref(true)
const money = inject('money')
const Sell = async (price) => {
  const params = {
    card_id: props.id
  }
  const response = await axios.get('https://06a27ab42efa8997.mokky.dev/profile', { params })
  const { count, id } = response.data[0]
  await axios.patch(`https://06a27ab42efa8997.mokky.dev/profile/${id}`, {
    count: count - 1
  })
  money.value += price
  if (count <= 1) {
    await axios.delete(`https://06a27ab42efa8997.mokky.dev/profile/${id}`, {
      params
    })
    isVisible.value = false
  }
}
</script>

<template>
  <div class="card" v-if="isVisible">
    <img :src="url" class="moon_shard" />

    <div class="desc_Sell">
      <div class="descriptions">
        <p class="name">{{ name }}</p>
        <div class="TangoAndSell">
          <p class="price">{{ price }}</p>

          <img src="/public/Tango_icon.png" class="tango" />
          <button @click="Sell(price)">Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  flex-direction: column;
  width: 300px;
  border-radius: 15px;
  border: solid gainsboro 1px;
  cursor: pointer;
  margin-top: 8px;
}
.moon_shard {
  width: 301px;
  border-radius: 14px 14px 0 0;
  align-self: center;
}
.descriptions {
  margin-top: -46px;
  margin-bottom: -40px;
  padding: 0px;
}
.card:hover {
  translate: 0px -6px;
  box-shadow: 0px 0px 120px rgba(0, 0, 0, 0.5);
}
button {
  display: flex;
  justify-self: end;
  background-color: white;
  border: none;
  width: 100px;
  border-radius: 15px 0 14px 0;
  background-color: gray;
  margin-top: -5px;
  padding-left: 16px;
  padding-top: 6px;
}
.tango {
  width: 50px;
  margin-left: -66px;
}
.TangoAndSell {
  margin-top: -50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

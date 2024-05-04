<script setup>
import axios from 'axios'
import { inject, ref } from 'vue'

const props = defineProps({
  name: String,
  price: Number,
  url: String,
  id: Number,
  zx_count: Number
})
let rrcount = ref(props.zx_count);
const isVisible = ref(true)
const money = inject('money')
const Sell = async (price) => {
  const params = {
    card_id: props.id
  }
  const response = await axios.get('https://4540e4046909eac7.mokky.dev/profile', { params })
  const { count, id } = response.data[0]
  await axios.patch(`https://4540e4046909eac7.mokky.dev/profile/${id}`, {
    count: count - 1
  })
  rrcount.value--;
  money.value += price
  if (count <= 1) {
    await axios.delete(`https://4540e4046909eac7.mokky.dev/profile/${id}`, {
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
        <p class="count">Кол-во: {{ rrcount }} </p>
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
    width: 400px;
    border-radius: 15px;
    border: solid gainsboro 1px;
    cursor: pointer;
    margin-top: 8px;
    background-color: #d7dfe9;
    border: outset 5px black;
}
.moon_shard {
  width: 401px;
  height: 350px;
  border-radius: 8px 8px 0 0;
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
  border-radius: 8px 0 8px 0;
  background-color: #c4b4f8;
  margin-top: -5px;
  padding-left: 16px;
  padding-top: 6px;
}
.tango {
  width: 50px;
  margin-left: -160px;
}
.TangoAndSell {
  margin-top: -50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>

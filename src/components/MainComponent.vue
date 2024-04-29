<script setup>
import { defineProps, inject } from 'vue';
import axios from 'axios'
const props = defineProps({
    name: String,
    price: Number,
    url: String,
    id: Number
});

const money = inject('money');
const buy = async (price) => {
        const params = {
      card_id: props.id
    };
  if (money.value >= price) {


    money.value -= price;


      const response = await axios.get('https://06a27ab42efa8997.mokky.dev/profile', { params });
      
      if (response.data.length > 0) {
        const [{ id, count }] = response.data;
        await axios.patch(`https://06a27ab42efa8997.mokky.dev/profile/${id}`, {
        count: count+1
    });
      } else {
        await axios.post('https://06a27ab42efa8997.mokky.dev/profile', {
          ['card_id']: props.id,
          ['count']: 1
        });
      }

  } else {
    alert('Вам не хватает денег');
  }
};

</script>


<template>
  <div class="card">
    <img :src="url" class="moon_shard">
    
    <div class="desc_buy">
        <div class="descriptions">
            <p class="name">{{ name }}</p>
            <div class="TangoAndBuy">
            <p class="price">{{ price }}</p>
            
                <img src="/public/Tango_icon.png" class="tango">
                <button @click="buy(price)">buy</button>
            </div>
        </div>
        
    </div>
  </div>
</template>
<style scoped>
.card{
    flex-direction: column;
    width: 300px;
    border-radius: 15px;
    border: solid gainsboro 1px;
    cursor: pointer;
    margin-top: 8px;
}
.moon_shard{
    width: 301px;
    border-radius: 14px 14px 0 0;
    align-self: center;
}
.descriptions{
    margin-top: -46px;
    margin-bottom: -40px;
    padding: 0px;
}
.card:hover{
    translate: 0px -6px;
    box-shadow: 0px 0px 120px rgba(0, 0, 0, 0.5);
}
button{
    display: flex;
    justify-self: end;
    background-color: white;
    border:none;
    width: 100px;
    border-radius: 15px 0 14px 0;
    background-color: gray;
    margin-top: -5px;
    padding-left: 16px;
    padding-top: 6px;
}
.tango{
    width: 50px;
    margin-left: -66px;
}
.TangoAndBuy{
    margin-top: -50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
}
</style>

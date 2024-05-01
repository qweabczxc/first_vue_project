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


      const response = await axios.get('https://4540e4046909eac7.mokky.dev/profile', { params });
      
      if (response.data.length > 0) {
        const [{ id, count }] = response.data;
        await axios.patch(`https://4540e4046909eac7.mokky.dev/profile/${id}`, {
        count: count+1
    });
      } else {
        await axios.post('https://4540e4046909eac7.mokky.dev/profile', {
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
    background-color: #d7dfe9;
    border: outset 5px black;
}
.moon_shard{
    width: 301px;
    border-radius: 8px 8px 0 0;
    align-self: center;
}
.descriptions{
    margin-top: -46px;
    margin-bottom: -40px;
    padding: 0px;
}
.card:hover{
    translate: 0px -6px;

}
button{
    display: flex;
    justify-self: end;
    border:none;
    width: 100px;
    border-radius: 15px 0 8px 0;
    
    background-color: #c4b4f8;
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

<script setup>
import { inject } from 'vue'

const money = inject('money')

function bonus() {
  money.value += 5000
  console.log(money.value)
}
</script>

<template>
  <div class="first">
    <RouterLink to="/first_vue_project" class="shop">zx production</RouterLink>

    <div class="wallet">
      <p>{{ money }}</p>
      <img src="/public/Tango_icon.png" class="tango" @click="bonus" />
    </div>
    <div class="links">
      <RouterLink to="/first_vue_project" class="shop">Магазин</RouterLink>
      <router-link to="/first_vue_project/Profile" class="profile">Профиль</router-link>
    </div>
  </div>
  <hr />
</template>
<style scoped>
p {
  align-self: center;
}
.first {
  margin-top: -20px;
  display: flex;
  height: auto;

  margin-bottom: 20px;
}
hr {
  margin: -20px -8px 50px -8px;
}
.tango {
  width: 40px;
  height: 30px;
  margin-left: -5%;
  align-self: center;
  margin-right: 20px;
}
.links {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  float: right;
}
.shop,
.profile {
  text-decoration: none;
  color: black;
  align-self: center;
}

.wallet {
  display: flex;
  gap: 10px;
  margin-left: auto;
}
</style>

<script setup>
import {ref} from 'vue'
let add =  ref('aegis')
let del = ref('купить')
let count = ref(5)
function forDel(){
    del.value = 'продать'
    count.value--
    if(count.value <= 0) add.value = 'non'
}
</script>

<template>
    <p>{{ add }}</p>
    <p>{{  count }}</p>
    <button @click="forDel()">{{del}}</button>
</template>
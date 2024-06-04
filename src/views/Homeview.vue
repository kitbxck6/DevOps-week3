<script setup>
import { reactive, ref } from "vue"
const name = ref()
const age = reactive({ age: 29 })
const ceo = ref('mark')
const week = ref("monday")
</script>



<template>
    <nav>
        <h1>Home page</h1>
        <span>
            {{ week == 'monday' ? 'If executed ' : week == 'Tueday' ? 'Else If executed' : 'Else executed'}}
        </span>
        <span>v-if="ceo == 'jhon'">
            If condition executed
        </span>

        <span>v-else-if="ceo == 'jhon'">
            Else If condition executed
        </span>

        <span>v-else="ceo == 'jhon'">
            Else condition executed
        </span>
        <p>Name: {{ name }} Age: {{ state.age }}</p>
        Name:<input type="text" v-model="name">
        Age :<input type="text" v-model="state.age">
    </nav>
</template>


<style scoped>
nav {
    padding: 10px;
    text-align: center;
}
</style>
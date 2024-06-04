<script setup>

</script>

<template>
  <nav>
    <routerLink :to="{ name: 'home' }">Home</routerLink> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'profile' }">profile</router-link> |
    <router-link :to="{ name: 'contact' }">contact</router-link>
  </nav>
  <router-view />
</template>


<style scoped>
nav {
  text-align: center;
}
</style>